import { Svg } from '../../types';

const LinkedInIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 16.543 16.543'
        >
            <path
                id='linkedin-in'
                d='M3.7,16.553H.273V5.508H3.7ZM1.986,4A2,2,0,1,1,3.973,2,2,2,0,0,1,1.986,4ZM16.54,16.553H13.117V11.176c0-1.281-.026-2.925-1.783-2.925-1.783,0-2.056,1.392-2.056,2.832v5.469H5.851V5.508H9.141V7.015h.048a3.6,3.6,0,0,1,3.245-1.784c3.471,0,4.109,2.286,4.109,5.255v6.067Z'
                transform='translate(0 -0.01)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default LinkedInIcon;
