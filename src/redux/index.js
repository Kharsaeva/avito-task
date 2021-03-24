import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import postsReducer from './posts';
import imagesReducer from './images';

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  images: imagesReducer,
  posts: postsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
