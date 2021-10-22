
import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:10
        }
    }

    increment = () => {
        this.setState(
            {
              count: this.state.count + 1
            }
        )
    };

    decrement = () => {
        if (this.state.count >0){
            this.setState({
                count: this.state.count - 1
            }
                
            )
            
        }
//         this.state.count > 0 ? this.setState({
//             count: this.state.count - 1
//         }
// ): null 
        
        

    }


    render() {
        return (
            <div>
                <p>This is our current count: {this.state.count} </p>
                <button onClick={this.increment} >Increment</button>
                <button disabled={this.state.count==0 } onClick={this.decrement} >Decrement</button>
            </div>
        )
    }
}
