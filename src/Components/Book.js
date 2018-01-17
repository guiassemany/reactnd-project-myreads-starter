import React, {Component} from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    render() {
        const {book, shelves, onUpdateBook} = this.props

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${book.imageLinks.thumbnail}")`
                    }}></div>
                    <BookShelfChanger book={book} shelves={shelves} onUpdateBook={onUpdateBook}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        )
    }
}

Book.propTypes = {
    coverURL: PropTypes.string,
    title: PropTypes.string,
    authors: PropTypes.string
}

export default Book
