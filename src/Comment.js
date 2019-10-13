import React from 'react';
import { addComment } from './actions.js';
import { thumbUpComment } from './actions.js';
import { thumbDownComment } from './actions.js';

const Comment = ({text, votes, id, thumbUpComment}) =>
    <li>
        {text}<span>votes: {votes}</span>
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    </li>;

export default Comment;