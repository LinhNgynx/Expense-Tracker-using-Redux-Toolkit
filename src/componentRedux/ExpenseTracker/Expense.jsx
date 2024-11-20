import React from "react";
import { useState } from "react";
import { addExpense, deleteExpense } from "../../feature/expenseSlice";
import { useSelector, useDispatch } from "react-redux";
export default function Expense() {
  const [input, setInput] = useState({
    amount: 0,
    category: "",
  });
  const expense = useSelector((state) => state.expense);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addExpense({ amount: input.amount, category: input.category }));
    setInput({
      amount: 0,
      category: "",
    });
  };
  const handleChange = (e, prop) => {
    if((prop==='amount')&&(e.target.value<0)){
      alert('No negative allowed');
      return;
    };
    const value = prop === "amount" ? Number(e.target.value) : e.target.value;
  setInput((prev) => ({ ...prev, [prop]: value }));
  };
  const handleDelete = (id) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={input.amount}
          onChange={(e) => handleChange(e, "amount")}
          required
        ></input>
        <br></br>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          name="category"
          value={input.category}
          onChange={(e) => handleChange(e, "category")}
          required
        >
          <option value="" disabled>
            Choose one:
          </option>
          <option value="groceries">Groceries</option>
          <option value="Fun">Fun</option>
          <option value="food">Food</option>
        </select>
        <input type="submit" value="Add "></input>
      </form>
      {expense.length !== 0 &&
        expense.map((cash) => (
          <div key={cash.id}>
            <p>{cash.amount}</p>
            <p>{cash.category}</p>
            <button onClick={() => handleDelete(cash.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
}
