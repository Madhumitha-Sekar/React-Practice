import React from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

    const addExpenseHandler = (enteredExpenseData) => {
        const newExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

    props.onAddExpense(newExpenseData);

    };

    return (<div className="new-expense">
        <ExpenseForm onFormSubmission={addExpenseHandler}></ExpenseForm>
    </div>);
}

export default NewExpense;