import React, { useState } from 'react';

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
      let test =state.listPersons.students
      test=[
        { name: "magemendy", age: 25 },
        { name: "Girishspidey", age: 24 },
        { name: "Chackschandru", age: 30 }
    ]
        setState({
            
            ...state,
            listPersons: test
            
        })
    }


    const visibleDate = () => {
        let test1 = state.listPersons
        test1.dataVisible=!state.listPersons.dataVisible
       setState({
          ...state,listPersons:test1
         
       })
    }
  
    const removeList = (name) => {

        const removeListItem = state.listPersons.students;
        const finalListItem = removeListItem.filter((itemList) => {
            return itemList.name != name
        }

        )
        let test2 = state.listPersons
        test2.students=finalListItem

        setState({
            ...state,listPersons:test2
        });
    }



    debugger;
    const listItem = state.listPersons.students.map((stdList, index) => {
        return (<div key={index}><h1>My name is {stdList.name} my age is {stdList.age}
        </h1><button onClick={() => removeList(stdList.name)}>Delete</button></div>)
    })

    const dataVisible=state.listPersons.dataVisible
    
    return (
        
        <div>

            <button onClick={()=>visibleDate()} >Show The List</button> <br />
            <button onClick={()=>dataUpdateList()}>updateList</button>
            {dataVisible ? (<h2>{listItem} </h2>) : (null)}

        </div>
    )
}

export default StyleUse;