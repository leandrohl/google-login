import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

// import { Container } from './styles';

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth()
  if (!user) {
    return <Navigate to="/login" replace />
  }
  return children
}
