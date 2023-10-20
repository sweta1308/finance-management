import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { fetchIncome } from "../actions/actions";
import { Table } from "../components/Table";
import { Filters } from "../components/Filters";

export const Income = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    sort: "",
    category: "All"
  });

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { income, loading } = state;

  let filteredIncome = income;

  if (filters.category === "All") {
    filteredIncome = income;
  } else {
    filteredIncome = filteredIncome.filter(
      (income) => income.category === filters.category
    );
  }

  const totalIncome = filteredIncome.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  return (
    <>
      <h2>Income</h2>
      {loading ? (
        <div className="loaders">
          <FadeLoader />
        </div>
      ) : (
        <div>
          <Filters
            filters={filters}
            setFilters={setFilters}
            filteredData={filteredIncome}
          >
            <option value="All">All</option>
            <option value="Monthly Income">Monthly Income</option>
            <option value="Investment Income">Investment Income</option>
            <option value="Property Income">Property Income</option>
            <option value="Additional Income">Additional Income</option>
            <option value="Other Income">Other Income</option>
          </Filters>
          <Table data={filteredIncome} />
          <h2>Summary</h2>
          <div className="summary">
            Total Income: <strong>${totalIncome}</strong>
          </div>
        </div>
      )}
    </>
  );
};
