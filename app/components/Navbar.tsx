'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Vehicles', href: '/vehicles' },
    { name: 'Details', href: '/detail' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav 
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo-rino.svg" alt="Logo Rino" width={40} height={40} />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon with animation */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-current transform transition-all duration-300 mt-1 ${
                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-80 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="pb-3 pt-2 space-y-1 bg-white/95 backdrop-blur-md rounded-b-lg shadow-lg">
            {menuItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={closeMenu}
                className={`block px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 transform ${
                  isMenuOpen 
                    ? 'translate-x-0 opacity-100' 
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 0.1}s` : '0s'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;