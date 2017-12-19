import React, { Component } from 'react';
import './Bookmarks.css';
import Bookmark from '../Bookmark/Bookmark';
import axios from '../../axios';


class Bookmarks extends Component {
    state = {
        bookmarks: null,
        loading: false,
        error: null
    }
    
    componentDidMount () {
        this.setState({loading: true});
        axios.get('/bookmarks.json')
            .then( response => {
                const bookmarks = response.data;
                this.setState({bookmarks: bookmarks})
                this.setState({loading: false})         
            })
            .catch( error => {
                this.setState({error: error})
            })
    }

    render () {

        let bookmarks = <div>Loading...</div>;

        if (this.state.error) {
            bookmarks = <div>something went wrong!</div>
            console.log(this.state.error);
        }

        if( !this.state.loading && this.state.bookmarks !== null && !this.state.error) {
            bookmarks = Object.keys(this.state.bookmarks).map( bookmark => {
                return <Bookmark
                    key={bookmark} 
                    title={this.state.bookmarks[bookmark].title} 
                    url={this.state.bookmarks[bookmark].url} />
            });
        }

        return (
            <div className="bookmarks">
                <div className="bookmarks-box">
                    {bookmarks}
                </div>
            </div>
        )
    }
}

export default Bookmarks;