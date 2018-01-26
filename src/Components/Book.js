import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Book = (props) => {
    const {book, shelves, onUpdateBook} = props
    const bookThumbnail = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
        <div className="book">
            <div className="book-top">
                <Link to={{ pathname: `/details/${book.id}`, query: { book: book } }}>
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url("${bookThumbnail}")`
                    }}></div>
                </Link>
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
