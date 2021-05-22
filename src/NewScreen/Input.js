import React ,{useState} from 'react'
import './Input.css'
import Form from './Form'
function Input(props) {

    const [isEditing,setIsEditing]=useState(false)
    const saveUserInputExpenses =(enteredExpenseData)=>{
const expenseData ={
    ...enteredExpenseData,
    id:Math.round((Math.random()*10).toString())
}

props.onAddExpenses(expenseData)
setIsEditing(false)
    }

    const showEditingNewExpenses =()=>{
        setIsEditing(true)
    }
    const notShowEditingNewExpenses =()=>{
        setIsEditing(false)
    }
return (
<div className="input-expense">
{!isEditing && <button onClick={showEditingNewExpenses}>ADD New Expenses</button>}
{isEditing && <Form  onSaveUserInputData={saveUserInputExpenses} onCancel={notShowEditingNewExpenses} />}
</div>
)
}

export default Input;