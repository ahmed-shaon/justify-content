import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex justify-between px-20 py-4 bg-sky-500'>
            <Link to='/' className='font-bold text-2xl'><span className='bg-indigo-700 text-teal-100 p-2 rounded-l-lg'>Justify</span><span className='bg-black p-2 text-white rounded-r-lg'>Content</span></Link>
            <div>
                <Link className='ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/'>Home</Link>
                <Link className='ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/statistics'>Statistics</Link>
                <Link className='ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/blog'>Blog</Link>
                <Link className='ml-8 font-semibold text-yellow-50 hover:text-yellow-400' to ='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;