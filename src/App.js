import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 140.45,
      date: new Date(2021, 3, 12),
    },
    {
      id: "e2",
      title: "Book Paper",
      amount: 141.46,
      date: new Date(2021, 2, 11),
    },
    {
      id: "e3",
      title: "Wall Paper",
      amount: 142.47,
      date: new Date(2021, 1, 10),
    },
    {
      id: "e4",
      title: "Car Isurance",
      amount: 140.45,
      date: new Date(2021, 3, 12),
    },
  ];
  return (
    <div>
      <h1 className="text">Let's get started!</h1>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
