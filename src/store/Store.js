import { createStore } from "redux";
import ExpenseReducers from "../reducers/ExpenseReducers";

const store = createStore(ExpenseReducers);

export default store;