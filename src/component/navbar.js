import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full flex justify-center items-center py-1 z-50 bg-white transition duration-500">
            <nav className="flex w-11/12 justify-between items-center">
                <a href="/" className="flex items-center">
                    <img src="/_next/static/media/nav_logo.e5fb945a.png" alt="logo" width="80" height="70" className="mt-2 pt-0.5" />
                </a>
                <div className="flex flex-col space-y-2 cursor-pointer lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                    <div className="w-7.5 h-1 bg-blue-500 rounded"></div>
                    <div className="w-7.5 h-1 bg-blue-500 rounded"></div>
                    <div className="w-7.5 h-1 bg-blue-500 rounded"></div>
                </div>
                <div className={`${isOpen ? 'flex' : 'hidden'} fixed top-20 right-0 w-72 h-screen flex-col space-y-7 p-6 bg-black text-white lg:static lg:flex lg:w-auto lg:h-auto lg:p-0 lg:bg-transparent lg:space-y-0 lg:space-x-7 lg:flex-row`}>
                    <a href="https://makemyweb.ai/" target="_blank" rel="noreferrer" className="text-white hover:text-blue-500 lg:text-black">MakeMyWeb.</a>
                    <a href="/" className="text-white hover:text-blue-500 lg:text-black">Home</a>
                    <a href="/about" className="text-white hover:text-blue-500 lg:text-black">Company</a>
                    <a href="/blogs" className="text-white hover:text-blue-500 lg:text-black">Blogs</a>
                    <button className="flex text-white lg:hidden">Theme</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
