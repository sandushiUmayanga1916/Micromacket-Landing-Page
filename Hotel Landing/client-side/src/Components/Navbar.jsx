// Import necessary styles for your navigation, make sure they include styles for the "active" class.

import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const navbarItems = [
        { path: "/", title: "Booking" },
        { path: "/facilities", title: "Facilities" },
        { path: "/room", title: "Room" },
        { path: "/services", title: "Services" },
        { path: "/contact", title: "Contact" },
    ];

    return (
        <header className="container mx-auto max-w-screen-2xl py-[29px] xl:px-[150px]">
            <nav className="flex justify-between items-center">
                <Link to="/" className='flex items-center'>
                    <img src="/Images/Main Logo.png" alt="" className='h-[22px] w-[131px]' />
                </Link>
                <ul className="hidden gap-8 md:flex">
                    {navbarItems.map(({ path, title }) => (
                        <li key={path} className="text-base text-primaryColor">
                            <NavLink
                                to={path}
                                activeClassName="active"
                            >
                                {title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="hidden space-y-20 text-base font-medium text-pretty lg:block ml-[274.5px]">
                    <Link to="/login" className="px-5 py-2 border-none rounded">Login</Link>
                    <Link to="/sign-up" className="px-5 py-2 text-white border rounded-full bg-buttonColor">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
