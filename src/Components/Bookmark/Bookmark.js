import React from 'react';
import './Bookmark.css';

const bookmark = (props) => (
    <li className="ion-ios-paw" >
        <a href={props.url} target="_blank">{props.title}</a>
    </li>
)

export default bookmark;