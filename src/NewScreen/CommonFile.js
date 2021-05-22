import React,{useState} from 'react';
import Expenses from  './Expenses'
import Input from './Input';

const dummy_Expensive = [
    {
        id: 1,
        Tittle: "Toilet Papper",
        Amount: 100,
        date: new Date(2020, 7, 14)
    },
    {
        id: 2,
        Tittle: "Car Insurance",
        Amount: 1000,
        date: new Date(2021, 2, 15)
    },
    {
        id: 3,
        Tittle: "New Desktop(Plywood)",
        Amount: 1500,
        date: new Date(2021, 3, 17)
    },
    {
        id: 4,
        Tittle: "LapTop",
        Amount: 20000,
        date: new Date(2020, 5, 25)
    }
]
function CommonFile() {

    const [expensive,setExpensive]=useState(dummy_Expensive)

    const addExpensesHandler =(expense) =>{
       
       setExpensive((prevExpense)=>{
           return [...prevExpense,expense]
       })
    }
    return (
        <div>
<Input onAddExpenses={addExpensesHandler} />
<Expenses item={expensive} />


        </div>
    )
}

export default CommonFile;