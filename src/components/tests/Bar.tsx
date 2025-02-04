import classNames from 'classnames';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

interface BarType {
    title: string;
    proficiency: number;
}

export const Bar: React.FC<BarType> = ({ title, proficiency }) => {
    const [hover, setHover] = useState<boolean>(false);

    const mouseEnter = () => setHover(true);
    const mouseLeave = () => setHover(false);
    useEffect(() => {
        const tl = gsap.timeline({
            defaults: {
                duration: 3,
            },
        });
        tl.to(`.skill-${title}`, {
            width: `${proficiency}%`,
            // duration: 2,
            scrollTrigger: {
                // trigger: `.skill-${title}`,
                trigger: '.skills-test',
                start: 'top 70%',
                end: 'top 50%',
                scrub: 1,
            },
        });
    }, [proficiency, title]);
    return (
        <div
            className=' relative'
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div className='flex gap-3 items-center w-[350px]'>
                <div className='skill-title w-32'>{title}</div>
                <div className='skill-proficiency bg-green-500 w-[300px]'>
                    <div
                        className={classNames(
                            `skill-${title}`,
                            'bg-yellow-500',
                            'p-2',
                            'w-0'
                            // 'w-[50%]'
                        )}
                    >
                        <p className='text-sm text-center'>{proficiency}%</p>
                    </div>
                </div>
            </div>
            <Alert title={title} proficiency={proficiency} hover={hover} />
        </div>
    );
};

const Alert: React.FC<BarType & { hover: boolean }> = ({
    title,
    proficiency,
    hover,
}) => {
    return (
        <div
            className={classNames(
                'bg-gray-200 absolute px-5 py-3 rounded-md text-sm cursor-pointer right-0 top-0 scale-75 opacity-0 transition ',
                { 'bg-red-300 opacity-100': hover }
            )}
        >
            <span>{title}</span>: <span>{proficiency}%</span>
        </div>
    );
};
