import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import BookShelf from './Components/BookShelf'
import BookShelfLoader from './Components/BookShelfLoader'
import BookSearch from './Components/BookSearch'
import sortBy from 'sort-by'

class BooksApp extends React.Component {
    state = {
        books: [],
        loading: true,
        searchResults: [],
        availableShelves: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(response => {
            this.setState({
                books: response,
                loading: false
            })
            this.setState({
                availableShelves: this.getAvailableShelves()
            })
        })
    }

    getAvailableShelves() {
        return [...new Set(this.state.books.map(book => book.shelf))].sort((a,b) => {
            if(a < b) return -1;
            if(a > b) return 1;
            return 0;
        })
    }

    getAllFromShelf(shelf) {
        return this.state.books.filter(book => book.shelf === shelf).sort(sortBy('shelf', 'title'))
    }

    updateBook = (book, shelf) => {
        BooksAPI.update(book, shelf).then(
            this.setState(prevState => {
                let found = false
                const newState = prevState.books.map(b => {
                    if (b.id === book.id) {
                        b.shelf = shelf
                        found = true
                    }
                    return b
                })
                if (!found) {
                    book.shelf = shelf
                    newState.push(book)
                }
                console.log(newState)
                return {books: newState.sort(sortBy('shelf', 'title'))}
            }))
            .catch(err => console.error('Error occurred moving book: ', err))
    }

    searchBooks = (query) => {
        if (query.length > 0) {
            BooksAPI.search(query).then(response => {
                if (!response.error) {
                    this.setState({
                        searchResults: response
                    })
                }
            })
        }
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <div className="list-books">
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        <div className="list-books-content">
                            {!this.state.loading && (
                                this.getAvailableShelves().map((shelf) => <BookShelf key={shelf}
                                                                                     shelves={this.getAvailableShelves()}
                                                                                     shelf={shelf}
                                                                                     books={this.getAllFromShelf(shelf)}
                                                                                     onUpdateBook={this.updateBook}
                                />)
                            )}
                            {this.state.loading && (
                                <BookShelfLoader/>
                            )}
                        </div>
                        <div className="open-search">
                            <Link to='/search'>Add a book</Link>
                        </div>
                    </div>
                )}/>
                <Route exact path='/search' render={() => (
                    <BookSearch onSearch={this.searchBooks} books={this.state.searchResults}
                                shelves={this.getAvailableShelves()} onUpdateBook={this.updateBook}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp
