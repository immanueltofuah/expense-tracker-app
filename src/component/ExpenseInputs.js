import { useState } from "react";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import { addExpense } from "../actions/expenseActions";

function ExpenseInputs({ addExpense }) {
  const [date, setDate] = useState("");
  const [items, setItems] = useState("Select");
  const [amount, setAmount] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    if (date || (items && amount)) {
      let addNewExpense = {
        date,
        items,
        amount,
        id: uuid(),
      };
      addExpense(addNewExpense);

      setDate("");
      setItems("");
      setAmount("");
    }else {
      alert("Invalid")
    }
  };
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>
        {alert}
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
        <button>Add Expense</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  addExpense,
};

export default connect(null, mapDispatchToProps)(ExpenseInputs);