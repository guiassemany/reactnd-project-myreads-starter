import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Container, Divider, Grid, Image, List, Menu, Segment, Card, Icon, Rating, Label, Item} from 'semantic-ui-react'
import BookShelfLoader from "./BookShelfLoader"
import {formatBookReleaseDate, camelCaseToReadable} from "../utils/Helpers"
import {Link} from "react-router-dom"

class BookDetails extends Component {

    state = {
        book: {}
    }

    componentDidMount() {
        this.props.loadBookInfo(this.props.bookId).then((book) => {
            this.setState({book: book})
        })
    }

    render() {
        const {book} = this.state
        return (
            <div>
                <Container style={{marginTop: '1em'}}>
                    <Menu attached='top'>
                        <Menu.Item name='back'>
                            <Link to='/'>
                                <Icon name='arrow left'/>
                                Back
                            </Link>
                        </Menu.Item>
                    </Menu>
                    <Segment attached='bottom'>
                        {Object.keys(book).length === 0 && (
                            <BookShelfLoader/>
                        )}
                        {Object.keys(book).length > 0 && (
                            <div>
                                <Grid>
                                    <Grid.Column width={4}>
                                        <Image centered src={book.imageLinks.thumbnail}/>
                                        <List divided relaxed>
                                            <List.Item>
                                                <List.Icon name='like' verticalAlign='middle' color='red'/>
                                                <List.Content>
                                                    <Rating icon='star' defaultRating={book.averageRating} maxRating={5}
                                                            disabled/>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='comment' verticalAlign='middle' color='blue'/>
                                                <List.Content>
                                                    {book.ratingsCount ? book.ratingsCount : 0} ratings
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='cart' verticalAlign='middle' color='blue'/>
                                                <List.Content>
                                                    <Link
                                                        target="_blank"
                                                        to={`https://isbnsearch.org/isbn/${book.industryIdentifiers[0].identifier}`}>
                                                        Buy this book
                                                    </Link>
                                                </List.Content>
                                            </List.Item>
                                            <List.Item>
                                                <List.Icon name='book' verticalAlign='middle' color='blue'/>
                                                <List.Content>
                                                    {camelCaseToReadable(book.shelf)}
                                                </List.Content>
                                            </List.Item>
                                        </List>
                                    </Grid.Column>
                                    <Grid.Column width={12}>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>
                                                    {book.title}
                                                </Card.Header>
                                                <Card.Meta>
                                                <span>
                                                    {book.subtitle}
                                                </span>
                                                </Card.Meta>
                                                <Card.Description>
                                                    {book.description}
                                                    <Divider horizontal> Book Details </Divider>
                                                    <Item.Group divided>
                                                        <Item>
                                                            <Item.Content verticalAlign='middle'>
                                                                Published
                                                                Date: {formatBookReleaseDate(book.publishedDate)}
                                                            </Item.Content>
                                                        </Item>
                                                        <Item>
                                                            <Item.Content verticalAlign='middle'>
                                                                Publisher: {book.publisher}
                                                            </Item.Content>
                                                        </Item>
                                                        <Item>
                                                            <Item.Content verticalAlign='middle'>
                                                                Total Pages: {book.pageCount}
                                                            </Item.Content>
                                                        </Item>
                                                        <Item>
                                                            <Item.Content verticalAlign='middle'>
                                                                Categories: {"categories" in book && book.categories.map(category => (
                                                                <Label as='a' color='blue' key={category}>
                                                                    {category}
                                                                </Label>
                                                            ))}
                                                            </Item.Content>
                                                        </Item>
                                                        <Item>
                                                            <Item.Content verticalAlign='middle'>
                                                                ISBN: {book.industryIdentifiers.map(isbn => (
                                                                <Label color='blue' key={isbn.type}>
                                                                    {isbn.type}
                                                                    <Label.Detail>{isbn.identifier}</Label.Detail>
                                                                </Label>
                                                            ))}
                                                            </Item.Content>
                                                        </Item>
                                                    </Item.Group>
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='user circle outline'/>
                                                    Authors: {book.authors.map(author => <span
                                                    key={author}>{author}, </span>)}
                                                </a>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        )}
                    </Segment>
                </Container>
            </div>
        )
    }
}

BookDetails.propTypes = {
    loadBookInfo: PropTypes.func.isRequired,
    bookId: PropTypes.string.isRequired
}

export default BookDetails
