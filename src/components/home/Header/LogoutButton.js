import React, { useState, useEffect } from "react";

const LogoutButton = () => {
  const [isLoggedOut, setLoggedOut] = useState(true);
  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));

  useEffect(() => {
    // Check the user's login status (you can replace this with your actual logic)
    const userIsLoggedIn = userEmail !== null;

    // Set the initial login status
    setLoggedOut(!userIsLoggedIn);
  }, [userEmail]);

  const handleLogout = () => {
    // Remove the 'userEmail' from localStorage
    localStorage.removeItem('userEmail');

    // Clear the user email from the state
    setUserEmail(null);

    // Reload the page after logout
    window.location.reload();

    // You can also perform additional logout actions here if needed
  };

  const handleLogin = () => {
    // Redirect the user to the signin page when clicking the "Login" button
    window.location.href = '/signin'; // Replace with your desired URL
  };

  return isLoggedOut ? (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleLogin}>
      Login
    </button>
  ) : (
    <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
