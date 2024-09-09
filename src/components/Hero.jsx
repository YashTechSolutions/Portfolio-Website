import React from 'react';
import { HERO_CONTENT } from '../constants';
import ProfilePic from '../assets/Profile.jpg';
import { delay, motion } from 'framer-motion';


const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 1, delay: delay}
    }
})


const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className='pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Yash Yadav</motion.h1>
                        <motion.span variants={container(0.3)} initial="hidden" animate="visible" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Software Developer</motion.span>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className='bg-gradient-to-r from-purple-500 via-slate-500 to-pink-300 bg-clip-text text-4xl tracking-tight text-transparent'>AI/ML Engineer</motion.span>

                        <motion.p variants={container(0.7)}initial="hidden" animate="visible" className='mx-2 max-w-xl py-6 font-light tracking-tighter text-justify'>{ HERO_CONTENT}</motion.p>
                    </div>
                </div>
                <div className='w-full flex justify-center lg:w-1/2 lg:p-8'>
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{duration:1.5,delay:0.5}} src={ProfilePic} alt='' className='h-4/5 rounded-2xl lg:ml-24'></motion.img>

                </div>
            </div>
        
        </div>
    );
};

export default Hero;