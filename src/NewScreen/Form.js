import React, { useState } from 'react'
import './Form.css'

const Form = (props) => {

    const [enterTittle, setEnterTittle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enterTittle: '',
    //     enterAmount: '',
    //     enterDate: ''
    // })

    const tittleChangeHanlder = (e) => {

        setEnterTittle(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterTittle: e.target.value
        // })
    }

    const amontChangeHanlder = (e) => {
        setEnterAmount(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterAmount: e.target.value
        // })
    }

    const dataChangeHanlder = (e) => {
        setEnterDate(e.target.value)
        // setUserInput({
        //     ...userInput,
        //     enterDate:e.target.value
        // })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const expenseDate = {
            Tittle: enterTittle,
            Amount: enterAmount,
            date: new Date(enterDate)

        }
       
        setEnterTittle('');
        setEnterAmount('');
        setEnterDate('')
props.onSaveUserInputData(expenseDate);
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-expense__controls ">
                <div className="new-expense__control">
                    <label>Tittle</label>
                    <input type="text" onChange={tittleChangeHanlder}  value={enterTittle}/>
                </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="number" min='0.01' step='0.01' onChange={amontChangeHanlder}  value={enterAmount}/>
                </div>
                <div className="new-expense__control">
                    <label>date</label>
                    <input type="date" min='2019-01-01' max='2022-12-31' onChange={dataChangeHanlder} value={enterDate} />
                </div>
            </div>
            <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit'>ADD Expense</button>
                
            </div>
        </form>
    )

}

export default Form;