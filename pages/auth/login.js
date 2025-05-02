import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext'         // ← relative import
import { login, isEmailInUse } from '../../backend/Auth'             // ← relative import
import Link from 'next/link'
import Navbar from '../../components/Dashboard/Navbar'               // ← relative import

const Login = () => {
  const { user, setUser } = useStateContext() || {}                 // ← fallback
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin() {
    setError('')
    try {
      // optional: check if email exists
      const exists = await isEmailInUse(email)
      if (!exists) {
        setError('No account found for this email.')
        return
      }
      const userData = await login(email, password)
      setUser(userData)
      router.push('/dashboard')
    } catch (err) {
      console.error('Login error', err)
      setError('Login failed. Please check your credentials.')
    }
  }

  return (
    <>
      <Navbar />
      <Section>
        <Header>Login</Header>

        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />

        {error && <ErrorMsg>{error}</ErrorMsg>}

        <UserAgreementText>
          By signing in, you automatically agree to our{' '}
          <UserAgreementSpan href='/legal/terms-of-use' target='_blank'>Terms of Use</UserAgreementSpan>{' '}
          and{' '}
          <UserAgreementSpan href='/legal/privacy-policy' target='_blank'>Privacy Policy</UserAgreementSpan>.
        </UserAgreementText>

        <MainButton onClick={handleLogin}>Login</MainButton>
      </Section>
    </>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
`
const Header = styled.h1`
  font-size: 24px;
`
const Input = styled.input`
  font-size: 16px;
  padding: 0.5rem;
`
const InputTitle = styled.label`
  font-size: 14px;
  color: #666;
`
const MainButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover { background-color: #0056b3 }
`
const UserAgreementText = styled.p`
  font-size: 12px;
  color: #666;
  text-align: center;
`
const UserAgreementSpan = styled(Link)`
  color: #007bff;
  &:hover { text-decoration: underline }
`
const ErrorMsg = styled.p`
  color: red;
  font-size: 0.9rem;
`

export default Login
