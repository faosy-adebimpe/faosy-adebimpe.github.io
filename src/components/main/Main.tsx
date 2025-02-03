import About from './About';
import Projects from './Projects';
import Skills from './Skills';

const Main: React.FC = () => {
    return (
        <main className='main flex flex-col gap-[200px] items-center' id='main'>
            <About />
            <Projects />
            <Skills />
        </main>
    );
};

export default Main;
