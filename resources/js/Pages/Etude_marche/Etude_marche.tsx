import Guest from "@/Layouts/GuestLayout"
import { useTranslation } from 'react-i18next';
import Logo from '@/Pages/Images/Logo1.png';
import i18n from '@/Pages/i18nex'; // Ensure the path is correct
import '@/Styles/etude.css'
import { usePage, Head, Link } from '@inertiajs/react';

interface PageProps {
    auth?: {
        user?: any; // Replace 'any' with the actual user type if known
    };
}

interface PageProps {
    auth?: {
        user?: any; // Replace 'any' with the actual user type if known
    };
    [key: string]: any; // Add this line to allow any additional properties
}

const EtudePage: React.FC = () => {
    const { props } = usePage<PageProps>();
    const isAuthenticated = Boolean(props.auth?.user);
    const { t } = useTranslation();

    return (
        <>
            <Head title="Market research" />
            <Guest isAuthenticated={isAuthenticated} userName="" changeLanguage={() => {}}>
                <div className="etudemain">
                    <div className="etudemainleft">
                        <img src="https://sustainboost.online/market-man00.jpg" alt="" />
                    </div>
                    <div className="etudemainright">
                        <div className="etudemainrighttitle"> {t('market_text_title')}</div>
                        <p>
                            {t('market_text')}
                           
                        </p>

                        <div className="etudebtn">
                            <Link
                                href={route('register')}
                                // className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {t('market_apply')}
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </Guest>
        
        </>
    )
}


export default EtudePage