import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// register plugins
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: 'none', duration: 2 });
const ScrollTest: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from('.orange', { x: '100vw' });
        // tl.from('.orange', { xPercent: -100 })
        //     .from('.purple', { xPercent: 100 })
        //     .from('.green', { yPercent: -100 });
    }, []);
    return (
        <div>
            <section className='screen-full h-screen bg-white text-black flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-5 w-[70%]'>
                    <h1 className='font-bold text-2xl'>WELCOME TO EXAMPLE</h1>
                    <p className='text-center opacity-60'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore non autem voluptatem, aliquid numquam
                        obcaecati quo nihil a distinctio animi.
                    </p>
                </div>
            </section>
            <div className='sections'>
                <section className='blue bg-blue-500  w-full h-screen flex justify-center items-center'>
                    <h2 className=' text-xl font-semibold text-white capitalize'>
                        blue
                    </h2>
                </section>
                <section className='orange sec bg-orange-500 z-10'>
                    <h2>orange</h2>
                </section>
                {/* <section className='purple sec bg-purple-500 z-20'>
                    <h2>purple</h2>
                </section>
                <section className='green sec bg-green-500 z-30'>
                    <h2>green</h2>
                </section> */}
            </div>
            {/* <section className='w-full h-screen bg-blue-500 text-white flex justify-center items-center'>
                <h2 className='font-semibold text-2xl'>ABOUT PAGE</h2>
            </section> */}
        </div>
    );
};

export default ScrollTest;
