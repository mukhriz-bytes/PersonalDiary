import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Navbar() {
    const { isLoggedIn, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="navbar">
            <h2>Diary App</h2>
            <div>
                {isLoggedIn ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <Link to="/">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;