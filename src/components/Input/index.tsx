import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  fullWidth?: boolean
  error: boolean
  errorText: string
}

const Input: React.FC<IPropsInput> = (props: IPropsInput) => {
  const { label, name, onChange, value, fullWidth, type, error, errorText } = props

  return (
    <S.ContainerInput fullWidth={fullWidth}>
      <label htmlFor={name}>{label}</label>
      <S.Input
        id={name}
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        error={error}
      />
      {(errorText.length > 0) && <span>{errorText}</span>}
    </S.ContainerInput>
  )
}

export default Input
