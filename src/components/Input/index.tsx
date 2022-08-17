/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  fullWidth?: boolean
  error: boolean
  errorText: string
}

const Input: React.FC<IPropsInput> = (props: IPropsInput) => {
  const {
    label,
    name,
    onChange,
    value,
    fullWidth,
    type,
    error,
    errorText,
    disabled
  } = props

  const [modeViewPassword, setModeViewPassword] = useState(false)

  const viewPassword = modeViewPassword ? 'text' : 'password'

  const renderPasswordIcon = modeViewPassword
    ? <AiOutlineEye onClick={() => setModeViewPassword(false)} />
    : <AiOutlineEyeInvisible onClick={() => setModeViewPassword(true)} />

  return (
    <S.Container fullWidth={fullWidth}>
      <label htmlFor={name}>{label}</label>
      <S.ContainerInput>
        <S.Input
          id={name}
          name={name}
          onChange={onChange}
          value={value}
          type={type === 'password' ? viewPassword : type}
          error={error}
          disabled={disabled}
        />
        {type === 'password' && renderPasswordIcon}
      </S.ContainerInput>
      {(errorText.length > 0) && <span>{errorText}</span>}
    </S.Container>
  )
}

export default Input
