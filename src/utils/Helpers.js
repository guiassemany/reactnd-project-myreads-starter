import * as moment from 'moment';

export const camelCaseToReadable = (string) => {
    let result = string.replace(/([A-Z])/g, " $1")
    return result.charAt(0).toUpperCase() + result.slice(1)
}

export const formatBookReleaseDate = (date) => {
    return moment(date).format('MMMM, YYYY');
}