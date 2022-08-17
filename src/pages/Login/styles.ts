import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
`

export const Content = styled.section`
  flex: 1;
  height: 100%;
  padding: 40px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

`

export const Logo = styled.h1`
  margin-top: 40px;
`

export const Form = styled.div`
  width: 60%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > button {
    margin-top: 16px;
    width: max-content;
  }

  > a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    font-size: 12px;
    text-align: right;
    width: 100%;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;

  > button {
    margin-bottom: 32px;

    > p {
      padding-left: 8px;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primary};
    border-bottom: 1px dotted ${({ theme }) => theme.primary};
  }
`

export const Carousel = styled.section`
  flex: 1;
  background: ${props => props.theme.primary};
`
