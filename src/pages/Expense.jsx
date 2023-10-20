import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { fetchExpenses } from "../actions/actions";
import { Table } from "../components/Table";
import { Filters } from "../components/Filters";

export const Expense = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    sort: "",
    category: "All"
  });

  useEffect(() => {
    dispatch(fetchExpenses());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { loading, expenses } = state;

  let filteredExpense = expenses;

  if (filters.category === "All") {
    filteredExpense = expenses;
  } else {
    filteredExpense = filteredExpense.filter(
      (expense) => expense.category === filters.category
    );
  }

  const totalExpenses = filteredExpense.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  return (
    <>
      <h2>Expenses</h2>
      {loading ? (
        <div className="loaders">
          <FadeLoader />
        </div>
      ) : (
        <div>
          <Filters
            filters={filters}
            setFilters={setFilters}
            filteredData={filteredExpense}
          >
            <option value="All">All</option>
            <option value="Housing">Housing</option>
            <option value="Food">Food</option>
            <option value="Utilities">Utilities</option>
            <option value="Transportation">Transportation</option>
            <option value="Health">Health</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Insurance">Insurance</option>
            <option value="Education">Education</option>
            <option value="Clothing">Clothing</option>
            <option value="Gifts">Gifts</option>
            <option value="Fees">Fees</option>
          </Filters>
          <Table data={filteredExpense} />
          <h2>Summary</h2>
          <div className="summary">
            Total Expenses: <strong>${totalExpenses}</strong>
          </div>
        </div>
      )}
    </>
  );
};
