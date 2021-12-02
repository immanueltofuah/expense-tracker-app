import { connect } from "react-redux";
import Expense from "./Expense";

function ExpenseList({ expenses }) {
  return (
    <div className="expense_list_container"> 
      {expenses.map((expense, index) => {
        return (
          <div key={index}>
            <Expense expense={expense} key={expense.id} />
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseList);