/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

import * as S from './styles'
import { ILoginForm } from './types'
import { FcGoogle } from 'react-icons/fc'

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState(new ILoginForm())
  const [loading, setLoading] = useState(false)

  return (
    <S.Container>
      <S.Content>
        <S.Logo> Welcome to ...</S.Logo>
        <S.Form>
          <h2>Login</h2>
          <Input
            label="Email"
            name="email"
            onChange={(e) =>
              setLoginForm({ ...loginForm, email: e.target.value })
            }
            value={loginForm.email}
            error={loginForm.error.email !== ''}
            errorText={loginForm.error.email}
            fullWidth
          />
          <Input
            label="Password"
            name="password"
            onChange={(e) =>
              setLoginForm({ ...loginForm, password: e.target.value })
            }
            value={loginForm.password}
            error={loginForm.error.password !== ''}
            errorText={loginForm.error.password}
            fullWidth
          />
          {/* <S.ForgetPassword> Forgot password ? </S.ForgetPassword> */}
          <Button
            loading={loading}
            variant='filled'
          >
            Sign in
          </Button>
        </S.Form>
        <S.Footer>
          <Button
            loading={loading}
          >
            <FcGoogle size={24} />
            Sign in with Google
          </Button>
          <span> New Lovebirds? <a>Create Account</a></span>
        </S.Footer>
      </S.Content>
      <S.Carousel></S.Carousel>
    </S.Container>
  )
}

export default Login
