import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.scss";

function Expenses({ items }) {
const [filterYear,filterYearSet] = useState('2020')

const takeYear=(data)=>{
  filterYearSet(data)
  
}
const filteredArr=items.filter(data=>data.date.getFullYear() == filterYear)
  return (
    <div>
      
    <Card className="expenses">
    <ExpenseFilter onChangeYear={takeYear} />
      
      {
      
      filteredArr.map(data => 
       ( <ExpenseItem title={data.title} amount={data.amount} date={data.date} />
      ))
      }
    </Card>
    </div>
    
  );
}

export default Expenses;
