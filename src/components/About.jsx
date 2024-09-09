import React from 'react';
import AboutMe from  '../assets/about.jpg';
import { ABOUT_TEXT } from '../constants';
import {motion} from 'framer-motion';
const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <motion.h2 initial={{opacity:0 , y:-100}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='my-20 text-center text-5xl'>About Me</motion.h2>
            <div className='flex justify-center '>
                
                <motion.div className="w-full"  initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.3}}>
                        <div className='flex justify-center '>
                            <p className='my-2 max-w-xl py-6 text-justify'>{ ABOUT_TEXT}</p>

                        </div>

                    </motion.div>

            </div>
           
        </div>
    );
};

export default About;