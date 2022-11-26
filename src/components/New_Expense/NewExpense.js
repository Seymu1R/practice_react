import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      ...enteredData,
      id:Math.random().toString()
    };
    props.onTakeValues(expenseData);
    
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
