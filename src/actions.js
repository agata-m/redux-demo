import uuid from 'uuid';
import comments from './comments.js';

//tworzenie komentarza

export function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
};


//edycja komentarza

export function editComment(text) {
    return {
        type: EDIT_COMMENT,
        text
    }
};


//usuwanie komentarza

export function removeComment(commentId) {
    return {
        type: REMOVE_COMMENT,
        id: commentId
    }
};


//ocenianie thumbs up/down komentarza

export function thumbUpComment(commentId) {
    return {
        type: THUMB_UP_COMMENT,
        votes: comments.votes + 1,
        id: commentId
    }
};


export function thumbDownComment(commentId) {
    return {
        type: THUMB_DOWN_COMMENT,
        votes: comments.votes - 1,
        id: commentId
    }
};

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';