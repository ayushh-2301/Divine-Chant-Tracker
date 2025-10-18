'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="hidden md:block md:w-64 bg-white shadow-md">
      <div className="py-4">
        <nav>
          <Link 
            href="/" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Dashboard
          </Link>
          <Link 
            href="/reports" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Reports
          </Link>
          <Link 
            href="/goals" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Goals
          </Link>
          <Link 
            href="/settings" 
            className="block py-2 px-4 text-gray-700 hover:bg-saffron hover:text-white transition duration-300"
          >
            Settings
          </Link>
        </nav>
      </div>
    </div>
  );
}