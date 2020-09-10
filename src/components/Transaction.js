import React, { useState } from 'react';

function Transaction({ setTransactions }) {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '' || amount === '') {
      alert('Please add a text and amount');
    } else {
      const transaction = {
        id: generateID(),
        text,
        amount: +amount,
      };

      setTransactions((t) => [...t, transaction]);

      setText('');
      setAmount('');
    }
  };
  // Generate random ID
  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value.trim())}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value.trim())}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}

export default Transaction;
