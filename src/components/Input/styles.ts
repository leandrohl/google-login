/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import styled from 'styled-components'

export const ContainerInput = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  width: ${props => props.fullWidth && '100%'};

  > label {
    margin-bottom: 4px;
  }

  > span {
    color: ${({ theme }) => theme.error};
    font-size: 14px;
  }
`

export const Input = styled.input<{error: boolean}>`
  padding: 12px 8px;
  border-radius: 4px;
  outline-color: ${({ theme }) => theme.primary};
  outline-width: thin;
  border: 1px solid ${({ theme, error }) => error ? theme.error : theme.gray3};
`
