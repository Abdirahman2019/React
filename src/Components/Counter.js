import { Component } from "react";

class Counter extends Component{
    constructor(){
        super();
        this.state = {
            Counter: 0,
        };
    }
    increment(){
        this.setState({
            Counter: this.state.Counter + 1,
        })
    }
    Decrement(){
        this.setState({
            Counter: this.state.Counter - 1,
        })
    }

    render(){
        return (
            <div>
                <h3>Count value is: {this.state.Counter}</h3>
                 <button onClick={() => this.increment()}>Increment</button>
                 <button onClick={() => this.Decrement()}>Decrement</button>
            </div>
        );
    }
}
export default Counter
