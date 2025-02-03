import React from 'react';
import { Svg } from '../../types';

const LoadIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            id='Group_4'
            data-name='Group 4'
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 26.354 26.354'
        >
            <path
                id='Path_6'
                data-name='Path 6'
                d='M13.177,3.294a9.883,9.883,0,1,0,8.488,14.948l.005.005a1.647,1.647,0,0,0,2.919,1.518.209.209,0,0,0,.026-.046h0A13.177,13.177,0,1,1,13.177,0a1.647,1.647,0,0,0,0,3.294Z'
                fill={setColor ? 'currentColor' : 'rgba(50,29,82,0.58)'}
                opacity='0.4'
            />
            <path
                id='Path_7'
                data-name='Path 7'
                d='M224,1.647A1.645,1.645,0,0,1,225.647,0a13.177,13.177,0,0,1,11.411,19.766,1.647,1.647,0,1,1-2.852-1.647,9.884,9.884,0,0,0-8.56-14.824A1.645,1.645,0,0,1,224,1.647Z'
                transform='translate(-212.47 0)'
                fill={setColor ? 'currentColor' : '#321d52'}
            />
        </svg>
    );
};

export default LoadIcon;
