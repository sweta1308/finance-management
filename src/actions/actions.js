import axios from "axios";

export const fetchIncome = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.get(
      "https://finance-management.swetaagarwalla.repl.co/income"
    );
    dispatch({ type: "FETCH_INCOME", payload: response.data.income });
  } catch (e) {
    console.error("Error fetching data", e);
    dispatch({ type: "FETCH_INCOME_FAILURE" });
  }
};

export const fetchExpenses = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.get(
      "https://finance-management.swetaagarwalla.repl.co/expense"
    );
    dispatch({ type: "FETCH_EXPENSES", payload: response.data.expense });
  } catch (e) {
    console.error("Error fetching data", e);
    dispatch({ type: "FETCH_EXPENSES_FAILURE" });
  }
};

export const fetchSavings = () => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.get(
      "https://finance-management.swetaagarwalla.repl.co/savings"
    );
    dispatch({ type: "FETCH_SAVINGS", payload: response.data.savings });
  } catch (e) {
    console.error("Error fetching data", e);
    dispatch({ type: "FETCH_SAVINGS_FAILURE" });
  }
};

export const addEntry = (entry) => async (dispatch) => {
  try {
    const { data } = await axios({
      method: "POST",
      url: `https://finance-management.swetaagarwalla.repl.co/addEntry`,
      data: entry
    });
    if (data.success === true) {
      if (data.message === "Income added successfully!") {
        dispatch({ type: "ADD_INCOME", payload: data.income });
      } else if (data.message === "Expense added successfully!") {
        dispatch({ type: "ADD_EXPENSE", payload: data.expense });
      } else if (data.message === "Savings added successfully!") {
        dispatch({ type: "ADD_SAVINGS", payload: data.savings });
      }
    }
  } catch (e) {
    console.error("Error adding data", e);
    dispatch({ type: "ADD_ENTRY_FAILURE" });
  }
};
