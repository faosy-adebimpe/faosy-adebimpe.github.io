import { useEffect, useState } from 'react';
import CopyIcon from '../icons/CopyIcon';
import EnvelopeIcon from '../icons/EnvelopeIcon';
import PhoneIcon from '../icons/PhoneIcon';
import Form from './Form';
import { Copy } from '../../types';
import FacebookIcon from '../icons/FacebookIcon';
import WhatsappIcon from '../icons/WhatsappIcon';
import InstagramIcon from '../icons/InstagramIcon';
import XIcon from '../icons/XIcon';
import GitHubIcon from '../icons/GitHubIcon';
import PortfolioFile from '../../assets/data/Faosy Adebimpe.pdf';

const Footer: React.FC = () => {
    const [copy, setCopy] = useState<Copy>({ phone: false, email: false });

    useEffect(() => {
        if (!copy.phone && !copy.email) return;
        setTimeout(() => {
            if (copy.phone) {
                setCopy((prev) => ({ ...prev, phone: false }));
            }
            if (copy.email) {
                setCopy((prev) => ({ ...prev, email: false }));
            }
        }, 1000);
    }, [copy]);
    return (
        <footer className='footer mt-[300px] bg-(--primary-color)' id='footer'>
            {/* <div className='container flex gap-[50px] flex-col items-center pt-[75px] sm:items-start md:grid md:grid-cols-2 md:gap-x-[159px] md:gap-y-[111px] lg:gap-y-[30px] bg-amber-100'> */}
            <div className='container pt-[75px]'>
                <div className='flex flex-col gap-[50px] items-center sm:items-start md:grid md:grid-cols-2 lg:gap-[215px] xl:flex xl:flex-row'>
                    <Form />

                    <div className='flex flex-col gap-[50px] items-center sm:items-start md:items-end lg:items-start'>
                        <div className='sitemap text-(--gray-1) text-center sm:text-start'>
                            <h5 className='text-[16px] mb-3'>Sitemap</h5>
                            <ul className=''>
                                <li>
                                    <a href='#'>Home</a>
                                </li>
                                <li>
                                    <a href='#about'>About Me</a>
                                </li>
                                <li>
                                    <a href='#projects'>Projects</a>
                                </li>
                                <li>
                                    <a href='#skills'>Skills</a>
                                </li>
                                <li>
                                    <a href='#contact'>Contact Me</a>
                                </li>
                            </ul>
                        </div>

                        {/* w-[146px] h-[35px] border-[2px] border-(--brand-color) rounded-[7px] text-(--brand-color) text-[12px] cursor-pointer transition-all hover:bg-(--brand-color) hover:text-(--secondary-color) hover-effect */}

                        <div className='download-cv md:hidden lg:block'>
                            <a
                                className='w-[174px] h-[40px] border-2 border-(--brand-color) text-(--brand-color) hover:bg-(--brand-color) hover:text-(--secondary-color) rounded-[7px] text-[12px] cursor-pointer hover-effect md:text-[14px] md:w-[164px] flex gap-3 justify-center items-center'
                                href={PortfolioFile}
                                download
                            >
                                Download CV
                            </a>
                        </div>

                        <div className='phone-email-contact md:hidden lg:flex text-(--gray-1) flex gap-[15px] flex-col items-center sm:items-start md:items-start lg:w-[282px]'>
                            <div className='flex gap-[15px] justify-center items-center sm:justify-start'>
                                <div className='text-[17px] md:text-[21px]'>
                                    <PhoneIcon />
                                </div>
                                <p className='text-[14px]'>
                                    (+234) 8149 778099
                                </p>

                                {copy.phone ? (
                                    <p className='text-[12px]'>Copied</p>
                                ) : (
                                    <button
                                        className='cursor-pointer transition-all hover:text-(--white-2)'
                                        onClick={async () => {
                                            setCopy((prev) => ({
                                                ...prev,
                                                phone: true,
                                            }));
                                            await navigator.clipboard.writeText(
                                                '(+234) 8149 778099'
                                            );
                                        }}
                                    >
                                        <CopyIcon setColor />
                                    </button>
                                )}
                            </div>
                            <div className='flex gap-[15px] justify-center items-center'>
                                <div className='text-[17px] md:text-[21px]'>
                                    <EnvelopeIcon />
                                </div>
                                <p className='text-[14px]'>
                                    faosyadebimpe@gmail.com
                                </p>

                                {copy.email ? (
                                    <p className='text-[12px]'>Copied</p>
                                ) : (
                                    <button
                                        className='cursor-pointer transition-all hover:text-(--white-2)'
                                        onClick={async () => {
                                            setCopy((prev) => ({
                                                ...prev,
                                                email: true,
                                            }));
                                            await navigator.clipboard.writeText(
                                                'adebimpeadetomiwa3@gmail.com'
                                            );
                                        }}
                                    >
                                        <CopyIcon setColor />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className='hidden flex-row-reverse gap-[50px] items-center sm:items-start md:flex md:justify-between lg:hidden md:col-span-2 md:items-end md:mt-[113px]'>
                        <div className='download-cv'>
                            <a
                                download
                                href={PortfolioFile}
                                className='w-[174px] h-[40px] border-2 border-(--brand-color) text-(--brand-color) hover:bg-(--brand-color) hover:text-(--secondary-color) rounded-[7px] text-[12px] cursor-pointer hover-effect md:text-[14px] md:w-[164px] flex gap-3 justify-center items-center'
                            >
                                Download CV
                            </a>
                        </div>

                        <div className='phone-email-contact text-(--gray-1) flex gap-[15px] flex-col items-center sm:items-start md:items-start'>
                            <div className='flex gap-[15px] justify-center items-center sm:justify-start'>
                                <div className='text-[17px] md:text-[21px]'>
                                    <PhoneIcon />
                                </div>
                                <p className='text-[14px]'>
                                    (+234) 8149 778099
                                </p>

                                {copy.phone ? (
                                    <p className='text-[12px]'>Copied</p>
                                ) : (
                                    <button
                                        className='cursor-pointer transition-all hover:text-(--white-2)'
                                        onClick={async () => {
                                            setCopy((prev) => ({
                                                ...prev,
                                                phone: true,
                                            }));
                                            await navigator.clipboard.writeText(
                                                '(+234) 8149 778099'
                                            );
                                        }}
                                    >
                                        <CopyIcon setColor />
                                    </button>
                                )}
                            </div>
                            <div className='flex gap-[15px] justify-center items-center'>
                                <div className='text-[17px] md:text-[21px]'>
                                    <EnvelopeIcon />
                                </div>
                                <p className='text-[14px]'>
                                    faosyadebimpe@gmail.com
                                </p>

                                {copy.email ? (
                                    <p className='text-[12px]'>Copied</p>
                                ) : (
                                    <button
                                        className='cursor-pointer transition-all hover:text-(--white-2)'
                                        onClick={async () => {
                                            setCopy((prev) => ({
                                                ...prev,
                                                email: true,
                                            }));
                                            await navigator.clipboard.writeText(
                                                'adebimpeadetomiwa3@gmail.com'
                                            );
                                        }}
                                    >
                                        <CopyIcon setColor />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {/* <div className='social-icons flex gap-[20px] flex-col items-center sm:items-start md:col-span-2 md:flex-row md:flex-wrap md:w-[418px] md:justify-center md:p-2 md:items-center md:h-[95px] ml-[50%] -translate-x-[50%] lg:mt-[100px]'> */}
                    <div className='social-icons flex flex-col items-center gap-[20px] sm:items-start md:col-span-2 md:w-[418px] md:ml-[50%] md:translate-x-[-50%] md:flex-row md:flex-wrap md:justify-center md:p-2 md:items-center md:gap-y-[57px] md:mt-[150px] lg:mt-0 xl:w-0 xl:ml-0 xl:translate-none xl:gap-[19px] xl:justify-start xl:pt-0 relative'>
                        <h5 className='text-(--gray-1) text-[16px] mb-3 md:absolute md:-top-16 xl:static'>
                            Socials
                        </h5>
                        <a href='#' target='_blank' className='social-icon'>
                            <div>
                                <FacebookIcon setColor />
                            </div>
                            <p>Facebook</p>
                        </a>
                        <a
                            href='https://wa.me/qr/CPSLJYGQLM6VJ1'
                            target='_blank'
                            className='social-icon'
                        >
                            <div>
                                <WhatsappIcon setColor />
                            </div>
                            <p>Whatsapp</p>
                        </a>
                        <a href='#' target='_blank' className='social-icon'>
                            <div>
                                <InstagramIcon setColor />
                            </div>
                            <p>Instagram</p>
                        </a>
                        <a
                            href='https://x.com/faosy_adebimpe'
                            target='_blank'
                            className='social-icon'
                        >
                            <div>
                                <XIcon setColor />
                            </div>
                            <p>X</p>
                        </a>
                        <a
                            href='https://github.com/faosy-adebimpe'
                            target='_blank'
                            className='social-icon'
                        >
                            <div>
                                <GitHubIcon setColor />
                            </div>
                            <p>Github</p>
                        </a>
                    </div>
                </div>
                <div className='copyright text-(--black-4) mt-[200px] pb-[15px] sm:w-full text-center md:col-span-2 md:pb-[25px]'>
                    <p className='text-[10px] md:text-[12px]'>
                        Copyright 2025 Faosy Adebimpe
                    </p>
                </div>

                {/* <div className='h-72'></div> */}
            </div>
        </footer>
    );
};

export default Footer;
