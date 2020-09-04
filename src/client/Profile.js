import React from 'react'

class Profile extends React.Component{

    state = {
        number: 0
    }

    handleClick = () => {
        this.setState({
            number: this.state.number +1
        })
    }

    render(){
        return <div>
           个人中心
        </div>
    }
}

export default Profile;