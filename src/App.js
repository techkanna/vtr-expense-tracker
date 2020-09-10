import React, { useState, useEffect } from 'react';
import './App.css';
import Balance from './components/Balance';
import History from './components/History';
import Transaction from './components/Transaction';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    getlocalStorageTransactions();
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  function getlocalStorageTransactions() {
    const localStorageTransactions = JSON.parse(
      localStorage.getItem('transactions')
    );
    let ls =
      localStorage.getItem('transactions') !== null
        ? localStorageTransactions
        : [];
    setTransactions(ls);
  }

  const removeTransaction = (id) => {
    setTransactions((transactions) =>
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance transactions={transactions} />
        <History
          transactions={transactions}
          removeTransaction={removeTransaction}
        />
        <Transaction setTransactions={setTransactions} />
      </div>
    </>
  );
}

export default App;
