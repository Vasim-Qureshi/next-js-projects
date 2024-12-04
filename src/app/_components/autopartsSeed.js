import { useState } from 'react';
import axios from 'axios';

const SeedForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSeed = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      await axios.post('/api/parts/seed');
      setSuccess('Products seeded successfully!');
    } catch (err) {
      setError('Failed to seed products.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Seed Products</h2>
      <button
        onClick={handleSeed}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        disabled={loading}
      >
        {loading ? 'Seeding...' : 'Seed Products'}
      </button>
      {success && <p className="text-green-600 mt-2">{success}</p>}
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default SeedForm;