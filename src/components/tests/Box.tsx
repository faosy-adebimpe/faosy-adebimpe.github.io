import classNames from 'classnames';

interface BoxType {
    normal?: boolean;
    alert?: boolean;
    success?: boolean;
}
const Box: React.FC<BoxType> = ({ normal, alert, success }) => {
    return (
        <div
            className={classNames('box', {
                normal: normal,
                alert: alert,
                success: success,
            })}
        ></div>
    );
};

export default Box;
