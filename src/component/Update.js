import React, { useState } from "react";
import { connect } from "react-redux";
import { updateExpense } from "../actions/expenseActions";

function Update({ updateExpense, expense, toggleModal }) {
  const [date, setDate] = useState(expense.date);
  const [items, setItems] = useState(expense.items);
  const [amount, setAmount] = useState(expense.amount);

  const handleSubmit = (e) => {
    e.preventDefault();

    let updated = {
      date,
      items,
      amount,
      id: expense.id,
    };

    updateExpense(expense.id, updated);
    toggleModal()

  };
  return (
    <div className="update_form_container">
      <form>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <select
          name="items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
        >
          <option value="Select">Select item</option>
          <option value="Food">Food and Drink</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Transportation">Transportation</option>
          <option value="Housing and Rent">Housing and Rent</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button onClick={handleSubmit}>save</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  updateExpense,
};

export default connect(null, mapDispatchToProps)(Update);