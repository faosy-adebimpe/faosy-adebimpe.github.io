import { Svg } from '../../types';

const XIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 19.039 17.21'
        >
            <path
                id='x-twitter'
                d='M41.793,48h2.921l-6.379,7.289,7.5,9.921H39.964l-4.6-6.015L30.1,65.21H27.172l6.822-7.8L26.8,48h6.024l4.158,5.5ZM40.767,63.464h1.618L31.942,49.655H30.2Z'
                transform='translate(-26.8 -48)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default XIcon;
