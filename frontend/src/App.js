import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
 
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import ProtectedRoute from './components/ProtectedRoute';
 
import Navbar from './components/NavBar';
 
import './App.css';

import { AuthProvider } from './contexts/AuthContext';
 
function App() {
 
  return (
 
    <AuthProvider>
      <BrowserRouter>
 
        <Navbar />
 
        <Routes>
 
          <Route
            path="/"
            element={<Login />}
          />
 
          <Route
            path="/register"
            element={<Register />}
          />
 
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
 
        </Routes>
 
      </BrowserRouter>
    </AuthProvider>
  );
}
 
export default App;