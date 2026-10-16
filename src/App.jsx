import React from 'react';
import Button from './components/Button';
import Card from './components/Card';
import Table from './components/Table';
import './App.css';

function App() {
  const handleButtonClick = () => {
    alert('Button clicked!');
  };

  const handleCardClick = () => {
    alert('Card clicked!');
  };

  const students = [
    { name: 'Alice', age: 20, city: 'New York' },
    { name: 'Bob', age: 22, city: 'Los Angeles' },
    { name: 'Charlie', age: 21, city: 'Chicago' },
    { name: 'Diana', age: 23, city: 'Seattle' },
  ];

  const products = [
    { name: 'Laptop', price: '$999', category: 'Electronics' },
    { name: 'Mouse', price: '$25', category: 'Accessories' },
    { name: 'Keyboard', price: '$75', category: 'Accessories' },
  ];

  return (
    <div className="app">
      <h1>Reusable Components Demo</h1>

      {/* Button Component - used twice with different props */}
      <div className="components-section">
        <h2>Button Component</h2>
        <Button text="Primary Action" variant="primary" onClick={handleButtonClick} />
        <br />
        <Button text="Secondary" variant="secondary" disabled />
        <br />
        <Button text="Danger" variant="danger" onClick={handleButtonClick} />
      </div>

      {/* Card Component - used twice with different data and children prop */}
      <div className="components-section">
        <h2>Card Component</h2>
        <Card title="Student Info" description="Information about a student">
          <p className="card-children">This is nested children content.</p>
        </Card>
        <br />
        <Card title="Product Card" image="https://via.placeholder.com/300x200">
          <p className="card-children">
            This card has an image and some descriptive text about the product.
          </p>
        </Card>
      </div>

      {/* Table Component - used once with meaningful data */}
      <div className="components-section">
        <h2>Table Component</h2>
        <Table
          columns={['Name', 'Age', 'City']}
          data={students}
          striped
        />
      </div>

      {/* Table Component - used again with different data (products) */}
      <div className="components-section">
        <h2>Product Table</h2>
        <Table
          columns={['Product', 'Price', 'Category']}
          data={products}
        />
      </div>
    </div>
  );
}

export default App;