import React, { PropsWithChildren } from 'react'

import * as S from './styles'
import { IButtonProps } from './types'

const Button: React.FC<PropsWithChildren<IButtonProps>> = ({ children, onClick, loading, variant }) => {
  return (
    <S.ButtonStyled
      onClick={onClick}
      variant={variant}
    >
      {loading ? <span> Loading </span> : children}
    </S.ButtonStyled>
  )
}

export default Button
