import React, { Component } from 'react'
import JSX from './JSX'
import { Props1 } from './props'
import List from './Conditional/list'
import UserInput from '../Assignment/UserInput'
import Style from './Style'

class Greet extends Component {
    render() {


        return (
            <>
                <Props1 name="Mendy" />
                <JSX />
                <List />
                <UserInput />
                <Style />
            </>
        )
    }
}

//   <div><h1> Greeting to Class Component</h1></div>
//   <div> <h1>This is New props children</h1></div>       
export default Greet;