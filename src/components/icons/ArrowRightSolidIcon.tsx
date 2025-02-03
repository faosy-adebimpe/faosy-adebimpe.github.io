import { Svg } from '../../types';

const ArrowRightSolidIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 20.706 17.747'
        >
            <path
                id='arrow-right'
                d='M20.364,73.624a1.117,1.117,0,0,0,0-1.608L12.23,64.251a1.108,1.108,0,0,0-1.53,1.6l6.129,5.856H1.109a1.109,1.109,0,1,0,0,2.219H16.828L10.7,79.78a1.108,1.108,0,1,0,1.53,1.6l8.135-7.765Z'
                transform='translate(0 -63.943)'
                fill={setColor ? 'currentColor' : 'black'}
            />
        </svg>
    );
};

export default ArrowRightSolidIcon;
