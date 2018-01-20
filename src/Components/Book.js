import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

const Book = (props) => {
    const {book, shelves, onUpdateBook} = props

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

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default Book
