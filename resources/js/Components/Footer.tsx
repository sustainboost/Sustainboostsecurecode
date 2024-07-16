import React, { FC } from 'react';
import '@/Styles/footer.css';
import Logo from '@/Pages/Images/Logo1.png';
import i18n from '../Pages/i18nex';
import { useTranslation } from 'react-i18next'; // Add this import

const Footer: FC = () => {
    const { t } = useTranslation(); // Add this line

    return (
        <>
        <div className="mainfooter">
            <section className="footersection" data-language={i18n.language}>
                {/* Le logo et la description de l'entreprise */}
                <div className="footersectionelement">
                    <img src={Logo} alt="Logo" />
                    <div>{t('company_footer_desc')}</div>
                </div>
                {/* Les liens de navigation pour investisseurs */}
                <div className="footersectionelement">
                    <h1>{t('for_investor')}</h1>
                </div>
                {/* Les liens de navigation pour startups */}
                <div className="footersectionelement">
                    <h1>{t('for_startups')}</h1>
                </div>
                {/* Les liens de navigation  informations légales*/}
                <div className="footersectionelement">
                    <h1>{t('legal_info')}</h1>
                </div>
                {/* Les liens de navigation l'entreprise */}
                <div className="footersectionelement">
                    <h1>{t('company_info')}</h1>
                    <ul>
                        
                    </ul>
                </div>
            </section>
        </div>
        </>
    );
};

export default Footer;