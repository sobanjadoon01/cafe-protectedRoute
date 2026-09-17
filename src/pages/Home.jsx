import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const favorites = [
    { name: "Pizza", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop" },
    { name: "Pasta", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop" },
    { name: "Espresso", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop" },
    { name: "Tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=600&auto=format&fit=crop" },
  ];

  return (
    // Main Container - ab overflow-x-hidden hai taake easily scroll ho sakay
    <div className="relative w-full bg-[#0a0a0a] text-white font-sans overflow-x-hidden flex flex-col">
      
      {/* BACKGROUND IMAGE - Opacity barha di hai aur dark gradient thora light kiya hai taake picture clear ho */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/90 pointer-events-none"></div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col w-full">
        
        <Navbar />

        {/* HERO SECTION - Min-height di hai taake baqi cheezein neechay scroll ho sakein */}
        <main className="min-h-[85vh] flex flex-col items-center justify-center p-6 mt-4">
          
          {/* LIQUID GLASS BLOB - Effect ko mazeed realistic aur glossy kiya hai */}
          <div className="max-w-4xl w-full text-center p-12 md:p-16 rounded-[60px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/30 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.1)] hover:-translate-y-2 transition-all duration-500">
            
            {/* Sara text ab English mein hai siwaye cafe ke naam ke */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-widest drop-shadow-xl text-neutral-100">
              HELLO! WELCOME TO <span className="text-[#d4af37]">CIAO AMICI.</span>
            </h1>

            <p className="text-gray-300 text-lg mb-10 tracking-widest font-light max-w-2xl mx-auto">
              Italian Flavors, Cool Vibes, Community. Come Stay Awhile.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/menu" className="bg-white/10 border border-white/40 px-8 py-3 rounded-full text-xs font-semibold tracking-[0.2em] text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-md">
                EXPLORE MENU
              </Link>
              <Link to="/contact" className="bg-[#d4af37]/20 border border-[#d4af37]/60 px-8 py-3 rounded-full text-xs font-semibold tracking-[0.2em] text-[#d4af37] hover:bg-[#d4af37]/30 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.3)] backdrop-blur-md">
                BOOK YOUR VIBE
              </Link>
            </div>
          </div>
        </main>

        {/* FAVORITES & SOCIAL SECTION */}
        <section className="w-full px-8 md:px-16 pb-16 pt-8 flex flex-col md:flex-row justify-between items-end gap-10">
          <div>
            <h3 className="text-xs tracking-[0.25em] text-gray-300 mb-4 font-semibold uppercase drop-shadow-md">Our Favorites</h3>
            <div className="flex flex-wrap gap-4">
              {favorites.map((item, index) => (
                <div key={index} className="group relative w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-xl cursor-pointer shadow-lg hover:-translate-y-2 transition-transform duration-300">
                  <img src={item.img} alt={item.name} className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <span className="absolute bottom-3 left-0 right-0 text-center text-xs tracking-widest font-medium text-[#d4af37]">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left md:text-right w-full md:w-auto">
            <h3 className="text-xs tracking-[0.25em] text-gray-300 mb-4 font-semibold uppercase drop-shadow-md">Follow Us @CiaoAmiciCafe</h3>
            <div className="flex flex-wrap gap-4 md:justify-end">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-white/30 bg-white/10 backdrop-blur-xl flex items-center justify-center cursor-pointer hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 shadow-lg" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?q=80&w=200&auto=format&fit=crop')", backgroundSize: "cover" }}>
                  <div className="w-full h-full bg-black/40 flex items-center justify-center hover:bg-transparent transition-all">
                     <span className="text-white text-xl">📷</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SCROLLABLE FOOTER - Iski wajah se page properly scroll hoga aur details aayengi */}
        <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 mt-10 px-8 md:px-16 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          
          {/* About Section */}
          <div>
            <h4 className="text-[#d4af37] font-serif text-2xl font-bold tracking-widest mb-4">Ciao Amici</h4>
            <p className="text-gray-400 font-light leading-relaxed mb-4">
              Experience the true taste of Italy with our aesthetic nightlife ambiance, artisan coffee, and authentic wood-fired pizzas.
            </p>
            <div className="text-gray-300 font-light space-y-2">
              <p>📍 Custom Quarters, Near Jackson Market, Keamari, Karachi</p>
              <p>📞 +92 300 1234567</p>
              <p>✉️ hello@ciaoamici.com</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="text-gray-400 font-light space-y-3 tracking-wider">
              <li><Link to="/menu" className="hover:text-[#d4af37] transition-colors">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors">About Us</Link></li>
              <li><Link to="/reservations" className="hover:text-[#d4af37] transition-colors">Reservations</Link></li>
              <li><Link to="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="md:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Opening Hours</h4>
            <ul className="text-gray-400 font-light space-y-3 tracking-wider">
              <li className="flex justify-between gap-6"><span>Monday - Friday</span> <span>08:00 AM - 11:00 PM</span></li>
              <li className="flex justify-between gap-6"><span>Saturday</span> <span>09:00 AM - 01:00 AM</span></li>
              <li className="flex justify-between gap-6"><span>Sunday</span> <span>09:00 AM - 10:00 PM</span></li>
            </ul>
          </div>

        </footer>
        
        {/* Copyright Line */}
        <div className="w-full bg-black py-4 text-center text-gray-500 text-xs tracking-widest">
          © 2026 CIAO AMICI CAFE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  );
};

export default Home;