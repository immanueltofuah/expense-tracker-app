const initialState = {
    expenses: [],
  };
  
  const expenseReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_EXPENSE":
        return { ...state, expenses: [...state.expenses, action.payload] };
      case "DELETE_EXPENSE":
        const filterExpense = state.expenses.filter((expense) => {
          return expense.id !== action.payload;
        });
        return {...state, expenses: filterExpense}
      case "UPDATE_EXPENSE":
        const updateExpense = state.expenses.map((expense) => {
          if (expense.id === action.payload.expenseId) {
            return action.payload.updateExpense;
          }
          return expense;
        });
        return { ...state, expenses: updateExpense };
      default:
        return state;
    }
  };
  
  export default expenseReducers;