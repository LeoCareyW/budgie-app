import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
    {props.name}
  </div>
);

const ConnectedExpenseList = connect((state) => {
  return {
    name: 'Leo'
  };
})(ExpenseList);

export default ConnectedExpenseList;
