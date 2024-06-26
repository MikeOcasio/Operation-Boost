import { SignJWT, jwtVerify } from 'jose'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

const secretKey = 'secret' // this should be a secret that only the server knows
const key = new TextEncoder().encode(secretKey)

export async function encrypt(payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('200 sec from now')
    .sign(key)
}

export async function decrypt(input) {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  })
  return payload
}

export async function login(formData) {
  // Verify credentials && get the user
  const user = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  if (!user) throw new Error('Invalid credentials')

  // Create the session
  const expires = new Date(Date.now() + 10 * 1000)
  const session = await encrypt({ user, expires })

  // Save the session in a cookie
  const cookie = cookies().set('session', session, { expires, httpOnly: true })
  console.log('cookie', cookie.getAll())
}

export async function logout() {
  // Destroy the session
  cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession() {
  const session = cookies().get('session')?.value
  if (!session) return null
  return await decrypt(session)
}

export async function updateSession(request) {
  const session = NextRequest(request.cookies.get('session')?.value)
  if (!session) return NextResponse({ status: 401 })

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session)
  parsed.expires = new Date(Date.now() + 10 * 1000)
  const res = NextResponse.next()
  res.cookies.set({
    name: 'session',
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  })
  return res
}
