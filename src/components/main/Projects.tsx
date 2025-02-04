import Project from './Project';
import { projects } from '../../projects';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
//  bg-purple-200 sm:bg-red-200 md:bg-yellow-200 lg:bg-blue-200 xl:bg-green-200

const Projects: React.FC = () => {
    useEffect(() => {
        const elements: HTMLElement[] = gsap.utils.toArray(
            '.gsap-project'
        ) as HTMLElement[];

        if (window.innerWidth <= 769) {
            elements.forEach((element) => {
                gsap.fromTo(
                    element,
                    {
                        opacity: 0,
                        y: 50,
                    },
                    {
                        opacity: 1,
                        duration: 1,
                        y: 0,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 80%',
                            end: 'bottom 50%',
                            scrub: 1,
                        },
                    }
                );
            });
        } else {
            elements.forEach((element) => {
                gsap.fromTo(
                    element,
                    {
                        opacity: 0,
                        x: 100,
                    },
                    {
                        opacity: 1,
                        duration: 2,
                        x: 0,
                        // delay: index + 1,
                        scrollTrigger: {
                            trigger: element,
                            start: 'top 80%',
                            end: 'bottom 50%',
                            scrub: 1,
                        },
                    }
                );
            });
        }

        // title
        gsap.fromTo(
            '.projects-title',
            {
                opacity: 0,
                y: -100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: '.projects-title',
                    start: 'top 80%',
                    end: 'top 50%',
                    scrub: 1,
                },
            }
        );
    }, []);
    return (
        <section className='section projects' id='projects'>
            <div className='container flex flex-col items-center'>
                <h2 className='title projects-title'>MY PROJECTS</h2>
                <div className='all-projects flex flex-col gap-[30px] md:flex-row md:flex-wrap md:w-[768px] md:justify-center md:gap-[75px] xl:w-[1008px]'>
                    {projects.map((project) => (
                        <Project key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
