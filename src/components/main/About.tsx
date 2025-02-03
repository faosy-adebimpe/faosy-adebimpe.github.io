import { useEffect } from 'react';
import AboutMeImage from '../../assets/images/about-me-image.png';
import ArrowRightSolidIcon from '../icons/ArrowRightSolidIcon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
    const animate = (
        element: string,
        direction: string,
        distance: number
    ): void => {
        gsap.fromTo(
            element,
            {
                opacity: 0,
                [direction]: distance,
            },
            {
                opacity: 1,
                [direction]: 0,
                scrollTrigger: {
                    trigger: element,
                    start: 'top, 80%',
                    end: 'top 30%',
                    scrub: 1,
                },
            }
        );
    };
    useEffect(() => {
        if (window.innerWidth <= 769) {
            animate('.about-title', 'y', 100);
            animate('.about-image', 'y', 100);
            animate('.about-content', 'y', 100);
        } else {
            animate('.about-title', 'y', 0);
            animate('.about-image', 'x', -100);
            animate('.about-content', 'x', 100);
        }
        // const elements: HTMLElement[] = gsap.utils.toArray(
        //     '.gsap-about'
        // ) as HTMLElement[];
        // elements.forEach((element) => {
        //     gsap.fromTo(
        //         element,
        //         {
        //             opacity: 0,
        //             y: 150,
        //         },
        //         {
        //             opacity: 1,
        //             y: 0,
        //             scrollTrigger: {
        //                 trigger: element,
        //                 start: 'top 80%',
        //                 end: 'top middle',
        //                 scrub: 1,
        //             },
        //         }
        //     );
        // });
    }, []);
    return (
        <section className='section about' id='about'>
            {/* <div className='container flex gap-[50px] flex-col items-center'> */}
            <div className='container flex flex-col items-center'>
                <h2 className='title gsap-about about-title'>ABOUT ME</h2>
                <div className='md:flex md:gap-[85px] md:items-start md:w-[610px] lg:w-[768px] xl:w-[919px] xl:gap-[100px] xl:justify-center'>
                    <div className='profile gsap-about about-image center-x '>
                        <img
                            src={AboutMeImage}
                            className='w-[127px] h-[127px] rounded-full bg-(--gray-1) overflow-hidden'
                            title='about me image'
                            alt='about me image'
                        />
                    </div>
                    <div className='mt-[35px] gsap-about about-content  flex gap-7 flex-col items-center md:items-start md:mt-0'>
                        <p className='about-details w-[300px] text-(--gray-1) text-center md:text-start md:text-[16px] md:w-[398px] lg:w-[521px] xl:w-[597px]'>
                            Hello My name is{' '}
                            <span className='text-(--brand-color)'>
                                Faosy Adebimpe
                            </span>
                            , a software developer specializing in frontend
                            development. I'm Proficient in HTML, CSS, JavaScript
                            and React, with a passion for writing clean,
                            efficient code. What drives me is the challenge of
                            solving complex problems and the satisfaction of
                            creating products that users love. I believe in
                            writing clean, maintainable code and collaborating
                            with others to turn great ideas into reality.
                        </p>
                        {/* <button className='explore-my-project w-[174px] h-[40px] bg-(--brand-color) text-(--secondary-color) rounded-[7px] text-[12px] cursor-pointer hover-effect md:text-[14px] md:w-[154px] flex items-center justify-center gap-3'> */}
                        <a
                            href='#projects'
                            className='explore-my-project w-[174px] h-[40px] bg-(--brand-color) text-(--secondary-color) rounded-[7px] text-[12px] cursor-pointer hover-effect md:text-[14px] md:w-[170px] lg:w-[175px] flex gap-3 justify-center items-center'
                        >
                            <span>Explore My Projects</span>
                            <span>
                                <ArrowRightSolidIcon setColor />
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
