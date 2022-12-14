import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex flex-col md:flex-row md:justify-between px-4 md:px-20 py-4 bg-sky-500'>
            <Link to='/' className='font-bold text-2xl mb-3 md:mb-0'><span className='bg-teal-200 text-black p-2 rounded-l-lg'>Justify</span><span className=' pb-1 pt-1 pr-2 text-white border-4 border-l-0 border-emerald-50 rounded-r-lg '>Content</span></Link>
            <div className='flex flex-col md:flex-row'>
                <Link className='ml-0 md:ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/home'>Home</Link>
                <Link className='ml-0 md:ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/topics'>Topics</Link>
                <Link className='ml-0 md:ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/statistics'>Statistics</Link>
                <Link className='ml-0 md:ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/blog'>Blog</Link>
                <Link className='ml-0 md:ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/about'>About</Link>
            </div>
        </nav>
    );
};
//className='bg-black text-teal-100 p-2 rounded-l-lg'

export default Header;