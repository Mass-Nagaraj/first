import React from 'react';
import './sideBar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>Dashboard</li>
        <li>Sales</li>
        <li>Orders</li>
        <li>Customer</li>
        <li>Items</li>
        <li>Inventory</li>
        <li>Alerts</li>
      </ul>
    </div>
  );
};

export default Sidebar;


