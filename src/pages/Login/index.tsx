import React, { useState } from 'react'
import Input from '../../components/Input'

import * as S from './styles'
import { ILoginForm } from './types'

const Login: React.FC = () => {
  const [loginForm, setLoginForm] = useState(new ILoginForm())

  return (
    <S.Container>
      <S.Content>
        <S.Form>
          <h1>Login</h1>
          <Input
            label='Email'
            name='email'
            onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
            value={loginForm.email}
            error={loginForm.error.email !== '' }
            errorText={loginForm.error.email}
            fullWidth
          />
          <Input
            label='Password'
            name='password'
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
            value={loginForm.password}
            error={loginForm.error.password !== ''}
            errorText={loginForm.error.password}
            fullWidth
          />
          <button> Sign up</button>
        </S.Form>
      </S.Content>
      <S.Carousel>
      </S.Carousel>
    </S.Container>
  )
}

export default Login
