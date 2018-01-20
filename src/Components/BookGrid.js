import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookGrid = (props) => {
    const {books, shelves, onUpdateBook} = props

    return (
        <ol className="books-grid">
            {books.map(book => (
                <li key={book.id}>
                    <Book shelves={shelves} book={book} onUpdateBook={onUpdateBook}/>
                </li>
            ))}
        </ol>
    )
}

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default BookGrid
