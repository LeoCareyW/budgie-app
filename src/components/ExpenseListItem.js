import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt}) => (
  <div>
    <p><Link to={`/edit/${id}`}>{description}</Link></p>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;

//dispatch etc
