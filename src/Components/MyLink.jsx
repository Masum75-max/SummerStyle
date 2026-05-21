'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const MyLink = ({ href, children }) => {

    const route = usePathname()

    const isActive = route === href;
        return (
        <Link href={href} className={`px-3 py-2 rounded-md ${isActive ? 'bg-green-600 text-white' : 'text-gray-700'}`}>
            {children}
        </Link>
    );
};

export default MyLink;