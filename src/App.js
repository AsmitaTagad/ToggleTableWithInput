import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [number, setNumber] = useState('');

  const generateTable = () => {
    if (number === '') {
      return null;
    }
    const table = [];
    for (let i = 1; i <= number; i++) {
      table.push(
        <tr key={i}>
          <td>{i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div className="container">
      <div>
        <div className="inputFiled">
          <input
            type="number"
            placeholder="type here"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div>
          <div key={number} className="table">
            <table>
              <thead>
                <tr>
                  <th>Number</th>
                </tr>
              </thead>
              <tbody>
              <td>{generateTable()}</td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
