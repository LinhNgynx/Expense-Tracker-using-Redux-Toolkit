import React from "react";
import { useSelector } from "react-redux";
export default function Home() {
  const income = useSelector((state) => state.income);
  const expense = useSelector((state) => state.expense);
  const totalIncome = income.reduce(
    (accumulate, item) => accumulate + item.amount,
    0
  );
  const totalExpense = expense.reduce(
    (accumulate, item) => accumulate + item.amount,
    0
  );

  return (
    <div>
      <p>Total income:{totalIncome} $</p>
      <p>Total expense: {totalExpense} $</p>
      <p>Total balance: {totalIncome - totalExpense} $</p>
    </div>
  );
}
