import React, { Component } from 'react'
import JSX from './JSX'
import { Props1 } from './props'
import List from './Conditional/list'
import UserInput from '../Assignment/UserInput'
import Style from './Style'

class Greet extends Component {
    render() {

        console.log('testing ')
        return (
            <>
                <span><p> Greeting to Class Component</p></span>
                <JSX />
                <Props1 name="Mendy" />
                <p>This is New props children</p>
                <List />
                <UserInput />
                <Style />
            </>
        )
    }
}

export default Greet;