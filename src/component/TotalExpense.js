import React from "react";
import { connect } from "react-redux";

function TotalExpense({ expenses }) {
  const amounts = expenses.map((expense) => {
    return expense.amount * 1;
  });

  const Totalexpenses = amounts
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);
  return (
    <div className="display_total">
      <div>
        <h3>Expense</h3>
      </div>
      <div className="bar"></div>
      <div>
        <p>GH₵ {Totalexpenses}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(TotalExpense);