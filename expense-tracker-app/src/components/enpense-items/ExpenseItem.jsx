import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "../expense-date/ExpenseDate";
import Card from "../card/Card";

const ExpenseItem = (props) => {
  // working with useState to update title
  const [title, setTitle] = useState(props.title);
  console.log('helloo');

  // onClick event
  const clickHandler = () => {
    setTitle('Updated!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
