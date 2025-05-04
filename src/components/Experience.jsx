import React from 'react';
import { EXPERIENCES } from '../constants';
import { motion } from 'framer-motion';



const Experience = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2 initial={{opacity:0 , y:-100}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='my-20 text-center text-5xl'>Experience</motion.h2>
            <motion.div whileInView={ {}}>
            {EXPERIENCES.map((experience, index) => (
    <a
        key={index}
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        className='w-full'
    >
        <div className='mb-8 flex flex-wrap lg:justify-center cursor-pointer  rounded-lg p-2 transform transition-transform duration-300 hover:scale-105'>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: index - (index) * 0.8 + 0.1 }}
                className='w-full lg:w-1/4'
            >
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.5, delay: index - (index) * 0.8 + 0.1 }}
                className='w-full max-w-xl lg:w-3/4'
            >
                <h6 className='mb-2 font-semibold'>
                    {experience.role} - <span className='text-sm text-purple-100'>{experience.company}</span>
                </h6>
                <p className='mb-4 text-neutral-400 text-justify'>{experience.description}</p>
                {experience.technologies.map((technology, i) => (
                    <span
                        key={i}
                        className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'
                    >
                        {technology}
                    </span>
                ))}
            </motion.div>
        </div>
    </a>
))}
            </motion.div>
           
        </div>
    );
};

export default Experience;