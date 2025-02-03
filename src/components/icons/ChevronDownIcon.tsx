import React from 'react';
import { Svg } from '../../types';

const ChevronDownIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 17.407 9.371'
        >
            <path
                id='chevron-down'
                d='M57.226,185.226a.672.672,0,0,1-.946,0l-8.036-8.036a.669.669,0,1,1,.946-.946l7.563,7.563,7.563-7.563a.669.669,0,1,1,.946.946Z'
                transform='translate(-48.05 -176.05)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default ChevronDownIcon;
