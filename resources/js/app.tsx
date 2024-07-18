import './bootstrap';
import '../css/app.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import i18n from './Pages/i18nex';
import { I18nextProvider } from 'react-i18next';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        const changeLanguage = (language: string) => {
            i18n.changeLanguage(language, () => {
                window.location.reload();
            });
        };

        const getUserLanguage = async () => {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const data = await response.json();
                const country = data.country_code;

                const languageMap: { [key: string]: string } = {
                    'FR': 'fr',
                    'US': 'en',
                    'ES': 'es',
                    'SA': 'ar',
                    'CI': 'fr', // Côte d'Ivoire maps to French
                    // Add more country-language mappings as needed
                };

                const selectedLanguage = languageMap[country] || 'en';

                if (i18n.language !== selectedLanguage) {
                    changeLanguage(selectedLanguage);
                }
            } catch (error) {
                console.error('Error fetching geolocation data:', error);
            }
        };

        getUserLanguage();

        root.render(
            <I18nextProvider i18n={i18n}>
                <link rel="preload" href="https://fonts.bunny.net/figtree/files/figtree-latin-600-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <App {...props} initialPage={props.initialPage} resolveComponent={props.resolveComponent} />
            </I18nextProvider>
        );
    },
    progress: {
        color: '#4B5563',
    },
});
