import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentApp from './containers/CommentApp';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import comments from './reducers/comments'

const store = createStore(comments)

ReactDOM.render(
  <Provider store={store}>
  <CommentApp/>
  </Provider>,
  document.getElementById('root')
);

