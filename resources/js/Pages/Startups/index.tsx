import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@inertiajs/react';
import { Startup } from '@/types/Startup';

const Index: React.FC = () => {
    const [startups, setStartups] = useState<Startup[]>([]);

    useEffect(() => {
        const fetchStartups = async () => {
            const response = await axios.get('/api/startups', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                },
            });
            setStartups(response.data);
        };

        fetchStartups();
    }, []);

    return (
        <div>
            <h1>Startups</h1>
            <Link href="/startups/create" className="btn btn-primary">Create Startup</Link>
            <ul>
                {startups.map(startup => (
                    <li key={startup.id}>
                        <Link href={`/startups/${startup.id}/edit`}>{startup.startup_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Index;
