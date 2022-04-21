import { useState }from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItems(props) {

    const [title, newTitle] = useState(props.title);

    console.log(title);

    function TitleChange(){
        newTitle("Hurrah!!!");
    }

    return (<Card  className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>          
        <div className="expense-item__description"><h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
            <button onClick={TitleChange}>Change Title</button></div>
    </Card>)
}

export default ExpenseItems;

//useState is one of the important hooks. Hooks start with 'use' keyword and that can be invoked only in the Main component not in any Nested Component.
// calling the useState again will not update the value it will create a new state
// const [variable, funtionName(that updates this value in future)] = useState(assignment value)
//functionName("updated value") ---> this will change the value of the variable and makes the component reexecuted that makes the change gets reflected in the page