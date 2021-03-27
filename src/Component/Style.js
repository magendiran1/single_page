import React, { useState } from 'react';
import '../App.css'
import Radium from 'radium';
const StyleUse = () => {




    const [state, setState] = useState({
        listPersons: {
            students:
                [
                    { name: "mendy", age: 25 },
                    { name: "Girish", age: 24 },
                    { name: "Chacks", age: 30 }
                ],
            dataVisible: true

        }

    })


    //const [show ,setShow]=useState(listPersons.dataVisible)

    const dataUpdateList = () => {
        debugger;
        const test = {...state}
        test.listPersons.students = [
            { name: "magemendy", age: 25 },
            { name: "Girishspidey", age: 24 },
            { name: "Chackschandru", age: 30 }
        ]

        setState(
            test
        )
    }


    const visibleDate = () => {
        let test1 = state.listPersons
        test1.dataVisible = !state.listPersons.dataVisible
        setState({
            ...state, listPersons: test1

        })
    }

    const removeList = (name) => {

        const removeListItem = state.listPersons.students;
        const finalListItem = removeListItem.filter((itemList) => {
            return itemList.name != name
        }

        )
        let test2 = state.listPersons
        test2.students = finalListItem

        setState({
            ...state, listPersons: test2
        });
    }




    const listItem =state.listPersons.students.map((stdList, index) => {
        return (<div key={index}><h1>My name is {stdList.name} my age is {stdList.age}
        </h1><button onClick={() => removeList(stdList.name)}>Delete</button></div>)
    })

    const style = {
        backgroundColor: 'red',
        color: 'white',
        font: 'inherit',
        border: '1px solid bule',
        padding: '8px',
        cursor: 'pointer',
        ':hover':{
            backgroundColor:'lightgreen',
            color:'red'
        }

 
    }
    const dataVisible = state.listPersons.dataVisible
    let show = null
    if (dataVisible) {
        show = (<p>{listItem}</p>)
        style.backgroundColor = 'green'
        style[":hover"]={
            backgroundColor:'white',
            color:'black'
        }
    }
let classes =''


if(state.listPersons.students.length<=2)
{
classes='red';
}
if(state.listPersons.students.length>=3){
    classes='blue';
}
    return (

        <div>
            <p className={classes}> This is Working Fine</p>
            <button style={style} onClick={() => visibleDate()} >Show The List</button> <br />
            <button onClick={() => dataUpdateList()}>updateList</button>
            {show}

        </div>
    )
}

export default Radium(StyleUse);


/// we are going to use Radium in Style compentent the radium in external package  --- npm install --save radiu