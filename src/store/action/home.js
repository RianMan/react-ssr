import * as types from './index';
import axiosFactory from '../../request';

export default {
    getUserList(isServer){
        console.log(isServer,'909090');
        return (dispatch) => {
            let axios = axiosFactory(isServer);
            return axios.get('/users').then(res => {
                if(res.data.code === 0) {
                    dispatch({
                        type: types.GET_USER_LIST,
                        payload: res.data.data
                    })
                }else{
                    alert('请求出错')
                }
            });
            
        } 
        
    },
}

// export const getUserList = (isServer)=> (dispatch) => {
//     let axios = axiosFactory(isServer);
//     return axios.get('/users').then(res => {
//         if(res.data.code === 0) {
//             dispatch({
//                 type: types.GET_USER_LIST,
//                 payload: res.data.data
//             })
//         }else{
//             alert('请求出错')
//         }
//     });
    
// } 


// export const getUserList = (dispatch) => dispatch({
//     type: types.GET_USER_LIST,
//     payload: []
// } )
