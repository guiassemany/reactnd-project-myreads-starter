import React from 'react'
import * as BooksAPI from './BooksAPI'
import {Route, Link} from 'react-router-dom'
import './App.css'
import BookShelf from './Components/BookShelf'
import BookGrid from './Components/BookGrid'
import BookShelfLoader from './Components/BookShelfLoader'

class BooksApp extends React.Component {
    state = {
        books: [],
        loading: true
    }

    componentDidMount() {
        BooksAPI.getAll().then(response => {
            this.setState({
                books: response,
                loading: false
            })
        })
    }

    getAvailableShelves() {
        return [...new Set(this.state.books.map(book => book.shelf))]
    }

    getAllFromShelf(shelf) {
        return this.state.books.filter(book => book.shelf === shelf)
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
                return {books: newState}
            }))
            .catch(err => console.error('Error occurred moving book: ', err))
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
                    <div className="search-books">
                        <div className="search-books-bar">
                            <Link className="close-search" to='/'>Close</Link>
                            <div className="search-books-input-wrapper">
                                <input type="text" placeholder="Search by title or author"/>
                            </div>
                        </div>
                        <div className="search-books-results">
                            <BookGrid books={[]}/>
                        </div>
                    </div>
                )}/>
            </div>
        )
    }
}

export default BooksApp
