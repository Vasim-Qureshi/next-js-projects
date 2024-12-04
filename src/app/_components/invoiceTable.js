// components/InvoiceTable.js

import React, { useState } from 'react';
import VehicleForm from './VehicleForm';

const InvoiceTable = ({ invoices }) => {
  const [filters, setFilters] = useState({
    invoiceNumber: '',
    invoiceDate: '',
    customerName: '',
    registrationNumber: '',
    spareParts: '',
    labourCharge: '',
    taxOther: '',
    totalAmount: '',
    discount: '',
    payAmount: '',
    paymentMode: '',
    paymentDate: '',
    due: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value
    });
  };

  const filterOptions = (field) => {
    const uniqueValues = new Set(invoices.map(invoice => invoice[field]).flat());
    return Array.from(uniqueValues);
  };

  const filteredInvoices = invoices.filter((invoice) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      if (Array.isArray(invoice[key])) {
        return invoice[key].some(item => item.toString().includes(filters[key]));
      }
      return invoice[key].toString().includes(filters[key]);
    });
  });

  return (
    <div className="overflow-x-auto">
      <div className="flex flex-wrap mb-4">
        {Object.keys(filters).map((filterKey) => (
          <div key={filterKey} className="mr-4 mb-4">
            <label className="block mb-1">
              {filterKey.charAt(0).toUpperCase() + filterKey.slice(1)}
            </label>
            <select
              name={filterKey}
              value={filters[filterKey]}
              onChange={handleFilterChange}
              className="block w-full px-2 py-1 border"
            >
              <option value="">All</option>
              {filterOptions(filterKey).map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Invoice Number</th>
            <th className="py-2 px-4 border">Invoice Date</th>
            <th className="py-2 px-4 border">Customer Name</th>
            <th className="py-2 px-4 border">Registration Number</th>
            <th className="py-2 px-4 border">Spare Parts</th>
            <th className="py-2 px-4 border">Labour Charge</th>
            <th className="py-2 px-4 border">Tax & Other</th>
            <th className="py-2 px-4 border">Total Amount</th>
            <th className="py-2 px-4 border">Discount</th>
            <th className="py-2 px-4 border">Pay Amount</th>
            <th className="py-2 px-4 border">Payment Mode</th>
            <th className="py-2 px-4 border">Payment Date</th>
            <th className="py-2 px-4 border">Due</th>
          </tr>
        </thead>
        <tbody>
          {filteredInvoices.map((invoice, index) => (
            <tr key={index} className="text-center">
              <td className="py-2 px-4 border">{invoice.invoiceNumber}</td>
              <td className="py-2 px-4 border">{invoice.invoiceDate}</td>
              <td className="py-2 px-4 border">{invoice.customerName}</td>
              <td className="py-2 px-4 border">{invoice.registrationNumber}</td>
              <td className="py-2 px-4 border">{invoice.spareParts}</td>
              <td className="py-2 px-4 border">{invoice.labourCharge}</td>
              <td className="py-2 px-4 border">{invoice.taxOther}</td>
              <td className="py-2 px-4 border">{invoice.totalAmount}</td>
              <td className="py-2 px-4 border">{invoice.discount}</td>
              <td className="py-2 px-4 border">
                {invoice.payAmount.map((amount, idx) => (
                  <div key={idx}>{amount}</div>
                ))}
              </td>
              <td className="py-2 px-4 border">
                {invoice.paymentMode.map((mode, idx) => (
                  <div key={idx}>{mode}</div>
                ))}
              </td>
              <td className="py-2 px-4 border">
                {invoice.paymentDate.map((date, idx) => (
                  <div key={idx}>{date}</div>
                ))}
              </td>
              <td className="py-2 px-4 border">
                {invoice.due.map((dueAmount, idx) => (
                  <div key={idx}>{dueAmount}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default InvoiceTable;