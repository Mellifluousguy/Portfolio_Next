"use client";
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav data-aos='fade-down' className="sticky top-0 z-10 h-[10vh] w-full backdrop-blur-[2px] text-white font-medium p-4">
      <div className="flex justify-between backdrop-blur-[5px] items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-green-glow">
          <Image src="/ico.svg" width={20} height={81} alt="logo" />
          Mohit Gupta
        </Link>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className='fa-solid fa-bars'/>
        </button>

        {/* Desktop Menu */}
        <div className="hidden transition-all lg:flex gap-6 items-center">
          <Link href="/" className={`${pathname === '/' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''} w-fit md:w-auto`}>Home</Link>
          <Link href="/projects" className={`${pathname === '/projects' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''} w-fit md:w-auto`}>Work Showcase</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''} w-fit md:w-auto`}>About</Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''} w-fit md:w-auto`}>Contact</Link>
          <a href='/Mohit-CV.pdf' download className='bg-green-primary transition-all duration-500 transform  hover:bg-accent-green px-6 py-2 rounded-full'>Hire Me</a>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div  className="flex flex-col bg-[rgba(0,0,0,0.5)] lg:hidden mt-4 gap-4 px-2">
          <Link href="/" onClick={() => setMenuOpen(false)} className={`${pathname === '/' ? 'text-saffron-primary' : ''}`}>Home</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className={`${pathname === '/projects' ? 'text-saffron-primary' : ''}`}>Work Showcase</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={`${pathname === '/about' ? 'text-saffron-primary' : ''}`}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className={`${pathname === '/contact' ? 'text-saffron-primary' : ''}`}>Contact</Link>
          <a href='/Mohit-CV.pdf' download className='bg-gradient-to-r from-green-primary to-accent-green hover:from-green-primary hover:to-green-glow px-6 py-2 rounded-full text-center'>Hire Me</a>
        </div>
      )}
    </nav>
  );
}
