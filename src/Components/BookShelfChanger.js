import React from 'react'
import PropTypes from 'prop-types'
import * as Helpers from '../utils/Helpers'

const BookShelfChanger = (props) => {
    const {book, shelves, onUpdateBook} = props

    const handleShelfChange = (e) => {
        onUpdateBook(book, e.target.value)
    }

    return (
        <div className="book-shelf-changer">
            <select onChange={handleShelfChange} value={book.shelf ? book.shelf : 'none'}>
                <option value="none" disabled>Move to...</option>
                {shelves.map(shelf => (
                    <option key={shelf} value={shelf}>{Helpers.camelCaseToReadable(shelf)}</option>
                ))}
            </select>
        </div>
    )
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default BookShelfChanger
