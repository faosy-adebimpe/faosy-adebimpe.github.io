import { Svg } from '../../types';

const EnvelopeIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 21 15.75'
        >
            <path
                id='envelope'
                d='M2.625,65.313a1.311,1.311,0,0,0-1.312,1.313v1.637l8.023,5.882a1.969,1.969,0,0,0,2.33,0l8.023-5.882V66.625a1.311,1.311,0,0,0-1.312-1.312ZM1.313,69.89v7.235a1.311,1.311,0,0,0,1.313,1.312h15.75a1.311,1.311,0,0,0,1.313-1.312V69.89L12.44,75.2a3.287,3.287,0,0,1-3.88,0ZM0,66.625A2.627,2.627,0,0,1,2.625,64h15.75A2.627,2.627,0,0,1,21,66.625v10.5a2.627,2.627,0,0,1-2.625,2.625H2.625A2.627,2.627,0,0,1,0,77.125Z'
                transform='translate(0 -64)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default EnvelopeIcon;
