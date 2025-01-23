import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { useTranslation } from 'react-i18next';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import "@/Styles/dashboard.css"
import CompanionChat from '@/Components/CompanionChat';
import Chat from '@/Components/Chat';

export default function Dashboard({ auth }: PageProps) {
    const { t } = useTranslation();
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{t('Dashboard')}</h2>}
        >
            <Head title={t('Dashboard')} />

            <div className="dashmain">
                <h1>ChatGPT Clone</h1>
                <CompanionChat />
                    {/* <Chat /> */}
                </div>
        </AuthenticatedLayout>
    );
}
