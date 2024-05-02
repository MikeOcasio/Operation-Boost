'use client'

import axios from 'axios'

export default function Login() {
  const handleSubmit = async (event) => {
    event.preventDefault()

    const email = event.target.elements.email.value
    const password = event.target.elements.password.value

    const response = await axios.post('http://localhost:3000/api/login', {
      email: email,
      password: password,
    })

    if (response.status === 200) {
      // Login was successful, store the token
      localStorage.setItem('token', response.data.token)

      // Redirect to home page
      window.location.href = 'http://localhost:3006/'
      return true
    } else {
      // Handle login failure
      console.error('Login failed')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-purple-900 ">
      <form
        onSubmit={handleSubmit}
        className="w-64 p-6 bg-purple-800 border-2 border-yellow-500 rounded shadow"
      >
        <h2 className="mb-5 text-2xl font-bold text-yellow-500">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="block w-full p-2 mb-4 bg-white border border-yellow-500 rounded"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="block w-full p-2 mb-4 bg-white border border-yellow-500 rounded"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-green-700 rounded hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}
