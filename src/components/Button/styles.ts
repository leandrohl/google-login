import styled from 'styled-components'
import { Variant } from './types'

export const ButtonStyled = styled.button<{variant?: Variant}>`
  border: 0;
  padding: 8px 40px;
  transition: all .5s;
  border-radius: 32px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme, variant }) => variant === 'filled' ? theme.primary : theme.white};
  color: ${({ theme, variant }) => variant === 'filled' ? theme.white : theme.primary};

  &:hover, &:disabled {
    background-color: ${({ theme, variant }) => variant === 'filled' ? theme.white : theme.primary};
    color: ${({ theme, variant }) => variant === 'filled' ? theme.primary : theme.white};
    border: 1px solid ${({ theme, variant }) => variant === 'filled' ? theme.primary : 'none'};

  }
`
