import { Bar } from './Bar';

const Bars: React.FC = () => {
    return (
        <div className='bg-white w-full h-full'>
            <div className='h-screen'></div>
            <h2>Bars</h2>
            <div className='container flex gap-5 flex-col skills-test'>
                <div>{<Bar title='html' proficiency={95} />}</div>
                <div>{<Bar title='css' proficiency={93} />}</div>
                <div>{<Bar title='javascript' proficiency={90} />}</div>
                <div>{<Bar title='react' proficiency={85} />}</div>
                <div>{<Bar title='typescript' proficiency={90} />}</div>
                <div>{<Bar title='test' proficiency={30} />}</div>
            </div>
            <div className='h-screen'></div>
        </div>
    );
};

export default Bars;
