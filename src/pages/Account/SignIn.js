import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SigninForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State for loading popup

  const history = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true); // Show loading popup

    try {
      const response = await axios.post('http://localhost:5000/api/signin', formData);

      if (response.status === 200) {
        setSuccessMessage('Sign-in successful');
        setError('');
        localStorage.setItem('userEmail', formData.email);

        // Simulate loading for 2 seconds before redirecting
        setTimeout(() => {
          setIsLoading(false); // Hide loading popup
          history('/');
        }, 2000);
      } else {
        setError('Unexpected response from the server');
        setSuccessMessage('');
        setIsLoading(false); // Hide loading popup
      }
    } catch (err) {
      setError(err.response.data.error || 'An error occurred');
      setSuccessMessage('');
      setIsLoading(false); // Hide loading popup
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-semibold text-center mb-6">Sign In</h1>
        {successMessage && <p className="text-green-500 text-xs italic text-center mb-4">{successMessage}</p>}
        {error && <p className="text-red-500 text-xs italic text-center mb-4">{error}</p>}
        {isLoading && <p className="text-blue-500 text-xs italic text-center mb-4">Loading...</p>} 
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
            Sign In
          </button>
        </div>
      </form>
      
      <div className="text-center">
        
        <button
          onClick={() => history('/')}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Back to Home
        </button>
        <p>Don't have an account? <Link to="/signup" className="text-blue-500">Create Account</Link></p>
      </div>
    </div>
  );
}

export default SigninForm;
