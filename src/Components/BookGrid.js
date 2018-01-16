import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookGrid extends Component {
    render() {
        const {books, shelves, onUpdateBook} = this.props;

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
}

BookGrid.propTypes = {
    books: PropTypes.array
}

export default BookGrid
