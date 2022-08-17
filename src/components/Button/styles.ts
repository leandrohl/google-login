import styled from 'styled-components'

export const ButtonStyledStandard = styled.button`
  border: 0;
  padding: 8px 40px;
  transition: all .5s;
  border-radius: 32px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => theme.primary};

  &:hover, &:disabled {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`

export const ButtonStyledFilled = styled.button`
  border: 0;
  padding: 8px 40px;
  transition: all .5s;
  border-radius: 32px;
  font-size: 14px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};

  &:hover, &:disabled {
    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primary};
  }
`
