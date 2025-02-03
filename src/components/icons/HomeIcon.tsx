import { Svg } from '../../types';

const HomeIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 15.38 13.67'
        >
            <path
                id='house'
                d='M7.953.131a.43.43,0,0,0-.566,0L.124,6.539A.428.428,0,0,0,.69,7.18l1-.881v5.26a2.135,2.135,0,0,0,2.136,2.136h7.69a2.135,2.135,0,0,0,2.136-2.136V6.3l1,.881a.428.428,0,1,0,.566-.641ZM2.543,11.559V5.543L7.67,1.02,12.8,5.543v6.016a1.282,1.282,0,0,1-1.282,1.282H9.806V8.568a.853.853,0,0,0-.854-.854H6.388a.853.853,0,0,0-.854.854v4.272H3.825A1.282,1.282,0,0,1,2.543,11.559Zm3.845,1.282V8.568H8.951v4.272Z'
                transform='translate(0.021 -0.025)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default HomeIcon;
