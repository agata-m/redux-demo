import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <li>
        {text}<span><br />Votes: {votes}</span><br />
        <button onClick={() => thumbUpComment(id)}>Thumb up</button>
        <button onClick={() => thumbDownComment(id)}>Thumb down</button>
        <br /><br />
    </li>;

export default Comment;