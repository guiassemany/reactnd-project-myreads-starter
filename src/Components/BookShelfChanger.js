import React from 'react'
import PropTypes from 'prop-types'
import {camelCaseToReadable} from "../utils/Helpers"
import {Button, Dropdown, Menu} from "semantic-ui-react"
import {Link} from "react-router-dom"

const BookShelfChanger = (props) => {
    const {book, shelves, onUpdateBook} = props

    const handleShelfChange = (e,d) => {
        onUpdateBook(book, d.value)
    }

    const options = shelves.map((shelf) => {
        return {key: shelf, text: camelCaseToReadable(shelf), value:shelf }
    });

    return (
        <div className='ui two buttons'>
            <Link to={{ pathname: `/details/${book.id}`, query: { book: book } }}>
                <Button basic color='purple'>Details</Button>
            </Link>
            <Button>
                <Dropdown text='Shelf' color='green' options={options} onChange={handleShelfChange}/>
            </Button>
        </div>
    )
}

BookShelfChanger.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default BookShelfChanger
