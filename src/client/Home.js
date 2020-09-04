import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/action/home';
import axiosFactory from '../request';

@connect(state => (state.home), actions)
class Home extends React.Component{

    static fetchData = () => new Promise(async (resolve,reject) =>{
        let axios = axiosFactory(true);
        let res = await axios.get('/users');
        if(res.data.code === 0) {
            resolve(res.data.res.data)
        }else{
            reject('请求出错')
        }
    })

    state = {
        data: []
    }

     componentWillMount(){
        this.props.getUserList(true);
    }

    render(){
        const { data } = this.state;
        const { staticContext,userLists } = this.props;
        return (
            <>
                <h1>{staticContext && staticContext.name}</h1>
                <ul>
                    {userLists && userLists.map(d => <li key={d.id}>{d.name}----{d.age}</li>)}
                </ul>
            </>
        )
    }
}


export default Home;
