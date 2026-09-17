import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    /* --- 1. MAIN PAGE WRAPPER --- */
    <div className="relative min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* --- 2. BACKGROUND AESTHETIC --- */}
      {/* Contact page ke liye dark moody cafe table ki image */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none"></div>

      {/* --- 3. FOREGROUND CONTENT --- */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        <Navbar />

        {/* --- 4. MAIN CONTACT SECTION --- */}
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 md:py-16 flex flex-col gap-12">
          
          {/* 4A. Header */}
          <section className="text-center w-full max-w-3xl mx-auto px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-widest text-neutral-100 uppercase drop-shadow-lg">
              Get In <span className="text-[#d4af37]">Touch</span>
            </h1>
            <p className="text-gray-400 tracking-wider font-light text-base sm:text-lg">
              Whether it's a reservation for tonight or a query about our menu, we'd love to hear from you.
            </p>
          </section>

          {/* 4B. Contact Layout (Grid: Info on Left, Form on Right) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start mt-4">
            
            {/* LEFT COLUMN: Contact Details */}
            <div className="flex flex-col gap-8 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-xl">
              
              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">Visit Us</h3>
                <p className="text-[#d4af37] text-lg font-light leading-relaxed">
                  Ciao Amici Cafe<br/>
                  <span className="text-gray-300 text-base">Custom Quarters, Near Jackson Market,<br/>Keamari, Karachi.</span>
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">Contact Info</h3>
                <p className="text-gray-300 text-base font-light leading-relaxed">
                  📞 +92 300 1234567<br/>
                  ✉️ hello@ciaoamici.com
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-400 uppercase mb-2">Opening Hours</h3>
                <p className="text-gray-300 text-base font-light leading-relaxed">
                  Mon - Fri: 08:00 AM - 11:00 PM<br/>
                  Sat - Sun: 09:00 AM - 01:00 AM
                </p>
              </div>
              
            </div>

            {/* RIGHT COLUMN: Liquid Glass Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.15em] text-[#d4af37] uppercase">Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white font-light outline-none focus:border-[#d4af37]/60 focus:bg-white/5 transition-all placeholder-gray-500"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.15em] text-[#d4af37] uppercase">Email</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white font-light outline-none focus:border-[#d4af37]/60 focus:bg-white/5 transition-all placeholder-gray-500"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold tracking-[0.15em] text-[#d4af37] uppercase">Message</label>
                  <textarea 
                    rows="4" 
                    placeholder="Tell us about your reservation or query..."
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-white font-light outline-none focus:border-[#d4af37]/60 focus:bg-white/5 transition-all placeholder-gray-500 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button className="mt-4 w-full py-4 rounded-xl bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#d4af37]/30 hover:scale-[1.02] transition-all shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                  Send Message
                </button>

              </form>
            </div>
            
          </section>

        </main>

        {/* --- 5. FOOTER SECTION --- */}
        <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 mt-10 px-6 sm:px-8 md:px-16 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-sm">
          
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

          <div className="lg:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="text-gray-400 font-light space-y-3 tracking-wider flex flex-col">
              <li><Link to="/menu" className="hover:text-[#d4af37] transition-colors w-fit">Our Menu</Link></li>
              <li><Link to="/about" className="hover:text-[#d4af37] transition-colors w-fit">About Us</Link></li>
              <li><Link to="/reservations" className="hover:text-[#d4af37] transition-colors w-fit">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-[#d4af37] transition-colors w-fit">Contact Us</Link></li>
            </ul>
          </div>

          <div className="lg:ml-auto">
            <h4 className="text-white font-semibold tracking-widest uppercase mb-4">Opening Hours</h4>
            <ul className="text-gray-400 font-light space-y-3 tracking-wider">
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
        
        {/* --- 6. COPYRIGHT BAR --- */}
        <div className="w-full bg-black py-4 text-center text-gray-500 text-xs tracking-widest px-4">
          © 2026 CIAO AMICI CAFE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  );
};

export default Contact;