import React, { Component } from 'react';
import axios from '../../axios';

import './NewBookmark.css';

class NewBookmark extends Component {
    state = {
        title: '',
        url: ''
    }

    postNewBookmarkHandler = () => {
        const data = {
            title: this.state.title,
            url: this.state.url
        }

        axios.post('/bookmarks.json', data)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    
    render() {

        return (
            <div className="new-bookmark">
                <div className="form-box">
                    <label>title</label>
                    <input type="text" 
                        value={this.state.title} 
                        onChange={(event) => {this.setState({title: event.target.value})}} />
                    <label>url</label>
                    <input type="text" 
                        value={this.state.url}
                        onChange={(event) => {this.setState({url: event.target.value})}} />
                    <button onClick={this.postNewBookmarkHandler}>add</button>
                </div>
            </div>
        )
    }
}

export default NewBookmark;