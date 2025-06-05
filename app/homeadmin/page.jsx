import React from 'react';
import { FaMoneyBillWave, FaClipboardList, FaChartLine, FaBell } from 'react-icons/fa';
import Card from '@/components/card';

const AdminDashboard = () => {
  return (
    <>
    <div data-theme="abyss" className='ml-80 p-6 h-screen'>
      <h1 className="text-3xl font-bold mb-6">Welcome, Admin!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card
          title={<span><FaMoneyBillWave className="inline mr-2 text-green-600" />Total Loans</span>}
          description="₱1,200,000"
        />
        <Card
          title={<span><FaClipboardList className="inline mr-2 text-blue-600" />Pending Applications</span>}
          description="8 applications awaiting approval"
        />
        <Card
          title={<span><FaChartLine className="inline mr-2 text-purple-600" />Monthly Revenue</span>}
          description="₱320,000"
        />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Notifications <FaBell className="inline ml-2 text-yellow-500" /></h2>
        <ul className="list-disc pl-6 text-gray-700">
          <li>3 new users registered today.</li>
          <li>Loan #1023 is overdue for review.</li>
          <li>System maintenance scheduled for Sunday.</li>
        </ul>
      </div>
      </div>
    </>
  );
};

export default AdminDashboard;
