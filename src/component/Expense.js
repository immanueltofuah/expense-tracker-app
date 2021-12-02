import { useState } from "react";
import { connect } from "react-redux";
import { deleteExpense, updateExpense } from "../actions/expenseActions";
import Update from "./Update";
import {Modal} from "react-bootstrap"

function Expense({ expense, deleteExpense }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  let editExpense = <Update expense={expense} toggleModal={toggleModal} />;

  if (!showModal) {
    editExpense = null;
  }
  return (
    <div>
      <div className="expense_list">
        <p className="exp">{expense.items}</p>
        <div className="side_container">
          <p className="amount">GH₵ {expense.amount}</p>
          <div className="side">
            <p>
              {expense.date}{" "}
              <span className="button">
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="fas fa-trash"
                >del</button>
                <button
                  onClick={() => toggleModal()}
                  className="fas fa-edit"
                >edit</button>
              </span>
            </p>
          </div>
        </div>
      </div>


      <Modal show={showModal} onHide={() => toggleModal()}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Expense</Modal.Title>
        </Modal.Header>
        <Modal.Body>{editExpense}</Modal.Body>
      </Modal>

    </div>
  );
}

const mapDispatchToProps = {
  deleteExpense,
  updateExpense,
};

export default connect(null, mapDispatchToProps)(Expense);