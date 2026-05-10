// src/contexts/AuthContext.js
// Global state management for authentication status
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    const checkAuthStatus = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.get('/api/auth/verify', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setIsLoggedIn(true);
            } catch (error) {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
            }
        } else {
            setIsLoggedIn(false);
        }
        setLoading(false);
    };

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    };

    useEffect(() => {
        checkAuthStatus();

        // Listen for storage changes (e.g., login/logout in another tab)
        const handleStorageChange = () => {
            checkAuthStatus();
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const value = {
        isLoggedIn,
        loading,
        login,
        logout,
        checkAuthStatus
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};