import React from 'react'

class Counter extends React.Component{

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
            <h4>{this.state.number}</h4>
            <button onClick={this.handleClick}>click</button>
        </div>
    }
}

export default Counter;