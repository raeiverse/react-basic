import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expenses) => (
        <ExpenseItem
          date={expenses.date}
          title={expenses.title}
          amount={expenses.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
