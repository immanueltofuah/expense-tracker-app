import { createStore } from "redux";
import expenseReducers from "../reducers/expenseReducers";

const store = createStore(expenseReducers);

export default store;