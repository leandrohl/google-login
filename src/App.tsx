import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './contexts'
import RoutesDom from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <RoutesDom />
        </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
