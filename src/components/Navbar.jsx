import React from 'react';
import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='mb-20 flex items-center justify-between py-6'>
            <div className='flex flex-shrink-0 items-center'>
                {/* <img className='mx-2 w-10' src={logo} alt=''></img> */}
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
                <FaLinkedin className='text-white mr-4' onClick={() => window.open('https://www.linkedin.com/in/yash-yadav-432252226/')} />
                <FaGithub className='text-white' onClick={() => window.open('https://github.com/YashTechSolutions')} />
            </div>
        </nav>
    );
};

export default Navbar;
