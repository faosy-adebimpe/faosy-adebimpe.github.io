import { Svg } from '../../types';

const AddressCardIcon: React.FC<Svg> = ({ width, height, setColor }) => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={width || '1em'}
            height={height || '1em'}
            viewBox='0 0 15.38 11.963'
        >
            <path
                id='address-card'
                d='M13.672,32.854a.854.854,0,0,1,.854.854v8.545a.854.854,0,0,1-.854.854H1.709a.854.854,0,0,1-.854-.854V33.709a.854.854,0,0,1,.854-.854ZM1.709,32A1.711,1.711,0,0,0,0,33.709v8.545a1.711,1.711,0,0,0,1.709,1.709H13.672a1.711,1.711,0,0,0,1.709-1.709V33.709A1.711,1.711,0,0,0,13.672,32Zm2.563,4.272a.854.854,0,1,1,.854.854A.854.854,0,0,1,4.272,36.272Zm2.563,0a1.709,1.709,0,1,0-1.709,1.709A1.709,1.709,0,0,0,6.836,36.272Zm-3.845,4.7A1.282,1.282,0,0,1,4.272,39.69H5.981a1.282,1.282,0,0,1,1.282,1.282.427.427,0,0,0,.854,0,2.136,2.136,0,0,0-2.136-2.136H4.272a2.136,2.136,0,0,0-2.136,2.136.427.427,0,0,0,.854,0ZM9.4,35.418a.427.427,0,1,0,0,.854h3.418a.427.427,0,0,0,0-.854Zm0,1.709a.427.427,0,1,0,0,.854h3.418a.427.427,0,1,0,0-.854Zm0,1.709a.427.427,0,1,0,0,.854h3.418a.427.427,0,0,0,0-.854Z'
                transform='translate(0 -32)'
                fill={setColor ? 'currentColor' : '#959595'}
            />
        </svg>
    );
};

export default AddressCardIcon;
