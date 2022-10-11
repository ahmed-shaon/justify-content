import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='flex'>
            <h3>Justify Content</h3>
            <div>
                <Link to ='/home'>Home</Link>
                <Link to ='/statistics'>Statistics</Link>
                <Link to ='/blog'>Blog</Link>
                <Link to ='/about'>About</Link>
            </div>
        </nav>
    );
};

export default Header;