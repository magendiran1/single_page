import React from 'react';
import ExpensiveDate from './ExpensiveDate'
import './Item.css'
import Card from './Card';


function ExpensiveIteam(props) {
    return (
        <div>
    
        <Card className="expense-item">
       
            <ExpensiveDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.tittle}</h2>
                <div className="expense-item__price">RS:{props.amount}</div>
            </div>
        </Card>
        
        </div>
    )
}

export default ExpensiveIteam;