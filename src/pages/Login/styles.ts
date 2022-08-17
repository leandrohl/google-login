import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  height: 100vh;
`

export const Content = styled.section`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.section`
  width: 60%;

  > h1 {
    text-align: center;
  }
`

export const Carousel = styled.section`
  flex: 1;
  background: ${props => props.theme.primary};
`
