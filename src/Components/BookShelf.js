import React from 'react'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'
import * as Helpers from '../utils/Helpers'

const BookShelf = (props) => {
    const {books, shelves, shelf, onUpdateBook} = props
    return (
        <div>
            <div className="bookshelf">
                <h2 className="bookshelf-title">{Helpers.camelCaseToReadable(shelf)}</h2>
                <div className="bookshelf-books">
                    <BookGrid shelves={shelves} books={books} onUpdateBook={onUpdateBook}/>
                </div>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default BookShelf