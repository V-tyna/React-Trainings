import React, {Component} from "react";
import Counter2 from "../Counter2/Counter2";

export default class Counter extends Component {

    state = {
        counter: 0
    }

    addCounter = () => {
        this.setState((prevState) => {
           return {
               counter: prevState.counter + 1
            }
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.counter}</h2>
                <Counter2 />
                    <button style={{marginRight: '10px'}} onClick={this.addCounter}>+</button>
                    <button onClick={() => this.setState({counter: this.state.counter - 1})}>-</button>
            </div>
        )
    }
}