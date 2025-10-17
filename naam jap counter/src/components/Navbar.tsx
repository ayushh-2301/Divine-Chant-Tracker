'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-saffron">🕉️ Divine Chant Tracker</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-saffron font-medium">
              Dashboard
            </Link>
            <Link href="/reports" className="text-gray-700 hover:text-saffron font-medium">
              Reports
            </Link>
            <Link href="/goals" className="text-gray-700 hover:text-saffron font-medium">
              Goals
            </Link>
            <Link href="/settings" className="text-gray-700 hover:text-saffron font-medium">
              Settings
            </Link>
            <button className="bg-saffron hover:bg-orange-500 text-white px-4 py-2 rounded-lg transition duration-300">
              Sign Out
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-saffron focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-gray-50">
              Dashboard
            </Link>
            <Link href="/reports" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-gray-50">
              Reports
            </Link>
            <Link href="/goals" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-gray-50">
              Goals
            </Link>
            <Link href="/settings" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-saffron hover:bg-gray-50">
              Settings
            </Link>
            <button className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-white bg-saffron hover:bg-orange-500">
              Sign Out
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}