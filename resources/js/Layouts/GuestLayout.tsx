import { useEffect, useState, FC } from 'react';
import { Link } from '@inertiajs/react';
import '@/Styles/guestlayout.css';
import { FaBars, FaTimes, FaLightbulb, FaSearchDollar, FaUser } from 'react-icons/fa';
import { TbHomeDollar } from 'react-icons/tb';
import { GiTakeMyMoney, GiFullFolder } from 'react-icons/gi';
import { TbPlugConnected } from 'react-icons/tb';
import { FaDownLeftAndUpRightToCenter } from 'react-icons/fa6';
import Footer from '@/Components/Footer';
import { useTranslation } from 'react-i18next';
import Logo from '@/Pages/Images/Logo1.png';
import i18n from '../Pages/i18nex'; // Ensure the path is correct

interface GuestProps {
    isAuthenticated: boolean;
    userName: string;
    children: React.ReactNode;
    changeLanguage: (language: string) => void;
}

const Guest: FC<GuestProps> = ({ children, isAuthenticated, userName, changeLanguage }) => {
    const [submenuVisible, setSubmenuVisible] = useState({
        investir: false,
        espaceProjets: false,
    });

    const [mobileSubmenuVisible, setMobileSubmenuVisible] = useState({
        investir: false,
        espaceProjets: false,
    });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileSubmenuVisible, setProfileSubmenuVisible] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const { t } = useTranslation();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setSubmenuVisible({ investir: false, espaceProjets: false });
                setProfileSubmenuVisible(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <>
            <div className="guestmain" data-language={i18n.language}>
                <div className="lemainmenu">
                    {/* Top Bar */}
                    <div className="topbar">
                        {!isAuthenticated ? (
                            <>
                                <div className="loginbtn" onClick={() => window.open('/login', '_self')}>
                                    <TbPlugConnected style={{ fontSize: '20px', marginRight: '8px' }} /> {t('login')}
                                </div>
                                <div className="loginbtn2" onClick={() => window.open('/register', '_self')}>
                                    <FaDownLeftAndUpRightToCenter style={{ fontSize: '20px', marginRight: '8px' }} /> {t('register')}
                                </div>
                            </>
                        ) : (
                            <div className="loginbtn" onClick={() => window.open('/dashboard', '_self')}>
                                {t('dashboard')}
                            </div>
                        )}
                    </div>

                    {/* News Marquee */}
                    {/* Uncomment and utilize news data if necessary 
                    <div className='news-marquee'>
                        <div className='news-title'>{t('news')}</div>
                        <div className="news-container">
                            {news.length > 0 && (
                                <a href={news[currentNewsIndex].url} target="_blank" rel="noopener noreferrer" className="news-item">
                                    {truncate(news[currentNewsIndex]?.title, 110)} 
                                </a>
                            )}
                        </div>
                    </div>
                    */}

                    {/* Main Menu */}
                    <div className="guestmainmenu">
                        <div className="guestmenu">
                            <Link className="guestmenuicon" href="/">
                                <TbHomeDollar />
                            </Link>
                            <div className="logohome" onClick={() => window.open('/', '_self')}>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <nav>
                                <ul>
                                    <li className="menu-item">
                                        <FaLightbulb /> {t('incubator')}
                                    </li>
                                    <li className="menu-item">
                                        <FaSearchDollar /> {t('market_research')}
                                    </li>
                                    <li
                                        className="menu-item"
                                        onMouseEnter={() => setSubmenuVisible({ ...submenuVisible, investir: true })}
                                        onMouseLeave={() => setSubmenuVisible({ ...submenuVisible, investir: false })}
                                    >
                                        <GiTakeMyMoney /> {t('invest')}
                                        {submenuVisible.investir && (
                                            <ul className="submenu">
                                                <li onClick={() => window.open('/', '_self')}>{t('how_it_works')}</li>
                                                <li onClick={() => window.open('/register', '_self')}>{t('become_investor')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('risks_and_pricing')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('conflicts_of_interest')}</li>
                                            </ul>
                                        )}
                                    </li>
                                    <li
                                        className="menu-item"
                                        onMouseEnter={() => setSubmenuVisible({ ...submenuVisible, espaceProjets: true })}
                                        onMouseLeave={() => setSubmenuVisible({ ...submenuVisible, espaceProjets: false })}
                                    >
                                        <GiFullFolder /> {t('project_space')}
                                        {submenuVisible.espaceProjets && (
                                            <ul className="submenu">
                                                <li onClick={() => window.open('/', '_self')}>{t('all_projects')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('real_estate_projects')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('tech_projects')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('sdg_projects')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('submit_project')}</li>
                                                <li onClick={() => window.open('/', '_self')}>{t('funded_projects')}</li>
                                            </ul>
                                        )}
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {/* Mobile Menu */}
                        <div className="bigmenuphone">
                            <div className="guestphonemenu">
                                {isMenuOpen ? <FaTimes onClick={toggleMenu} /> : <FaBars onClick={toggleMenu} />}
                            </div>
                            <div className="logohome" onClick={() => window.open('/', '_self')}>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                        {isMenuOpen && (
                            <div className="guestphonemenubox">
                                <nav>
                                    <ul>
                                        <li>
                                            <div
                                                style={{ color: '#fff' }}
                                                className="menu-item"
                                                onClick={() => setMobileSubmenuVisible({ ...mobileSubmenuVisible, investir: !mobileSubmenuVisible.investir })}
                                            >
                                                <GiTakeMyMoney /> {t('invest')}
                                            </div>
                                            {mobileSubmenuVisible.investir && (
                                                <ul className="submenu">
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('how_it_works')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('become_investor')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('risks_and_pricing')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('conflicts_of_interest')}</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <div
                                                style={{ color: '#fff' }}
                                                className="menu-item"
                                                onClick={() => setMobileSubmenuVisible({ ...mobileSubmenuVisible, espaceProjets: !mobileSubmenuVisible.espaceProjets })}
                                            >
                                                <GiFullFolder /> {t('project_space')}
                                            </div>
                                            {mobileSubmenuVisible.espaceProjets && (
                                                <ul className="submenu">
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('all_projects')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('real_estate_projects')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('tech_projects')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('sdg_projects')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('submit_project')}</li>
                                                    <li onClick={() => { toggleMenu(); window.open('/', '_self'); }}>{t('funded_projects')}</li>
                                                </ul>
                                            )}
                                        </li>
                                        <li>
                                            <div
                                                style={{ color: '#fff' }}
                                                className="menu-item"
                                                onClick={() => { toggleMenu(); window.open('/', '_self'); }}
                                            >
                                                <FaLightbulb /> {t('incubator')}
                                            </div>
                                        </li>
                                        <li>
                                            <div
                                                style={{ color: '#fff' }}
                                                className="menu-item"
                                                onClick={() => { toggleMenu(); window.open('/', '_self'); }}
                                            >
                                                <FaSearchDollar /> {t('market_research')}
                                            </div>
                                        </li>
                                        {!isAuthenticated ? (
                                            <>
                                                <li>
                                                    <div
                                                        style={{
                                                            color: '#005940',
                                                            backgroundColor: '#ebe8e8f9',
                                                            padding: '5px',
                                                            borderRadius: '10px',
                                                            width: '15%',
                                                            textAlign: 'center',
                                                            alignContent: 'center',
                                                            justifyContent: 'center',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyItems: 'center',
                                                            fontSize: '12px',
                                                        }}
                                                        className="menu-item"
                                                        onClick={() => { toggleMenu(); window.open('/login', '_self'); }}
                                                    >
                                                        <TbPlugConnected /> {t('login')}
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        style={{
                                                            color: '#005940',
                                                            backgroundColor: '#ebe8e8f9',
                                                            padding: '5px',
                                                            borderRadius: '10px',
                                                            width: '20%',
                                                            textAlign: 'center',
                                                            alignContent: 'center',
                                                            justifyContent: 'center',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyItems: 'center',
                                                            fontSize: '12px',
                                                        }}
                                                        className="menu-item"
                                                        onClick={() => { toggleMenu(); window.open('/register', '_self'); }}
                                                    >
                                                        <FaDownLeftAndUpRightToCenter /> {t('register')}
                                                    </div>
                                                </li>
                                            </>
                                        ) : (
                                            <li>
                                                <div
                                                    style={{ color: '#fff' }}
                                                    className="menu-item"
                                                    onClick={() => setProfileSubmenuVisible(!profileSubmenuVisible)}
                                                >
                                                    <FaUser /> {userName}
                                                </div>
                                                {profileSubmenuVisible && (
                                                    <ul className="submenu">
                                                        <li onClick={() => { toggleMenu(); window.open('/profile', '_self'); }}>{t('profile')}</li>
                                                        <li onClick={() => { toggleMenu(); window.open('/dashboard', '_self'); }}>{t('dashboard')}</li>
                                                        {/* <li onClick={() => { toggleMenu(); window.open('/logout', '_self'); }}>{t('logout')}</li> */}
                                                    </ul>
                                                )}
                                            </li>
                                        )}
                                    </ul>
                                </nav>
                            </div>
                        )}
                    </div>
                </div>
                {/* Main Content */}
                <div className="guestchildren">
                    {/* <LanguageSwitcher changeLanguage={changeLanguage} /> */}
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Guest;
