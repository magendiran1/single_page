import React from 'react';
import './ExpensiveDate.css'
function ExpensiveDate(props) {
const month =props.date.toLocaleString('en-us',{month:"long"});
const day =props.date.toLocaleString('en-us',{day:"2-digit"});
const year =props.date.getFullYear();
    


    return (
<div className="expensive-date">
    <div className="expensive-date_month">{month}</div>
<div className="expensive-date_day">{day}</div>
<div className="expensive-date_year">{year}</div>
</div>
    )
}

export default ExpensiveDate;