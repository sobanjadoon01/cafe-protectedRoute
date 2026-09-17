import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      
      {/* --- MAIN NAVBAR (DESKTOP & MOBILE) --- */}
      <div className="mx-4 md:mx-8 mt-6 px-6 py-4 flex justify-between items-center rounded-full border border-white/30 bg-white/10 backdrop-blur-2xl shadow-[0_8px_32px_rgba(255,255,255,0.1),0_8px_32px_rgba(0,0,0,0.8)] text-white transition-all duration-300">

        {/* --- MOBILE VIEW: Hamburger Icon --- */}
        <div className="lg:hidden flex items-center w-1/3">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="text-[#d4af37] focus:outline-none hover:scale-110 transition-transform"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h8" />
              )}
            </svg>
          </button>
        </div>

        {/* --- DESKTOP VIEW: Left Navigation Links --- */}
        <ul className="hidden lg:flex gap-6 font-light text-xs tracking-[0.2em] text-gray-200 items-center w-auto">
          <li className="hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
            <Link to="/">HOME</Link>
          </li>
          {/* Naya OFFERS Link yahan add kar diya hai */}
          <li className="hover:text-[#d4af37] transition-all duration-300 cursor-pointer text-[#d4af37]">
            <Link to="/deals">DEALS & DISCOUNTS 🔥</Link>
          </li>
          <li className="hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
            <Link to="/contact">CONTACT</Link>
          </li>
          <li className="hover:text-[#d4af37] transition-all duration-300 cursor-pointer">
            <Link to="/dashboard">DASHBOARD</Link>
          </li>
        </ul>

        {/* --- CENTER: Logo --- */}
        <div className="flex flex-col items-center cursor-pointer w-1/3 lg:w-auto lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2">
          <svg width="50" height="20" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-0.5">
            <path d="M50 35C45 25 35 15 20 15C30 10 45 20 50 35Z" fill="#d4af37" opacity="0.8"/>
            <path d="M50 35C55 25 65 15 80 15C70 10 55 20 50 35Z" fill="#d4af37" opacity="0.8"/>
            <path d="M50 35C45 20 50 5 50 5C50 5 55 20 50 35Z" fill="#d4af37"/>
          </svg> 
          <div className="font-serif font-bold text-2xl lg:text-3xl tracking-widest text-[#d4af37] drop-shadow-xl">
            <Link to="/">Ciao Amici</Link>
          </div>
        </div>

        {/* --- RIGHT SIDE: Action Icons --- */}
        <div className="flex items-center justify-end gap-5 w-1/3">
          <Link 
            to="/contact" 
            className="hidden lg:flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/20 px-5 py-2 text-[10px] font-semibold tracking-[0.15em] text-[#d4af37] backdrop-blur-md transition-all hover:bg-[#d4af37]/30 hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            RESERVE A TABLE
          </Link>

          <div className="relative cursor-pointer hover:opacity-75 transition-opacity">
            <svg className="w-6 h-6 lg:w-7 lg:h-7 stroke-[#d4af37]" fill="none" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
            </svg>
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#d4af37] text-[9px] font-bold text-black shadow-md">
              4
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-4 border-l border-white/30 pl-5 ml-2">
            <Link to="/login" className="text-xs font-bold tracking-[0.2em] text-white hover:text-[#d4af37] transition-all drop-shadow-md">
              LOGIN
            </Link>
            <Link to="/signup" className="text-xs font-bold tracking-[0.2em] text-white hover:text-[#d4af37] transition-all drop-shadow-md">
              SIGNUP
            </Link>
          </div>
        </div>

      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-24 left-4 right-4 rounded-3xl border border-white/20 bg-black/80 backdrop-blur-2xl p-6 flex flex-col gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] animate-fade-in">
          
          <ul className="flex flex-col gap-5 font-light text-base tracking-[0.2em] text-gray-200">
            <li className="border-b border-white/10 pb-2"><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link></li>
            {/* Mobile menu mein bhi Offers link add kar diya hai */}
            <li className="border-b border-white/10 pb-2 text-[#d4af37]"><Link to="/offers" onClick={() => setIsMobileMenuOpen(false)}>OFFERS 🔥</Link></li>
            <li className="border-b border-white/10 pb-2"><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>ABOUT</Link></li>
            <li className="border-b border-white/10 pb-2"><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>CONTACT</Link></li>
            <li className="border-b border-white/10 pb-2"><Link to="/dashboard" onClick={() => setIsMobileMenuOpen(false)}>DASHBOARD</Link></li>
          </ul>
          
          <div className="flex flex-col gap-4 mt-2">
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-white/10 border border-white/20 text-xs font-semibold tracking-widest hover:bg-white/20 transition-all">
              LOGIN
            </Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center py-3 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] text-xs font-semibold tracking-widest hover:bg-[#d4af37]/30 transition-all">
              SIGN UP
            </Link>
          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;