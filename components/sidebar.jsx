import React from 'react';
import { FaTachometerAlt, FaUsers, FaFileAlt, FaMoneyCheckAlt, FaChartBar, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked readOnly />

      <div className="drawer-side" data-theme="abyss"> 
       
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

        
        <ul className="menu text-base-content min-h-full w-80 p-4">
             <h1 className='text-center mb-4 p-10'>ADMIN</h1>
          <li>
            <a href="/homeadmin"><FaTachometerAlt className="inline mr-2" />Admin Dashboard</a>
          </li>
          <li>
            <a href="/users"><FaUsers className="inline mr-2" />User Management</a>
          </li>
          <li>
            <a href="/loans"><FaFileAlt className="inline mr-2" />Loan Applications</a>
          </li>
          <li>
            <a href="/payments"><FaMoneyCheckAlt className="inline mr-2" />Payments</a>
          </li>
          <li>
            <a href="/reports"><FaChartBar className="inline mr-2" />Reports</a>
          </li>
          <li>
            <a href="/settings"><FaCog className="inline mr-2" />Settings</a>
          </li>
          <li>
            <a href="/logout"><FaSignOutAlt className="inline mr-2" />Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;