import React, {Component} from 'react'
import BookGrid from './BookGrid'
import * as Helpers from '../utils/Helpers'

class BookShelf extends Component {
    render() {
        const {books, shelves, shelf, onUpdateBook} = this.props

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
}

export default BookShelf