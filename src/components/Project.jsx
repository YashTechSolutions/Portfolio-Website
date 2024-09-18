import React from 'react';
import { PROJECTS } from '../constants';
import {motion} from 'framer-motion';
const Project = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <motion.h2 initial={{opacity:0 , y:-100}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='my-20 text-center text-5xl'>Projects</motion.h2>
            <motion.div whileInView={ {}}>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center transform transition-transform duration-300 ease-in-out hover:scale-105' onClick={() => window.location.href = project.url }>
                        
                        <motion.div initial={{opacity:0 , x:-100}} whileInView={{x:0, opacity:1}} transition={{duration:1.5, delay:index-(index)*0.8+0.1}}  className='w-full max-w-xl lg:w-3/4'>
                            <h6 className='mb-2 font-semibold'>
                                {project.title} - <span className='text-sm text-purple-100'>{project.company}</span>
                            </h6>
                            <p className='mb-4 text-neutral-400 text-justify'>{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>
                                    {technology}
                                </span>
                            ))}
                        </motion.div>
                        <motion.div initial={{opacity:0 , x:100}} whileInView={{x:0, opacity:1}} transition={{duration:1.5, delay:index-(index)*0.8+0.1}}  className='w-full flex justify-center pt-4 lg:pt-0 lg:w-1/4'>
                            <img className='w-3/4 object-scale-down' src={project.image} alt=''/>
                        </motion.div>
                    </div>
                ))}
            </motion.div>
            {/* Add your project content here */}
        </div>
    );
};

export default Project;
