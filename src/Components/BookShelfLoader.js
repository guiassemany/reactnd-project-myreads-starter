import React, {Component} from 'react'
import ContentLoader from 'react-content-loader'

class BookShelfLoader extends Component {
    render() {
        return (
            <div>
                <ContentLoader
                    height={220}
                    width={500}
                    speed={2}
                    primaryColor={"#f3f3f3"}
                    secondaryColor={"#ecebeb"}
                >
                    <rect x="58" y="55" rx="5" ry="5" width="114" height="150" />
                    <rect x="12" y="15" rx="4" ry="4" width="114" height="13" />
                    <rect x="11" y="33.75" rx="3" ry="3" width="480" height="3.48" />
                    <rect x="206.91" y="55" rx="0" ry="0" width="114" height="150" />
                    <rect x="356.91" y="55" rx="0" ry="0" width="114" height="150" />
                </ContentLoader>
            </div>
        )
    }
}

export default BookShelfLoader
