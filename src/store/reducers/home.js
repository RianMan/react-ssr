import * as types from '../action/index';

export default function(initialState={},action){
    switch (action.type) {
        case types.GET_USER_LIST:
            return {
                ...initialState,
                userLists: action.payload
            }
        default:
            return initialState;
    }
}