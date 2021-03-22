import React, { Component } from 'react'

class list extends Component {
    state = {
        PersonLsit: [
            { name: "one", age: 1 },
            { name: "Two", age: 2 },
            { name: "Three", age: 3 },
            { name: "four", age: 4 }
        ],
        Needtoshow: false

    }
    showPersonlist = () => {
        const Toggletoshow = this.state.Needtoshow
        this.setState({ Needtoshow: !Toggletoshow })
    }

deleteItem =(name) =>{
    debugger;
    const {PersonLsit} =this.state; 
const modifyList = PersonLsit.filter((personData)=>{
 return personData.name!=name;
})
    this.setState({PersonLsit:modifyList})

}

    render() {

        const ListPersonData = this.state.PersonLsit.map((personlist) => <div>
            <li  >{personlist.name}</li><span onClick={()=>this.deleteItem(personlist.name)}>Delete</span></div>)

        let Persondata = null;
        if (this.state.Needtoshow) {
            Persondata = (
                <div><h1 >{ListPersonData}</h1></div>)
        }
        return (
            <div>
                <button onClick={this.showPersonlist}>Toggle List personlist</button>

                <ul >{Persondata}</ul>

            </div>
        )
    }
}

export default list
