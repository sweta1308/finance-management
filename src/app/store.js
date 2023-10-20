import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { financeReducer } from "../reducer/financeReducer";

export const store = createStore(financeReducer, applyMiddleware(thunk));
