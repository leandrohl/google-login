import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoutesDom from './routes';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RoutesDom />
      </BrowserRouter>
    </div>
  );
}

export default App;
