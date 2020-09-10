import React from 'react';

function Balance({ transactions }) {
  return (
    <>
      <h4>Your Balance</h4>
      <h1>
        {transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2)}
      </h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">
            {transactions
              .filter((item) => item.amount > 0)
              .reduce((acc, item) => (acc += item.amount), 0)
              .toFixed(2)}
          </p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">
            {(
              transactions
                .filter((item) => item.amount < 0)
                .reduce((acc, item) => (acc += item.amount), 0) * -1
            ).toFixed(2)}
          </p>
        </div>
      </div>
    </>
  );
}

export default Balance;
