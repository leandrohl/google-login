import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import RoutesDom from './routes'

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesDom />
      </BrowserRouter>
    </div>
  )
}

export default App
