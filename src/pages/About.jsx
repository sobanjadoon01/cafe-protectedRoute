import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    /* --- 1. MAIN PAGE WRAPPER --- */
    /* overflow-x-hidden lagaya hai taake mobile par horizontal scroll bar na aaye */
    <div className="relative min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* --- 2. BACKGROUND STYLING --- */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none"></div>

      {/* --- 3. FOREGROUND CONTENT CONTAINER --- */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        <Navbar />

        {/* --- 4. MAIN ABOUT SECTION --- */}
        {/* max-w-7xl screen ko bohat zyada phelne nahi dega, px-4 mobile ke liye padding hai */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 flex flex-col gap-16 md:gap-24">
          
          {/* 4A. Page Header */}
          <section className="text-center w-full max-w-3xl mx-auto px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-widest text-neutral-100 uppercase drop-shadow-lg">
              Our <span className="text-[#d4af37]">Story</span>
            </h1>
            <p className="text-gray-400 tracking-wider font-light text-base sm:text-lg">
              More than just a cafe. A place where Italian tradition meets modern aesthetic.
            </p>
          </section>

          {/* 4B. Story Grid: Text Left, Image Right */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Story Text Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-xl hover:border-[#d4af37]/30 transition-all duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-widest uppercase mb-4 sm:mb-6">The Beginning</h2>
              <div className="text-gray-300 font-light leading-relaxed text-sm sm:text-base space-y-4">
                <p>
                  What started as a small dream to bring authentic Italian flavors to the city has now grown into Ciao Amici. We believe in the magic of hand-tossed dough, slow-roasted tomatoes, and the perfect wood-fired crust. 
                </p>
                <p>
                  Every dish is crafted with passion, using recipes passed down through generations, ensuring that every bite feels like a trip to the streets of Naples.
                </p>
              </div>
            </div>
            
            {/* Story Image */}
            <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-xl group">
              <img 
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop" 
                alt="Wood-fired Pizza" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </section>

          {/* 4C. Aesthetic Grid: Image Left, Text Right */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Aesthetic Image */}
            {/* order-2 lg:order-1 means mobile par yeh text ke baad aayega, desktop par pehle */}
            <div className="relative w-full aspect-square sm:aspect-video lg:aspect-square rounded-[2rem] overflow-hidden border border-white/10 shadow-xl group order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Artisan Coffee" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Aesthetic Text Card */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-12 rounded-[2rem] shadow-xl hover:border-[#d4af37]/30 transition-all duration-300 order-1 lg:order-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#d4af37] tracking-widest uppercase mb-4 sm:mb-6">The Aesthetic</h2>
              <div className="text-gray-300 font-light leading-relaxed text-sm sm:text-base space-y-4">
                <p>
                  Ciao Amici isn't just about food; it's about the experience. We've designed our space with a dark, moody aesthetic, perfect for late-night conversations, creative brainstorming, or a romantic dinner.
                </p>
                <p>
                  With our signature liquid glass architecture, golden warm lighting, and a carefully curated playlist, we invite you to disconnect from the world and stay awhile.
                </p>
              </div>
            </div>
          </section>

        </main>

        {/* --- 5. FOOTER SECTION --- */}
        {/* grid-cols-1 for mobile, sm:grid-cols-2 for tablets, lg:grid-cols-3 for desktop */}
        <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 mt-10 px-6 sm:px-8 md:px-16 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          
          {/* Footer Part A: Brand Details */}
          <div>
            <h4 className="text-[#d4af37] font-serif text-xl sm:text-2xl font-bold tracking-widest mb-4">Ciao Amici</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Experience the true taste of Italy with our aesthetic nightlife ambiance, artisan coffee, and authentic wood-fired pizzas.
            </p>
            <div className="text-gray-300 font-light space-y-2">
              <p>📍 Custom Quarters, Near Jackson Market, Keamari, Karachi</p>
              <p>📞 +92 300 1234567</p>
              <p>✉️ hello@ciaoamici.com</p>
            </div>
          </div>

          {/* Footer Part B: Navigation Links */}
          <div className="lg:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Quick Links</h4>
            {/* flex-col ensures links stack properly on all screens */}
            <ul className="text-gray-400 font-light space-y-3 tracking-wider flex flex-col">
              <li><Link to="/menu" className="hover:text-[#d4af37] transition-colors w-fit">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors w-fit">About Us</Link></li>
              <li><Link to="/reservations" className="hover:text-[#d4af37] transition-colors w-fit">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition-colors w-fit">Contact Us</Link></li>
            </ul>
          </div>

          {/* Footer Part C: Business Timings */}
          <div className="lg:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Opening Hours</h4>
            <ul className="text-gray-400 font-light space-y-3 tracking-wider">
              {/* flex-col on mobile, row on slightly larger screens for alignment */}
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6">
                <span>Mon - Fri</span> <span>08:00 AM - 11:00 PM</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6">
                <span>Saturday</span> <span>09:00 AM - 01:00 AM</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-6">
                <span>Sunday</span> <span>09:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>
        </footer>
        
        {/* --- 6. BOTTOM COPYRIGHT BAR --- */}
        <div className="w-full bg-black py-4 text-center text-gray-500 text-xs tracking-widest px-4">
          © 2026 CIAO AMICI CAFE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  );
};

export default About;