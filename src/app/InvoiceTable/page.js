// pages/index.js

"use client"

import React from 'react';
import InvoiceTable from '../_components/invoiceTable';

const Home = () => {
  const invoices = [
    {
      invoiceNumber: 'INV001',
      invoiceDate: '2023-01-01',
      customerName: 'John Doe',
      registrationNumber: '123ABC',
      spareParts: '$100',
      labourCharge: '$50',
      taxOther: '$15',
      totalAmount: '$165',
      discount: '$10',
      payAmount: ['$155', '$200'],
      paymentMode: ['Credit Card', 'Cash'],
      paymentDate: ['2023-01-02', '2023-01-03'],
      due: ['$0', '$50'],
    },
    {
      invoiceNumber: 'INV002',
      invoiceDate: '2023-01-05',
      customerName: 'Jane Smith',
      registrationNumber: '456DEF',
      spareParts: '$200',
      labourCharge: '$80',
      taxOther: '$25',
      totalAmount: '$305',
      discount: '$20',
      payAmount: ['$285', '$300'],
      paymentMode: ['Debit Card', 'Online'],
      paymentDate: ['2023-01-06', '2023-01-07'],
      due: ['$0', '$20'],
    },
    {
      invoiceNumber: 'INV003',
      invoiceDate: '2023-02-01',
      customerName: 'Alice Johnson',
      registrationNumber: '789GHI',
      spareParts: '$150',
      labourCharge: '$70',
      taxOther: '$20',
      totalAmount: '$240',
      discount: '$15',
      payAmount: ['$225', '$230'],
      paymentMode: ['Cash', 'Cheque'],
      paymentDate: ['2023-02-02', '2023-02-03'],
      due: ['$0', '$10'],
    },
    {
      invoiceNumber: 'INV004',
      invoiceDate: '2023-02-15',
      customerName: 'Bob Brown',
      registrationNumber: '012JKL',
      spareParts: '$180',
      labourCharge: '$90',
      taxOther: '$30',
      totalAmount: '$300',
      discount: '$25',
      payAmount: ['$275', '$280'],
      paymentMode: ['Credit Card', 'Online'],
      paymentDate: ['2023-02-16', '2023-02-17'],
      due: ['$0', '$5'],
    },
    {
      invoiceNumber: 'INV005',
      invoiceDate: '2023-03-01',
      customerName: 'Charlie Davis',
      registrationNumber: '345MNO',
      spareParts: '$250',
      labourCharge: '$100',
      taxOther: '$35',
      totalAmount: '$385',
      discount: '$30',
      payAmount: ['$355', '$360'],
      paymentMode: ['Debit Card', 'Cash'],
      paymentDate: ['2023-03-02', '2023-03-03'],
      due: ['$0', '$25'],
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Invoice Details</h1>
      <InvoiceTable invoices={invoices} />
    </div>
  );
};

export default Home;