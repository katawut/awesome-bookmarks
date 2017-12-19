import React, { Component } from 'react';
import './App.css';

import NewBookmark from './Components/NewBookmark/NewBookmark';
import Bookmarks from './Components/Bookmarks/Bookmarks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>awesome bookmark</h1>
        <NewBookmark />
        <Bookmarks />
      </div>
    );
  }
}

export default App;
