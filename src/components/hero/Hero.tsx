import GitHubIcon from '../icons/GitHubIcon';
import WhatsappIcon from '../icons/WhatsappIcon';
import XIcon from '../icons/XIcon';
import HeroImage from '../../assets/images/HeroImage.png';
import gsap from 'gsap';
import { useEffect } from 'react';
import PhoneRegularIcon from '../icons/PhoneRegularIcon';

const Hero: React.FC = () => {
    const gsapAnimation = () => {
        const tl = gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 1,
            },
        });

        tl.fromTo('.name', { y: -100 }, { opacity: 1, y: 0 });
        tl.fromTo('.role', { y: 100 }, { opacity: 1, y: 0 });
        tl.fromTo('.hero-contact', { opacity: 0 }, { opacity: 1 });
        tl.fromTo('.hero-image', { x: 200 }, { opacity: 0.5, x: 0 }).to(
            '.hero-image',
            { opacity: 1 }
        );
    };
    useEffect(gsapAnimation, []);
    return (
        <div className='hero md:mt-[92px] md:mb-[200px] lg:mt-[70px]' id='hero'>
            <div className='container text-[12px] flex flex-col justify-center items-center h-[calc(100vh-70px)] md:h-auto lg:flex-row lg:gap-[123px] xl:items-center'>
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='name text-[24px] font-bold text-(--white-2) sm:text-[28px] md:text-[30px]'>
                        FAOSY ADEBIMPE
                    </h2>
                    <div className='role mt-[35px] flex flex-col items-center text-(--gray-1)'>
                        <h3 className='text-[18px] md:text-[20px]'>
                            <span className='text-(--brand-color)'>
                                Frontend
                            </span>{' '}
                            Developer
                        </h3>
                        <p className='text-[14px] md:text-[16px]'>
                            I create intuitive, dynmic web experience
                        </p>
                    </div>
                    <div className='hero-contact mt-[25px] flex gap-[35px] items-center'>
                        <div>
                            <a
                                href='#contact'
                                className='w-[135px] h-[40px] bg-(--brand-color) rounded-[10px] text-(--secondary-color) cursor-pointer transition hover:opacity-85 active:scale-90 sm:text-[12px] md:text-[14px]
                        md:w-[147px] flex gap-3 justify-center items-center animate-bounces hover:animate-none
                        '
                            >
                                <span className=''>
                                    <PhoneRegularIcon setColor />
                                </span>
                                <span>Contact Me</span>
                            </a>
                        </div>
                        <div className='link-icons flex gap-[0px] items-center'>
                            <a
                                href='https://github.com/faosy-adebimpe'
                                target='_blank'
                                className='hero-link-icon'
                            >
                                <GitHubIcon />
                            </a>
                            <a
                                href='https://x.com/faosy_adebimpe'
                                target='_blank'
                                className='hero-link-icon'
                            >
                                <XIcon />
                            </a>
                            <a
                                href='https://wa.me/qr/CPSLJYGQLM6VJ1'
                                target='_blank'
                                className='hero-link-icon'
                            >
                                <WhatsappIcon />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='hero-image hidden md:block md:mt-[124px] lg:mt-0'>
                    <img
                        src={HeroImage}
                        title='hero image'
                        alt='hero image'
                        className='md:w-[332px]'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
