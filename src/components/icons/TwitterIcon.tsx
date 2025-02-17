import { Svg } from '../../types';

const TwitterIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 18.465 14.997'
        >
            <path
                id='twitter'
                d='M16.567,51.82c.012.164.012.328.012.492A10.694,10.694,0,0,1,5.811,63.079,10.7,10.7,0,0,1,0,61.381a7.83,7.83,0,0,0,.914.047,7.579,7.579,0,0,0,4.7-1.617,3.791,3.791,0,0,1-3.538-2.625,4.773,4.773,0,0,0,.715.059,4,4,0,0,0,1-.129A3.785,3.785,0,0,1,.75,53.4v-.047a3.811,3.811,0,0,0,1.711.48,3.79,3.79,0,0,1-1.172-5.062,10.757,10.757,0,0,0,7.8,3.96A4.272,4.272,0,0,1,9,51.867a3.788,3.788,0,0,1,6.55-2.589,7.451,7.451,0,0,0,2.4-.914,3.774,3.774,0,0,1-1.664,2.086,7.587,7.587,0,0,0,2.179-.586,8.135,8.135,0,0,1-1.9,1.957Z'
                transform='translate(0 -48.082)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default TwitterIcon;
