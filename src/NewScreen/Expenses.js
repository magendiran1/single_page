import React ,{useState} from 'react';
import ExpenesesList from  './ExpensesList'
import Filter from './Filter'
import './Expenses.css'
import ExpensesChart from './ExpensesChart';


function Expenses(props) {

    const [filterYear,setFilterYear]= useState('2019');
    const filterChangeHandler =(selectyear)=>{
setFilterYear(selectyear)
    }

    const filterListItem =props.item.filter(expense =>{
        return expense.date.getFullYear().toString()===filterYear
    });
   
    return (
        <div className="expenses">
            <Filter select={filterYear} onFilterYear={filterChangeHandler}/>
<ExpensesChart expenses={filterListItem}/>
           <ExpenesesList item={filterListItem} />
            {/* <ExpensiveItem tittle={props.item[0].tittle} amount={props.item[0].amount} date={props.item[0].date} />

            <ExpensiveItem tittle={props.item[1].tittle} amount={props.item[1].amount} date={props.item[1].date} />
            
            <ExpensiveItem tittle={props.item[2].tittle} amount={props.item[2].amount} date={props.item[2].date} />
            
            <ExpensiveItem tittle={props.item[3].tittle} amount={props.item[3].amount} date={props.item[3].date} /> */}
        </div>
    )
}
export default Expenses;