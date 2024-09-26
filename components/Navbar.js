"use client"; // Ensure this component is a client component in Next.js
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-neutral py-4">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12"> {/* Added padding here */}
        <div className="text-primary font-bold text-xl">Logo</div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'Services', 'Projects', 'About Us', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-secondary hover:text-primary transition duration-300 ease-in-out">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/support" className="text-secondary hover:text-primary transition duration-300 ease-in-out">Support</Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-secondary focus:outline-none transition duration-300 ease-in-out">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden bg-neutral mt-2 ${isOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} transition-all duration-300 ease-in-out`}>
        <div className="flex flex-col space-y-2">
          {['Home', 'Services', 'Projects', 'About Us', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="block text-secondary hover:text-primary p-2 transition duration-300 ease-in-out">
              {item}
            </Link>
          ))}
          <div className="flex items-center space-x-2 p-2">
            <Link href="/support" className="text-secondary hover:text-primary transition duration-300 ease-in-out">Support</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
