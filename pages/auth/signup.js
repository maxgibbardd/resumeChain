import React, { useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext'            // ← relative import
import { isEmailInUse, register } from '../../backend/Auth'            // ← relative import
import Link from 'next/link'
import Navbar from '../../components/Dashboard/Navbar'                  // ← relative import

const Signup = () => {
  const { user, setUser } = useStateContext() || {}
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  async function validateEmail() {
    const regex = /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
    if (!regex.test(email)) {
      setError('Please enter a valid email.')
      return false
    }
    const taken = await isEmailInUse(email)
    if (taken) {
      setError('Email already in use.')
      return false
    }
    return true
  }

  async function handleSignup() {
    setError('')
    if (!(await validateEmail())) return

    try {
      const userData = await register(email, password)
      setUser(userData)
      router.push('/dashboard')
    } catch (err) {
      console.error('Signup error', err)
      setError('Signup failed. Please try again.')
    }
  }

  return (
    <>
      <Navbar />
      <Section>
        <Header>Signup</Header>

        <InputTitle>Email</InputTitle>
        <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />

        <InputTitle>Password</InputTitle>
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />

        {error && <ErrorMsg>{error}</ErrorMsg>}

        <UserAgreementText>
          By signing up, you agree to our{' '}
          <UserAgreementSpan href='/legal/terms-of-use' target='_blank'>Terms of Use</UserAgreementSpan>{' '}
          and{' '}
          <UserAgreementSpan href='/legal/privacy-policy' target='_blank'>Privacy Policy</UserAgreementSpan>.
        </UserAgreementText>

        <MainButton onClick={handleSignup}>Signup</MainButton>
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
  font-size: 16px;
  background-color: #28a745;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover { background-color: #218838 }
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

export default Signup
