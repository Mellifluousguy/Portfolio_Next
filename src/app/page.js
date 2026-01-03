"use client"
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import Link from "next/link";
import { usePathname } from 'next/navigation'


export default function Home() {

  const pathname = usePathname();

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="text-white h-lvh md:h-[90vh] flex items-center justify-evenly lg:justify-start flex-col  overflow-hidden py-20 relative ">
      <div data-aos="zoom-in" className="md:mx-40 py-5 w-[90%] lg:w-auto h-fit relative px-5 before:absolute before:rounded-t-full before:top-0 before:left-0 before:h-full before:w-1.5 before:bg-gradient-to-b before:from-blue-500 before:to-transparent">
        <span className=" h-4 w-4 absolute -left-1.5 rounded-full top-7 md:top-10 bg-blue-glow"></span>
        <h1 className="flex mb-2 gap-1 text-xl md:text-5xl lg:text-6xl text-center font-bold text-green-glow ">
          {`Hi I'm `}
          <span className="text-white-muted">
            <Typewriter options={{
              strings: [" Mohit Gupta", ' Frontend Developer'],
              autoStart: true,
              loop: true,
            }} />
          </span>
        </h1>
        <p className="md:text-lg text-xs md:w-2xl lg:w-3xl">
          Every line of code I write serves purpose — to design, develop, and deliver powerful digital experiences users love.
        </p>
      </div>
      <div data-aos='fade-up' className="absolute hidden lg:block bottom-0  w-lvw ">
        <Image src='/pc.png' height={400} width={800} alt="" className="mx-auto w-1/4 relative z-1" />
        <div data-aos='fade-up' className=" p-5 flex bg-dark-bg top-2 gap-2 patternsmall items-center flex-col w-1/4 h-[80%] left-1/2 transform -translate-x-1/2 absolute">
          {/* Small NavBar */}

          <nav className={`flex sticky max-h-[3vh] text-[5px] top-0 w-full backdrop-blur-[2px] z-10 items-center font-medium justify-around text-white p-2 `}>
            <Link href="/" className="flex text-green-glow items-center gap-[2px]">
              <Image src="/ico.svg" width={8} height={10} alt="logo" />
              Mohit Gupta
            </Link>
            <div className="flex items-center space-x-1">
              <Link href="/" className={`${pathname === '/' ? 'text-saffron-primary border-b-saffron-glow' : ''} `}>Home</Link>
              <Link href="/projects" className={`${pathname === '/projects' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''}`}>Work Showcase</Link>
              <Link href="/about" className={`${pathname === '/about' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ''}`}>About</Link>
              <Link href="/contact" className={`${pathname === '/contact' ? 'text-saffron-primary border-b-saffron-glow border-b-2' : ""}`}>Contact</Link>
            </div>
            <a href='/Mohit-CV.pdf' download className='bg-gradient-to-r from-green-primary to-accent-green hover:bg-gradient-to-l hover:from-green-primary hover:to-green-glow hover:drop-shadow- px-1 py-[2px] rounded-full'>Hire Me</a>
          </nav>
          <div className=" h-fit w-[80%] mt-5 relative px-2 before:absolute before:rounded-t-full before:top-0 before:left-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-transparent">
            <span className=" h-1 w-1 absolute -left-[1px] rounded-full top-1 bg-blue-glow"></span>
            <h1 className="flex mb-1 gap-1  text-center text-xs font-bold text-green-glow ">
              {`Hi I'm`}
              <span className="text-white-muted">
                <Typewriter options={{
                  strings: [" Mohit Gupta", ' Frontend Developer'],
                  autoStart: true,
                  loop: true,
                }} />
              </span>
            </h1>
            <p className=" text-[5px] w-[80%]">
              Every line of code I write serves purpose — to design, develop, and deliver powerful digital experiences users love.
            </p>
          </div>
        </div>
      </div>
      
        <Image src={'/hero.svg'} className=" w-[70%] flex lg:hidden" height={100} width={100} alt='home'/>
      
    </div>
  );
}
