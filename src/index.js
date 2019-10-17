import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addComment } from './actions';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer.js';

import * as serviceWorker from './serviceWorker';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));


store.dispatch(addComment('First comment'));
store.dispatch(addComment('Second comment'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();