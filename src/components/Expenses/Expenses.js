import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import Card from "../UI/Card";
import "./Expenses.scss";

function Expenses({ items }) {
  const [filterYear, filterYearSet] = useState("");

  const takeYear = (data) => {
    filterYearSet(data);
  };
  // filtering data with year
  const filteredArr = items.filter(
    (data) => data.date.getFullYear().toString() === filterYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onChangeYear={takeYear} />
        <ExpensesChart expenses={filteredArr}  />
        {filteredArr.length === 0 && <p>Not Found Expenses</p>}
        {filteredArr.length > 0 &&
          filteredArr.map((data) => (
            <ExpenseItem
              key={data.id}
              title={data.title}
              amount={data.amount}
              date={data.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
