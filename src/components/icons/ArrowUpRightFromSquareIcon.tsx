import { Svg } from '../../types';

const ArrowUpRightFromSquareIcon: React.FC<Svg> = ({
    width,
    height,
    setColor,
}) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 11.068 11.07'
        >
            <path
                id='arrow-up-right-from-square'
                d='M6.573.519a.518.518,0,0,0,.519.519H9.3L4.476,5.859a.518.518,0,1,0,.733.733L10.03,1.771V3.978a.519.519,0,1,0,1.038,0V.519A.518.518,0,0,0,10.549,0H7.092A.518.518,0,0,0,6.573.519ZM1.557.692A1.556,1.556,0,0,0,0,2.249V9.513A1.556,1.556,0,0,0,1.557,11.07H8.822a1.556,1.556,0,0,0,1.557-1.557V6.746a.519.519,0,1,0-1.038,0V9.513a.518.518,0,0,1-.519.519H1.557a.518.518,0,0,1-.519-.519V2.249a.518.518,0,0,1,.519-.519H4.324a.519.519,0,0,0,0-1.038Z'
                fill={setColor ? 'currentColor' : '#09a519'}
            />
        </svg>
    );
};

export default ArrowUpRightFromSquareIcon;
