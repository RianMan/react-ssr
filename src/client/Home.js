import React from 'react';
import { connect } from 'react-redux';
import actions from '../store/action/home';
import axiosFactory from '../request';

@connect(state => (state.home), actions)
class Home extends React.Component{

    static fetchData = (dispatch) => {
        return dispatch(actions.getUserList())
    }

    state = {
        data: []
    }

     componentWillMount(){
        if(this.props.userLists && this.props.userLists.length < 0){
            this.props.getUserList();
        }
    }

    render(){
        const { data } = this.state;
        const { staticContext,userLists } = this.props;
        return (
            <>
                <ul>
                    {userLists && userLists.map(d => <li key={d.id}>{d.name}----{d.age}</li>)}
                </ul>
            </>
        )
    }
}


export default Home;
