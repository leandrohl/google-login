import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  html, body, #root, label, button {
     -webkit-font-smoothing: antialiased !important;
     font-family: 'Lato', sans-serif;
  }
  button {
    cursor : pointer;
  }
`
