import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
 
function Register() {
 
    const navigate = useNavigate();
    const { isLoggedIn } = useAuth();
    const [formData, setFormData] = useState({
 
        name: '',
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
 
        if (!formData.name || !formData.email || !formData.password) {
            alert('Please fill in all fields');
            return;
        }
 
        try {
 
            const res = await axios.post(
                '/api/auth/register',
                formData
            );
 
            alert('Registration successful! You can now log in with your credentials.');
 
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
 
                <h1>Register</h1>
 
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChange}
                />
 
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
                    Register
</button>
 
            </form>
 
        </div>
    );
}
 
export default Register;