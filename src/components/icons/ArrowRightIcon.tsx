import React from 'react';
import { Svg } from '../../types';

const ArrowRightIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 21.205 18.173'
        >
            <path
                id='arrow-right'
                d='M20.985,73.671a.76.76,0,0,0,0-1.07L12.653,64.27a.756.756,0,0,0-1.07,1.07l7.039,7.039H.757a.757.757,0,0,0,0,1.515H18.623l-7.039,7.039A.756.756,0,1,0,12.653,82Z'
                transform='translate(0 -64.05)'
                fill={setColor ? 'currentColor' : 'black'}
            />
        </svg>
    );
};

export default ArrowRightIcon;
