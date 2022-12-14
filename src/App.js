import "./App.scss";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
import NewExpense from "./components/New_Expense/NewExpense";

const DUMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMY_EXPENSES);

  const expenseHandler = (expense) => {
    setExpenses((previusEx) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onTakeValues={expenseHandler} />      
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
