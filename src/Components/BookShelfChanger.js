import React, {Component} from 'react'
import PropTypes from 'prop-types'
import * as Helpers from '../utils/Helpers'

class BookShelfChanger extends Component {
    render() {
        return (
            <div className="book-shelf-changer">
                <select>
                    <option value="none" disabled>Move to...</option>
                    {this.props.shelves.map(shelf => (
                        <option key={shelf}>{Helpers.camelCaseToReadable(shelf)}</option>
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
