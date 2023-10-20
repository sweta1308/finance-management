const initialState = {
  income: [],
  expenses: [],
  savings: [],
  loading: false,
  error: null
};

export const financeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "FETCH_INCOME":
      return {
        ...state,
        income: payload,
        loading: false,
        error: null
      };
    case "FETCH_INCOME_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching income data."
      };
    case "FETCH_EXPENSES":
      return {
        ...state,
        expenses: payload,
        loading: false,
        error: null
      };
    case "FETCH_EXPENSES_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching expenses data."
      };
    case "FETCH_SAVINGS":
      return {
        ...state,
        savings: payload,
        loading: false,
        error: null
      };
    case "FETCH_SAVINGS_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error fetching savings data."
      };
    case "ADD_ENTRY_FAILURE":
      return {
        ...state,
        loading: false,
        error: "Error adding data."
      };
    case "ADD_INCOME":
      return {
        ...state,
        income: [...state.income, payload],
        loading: false,
        error: null
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, payload],
        loading: false,
        error: null
      };
    case "ADD_SAVINGS":
      return {
        ...state,
        savings: [...state.savings, payload],
        loading: false,
        error: null
      };
    default:
      return state;
  }
};
