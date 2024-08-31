"use client"
import React, { useState } from 'react';
import Logo from '../public/logo 2.png';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="lg:px-16 px-4 text-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <Link href="/" className="text-xl">
          <Image src={Logo} alt={'saint-louis logo'} width={50} height={50} />
        </Link>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden block focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg
          className="fill-current text-white"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
        >
          <title>menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
      </button>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:flex md:items-center md:w-auto w-full`}
        id="menu"
      >
        <nav>
          <ul className="md:flex items-center justify-between text-base text-white pt-4 md:pt-0">
            <li>
              <Link className="md:p-4 py-3 px-0 block font-['Work Sans'] hover:text-[#b59316]" href="/mass">
                Calender
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-3 px-0 block font-['Work Sans'] hover:text-[#b59316]" href="/events">
                Events
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-3 px-0 block font-['Work Sans'] hover:text-[#b59316]" href="/news">
                News
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-3 px-0 block font-['Work Sans'] hover:text-[#b59316]" href="/donation">
                Donations
              </Link>
            </li>
            <li>
              <Link className="md:p-4 py-3 px-0 block font-['Work Sans'] hover:text-[#b59316]" href="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
