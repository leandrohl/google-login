import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'

const RoutesDom: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />

      {/* <ProtectedRoute>
        <Route path="/" element={<Home />} />
      </ProtectedRoute> */}
    </Routes>
  )
}

export default RoutesDom
