import { createStore,applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

let getStore = (isClient) => {
    if(isClient === 'client'){
        let initialState = {};
        if(window.context.STATE){
            initialState = window.context.STATE;
        }
        return createStore(reducers,initialState,applyMiddleware(thunk,reduxLogger))
    }
    return createStore(reducers,applyMiddleware(thunk,reduxLogger))
};
export default getStore;