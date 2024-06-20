// pages/workshopDashboard.js
"use client"
import { useState } from 'react';

const WorkshopDashboard = () => {
  const [selectedTable, setSelectedTable] = useState(null);
  const [data, setData] = useState([]);

  const fetchTableData = async (tableName) => {
    try {
      const response = await fetch(`/api/${tableName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const responseData = await response.json();
      setData(responseData.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDropdownChange = (e) => {
    const tableName = e.target.value;
    setSelectedTable(tableName);
    fetchTableData(tableName);
  };

  return (
    <div>
      <div className="sidenav">
        <h2>Database Tables</h2>
        <ul>
          <li>
            <button onClick={() => handleDropdownChange({ target: { value: 'customers' } })}>Customers</button>
          </li>
          <li>
            <button onClick={() => handleDropdownChange({ target: { value: 'vehicles' } })}>Vehicles</button>
          </li>
          {/* Add more buttons for other tables */}
        </ul>
      </div>

      <div className="content">
        <h1>Workshop Dashboard</h1>
        <select onChange={handleDropdownChange} value={selectedTable}>
          <option value="">Select Table</option>
          <option value="customers">Customers</option>
          <option value="vehicles">Vehicles</option>
          {/* Add more options for other tables */}
        </select>

        {data.length > 0 && (
          <div>
            <h2>{selectedTable} Data</h2>
            <ul>
              {data.map((item) => (
                <li key={item._id}>
                  <h3>{item.name}</h3>
                  <h3>{item.email}</h3>
                  <h3>{item.password}</h3>
                  {/* Render data based on the selected table structure */}
                  {/* Example: `${item.FirstName} ${item.LastName}` for customers */}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkshopDashboard;