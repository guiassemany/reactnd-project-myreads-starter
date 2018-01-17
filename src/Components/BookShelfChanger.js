import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Helpers from '../utils/Helpers'

class BookShelfChanger extends Component {

    state = {
        book: {}
    }

    componentDidMount() {
        this.setState({book: this.props.book});
    }

    handleShelfChange = (e) => {
        this.props.onUpdateBook(this.state.book, e.target.value)
    }

    render() {
        const {book} = this.props
        return (
            <div className="book-shelf-changer">
                <select onChange={this.handleShelfChange} value={book.shelf ? book.shelf : 'none'}>
                    <option value="none" disabled>Move to...</option>
                    {this.props.shelves.map(shelf => (
                        <option key={shelf} value={shelf}>{Helpers.camelCaseToReadable(shelf)}</option>
                    ))}
                </select>
            </div>
        )
    }
}

BookShelfChanger.propTypes = {
    shelves: PropTypes.array.isRequired
}

export default BookShelfChanger
