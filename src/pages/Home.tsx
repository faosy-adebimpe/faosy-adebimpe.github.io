import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from '../components/navbar/Navbar';
import Hero from '../components/hero/Hero';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

gsap.registerPlugin(ScrollTrigger);
const Home: React.FC = () => {
    useEffect(() => {
        const elements: HTMLElement[] = gsap.utils.toArray(
            '.view-up'
        ) as HTMLElement[];
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 80%',
                        end: 'bottom top',
                        scrub: 1,
                    },
                }
            );
        });
    }, []);
    return (
        <div>
            <Navbar />
            <Hero />
            <Main />
            <Footer />
        </div>
    );
};

export default Home;
