import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'Products', path: '/products' },
        { id: 3, name: 'Blog', path: '/blog' },
        { id: 4, name: 'About Us', path: '/about' },
        { id: 5, name: 'Contact Us', path: '/contact' }
    ];

    return (
        <nav className='bg-purple-400'>
            <div onClick={() => setOpen(!open)} className='md:hidden p-3'>
                <span>
                    {open === true ?
                        <XMarkIcon className="h-6 w-6 text-purple-500" />
                        : <Bars3Icon className="h-6 w-6 text-purple-500" />
                    }</span>
            </div>
            <ul className={`md:flex absolute md:static duration-500 pl-6 bg-purple-400 ${ open ? 'top-9' : '-top-72'}`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;