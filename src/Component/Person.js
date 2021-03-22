import React, { Component } from 'react'
import './person.css'

export class Person extends Component {

    state = {
        Person: [
            { name: "Max", age: 25 },
            { name: "Well", age: 27 },
            { name: "React", age: 3 }
        ],
        otherstate: "someother vales in state",
        showPerson: true
    }
    changeName = () => {
   
        this.setState(
            {
                Person: [
                    { name: "Maxwell", age: 25 },
                    { name: "Welldone", age: 27 },
                    { name: "Reactjs", age: 5 }
                ],
          
            }
        )
    }

    toggleContent = () => {
        const showText = this.state.showPerson;
        this.setState({
            showPerson: !showText

        })
    }
    render() {
        const newStyleforbutton = {
            backgroundColor: 'white',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            font: 'inherit'
        }
        return (
            <div className="Person">
                <button onClick={this.toggleContent}>Toggle below Cotent</button>
                {this.state.showPerson ? <div  >

                    <button onClick={this.changeName}>Switch Name</button>
                    <div >
                    <h1 style={newStyleforbutton}>I am {this.state.Person[0].name} and My age is {this.state.Person[0].age}</h1>
                    <h1 style={newStyleforbutton}>I am {this.state.Person[1].name} and My age is {this.state.Person[1].age}</h1>
                    <h1 style={newStyleforbutton}>I am {this.state.Person[2].name} and My age is {this.state.Person[2].age}</h1>
                    </div>
                </div> : null
                }
            </div>
        )
    }
}

export default Person
