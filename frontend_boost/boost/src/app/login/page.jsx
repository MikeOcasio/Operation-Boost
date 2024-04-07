import axios from 'axios';
// import React from 'react';

export default function Login() {
  // const handleSubmit = async (event) => {
    // event.preventDefault();
// 
    // const email = event.target.elements.email.value;
    // const password = event.target.elements.password.value;
// 
    // try {
      // const response = await axios.post('/api/login', {
        // email: email,
        // password: password,
      // });
// 
      // Handle the response from the server
      // console.log(response.data);
    // } catch (error) {
      // Handle the error
      // console.error(error);
    // }
  // };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form /*onSubmit={handleSubmit}*/ className="p-6 w-64 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-5 text-gray-900">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="block w-full p-2 border border-gray-300 rounded mb-4"
          required
        />

        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </button>
      </form>
    </div>
  );
}