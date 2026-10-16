import React from 'react';
import './Table.css';

const Table = ({ columns, data, striped = false }) => {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const rowClass = striped && rowIndex % 2 === 0 ? 'stripe' : '';
            return (
              <tr className={rowClass} key={rowIndex}>
                {columns.map((column) => {
                  const value = row[column] || '';
                  return <td key={column}>{value}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;