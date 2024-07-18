import React from 'react';
import { Head, Link } from '@inertiajs/react';
import Guest from '@/Layouts/GuestLayout';

const Landing: React.FC = () => {
    return (
        <>
            <Guest isAuthenticated={false} userName="" changeLanguage={() => {}}>
                <div className="container">
                    <Head title="Welcome" />
                    <h1>Welcome to Our Platform!</h1>
                    <p>Thank you for registering. Please explore our services.</p>
                    <Link href="/" className="btn btn-primary">Go to Homepage</Link>
                </div>
            </Guest>
        </>
    );
};

export default Landing;
