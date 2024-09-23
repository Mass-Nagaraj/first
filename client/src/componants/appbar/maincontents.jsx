import React from 'react';
import './maincontents.css'

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        <p>Order ID: 000001</p>
        <div className="cart-empty">
          <p>Cart is empty</p>
          <p>Scan barcode or add items from catalog</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
