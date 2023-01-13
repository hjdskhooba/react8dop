import React from "react";

class ClassCounter extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    increment(){
        this.setState({count: this.state.count + 1})
    }

    decrement() {
        this.setState({count: this.state.count - 1})
    }

    reset(){
        this.setState({count: this.state.count = 0})
    }

    render(){
        return(
            <div className="Counter">
                <header>{this.state.count}</header>
                <div className="btns">
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                    <br/>
                    <button className="btn-reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        )
    }
}

export default ClassCounter;