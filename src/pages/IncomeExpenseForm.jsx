import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEntry } from "../actions/actions";

export const IncomeExpenseForm = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState({
    description: "",
    amount: 0,
    category: "",
    entryType: "Income"
  });

  const { description, amount, category, entryType } = data;

  const handleAddEntry = (e) => {
    e.preventDefault();
    dispatch(addEntry(data));
    setData({ description: "", amount: 0, category: "", entryType: "Income" });
  };

  return (
    <div>
      <h2>New Entry Page</h2>
      <form onSubmit={handleAddEntry}>
        <div>
          <label>Description: </label>
          <input
            type="text"
            required
            value={description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
          />
        </div>
        <div>
          <label>Amount: </label>
          <input
            required
            type="number"
            value={amount}
            onChange={(e) => setData({ ...data, amount: e.target.value })}
          />
        </div>
        <div>
          <label>Category: </label>
          <input
            required
            type="text"
            value={category}
            onChange={(e) => setData({ ...data, category: e.target.value })}
          />
        </div>
        <div>
          <label>Entry Type: </label>
          <select
            required
            value={entryType}
            onChange={(e) => setData({ ...data, entryType: e.target.value })}
          >
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
            <option value="Savings">Savings</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
