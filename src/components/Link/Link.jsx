import React from 'react';

const Link = ({route}) => {
    return (
        <li className='md:hi font-semibold text-2xl mr-7 hover:bg-purple-600 border-b-2 mb-4 border-indigo-500 mt-1 md:border-b-0'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;