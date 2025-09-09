import React from 'react';
import { assets } from '../assets/assets/assets';
import { useAppContext } from '../context/AppContext';

const Sidebar = () => {
    const { theme } = useAppContext();

    return (
        <div className='flex flex-col h-screen w-64 bg-white dark:bg-[#1A1A1A] border-r border-[#2D2D2D] p-4'>
            {/* Logo */}
            <div className='flex justify-center mb-8'>
                <img 
                    src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} 
                    alt="Logo" 
                    className='w-40' 
                />
            </div>
            
            {/* New Chat Button */}
            <button className='flex items-center w-full p-3 rounded-lg border border-[#E5E7EB] dark:border-[#374151] hover:bg-gray-100 dark:hover:bg-[#2D2D2D] transition-colors mb-6'>
                <div className='w-5 h-5 rounded-full bg-gradient-to-r from-[#A456F7] to-[#80609F] flex items-center justify-center mr-2'>
                    <span className='text-white text-sm'>+</span>
                </div>
                <span className='text-sm font-medium text-gray-900 dark:text-white'>New chat</span>
            </button>

           
        </div>
    );
};

export default Sidebar;
