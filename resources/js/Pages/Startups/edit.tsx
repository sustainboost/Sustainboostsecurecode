import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { usePage, router } from '@inertiajs/react';
import { Startup } from '@/types/Startup';

const Edit: React.FC = () => {
    const { props } = usePage();
    const { id } = props;
    const [formData, setFormData] = useState<Startup | null>(null);

    useEffect(() => {
        const fetchStartup = async () => {
            const response = await axios.get(`/api/startups/${id}`, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setFormData(response.data);
        };

        fetchStartup();
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (formData) {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await axios.put(`/api/startups/${id}`, formData, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json',
                },
            });
            router.visit('/startups');
        } catch (error) {
            console.error('Error updating startup:', error);
        }
    };

    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Edit Startup</h1>
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
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        </div>
    );
};

export default Edit;
