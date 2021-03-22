import React ,{Component} from 'react'
import JSX from './JSX'
import {Props1} from './props'
import List from './Conditional/list'
import UserInput from '../Assignment/UserInput'
import Style from './Style'

class Greet extends Component {
render()
{
return (
    <div>
    <h1> Greeting to Class Component</h1>
    <JSX />
    <div>
    <Props1 name="Mendy"/>
    <h1>This is New props children</h1>
    <List />
    <UserInput />
    <Style />
    </div>


    </div>
)
}
}

export default Greet;