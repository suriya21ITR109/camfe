import React, { useState } from 'react';

function AddressForm() {
  const [formData, setFormData] = useState({
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-1/2 mx-auto mt-8">
      <form className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Address Information</h2>

        <div className="mb-4">
          <label htmlFor="streetAddress" className="block text-lg font-medium text-gray-800">
            Street Address
          </label>
          <input
            type="text"
            id="streetAddress"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleChange}
            className="form-input w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="city" className="block text-lg font-medium text-gray-800">
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="form-input w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-lg font-medium text-gray-800">
            State
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-input w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-lg font-medium text-gray-800">
            Pin Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="form-input w-full py-2 px-3 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:border-blue-500"
            required
          />
        </div>

        <p className="text-gray-600 text-sm mt-2">Your address information will be kept confidential.</p>
      </form>
    </div>
  );
}

export default AddressForm;
