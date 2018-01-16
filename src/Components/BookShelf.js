import React, {Component} from 'react'
import Book from './Book'

class BookShelf extends Component {
    formatShelfTitle(title) {
        let titleResult = title.replace( /([A-Z])/g, " $1" );
        return titleResult.charAt(0).toUpperCase() + titleResult.slice(1);
    }

    render() {
        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{this.formatShelfTitle(this.props.shelf)}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {this.props.books.map(book => (
                                <li key={book.id}>
                                    <Book book={book}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf