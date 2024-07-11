// components/VehicleForm.js

import { useFormik } from 'formik';
import * as Yup from 'yup';

const VehicleForm = () => {
  const formik = useFormik({
    initialValues: {
      vehicleName: '',
      registrationNumber: '',
      modelYear: '',
      engineNumber: '',
      chassisNumber: '',
      seatingCapacity: '',
      vehiclePictures: []
    },
    validationSchema: Yup.object({
      vehicleName: Yup.string().required('Enter Valid Name'),
      registrationNumber: Yup.string().required('Required'),
      modelYear: Yup.number().required('Required').min(1886, 'Invalid year').max(new Date().getFullYear(), 'Invalid year'),
      engineNumber: Yup.string().required('Required'),
      chassisNumber: Yup.string().required('Required'),
      seatingCapacity: Yup.number().required('Required').min(1, 'Must be at least 1'),
      vehiclePictures: Yup.mixed().required('Required')
    }),
    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        Object.keys(values).forEach(key => {
          if (key === 'vehiclePictures') {
            Array.from(values.vehiclePictures).forEach(file => {
              formData.append(key, file);
            });
          } else {
            formData.append(key, values[key]);
          }
        });

        const res = await fetch('/api/vehicle', {
          method: 'POST',
          body: formData,
        });

        if (!res.ok) {
          throw new Error('Failed to submit form');
        }

        const data = await res.json();
        console.log('Form submitted successfully:', data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Vehicle Name</label>
        <input
          type="text"
          name="vehicleName"
          value={formik.values.vehicleName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.vehicleName && formik.errors.vehicleName ? (
          <div className="text-red-500 text-sm">{formik.errors.vehicleName}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Registration Number</label>
        <input
          type="text"
          name="registrationNumber"
          value={formik.values.registrationNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.registrationNumber && formik.errors.registrationNumber ? (
          <div className="text-red-500 text-sm">{formik.errors.registrationNumber}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Model Year</label>
        <input
          type="number"
          name="modelYear"
          value={formik.values.modelYear}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.modelYear && formik.errors.modelYear ? (
          <div className="text-red-500 text-sm">{formik.errors.modelYear}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Engine Number</label>
        <input
          type="text"
          name="engineNumber"
          value={formik.values.engineNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.engineNumber && formik.errors.engineNumber ? (
          <div className="text-red-500 text-sm">{formik.errors.engineNumber}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Chassis Number</label>
        <input
          type="text"
          name="chassisNumber"
          value={formik.values.chassisNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.chassisNumber && formik.errors.chassisNumber ? (
          <div className="text-red-500 text-sm">{formik.errors.chassisNumber}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Seating Capacity</label>
        <input
          type="number"
          name="seatingCapacity"
          value={formik.values.seatingCapacity}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.seatingCapacity && formik.errors.seatingCapacity ? (
          <div className="text-red-500 text-sm">{formik.errors.seatingCapacity}</div>
        ) : null}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Vehicle Pictures (up to 6)</label>
        <input
          type="file"
          name="vehiclePictures"
          onChange={(event) => formik.setFieldValue('vehiclePictures', event.currentTarget.files)}
          onBlur={formik.handleBlur}
          multiple
          accept="image/*"
          className="w-full px-3 py-2 border rounded-md"
        />
        {formik.touched.vehiclePictures && formik.errors.vehiclePictures ? (
          <div className="text-red-500 text-sm">{formik.errors.vehiclePictures}</div>
        ) : null}
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default VehicleForm;