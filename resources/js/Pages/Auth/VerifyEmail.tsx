import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/Components/PrimaryButton';

export default function VerifyEmail() {
    const { post, processing } = useForm({});

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('verification.send'));
    };
    interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
        processing: boolean;
    }
    
    const PrimaryButton: React.FC<PrimaryButtonProps> = ({ processing, children, ...props }) => {
        return (
            <button {...props} disabled={processing}>
                {processing ? 'Processing...' : children}
            </button>
        );
    };

    return (
        <GuestLayout isAuthenticated={false} userName="" changeLanguage={() => {}}>
            <Head title="Email Verification" />
            <div className="container">
                <h1>Email Verification</h1>
                <p>
                    Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                    link we just emailed to you? If you didn't receive the email, we will gladly send you another.
                </p>
                <form onSubmit={handleSubmit}>
                    <PrimaryButton processing={processing}>
                        Resend Verification Email
                    </PrimaryButton>
                </form>
                <Link href={route('dashboard')} className="btn btn-primary mt-3">
                    Go to Dashboard
                </Link>
            </div>
        </GuestLayout>
    );
}
