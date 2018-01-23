import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import BookGrid from './BookGrid'
import PropTypes from 'prop-types'
import {DebounceInput} from 'react-debounce-input'
import {Dimmer, Loader} from "semantic-ui-react"

class BookSearch extends Component {
    state = {
        loading: false
    }

    handleInputChange(value) {
        this.setState({loading: true})
        return this.props.onSearch(value).then((books) => {
            this.setState({loading: false})
        })
    }

    render() {
        const {books, onUpdateBook, shelves} = this.props
        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to='/'>Close</Link>
                        <div className="search-books-input-wrapper">
                            <DebounceInput
                                minLength={3}
                                debounceTimeout={500}
                                onChange={event => this.handleInputChange(event.target.value)}
                                placeholder="Search by title or author"/>
                        </div>
                    </div>
                    <div className="search-books-results">
                        {this.state.loading > 0 && (
                            <Dimmer active>
                                <Loader>Searching Books!</Loader>
                            </Dimmer>
                        )}
                        {books.length > 0 && (<BookGrid books={books} shelves={shelves} onUpdateBook={onUpdateBook}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

BookSearch.propTypes = {
    books: PropTypes.array,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default BookSearch
