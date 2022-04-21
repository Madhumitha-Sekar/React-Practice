import React from "react";
import { useState } from "react/cjs/react.development";
import './ExpenseForm.css';


function ExpenseForm(props){

    const [defaultTitle, enteredTitle] = useState('');
    const [defaultAmount, enteredAmount] = useState('');
    const [defaultDate, enteredDate] = useState('');

    /*function titleChange(){
        console.log("HAAAHAAAA");
    }*/

    const titleChange = (event) =>{
        enteredTitle(event.target.value);
    };

    const amountChange = (event) =>{
        enteredAmount(event.target.value);
    };

    const dateChange = (event) => {
        enteredDate(event.target.value);
    }; 

    const submitForm = (event) => {
        event.preventDefault();          //prevent the form from submission

        const expenseData = {
            title: defaultTitle,
            amount: defaultAmount,
            date: new Date(defaultDate)
        };

        props.onFormSubmission(expenseData);

        enteredTitle('');
        enteredAmount('');
        enteredDate('');

    };
    
    return <form onSubmit={submitForm}>
        <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={defaultTitle} onChange={titleChange}/>
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" value={defaultAmount} onChange={amountChange} />
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2019-01-01" max="2022-12-31" value={defaultDate} onChange={dateChange} />
        </div>
        </div>
        <div className="new-expense__actions"><button type="submit">Add Expense</button></div>
    </form>
}

export default ExpenseForm;


/* Instead of multiple states, we can use one single state for all the values.

const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
});

const titleChange = (event) => { 
    setUserInput({
        ...userInput,              ((((This line is used because the change call of this funtion should not affect other field values))))
        enteredTitle: event.target.value,
    });
};

const amountChange = (event) => { 
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
    });

    // the below is one of the best way while we are working with previous state
    //setUserInput((prevState) => {
    //    return {...prevState, enteredTitle: event.target.value };
    //});
};

const dateChange = (event) => { 
    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
    });
};

*/