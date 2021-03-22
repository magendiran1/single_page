import React, { Component } from 'react'
import Count from './Count'
import Person from './Person'
import SeState from './setstate'

class Newstate extends Component {

    constructor() {
        super()
        this.state = { Message: "State" }

    }

    ChangeState() {
        this.setState(
            { Message: "Thanks for click " }
        )
    }

    render() {

        return (

            <div>
                <h1>Welcome to the {this.state.Message} Component</h1>
                <button onClick={() => this.ChangeState()}>Welcome</button>
                <Count />
                <Person />
                <SeState />

            </div>
        )
    }
}


export default Newstate;