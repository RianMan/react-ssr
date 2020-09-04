import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let getStore = () => createStore(reducers,applyMiddleware(thunk,reduxLogger));
export default getStore;