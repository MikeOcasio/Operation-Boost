import { redirect } from 'next/navigation'
import { login } from '/lib.js'

export default function Login() {

  return (
    <div className="flex h-screen items-center justify-center bg-purple-900 ">
      <form
        action={async (formData) => {
          'use server'
          await login(formData)
          redirect('/')
        }}
        className="w-64 rounded border-2 border-yellow-500 bg-purple-800 p-6 shadow"
      >
        <h2 className="mb-5 text-2xl font-bold text-yellow-500">Login</h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="mb-4 block w-full rounded border border-yellow-500 bg-white p-2"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="mb-4 block w-full rounded border border-yellow-500 bg-white p-2"
          required
        />

        <button
          type="submit"
          className="w-full rounded bg-green-700 px-4 py-2 text-white hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}
