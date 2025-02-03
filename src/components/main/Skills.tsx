import { useState } from 'react';
import ChevronDownIcon from '../icons/ChevronDownIcon';
import Skill from './Skill';

const Skills: React.FC = () => {
    const [extend, setExtend] = useState<boolean>(false);

    const handleExtendButton = () => {
        setExtend((prev) => !prev);
    };
    return (
        <section
            className='section skills sm:w-[370px] w-[302px] md:w-[605px] lg:w-[650px] xl:w-[700px]'
            id='skills'
        >
            <div className='container flex flex-col items-center'>
                <h2 className='title'>SKILLS</h2>
                <div
                    className={
                        'skills w-full flex flex-col gap-[10px] overflow-hidden duration-300 transition-all ' +
                        (extend
                            ? 'max-h-screen'
                            : ' max-h-[100px] md:max-h-[150px]')
                    }
                >
                    <Skill name={'HTML'} proficiency={80} />
                    <Skill name={'CSS'} proficiency={95} />
                    <Skill name={'JAVASCRIPT'} proficiency={75} />
                    <Skill name={'REACT'} proficiency={75} />
                    <Skill name={'TYPESCRIPT'} proficiency={75} />
                    <Skill name={'SCSS'} proficiency={75} />
                    <Skill name={'TAILWIND'} proficiency={75} />
                </div>

                <div className='more-skills mt-[30px]'>
                    <button
                        className={
                            'text-[8.23px] w-5 h-5 box-content p-[0.5em] text-(--gray-1) flex justify-center items-center hover:bg-(--gray-1) hover:text-(--black-2) rounded-full cursor-pointer transition-all md:text-[16.5px] ' +
                            (extend ? '-rotate-180' : '')
                        }
                        onClick={handleExtendButton}
                    >
                        <ChevronDownIcon setColor />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Skills;
