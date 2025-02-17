import React from 'react';
import { Svg } from '../../types';

const BarsBottomRight: React.FC<Svg> = ({ width, height, setColor }) => {
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
                d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25'
            />
        </svg>
    );
};

export default BarsBottomRight;
