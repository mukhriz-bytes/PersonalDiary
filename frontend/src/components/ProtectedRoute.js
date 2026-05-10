import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function ProtectedRoute({ children }) {
    const { isLoggedIn, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!isLoggedIn) {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default ProtectedRoute;
