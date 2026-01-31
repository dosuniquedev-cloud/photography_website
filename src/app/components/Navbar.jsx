"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Logic to detect scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Custom Colors based on your Logo
    const deepBlue = "text-[#002B5B]"; // The dark blue from the bird/text
    const skyBlueHover = "hover:text-[#2563EB]";

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-white/10
      ${scrolled
                    ? 'h-20 bg-white/80 backdrop-blur-xl shadow-lg py-0' // Scrolled State (Compact & White Glass)
                    : 'h-28 bg-gradient-to-b from-black/40 to-transparent py-4' // Top State (Tall & Transparent)
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between items-center h-full">

                    {/* --- LOGO SECTION --- */}
                    <Link href="/" className="flex-shrink-0 flex items-center gap-4 cursor-pointer group">

                        {/* Logo Image - Shrinks on Scroll */}
                        <div className={`relative transition-all duration-500 ${scrolled ? 'h-14 w-14' : 'h-20 w-20'}`}>
                            <Image
                                src="/images/dolchut_logo.png"
                                alt="Dolchut Logo"
                                fill
                                className="object-contain drop-shadow-md"
                            />
                        </div>

                        {/* Text - Color adapts to background */}
                        <div className={`flex flex-col justify-center transition-all duration-500`}>
                            <span className={`font-bold tracking-wide leading-none transition-all duration-500
                ${scrolled ? 'text-2xl text-slate-800' : 'text-3xl text-white drop-shadow-lg'}
              `}>
                                {/* দলছুট */} DOS
                            </span>
                            <span className={`text-sm font-medium tracking-widest mt-1 transition-all duration-500
                ${scrolled ? 'text-[#002B5B]' : 'text-blue-200 drop-shadow-md'}
              `}>
                                {/* এক অন্য আকাশ */}
                            </span>
                        </div>
                    </Link>

                    {/* --- DESKTOP MENU --- */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Gallery', 'Contest'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `#${item.toLowerCase()}`}
                                className={`text-lg font-medium transition-all duration-300 relative group
                  ${scrolled ? 'text-slate-600 hover:text-[#002B5B]' : 'text-white/90 hover:text-white'}
                `}
                            >
                                {item}
                                {/* Animated Underline */}
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full`}></span>
                            </Link>
                        ))}

                        {/* Login Button - Sophisticated Gradient */}
                        <button className={`
              px-7 py-2.5 rounded-full font-semibold shadow-lg transition-all duration-300 transform hover:-translate-y-1
              ${scrolled
                                ? 'bg-[#002B5B] text-white hover:bg-blue-700'
                                : 'bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-[#002B5B]'
                            }
            `}>
                            Member Login
                        </button>
                    </div>

                    {/* --- MOBILE MENU BUTTON --- */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-full transition-colors ${scrolled ? 'text-slate-800 hover:bg-slate-100' : 'text-white hover:bg-white/20'}`}
                        >
                            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* --- MOBILE MENU DROPDOWN (Glass Effect) --- */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-gray-100 shadow-xl animate-fade-in-down">
                    <div className="px-6 py-8 space-y-4 flex flex-col items-center">
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700 hover:text-[#002B5B]">Home</Link>
                        <Link href="#gallery" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700 hover:text-[#002B5B]">Gallery</Link>
                        <Link href="#contest" onClick={() => setIsOpen(false)} className="text-xl font-medium text-slate-700 hover:text-[#002B5B]">Contest</Link>
                        <button className="w-full max-w-xs mt-4 px-6 py-3 bg-[#002B5B] text-white rounded-xl font-bold hover:bg-blue-800 shadow-md">
                            Member Login
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}