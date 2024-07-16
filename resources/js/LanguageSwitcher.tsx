import React from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    changeLanguage: (language: string) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ changeLanguage }) => {
    const { t } = useTranslation();

    return (
        <div>
            <button onClick={() => changeLanguage('en')}>{t('language.english')}</button>
            <button onClick={() => changeLanguage('fr')}>{t('language.french')}</button>
            <button onClick={() => changeLanguage('es')}>{t('language.spanish')}</button>
            <button onClick={() => changeLanguage('ar')}>{t('language.arabic')}</button>
        </div>
    );
};

export default LanguageSwitcher;


