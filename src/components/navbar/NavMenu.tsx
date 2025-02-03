import { useStore } from '../../store';
import AddressCardIcon from '../icons/AddressCardIcon';
import FilePenIcon from '../icons/FilePenIcon';
import HomeIcon from '../icons/HomeIcon';
import PhoneIcon2 from '../icons/PhoneIcon2';
import Squares2x2Icon from '../icons/Squares2x2Icon';

const NavMenu: React.FC = () => {
    const open = useStore((store) => store.navMenu.open);
    return (
        <div
            className={
                'nav-menu w-[45px] h-[300px] bg-(--black-4)/50 fixed right-0 rounded-tl-[10px] rounded-bl-[10px] flex justify-center items-center md:opacity-70 md:hover:opacity-100 transition-all lg:hidden ' +
                (!open ? 'translate-x-[45px]' : '')
            }
        >
            <ul className='text-(--gray-1)'>
                <li>
                    <a href='#'>
                        <HomeIcon setColor />
                    </a>
                </li>
                <li>
                    <a href='#about'>
                        <AddressCardIcon setColor />
                    </a>
                </li>
                <li>
                    <a href='#projects'>
                        <FilePenIcon setColor />
                    </a>
                </li>
                <li>
                    <a href='#skills'>
                        <Squares2x2Icon setColor />
                    </a>
                </li>
                <li>
                    <a href='#contact'>
                        <PhoneIcon2 setColor />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default NavMenu;
