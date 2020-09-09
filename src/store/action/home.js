import * as types from './index';
import axiosFactory from '../../request';

export default {
    getUserList(){
        return (dispatch) => {
            let axios = axiosFactory();
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
