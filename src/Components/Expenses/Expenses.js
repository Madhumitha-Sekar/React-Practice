import ExpenseItems from "./ExpenseItems";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = (selectedYear) =>{
        setFilteredYear(selectedYear);
    };

    return (<Card className="Expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterYearHandler}></ExpensesFilter>
        {props.item.map(expense => <ExpenseItems title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItems>)}
    </Card>);
};

export default Expenses;

//'className' attribute is used in JSX unlike HTML which uses 'class' attribute