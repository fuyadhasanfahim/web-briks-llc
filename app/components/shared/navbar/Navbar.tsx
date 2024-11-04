import Link from 'next/link';
import React from 'react';

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'auth', href: '/auth' },
];

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center py-4 mx-6">
            <h1 className="text-2xl font-semibold">
                <Link href={'/'}>Web Briks LLC</Link>
            </h1>

            <ul className="flex items-center gap-10">
                {navItems.map((navItem, index) => {
                    const { label, href } = navItem;

                    return (
                        <li key={index} className="text-base font-medium">
                            <Link href={href}>{label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
