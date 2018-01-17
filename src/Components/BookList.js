import React, {Component} from 'react'
import BookShelf from './BookShelf'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

class BookList extends Component {
    render() {
        const {shelves, getAllFromShelf, onUpdateBook} = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    {
                        shelves.map((shelf) => <BookShelf key={shelf}
                                                          shelves={shelves}
                                                          shelf={shelf}
                                                          books={getAllFromShelf(shelf)}
                                                          onUpdateBook={onUpdateBook}
                        />)
                    }
                </div>
                <div className="open-search">
                    <Link to='/search'>Add a book</Link>
                </div>
            </div>
        )
    }
}

BookList.propTypes = {
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    getAllFromShelf: PropTypes.func.isRequired
}

export default BookList
