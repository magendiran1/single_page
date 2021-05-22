import React from 'react'

import ExpensiveItem from './ExpensiveItem'
import './ExpensesList.css'
const ExpensesList = props => {


    if (props.item.length === 0) {
        return (<h2 className="expenses-list__fallback">No data Found</h2>)
    }


    return (
        <ul className='expenses-list'>
            {props.item.map((expense, index) => (
                <ExpensiveItem key={index} tittle={expense.Tittle} amount={expense.Amount} date={expense.date} />
            ))}
        </ul>
    )
}

export default ExpensesList;