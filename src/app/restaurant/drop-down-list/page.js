"use client"
import React, { useState } from 'react';
const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
          };

  return (
            <div>
            <select value={selectedOption} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="Mango">Option 1</option>
            <option value="Banana">Option 2</option>
            <option value="Apple">Option 3</option>
            </select>
            <p>Selected option: {selectedOption}</p>
            </div>
        )
         };
export default Dropdown;