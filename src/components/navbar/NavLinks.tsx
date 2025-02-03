import AddressCardIcon from '../icons/AddressCardIcon';
import FilePenIcon from '../icons/FilePenIcon';
import HomeIcon from '../icons/HomeIcon';
import PhoneIcon2 from '../icons/PhoneIcon2';
import Squares2x2Icon from '../icons/Squares2x2Icon';

const NavLinks: React.FC = () => {
    return (
        <ul className='nav-links hidden lg:flex lg:gap-[51px]'>
            <li>
                <a href='#' className='nav-link active'>
                    <span>Home</span>
                    <span>
                        <HomeIcon setColor />
                    </span>
                </a>
            </li>
            <li>
                <a href='#about' className='nav-link'>
                    <span>About Me</span>
                    <span>
                        <AddressCardIcon setColor />
                    </span>
                </a>
            </li>
            <li>
                <a href='#projects' className='nav-link'>
                    <span>My Projects</span>
                    <span>
                        <FilePenIcon setColor />
                    </span>
                </a>
            </li>
            <li>
                <a href='#skills' className='nav-link'>
                    <span>Skills</span>
                    <span>
                        <Squares2x2Icon setColor />
                    </span>
                </a>
            </li>
            <li>
                <a href='#contact' className='nav-link'>
                    <span>Contact Me</span>
                    <span>
                        <PhoneIcon2 setColor />
                    </span>
                </a>
            </li>
        </ul>
    );
};

export default NavLinks;
