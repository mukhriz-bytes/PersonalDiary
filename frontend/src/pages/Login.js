import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
 
function Login() {
 
    const navigate = useNavigate();
    const { login, isLoggedIn } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard', { replace: true });
        }
    }, [isLoggedIn, navigate]);
 
    const handleChange = (e) => {
 
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
 
        e.preventDefault();
 
        if (!formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
 
        try {
 
            const res = await axios.post(
                '/api/auth/login',
                formData
            );
 
            login(res.data.token);
 
            alert('Login Success');
            navigate('/dashboard', { replace: true });
 
            console.log(res.data);
 
        } catch (error) {
 
            alert(error.response?.data?.message || 'An error occurred');
        }
    };
 
    return (
 
        <div className="container">
 
            <form
                className="form"
                onSubmit={handleSubmit}
>
 
                <h1>Login</h1>
 
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />
 
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />
 
                <button type="submit">
                    Login
</button>
 
            </form>
 
        </div>
    );
}
 
export default Login;