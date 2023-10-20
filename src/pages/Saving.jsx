import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FadeLoader } from "react-spinners";
import { fetchSavings } from "../actions/actions";
import { Table } from "../components/Table";
import { Filters } from "../components/Filters";

export const Savings = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    sort: "",
    category: "All"
  });

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  const state = useSelector((state) => state);
  const { loading, savings } = state;

  let filteredSavings = savings;

  if (filters.category === "All") {
    filteredSavings = savings;
  } else {
    filteredSavings = filteredSavings.filter(
      (saving) => saving.category === filters.category
    );
  }

  const totalSavings = filteredSavings.reduce(
    (acc, curr) => acc + curr.amount,
    0
  );
  return (
    <>
      <h2>Savings</h2>
      {loading ? (
        <div className="loaders">
          <FadeLoader />
        </div>
      ) : (
        <div>
          <Filters
            filters={filters}
            setFilters={setFilters}
            filteredData={filteredSavings}
          >
            <option value="All">All</option>
            <option value="Emergency Savings">Emergency Savings</option>
            <option value="Travel Savings">Travel Savings</option>
            <option value="Retirement Savings">Retirement Savings</option>
            <option value="Home Savings">Home Savings</option>
            <option value="Education Savings">Education Savings</option>
            <option value="Vehicle Savings">Vehicle Savings</option>
            <option value="Gift Savings">Gift Savings</option>
            <option value="Health Savings">Health Savings</option>
            <option value="Investment Savings">Investment Savings</option>
          </Filters>
          <Table data={filteredSavings} />
          <h2>Summary</h2>
          <div className="summary">
            Total Savings: <strong>${totalSavings}</strong>
          </div>
        </div>
      )}
    </>
  );
};
