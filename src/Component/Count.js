import React, { Component } from 'react'

export class Count extends Component {
    constructor() {
        super()

        this.state = {
            Count: 0

        }
    }

    Increment() {
        // this.setState({ Count: this.state.Count + 1 })
        // console.log(this.state.Count);
        this.setState((prevState)=>({Count:prevState.Count+1})
        )

    }

    Increment5() {
        this.Increment()  ;
        this.Increment()  ;
        this.Increment()  ;
        this.Increment()  ;
        this.Increment()  ; 
    }

    render() {
        return (
            <div>
                <h1 onClick={() => this.Increment5()}>Count ={this.state.Count}</h1>
            </div>
        )
    }
}

export default Count
