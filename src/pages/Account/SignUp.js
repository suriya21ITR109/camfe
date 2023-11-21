import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useHistory from react-router-dom
import axios from 'axios';

function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const history = useNavigate(); // Get the history object for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signup', formData);

      if (response.status === 201) {
        // Handle successful sign-up
        setSuccessMessage('Signup successful!');
        setError('');

        // Redirect to the sign-in page after successful sign-up
        history('/signin');
      } else {
        setError('Unexpected response from the server');
        setSuccessMessage('');
      }
    } catch (err) {
      setError(err.response.data.errors[0] || 'An error occurred');
      setSuccessMessage('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign Up</h1>
        {successMessage && <p className="text-green-500 text-xs italic text-center mb-4">{successMessage}</p>}
        {error && <p className="text-red-500 text-xs italic text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="name"
            name="name"
            placeholder="Name"
           
          />
          </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;
