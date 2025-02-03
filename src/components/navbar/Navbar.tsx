import { useStore } from '../../store';
import BarsBottomRight from '../icons/BarsBottomRight';
import LogoIcon from '../icons/LogoIcon';
import XMarkIcon from '../icons/XMarkIcon';
import NavLinks from './NavLinks';
import NavMenu from './NavMenu';

// bg-blue-500
const Navbar: React.FC = () => {
    const { open, setOpen } = useStore((store) => store.navMenu);

    return (
        <nav className='bg-(--primary-color) h-[70px]' id='nav'>
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
    );
};

export default Navbar;
