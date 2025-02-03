import { SkillType } from '../../types';

const Skill: React.FC<SkillType> = ({ name, proficiency }) => {
    return (
        <div className='flex gap-[20px] justify-between items-center text-(--gray-1)'>
            <h5 className='w-[20px] text-[14px] md:text-[16px] md:w-[25px]lg:w-[50px]'>
                {name}
            </h5>
            <div className='w-[224px] h-[15.97px] bg-(--gray-1) sm:h-[18.94px] md:w-[430px] md:h-[32px] lg:w-[450px]'>
                <div
                    className={`h-full w-[${proficiency}%] bg-(--white-2) text-[9px] center-center text-(--primary-color) md:text-[12px]`}
                >
                    <span>{proficiency}%</span>
                </div>
            </div>
        </div>
    );
};

export default Skill;
