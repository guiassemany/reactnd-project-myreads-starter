import React from 'react'
import ReactDOM from 'react-dom'
import Book from '../Components/Book'
import App from '../App'
import {shallow, mount} from 'enzyme'
import BookShelf from "../Components/BookShelf"
import BookShelfChanger from "../Components/BookShelfChanger"
import BookGrid from "../Components/BookGrid"
import BookList from "../Components/BookList"
import {BrowserRouter, Link} from "react-router-dom"

/**
 This course is not designed to teach Test Driven Development.
 Feel free to use this file to test your application, but it
 is not required.
 **/

test('Book has title and other information', () => {
    const book = {
        title: 'How to test JS Apps',
        authors: 'Someone R.',
        imageLinks: {
            thumbnail: 'my-reads-image-thumbnail'
        }
    }
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onClickFunction = () => {
    }
    const BookTitle = <div className="book-title">{book.title}</div>
    const BookAuthors = <div className="book-title">{book.title}</div>
    const wrapper = shallow(<Book book={book} onUpdateBook={onClickFunction} shelves={shelves}/>)
    expect(wrapper.contains(BookTitle)).toEqual(true)
    expect(wrapper.contains(BookAuthors)).toEqual(true)
})

test('BookShelf renders without crashing', () => {
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const books = []
    const onUpdateBook = () => {
    }
    const shelf = 'wantToRead'
    const ShelfTitle = <h2 className="bookshelf-title">Want To Read</h2>
    const wrapper = shallow(<BookShelf shelves={shelves} books={books} onUpdateBook={onUpdateBook} shelf={shelf}/>)
    expect(wrapper.contains(ShelfTitle)).toEqual(true)
})

test('BookShelfChanger renders without crashing and no shelf selected', () => {
    const book = {
        title: 'How to test JS Apps',
        authors: 'Someone R.',
        imageLinks: {
            thumbnail: 'my-reads-image-thumbnail'
        }
    }
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onUpdateBook = () => {
    }
    const wrapper = shallow(<BookShelfChanger onUpdateBook={onUpdateBook} shelves={shelves} book={book}/>)
    expect(wrapper.render().find('select [selected]').val()).toEqual('none')
})

test('BookShelfChanger renders with correct shelf selected', () => {
    const book = {
        title: 'How to test JS Apps',
        authors: 'Someone R.',
        imageLinks: {
            thumbnail: 'my-reads-image-thumbnail'
        },
        shelf: 'wantToRead'
    }
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onUpdateBook = () => {
    }
    const wrapper = shallow(<BookShelfChanger onUpdateBook={onUpdateBook} shelves={shelves} book={book}/>)
    expect(wrapper.render().find('select [selected]').val()).toEqual(book.shelf)
})

test('BookGrid renders without crashing', () => {
    const books = [
        {
            id: 'asd56e231a3',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'wantToRead'
        },
        {
            id: 'ertas215321',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'read'
        }]
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onUpdateBook = () => {}
    const book1 = (<li key={books[0].id}><Book book={books[0]} shelves={shelves} onUpdateBook={onUpdateBook}/></li>)
    const book2 = (<li key={books[1].id}><Book book={books[1]} shelves={shelves} onUpdateBook={onUpdateBook}/></li>)
    const wrapper = mount(<BookGrid onUpdateBook={onUpdateBook} shelves={shelves} books={books}/>)
    expect(wrapper.contains(book1)).toEqual(true)
    expect(wrapper.contains(book2)).toEqual(true)
})

test('BookList renders without crashing', () => {
    const books = [
        {
            id: 'asd56e231a3',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'wantToRead'
        },
        {
            id: 'ertas215321',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'read'
        }]
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onUpdateBook = () => {}
    const getAllFromShelf = () => {return books}
    const AppTitle = (<div className="list-books-title">
        <h1>MyReads</h1>
    </div>)
    const wrapper = shallow(<BookList onUpdateBook={onUpdateBook} shelves={shelves} getAllFromShelf={getAllFromShelf} />)
    expect(wrapper.contains(AppTitle)).toEqual(true);
})

test('BookList has link to search page', () => {
    const books = [
        {
            id: 'asd56e231a3',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'wantToRead'
        },
        {
            id: 'ertas215321',
            title: 'How to test JS Apps',
            authors: 'Someone R.',
            imageLinks: {
                thumbnail: 'my-reads-image-thumbnail'
            },
            shelf: 'read'
        }]
    const shelves = ['read', 'wantToRead', 'currentlyReading']
    const onUpdateBook = () => {}
    const getAllFromShelf = () => {return books}
    const linkToSearch = <Link to='/search'>Add a book</Link>
    const wrapper = shallow(<BookList onUpdateBook={onUpdateBook} shelves={shelves} getAllFromShelf={getAllFromShelf} />)
    expect(wrapper.contains(linkToSearch)).toEqual(true);
})
