import { Svg } from '../../types';

const XMarkIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke={setColor ? 'currentColor' : 'gray'}
            // className='size-6'
            width={width || '1em'}
            height={height || '1em'}
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
            />
        </svg>
    );
};

export default XMarkIcon;
