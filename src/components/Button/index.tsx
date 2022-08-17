import React, { PropsWithChildren } from 'react'

import * as S from './styles'
import { IButtonProps } from './types'

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, loading, variant }) => {
  return (
    variant === 'filled'
      ? (
        <S.ButtonStyledFilled
          onClick={onClick}
        >
          {loading ? <span> Loading </span> : children}
        </S.ButtonStyledFilled>
      )
      : (
        <S.ButtonStyledStandard
          onClick={onClick}
        >
          {loading ? <span> Loading </span> : children}
        </S.ButtonStyledStandard>
      )
  )
}

export default Button
