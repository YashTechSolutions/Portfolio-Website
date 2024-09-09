
import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { SiPytorch, SiTensorflow,SiOpencv  } from "react-icons/si";
import { FaPython, FaNodeJs,FaJava } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { animate, motion } from 'framer-motion';
import { tr } from 'framer-motion/client';

const iconvarition = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
        
    }
})

const iconvaritionrev = (duration) => ({
    initial: { y: 10 },
    animate: {
        y: [-10, 10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
        
    }
})



const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 initial={{opacity:0 , y:-100}} whileInView={{y:0, opacity:1}} transition={{duration:1}} className='my-20 text-center text-5xl'>Languages & Frameworks</motion.h2>
            <motion.div initial={{opacity:0 , x:-100}} whileInView={{x:0, opacity:1}} transition={{duration:3}} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={iconvarition(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsFill className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div variants={iconvaritionrev(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPytorch className='text-7xl text-orange-400' />
                    
                </motion.div>
                <motion.div variants={iconvarition(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiOpencv className='text-7xl text-neutral-100' />
                </motion.div>
                <motion.div variants={iconvaritionrev(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaPython className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div variants={iconvarition(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaNodeJs className='text-7xl text-green-400' />
                </motion.div>
                <motion.div variants={iconvaritionrev(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiTensorflow className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div variants={iconvarition(2.5)} initial="initial" animate="animate"  className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <FaJava className='text-7xl text-blue-400' />
                </motion.div>
                
                <motion.div variants={iconvaritionrev(2.5)} initial="initial" animate="animate" className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <DiMongodb className='text-7xl text-green-400' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;

