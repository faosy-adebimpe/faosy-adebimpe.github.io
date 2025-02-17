import { SkillType } from '../../types';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Skill: React.FC<SkillType> = ({ name, proficiency }) => {
    useEffect(() => {
        gsap.to(`.skill-${name}`, {
            width: `${proficiency}%`,
            duration: 2,
            scrollTrigger: {
                trigger: '.skills-wrapper',
                start: 'top 80%',
                end: 'top 50%',
                scrub: 1,
            },
        });
    }, [name, proficiency]);
    return (
        <div className='flex gap-[20px] justify-between items-center text-(--gray-1)'>
            <h5 className='w-[20px] text-[12px] sm:text-[14px] md:text-[16px] md:w-[25px]lg:w-[50px]'>
                {name}
            </h5>
            <div className='w-[190px] sm:w-[224px] h-[15.97px] bg-(--gray-1) sm:h-[18.94px] md:w-[430px] md:h-[32px] lg:w-[450px]'>
                <div
                    className={`skill-${name} h-full w-0 bg-(--white-2) text-[9px] center-center text-(--primary-color) md:text-[12px] overflow-hidden`}
                >
                    <span>{proficiency}%</span>
                </div>
            </div>
        </div>
    );
};

export default Skill;
