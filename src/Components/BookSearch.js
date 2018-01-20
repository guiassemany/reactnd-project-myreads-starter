import React from 'react'
import {Link} from 'react-router-dom'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'
import {DebounceInput} from 'react-debounce-input'

const BookSearch = (props) => {

    const {onSearch, books, onUpdateBook, shelves} = props

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <DebounceInput
                            minLength={3}
                            debounceTimeout={500}
                            onChange={event => onSearch(event.target.value)}
                            placeholder="Search by title or author"/>
                    </div>
                </div>
                <div className="search-books-results">
                    {books.length > 0 && (<BookGrid books={books} shelves={shelves} onUpdateBook={onUpdateBook}/>)}
                </div>
            </div>
        </div>
    )
}

BookSearch.propTypes = {
    books: PropTypes.array,
    shelves: PropTypes.array.isRequired,
    updateBooks: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default BookSearch
