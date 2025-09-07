import React from 'react';
import { assets } from '../assets/assets/assets';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
    const { theme } = useAppContext();

    return (
        <div className='flex flex-col h-screen min-w-72 p-5 dark:bg-[#1A1A1A] border-r border-[#2D2D2D]'>
            {/* Logo */}
            <img 
                src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} 
                alt="Logo" 
                className='w-48 mx-auto' 
            />
            
            {/* New Chat Button */}
            <button className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#80609F] rounded-md text-sm cursor-pointer'>
                <span className='mr-2 text-xl'>+</span> New Chat
            </button>
        </div>
    );
};

export default Sidebar;