import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const getStyles = ({ isActive }) => ({
    textDecoration: isActive ? "underline" : "",
    color: isActive ? "green" : ""
  });
  return (
    <div className="navbar">
      <NavLink style={getStyles} to="/">
        Income Expense Form
      </NavLink>{" "}
      ||
      <NavLink style={getStyles} to="/income">
        Income
      </NavLink>{" "}
      ||
      <NavLink style={getStyles} to="/expense">
        Expense
      </NavLink>{" "}
      ||
      <NavLink style={getStyles} to="/savings">
        Savings
      </NavLink>{" "}
      ||
      <NavLink style={getStyles} to="/report">
        Finance Report
      </NavLink>
    </div>
  );
};
