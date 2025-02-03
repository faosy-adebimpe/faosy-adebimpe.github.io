import { Svg } from '../../types';

const FacebookIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 19.039 18.968'
        >
            <path
                id='facebook'
                d='M19.039,9.519A9.519,9.519,0,1,0,7.221,18.76V12.427H5.258V9.519H7.221V8.266c0-3.239,1.465-4.741,4.648-4.741a10.478,10.478,0,0,1,2.071.238V6.4c-.223-.022-.614-.037-1.1-.037-1.562,0-2.164.591-2.164,2.127V9.519h3.109l-.535,2.908H10.672v6.541a9.518,9.518,0,0,0,8.367-9.449Z'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default FacebookIcon;
