import React , {useState} from 'react'
import ExpenseDate from "../Expenses/ExpenseDate";
import "./ExpenseItem.scss";
import Card from "../UI/Card";


function ExpenseItem({ date, title, amount }) {
  
 

  const [data , setTitle ]=useState(title)
  const clickHandler=()=>{
    setTitle("Changed!!!")
    console.log(data);
  }

  return (
    <Card className="expense-item">     
       <ExpenseDate date={date} />      
      <div className="expense-item__description">
        <h2>{data}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler} > Click Me </button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
