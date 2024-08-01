import { useState, useEffect } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Resume from "./components/Resume/Resume";

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(
    data ? JSON.parse(data) : []
  );

  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amountExpense = transactionsList
      .filter((item) => item.expense) // Corrigido para 'item.expense'
      .map((transactions) => Number(transactions.amount));

    const amountIncome = transactionsList
      .filter((item) => !item.expense) // Corrigido para '!item.expense'
      .map((transactions) => Number(transactions.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);
  }, [transactionsList]);

  const handleAdd = (transactions) => {
    const newArrayTransactions = [...transactionsList, transactions]

    setTransactionsList(newArrayTransactions);

    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
  }

  return (
    <>
      <Header />
      <Resume expense={expense} income={income} total={total} />
      <Form handleAdd={handleAdd} />
    </>
  );
}

export default App;
