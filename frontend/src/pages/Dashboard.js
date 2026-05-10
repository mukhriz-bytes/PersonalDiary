import React, { useState } from 'react';
 
import axios from 'axios';
 
function Dashboard() {
 
    const [formData, setFormData] = useState({
 
        title: '',
        content: '',
        mood: ''
    });
 
    const handleChange = (e) => {
 
        setFormData({
 
            ...formData,
            [e.target.name]: e.target.value
        });
    };
 
    const handleSubmit = async (e) => {
 
        e.preventDefault();
 
        if (!formData.title || !formData.content || !formData.mood) {
            alert('Please fill in all fields');
            return;
        }
 
        try {
 
            const token = localStorage.getItem('token');
 
            if (!token) {
                alert('You must be logged in to save a diary.');
                window.location.href = '/';
                return;
            }
 
            const res = await axios.post(
 
                '/api/diaries',
 
                formData,
 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
 
            alert('Diary Created');
 
            console.log(res.data);
 
            setFormData({
                title: '',
                content: '',
                mood: ''
            });
 
        } catch (error) {
            const message = error.response?.data?.message || error.message || 'An error occurred';
            alert(message);
        }
    };
 
    return (
 
        <div className="container">
 
            <form
                className="form"
                onSubmit={handleSubmit}
>
 
                <h1>Create Diary</h1>
 
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />
 
                <textarea
                    name="content"
                    placeholder="Write your diary..."
                    rows="5"
                    value={formData.content}
                    onChange={handleChange}
                />
 
                <input
                    type="text"
                    name="mood"
                    placeholder="Mood"
                    value={formData.mood}
                    onChange={handleChange}
                />
 
                <button type="submit">
                    Save Diary
</button>
 
            </form>
 
        </div>
    );
}
 
export default Dashboard;