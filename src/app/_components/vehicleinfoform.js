// components/VehicleInfoForm.js
import { useState } from 'react';

export default function VehicleInfoForm() {
  const [vehicleNo, setVehicleNo] = useState('');
  const [consent, setConsent] = useState('Y');
  const [consentText, setConsentText] = useState('I hereby give my consent for Eccentric Labs API to fetch my information');
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/vehicleinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          vehicle_no: vehicleNo,
          consent,
          consent_text: consentText,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label htmlFor="vehicleNo" className="block text-sm font-medium text-gray-700">Vehicle Number</label>
        <input
          type="text"
          id="vehicleNo"
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="consent" className="block text-sm font-medium text-gray-700">Consent</label>
        <select
          id="consent"
          value={consent}
          onChange={(e) => setConsent(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
        >
          <option value="Y">Yes</option>
          <option value="N">No</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="consentText" className="block text-sm font-medium text-gray-700">Consent Text</label>
        <textarea
          id="consentText"
          value={consentText}
          onChange={(e) => setConsentText(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm"
          rows="4"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>

      {result && (
        <pre className="mt-4 bg-gray-100 p-4 rounded-md">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}

      {error && (
        <div className="mt-4 text-red-500">
          {error}
        </div>
      )}
    </form>
  );
}