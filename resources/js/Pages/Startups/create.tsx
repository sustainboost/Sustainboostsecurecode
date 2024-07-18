import React, { useState } from 'react';
import axios from 'axios';
import { router } from '@inertiajs/react';

const Create: React.FC = () => {
    const [formData, setFormData] = useState({
        startup_name: '',
        startup_description: '',
        startup_location: '',
        startup_size: 0,
        creation_date: '',
        startup_capital: 0,
        startup_owner: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.post('/api/startups', formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });
            router.visit('/startups');
        } catch (error) {
            console.error('Error creating startup:', error);
        }
    };

    return (
        <div>
            <h1>Create Startup</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="startup_name">Startup Name</label>
                    <input
                        type="text"
                        name="startup_name"
                        id="startup_name"
                        value={formData.startup_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startup_description">Description</label>
                    <textarea
                        name="startup_description"
                        id="startup_description"
                        value={formData.startup_description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startup_location">Location</label>
                    <input
                        type="text"
                        name="startup_location"
                        id="startup_location"
                        value={formData.startup_location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startup_size">Size</label>
                    <input
                        type="number"
                        name="startup_size"
                        id="startup_size"
                        value={formData.startup_size}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="creation_date">Creation Date</label>
                    <input
                        type="date"
                        name="creation_date"
                        id="creation_date"
                        value={formData.creation_date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startup_capital">Capital</label>
                    <input
                        type="number"
                        name="startup_capital"
                        id="startup_capital"
                        value={formData.startup_capital}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="startup_owner">Owner's Full Name</label>
                    <input
                        type="text"
                        name="startup_owner"
                        id="startup_owner"
                        value={formData.startup_owner}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        </div>
    );
};

export default Create;
