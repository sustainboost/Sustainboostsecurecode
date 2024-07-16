import { useEffect, useRef } from 'react';
import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import Guest from '@/Layouts/GuestLayout';
import '@/Styles/welcome.css';
import Slider from 'react-slick';
import Image1 from '../Pages/Images/Slider/Img1.png';
import Image2 from '../Pages/Images/Slider/Img2.png';
import Image3 from '../Pages/Images/Slider/Img3.png';
import { FaCcVisa, FaDollarSign, FaBusinessTime } from "react-icons/fa";
import { FaSchoolCircleCheck } from "react-icons/fa6";
import i18n from '../Pages/i18nex';  // Assurez-vous que le chemin est correct
import { TfiAndroid, TfiApple } from "react-icons/tfi";

const cardData = [
    {
        icon: FaCcVisa,
        title: i18n.t('visa.title')
    },
    {
        icon: FaBusinessTime,
        title: i18n.t('business_plan.title')
    },
    {
        icon: FaSchoolCircleCheck,
        title: i18n.t('courses.title')
    },
    // {
    //     icon: FaDollarSign,
    //     title: i18n.t('dollar.title')
    // },
];

interface WelcomeProps extends PageProps {
    changeLanguage: (language: string) => void;
}

export default function Welcome({ auth, changeLanguage, laravelVersion, phpVersion }: WelcomeProps) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const image1Ref = useRef<HTMLDivElement>(null);
    const image2Ref = useRef<HTMLDivElement>(null);
    const image3Ref = useRef<HTMLDivElement>(null);

    const welcardRefs = useRef<HTMLDivElement[]>([]);
    const welcardInsideRefs = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (entry.target === image1Ref.current) {
                        image1Ref.current?.classList.add('rotating');
                    } else if (entry.target === image2Ref.current) {
                        image2Ref.current?.classList.add('rotating-delayed');
                    } else if (entry.target === image3Ref.current) {
                        image3Ref.current?.classList.add('rotating');
                    } else if (welcardRefs.current.includes(entry.target as HTMLDivElement)) {
                        entry.target.classList.add('zooming');
                    } else if (welcardInsideRefs.current.includes(entry.target as HTMLDivElement)) {
                        entry.target.classList.add('swiping');
                    }
                } else {
                    if (entry.target === image1Ref.current) {
                        image1Ref.current?.classList.remove('rotating');
                    } else if (entry.target === image2Ref.current) {
                        image2Ref.current?.classList.remove('rotating-delayed');
                    } else if (entry.target === image3Ref.current) {
                        image3Ref.current?.classList.remove('rotating');
                    } else if (welcardRefs.current.includes(entry.target as HTMLDivElement)) {
                        entry.target.classList.remove('zooming');
                    } else if (welcardInsideRefs.current.includes(entry.target as HTMLDivElement)) {
                        entry.target.classList.remove('swiping');
                    }
                } 
            });
        });

        if (image1Ref.current) observer.observe(image1Ref.current);
        if (image2Ref.current) observer.observe(image2Ref.current);
        if (image3Ref.current) observer.observe(image3Ref.current);
        welcardRefs.current.forEach((ref) => ref && observer.observe(ref));
        welcardInsideRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            if (image1Ref.current) observer.unobserve(image1Ref.current);
            if (image2Ref.current) observer.unobserve(image2Ref.current);
            if (image3Ref.current) observer.unobserve(image3Ref.current);
            welcardRefs.current.forEach((ref) => ref && observer.unobserve(ref));
            welcardInsideRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <Guest isAuthenticated={!!auth.user} userName={auth.user?.name || ''} changeLanguage={changeLanguage}>
            <Head title="Home" />
            <div className="welmain">
                <div className='slider-container'>
                    <div ref={image1Ref} className='slider-image1'>
                        <img src={Image1} alt='slider-image' />
                    </div>
                    <div ref={image2Ref} className='slider-image2'>
                        <img src={Image2} alt='slider-image' />
                    </div>
                    <div ref={image3Ref} className='slider-image3'>
                        <img src={Image3} alt='slider-image' />
                    </div>
                </div>
                <div className='downloadapp'>
                    {/* <h1>Download Our App</h1> */}
                    <div className='downloadapp-buttons'>
                        <TfiAndroid className='downloadappicon' />
                    </div>
                    <div className='downloadapp-buttons'>
                        <TfiApple className='downloadappicon'  />
                    </div>
                </div>

                <div className='welcards'>
                    {cardData.map((card, index) => (
                        <div key={index} ref={(el) => (welcardRefs.current[index] = el!)} className='welcard'>
                            <div ref={(el) => (welcardInsideRefs.current[index] = el!)} className='welcardinside'>
                                <card.icon className='welcard-icon' />
                                <h1>{card.title}</h1>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Guest>
    );
}