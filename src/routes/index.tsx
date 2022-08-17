import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import { ProtectedRoute } from './ProtectedRoute'

const RoutesDom: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />

      <Route path="/" element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }
      />
    </Routes>
  )
}

export default RoutesDom
