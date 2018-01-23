import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import {Route} from 'react-router-dom'
import './App.css'
import BookList from './Components/BookList'
import BookSearch from './Components/BookSearch'
import sortBy from 'sort-by'
import BookDetails from "./Components/BookDetails"

class BooksApp extends Component {
    state = {
        books: [],
        loading: true,
        searchResults: [],
        availableShelves: []
    }

    /*
    * Busca os livros na api e atualiza a lista de prateleiras disponíveis
    */
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

    /*
    * Pega todas as diferentes prateleiras disponíveis. Caso seja criada uma nova, o app já poderia renderizar também.
    */
    getAvailableShelves() {
        return [...new Set(this.state.books.map(book => book.shelf))].sort((a, b) => {
            if (a < b) return -1
            if (a > b) return 1
            return 0
        })
    }

    /*
    * Pega todos os livros de uma prateleira
    */
    getAllFromShelf = (shelf) => {
        if (shelf) {
            return this.state.books.filter(book => book.shelf === shelf).sort(sortBy('shelf', 'title'))
        }
    }

    /*
    * Atualiza o livro na API e depois busca pelo livro e atualiza a prateleira dele no app.
    * Se não encontrar o livro no array, inclui pois é um livro novo.
    */
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
                return {books: newState.sort(sortBy('shelf', 'title'))}
            }))
            .catch(err => console.error('Error occurred moving book: ', err))
    }

    /*
    * Procura os livros na api
    */
    searchBooks = (query) => {
        if (query.length > 0) {
            return BooksAPI.search(query).then(response => {
                if (!response.error) {
                    this.setState((prevState) => {
                        return {searchResults: this.mergeBooks(response, prevState.books)}
                    })
                }
            })
        }
    }

    /*
    * Faz um merge nos livros para quando exibi-los na pagina de busca, exibir com as prateleiras corretas
    * se já estiverem alocados em alguma
    */
    mergeBooks = (arr, Arr) => {
        return arr.map((item) => {
            Arr.forEach((Item) => {
                if (Item.id === item.id) {
                    item.shelf = Item.shelf
                    return
                }
            })
            return item
        })
    }

    /*
    * Procura livro por ID
    */
    getBookById = (id) => {
        return BooksAPI.get(id).then((book) => {
            return book
        })
    }

    render() {
        return (
            <div className="app">
                <Route exact path='/' render={() => (
                    <BookList shelves={this.getAvailableShelves()}
                              onUpdateBook={this.updateBook}
                              getAllFromShelf={this.getAllFromShelf}/>
                )}/>
                <Route exact path='/search' render={() => (
                    <BookSearch onSearch={this.searchBooks} books={this.state.searchResults}
                                shelves={this.getAvailableShelves()} onUpdateBook={this.updateBook}/>
                )}/>
                <Route path='/details/:book_id' render={(route) => (
                    <BookDetails loadBookInfo={this.getBookById} bookId={route.match.params.book_id}/>
                )}/>
            </div>
        )
    }
}

export default BooksApp