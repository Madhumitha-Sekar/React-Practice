import './ExpenseDate.css';
import React from 'react';

function ExpenseDate(props){

    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (<div className="expense-date"><div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div></div>  );
};

export default ExpenseDate;

//'single curly brace' in div tag helps to use normal Javascript code inside it
//Components cannot directly use data stored in other components. Thus we use 'props' 