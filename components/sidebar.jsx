"use client";

import { usePathname } from "next/navigation";
import React from "react";
import { FaTachometerAlt, FaUsers, FaFileAlt, FaMoneyCheckAlt, FaChartBar, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const pathname = usePathname();
  if (pathname === "/") return null; // Hide sidebar on landing page

  return (
    <div className="drawer drawer-open fixed h-full">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" checked readOnly />
      <div className="drawer-side" data-theme="abyss">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu text-base-content w-80 p-4 bg-base-200 min-h-screen">
          <h1 className='text-center mb-4 p-4 font-bold text-lg'>ADMIN</h1>
          <li>
            <a href="/homeadmin" className={pathname === '/homeadmin' ? 'active' : ''}>
              <FaTachometerAlt className="inline mr-2" />Admin Dashboard
            </a>
          </li>
          <li>
            <a href="/usermanagement" className={pathname === '/usermanagement' ? 'active' : ''}>
              <FaUsers className="inline mr-2" />User Management
            </a>
          </li>
          <li>
            <a href="/loans" className={pathname === '/loans' ? 'active' : ''}>
              <FaFileAlt className="inline mr-2" />Loan Applications
            </a>
          </li>
          <li>
            <a href="/payments" className={pathname === '/payments' ? 'active' : ''}>
              <FaMoneyCheckAlt className="inline mr-2" />Payments
            </a>
          </li>
          <li>
            <a href="/reports" className={pathname === '/reports' ? 'active' : ''}>
              <FaChartBar className="inline mr-2" />Reports
            </a>
          </li>
          <li>
            <a href="/settings" className={pathname === '/settings' ? 'active' : ''}>
              <FaCog className="inline mr-2" />Settings
            </a>
          </li>
          <li>
            <a href="/logout" className={pathname === '/logout' ? 'active' : ''}>
              <FaSignOutAlt className="inline mr-2" />Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;