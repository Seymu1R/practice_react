import React, { useState } from "react";
import "./ExpenseForm.scss";

function ExpenseForm(props) {
  const [condition, setCondition] = useState(false);

  const returnExpenseform = (event) => {
    if (!condition) {
        setCondition(true)        
        return      
    }
    setCondition(false)
  };

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: Date,
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      title: e.target.value,
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      amount: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  const formChangeHandler = (e) => {
    e.preventDefault();
    const ExpenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    props.onSaveExpenseData(ExpenseData);
  };

  if (condition) {
    return (
      <form onSubmit={formChangeHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2000-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
          <button onClick={returnExpenseform} type="submit">
            Cancel
          </button>
        </div>
      </form>
    );
  }
  return (
    <div className="new-expense__actions">
      <button onClick={returnExpenseform} type="submit">Add New Expense</button>
    </div>
  );
}

export default ExpenseForm;
