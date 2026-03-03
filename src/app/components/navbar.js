"use client";
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";


export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setMenuOpen(false); // close menu on scroll
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);



  return (
    <nav
      className={`sticky top-0 z-10  w-full text-white font-medium
    transition-colors duration-300
    ${scrolled
          ? "bg-[rgba(0,0,0,0.90)] backdrop-blur-sm"
          : "bg-transparent backdrop-blur-0"
        }
  `}
    >
      <div 
        className={`flex ${!menuOpen ? 'backdrop-blur-none' : 'backdrop-blur-sm'} justify-between p-4 items-center w-lvw h-[10vh]`}>
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
          {
            menuOpen ? <X /> : <Menu />
          }
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
        <div className={`absolute top-[10vh] 
      ${!menuOpen ? 'max-h-[0px] py-0' : 'max-h-screen py-6'}
      ${scrolled
          ? "bg-[rgba(0,0,0,0.90)] backdrop-blur-sm"
          : "bg-transparent backdrop-blur-sm"
        }
         left-0 w-full lg:hidden overflow-hidden
             transition-all duration-300
            flex flex-col gap-5 px-6 `}>

          <Link href="/" onClick={() => setMenuOpen(false)} className={`${pathname === '/' ? 'text-saffron-primary' : ''}`}>Home</Link>
          <Link href="/projects" onClick={() => setMenuOpen(false)} className={`${pathname === '/projects' ? 'text-saffron-primary' : ''}`}>Work Showcase</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className={`${pathname === '/about' ? 'text-saffron-primary' : ''}`}>About</Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className={`${pathname === '/contact' ? 'text-saffron-primary' : ''}`}>Contact</Link>
          <a href='/Mohit-CV.pdf' download className='bg-gradient-to-r from-green-primary to-accent-green hover:from-green-primary hover:to-green-glow px-6 py-2 rounded-full text-center'>Hire Me</a>
        </div>
    </nav>
  );
}
