export const Filters = ({ children, filters, setFilters, filteredData }) => {
  if (filters.sort === "LTH") {
    filteredData = filteredData.sort((a, b) => a.amount - b.amount);
  } else if (filters.sort === "HTL") {
    filteredData = filteredData.sort((a, b) => b.amount - a.amount);
  }
  return (
    <div className="filters">
      <div>
        <span>Sort by amount:</span>
        <label>
          <input
            type="radio"
            name="amount"
            value="LTH"
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          />{" "}
          Low to High
        </label>
        <label>
          <input
            type="radio"
            name="amount"
            value="HTL"
            onChange={(e) => setFilters({ ...filters, sort: e.target.value })}
          />{" "}
          High to Low
        </label>
      </div>
      <span>Filter by Category: </span>
      <select
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        {children}
      </select>
    </div>
  );
};
