'use client'

import axios from 'axios';
// import React from 'react';

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    const response = await axios.post('http://localhost:3000/api/login', {
      email: email,
      password: password,
    });

    if (response.status === 200) {
    // Login was successful, store the token
    localStorage.setItem('token', response.data.token);

    // Redirect to home page
    window.location.href = 'http://localhost:3006/';
    } else {
    // Handle login failure
    console.error('Login failed');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="w-64 p-6 bg-white rounded shadow">
        <h2 className="mb-5 text-2xl font-bold text-gray-900">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="block w-full p-2 mb-4 border border-gray-300 rounded"
          required
        />

        <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}