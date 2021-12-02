export const addExpense = (expense) => {
    return {
        type: "ADD_EXPENSE",
        payload: expense
    }
}

export const deleteExpense = (expenseId) => {
    return {
        type: "DELETE_EXPENSE",
        payload: expenseId
    }
}

export const updateExpense = (expenseId, updateExpense) => {
    return {
        type: "UPDATE_EXPENSE",
        payload: { expenseId, updateExpense}
    }
}