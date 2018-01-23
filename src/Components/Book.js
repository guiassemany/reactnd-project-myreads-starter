import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import {Button, Card, Divider, Icon, Image} from "semantic-ui-react"

const Book = (props) => {
    const {book, shelves, onUpdateBook} = props

    return (
        <Card fluid color='purple' raised className='book-card'>
            <Image centered size='tiny' src={book.imageLinks.thumbnail}/>
            <Card.Content>
                <Card.Header>
                    {book.title}
                </Card.Header>
            </Card.Content>
            <Card.Content extra>
                <BookShelfChanger onUpdateBook={onUpdateBook} shelves={shelves} book={book}/>
            </Card.Content>
        </Card>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default Book
