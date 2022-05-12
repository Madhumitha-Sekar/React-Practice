import logo from './logo.svg';
import './App.css';
import Card from './Components/UI/Card';
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';
import { useState } from 'react';

const Initial_expenses = [{id: 1, title: 'Personal Loan', amount: 250, date: new Date(2021, 3, 24)},
  {id: 2, title: 'Home Rent', amount: 160, date: new Date(2022, 10, 3)},
  {id: 3, title: 'Monthly bill', amount: 170, date: new Date(2021, 9, 30)},
  {id: 4, title: 'Grocery', amount: 100, date: new Date(2020, 6, 25)},
  {id: 5, title: 'Travel', amount: 130, date: new Date(2021, 0, 14)},
];

function App() {

  const [expenses, setExpenses] = useState(Initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });

    //console.log(expenses);
    //console.log(expense);
  };

  return (
    <div className="App-header">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;


//Components are just functions that return HTML code