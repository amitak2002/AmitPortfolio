import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

    const routes = [
        { path: '/', title: "Home" },
        { path: '/skills', title: "Skills" },
        { path: '/about', title: "About" },
        { path: '/contact', title: "Contact" }
    ];

    return (
        <div className='w-[80%] bg-gradient-to-r from-blue-700 to-gray-700 py-4 mx-auto rounded-lg shadow-lg shadow-gray-900'>
            <div className='flex justify-between items-center'>
                {/* Left side: Logo */}
                <div className='flex items-center'>
                    <img
                        src='/public/A.jpeg'
                        alt='A'
                        className='w-[45px] h-[45px] rounded-lg mx-4'
                    />
                    <h1 className='text-2xl text-white font-poppins font-bold tracking-wider mx-1'>Amit_ kumar_ Rao_</h1>
                </div>

                {/* Right side: Desktop Navigation */}
                <ul className='hidden md:flex space-x-10 mx-8'>
                    {
                        routes.map((item, index) => (
                            <li key={index} className="text-white text-lg">
                                <Link to={item.path} className="hover:text-yellow-300">
                                    {item.title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {/* Mobile Menu Button */}
                <button 
                    className='md:hidden text-white'
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className='md:hidden bg-gradient-to-r from-blue-700 to-gray-700 px-6 pb-4'>
                    <ul>
                        {
                            routes.map((item, index) => (
                                <li key={index} className="text-white py-2">
                                    <Link to={item.path} className="hover:text-yellow-300" onClick={() => setMenuOpen(false)}>
                                        {item.title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Header;
