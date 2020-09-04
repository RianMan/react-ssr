import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

// const thunk = store => next => action => 
// typeof action === 'function' ? action(store.dispatch, store.getState) : next(action)

let store = createStore(reducers,applyMiddleware(thunk,reduxLogger));
// console.log(store.getState('home'),'store');
export default store;