import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './contexts'
import RoutesDom from './routes'
import { defaultTheme } from './styles/theme'
import GlobalStyle from './styles/global'

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <AuthProvider>
            <RoutesDom />
          </AuthProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}

export default App
