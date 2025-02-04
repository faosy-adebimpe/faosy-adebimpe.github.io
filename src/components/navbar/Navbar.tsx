import { useEffect, useState } from 'react';
import { useStore } from '../../store';
import BarsBottomRight from '../icons/BarsBottomRight';
import LogoIcon from '../icons/LogoIcon';
import XMarkIcon from '../icons/XMarkIcon';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

// bg-blue-500
const Navbar: React.FC = () => {
    const { open, setOpen } = useStore((store) => store.navMenu);
    const [fixed, setFixed] = useState<boolean>(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            console.log(window.scrollY);
            if (window.scrollY > 70) {
                setFixed(true);
            } else {
                setFixed(false);
            }
        });
    }, []);

    return (
        <>
            <div className='bg-(--primary-color) h-[70px]'></div>
            <nav
                className={
                    `bg-(--primary-color) h-[70px]  fixed top-0 left-0 w-full z-20 transition ` +
                    (fixed
                        ? 'opacity-70 hover:opacity-100 backdrop-blur-sm'
                        : '')
                }
                id='nav'
            >
                <div className='mx-auto w-[90%] px-[2rem] h-full flex items-center justify-between'>
                    <div className='text-[40px]'>
                        <LogoIcon />
                    </div>
                    <NavLinks />
                    <button
                        className='text-white w-10 h-10 rounded-full transition-all hover:bg-gray-500/30 flex justify-center items-center cursor-pointer text-[1.5em] active:scale-95 lg:hidden'
                        onClick={setOpen}
                    >
                        {open ? (
                            <XMarkIcon setColor />
                        ) : (
                            <BarsBottomRight setColor />
                        )}
                    </button>
                </div>
                <NavMenu />
            </nav>
        </>
    );
};

export default Navbar;
