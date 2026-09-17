import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Dashboard Sidebar Links
  const sidebarLinks = [
    { 
      name: "Overview", 
      path: "/dashboard", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
      ) 
    }, 
    { 
      name: "My Profile", 
      path: "/dashboard/profile", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
      ) 
    },
    { 
      name: "Reservations", 
      path: "/dashboard/reservations", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
      ) 
    },
    { 
      name: "My Favorites", 
      path: "/dashboard/favorites", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
      ) 
    },
    { 
      name: "Settings", 
      path: "/dashboard/settings", 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
      ) 
    },
  ];

  // Aaj ki Date format karne ka tareeqa
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="relative flex h-screen w-full text-white font-sans overflow-hidden">
      
      {/* VIP IMAGE BACKGROUND (Ab clear aur achi nazar aayegi) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      {/* Halka sa blur aur dark overlay (Sirf 40% dark) */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[3px]"></div>

      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-black/60 backdrop-blur-md border-b border-white/10 z-50 flex justify-between items-center px-4">
        <div className="text-[#d4af37] font-serif font-bold tracking-widest text-lg uppercase">
          Ciao Amici
        </div>
        <button 
          onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          className="p-2 text-white focus:outline-none"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileSidebarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h8" />
            )}
          </svg>
        </button>
      </div>

      {/* --- SIDEBAR --- */}
      <aside 
        className={`fixed md:relative z-40 top-0 left-0 h-full w-72 bg-black/60 backdrop-blur-xl border-r border-white/10 flex flex-col transition-transform duration-300 ease-in-out ${
          isMobileSidebarOpen ? "translate-x-0 pt-16 md:pt-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        
        {/* Brand Header */}
        <div className="h-28 hidden md:flex flex-col items-center justify-center border-b border-white/10">
          <h1 className="text-[#d4af37] font-serif font-bold text-3xl tracking-widest uppercase drop-shadow-lg">Ciao Amici</h1>
          <span className="text-gray-400 text-xs tracking-[0.3em] uppercase mt-2 font-light">User Dashboard</span>
        </div>

        {/* HOME BUTTON (TOP ALIGNMENT) */}
        <div className="px-5 pt-6 pb-2">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-3 w-full py-3 rounded-xl bg-white/5 hover:bg-[#d4af37] text-gray-300 hover:text-black border border-white/10 transition-all duration-300 font-bold tracking-widest text-xs uppercase shadow-sm group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-4 overflow-y-auto">
          <ul className="flex flex-col gap-2">
            {sidebarLinks.map((link) => {
              const isActive = location.pathname === link.path || (link.path === "/dashboard" && location.pathname === "/dashboard/");
              
              return (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className={`flex items-center gap-4 px-5 py-4 rounded-xl text-sm font-medium tracking-wider transition-all duration-300 ${
                      isActive 
                        ? "bg-[#d4af37] text-black shadow-[0_4px_20px_rgba(212,175,55,0.4)] transform scale-[1.02]" 
                        : "text-gray-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className={`${isActive ? "text-black" : "text-gray-400"}`}>
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Action - Sirf Logout Button (Full Width) */}
        <div className="p-4 border-t border-white/10 bg-black/20">
          <button className="w-full flex items-center justify-center gap-2 h-12 rounded-xl bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white border border-red-500/30 transition-all duration-300 font-bold tracking-wider text-sm group">
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 relative z-10 h-screen overflow-y-auto pt-20 md:pt-6 pb-8 px-4 md:px-8 flex flex-col">
        
        {/* NEW FEATURE: TOP DASHBOARD HEADER */}
        <header className="w-full max-w-6xl mx-auto flex items-center justify-between mb-6 px-2">
          {/* Left Side: Live Date */}
          <div className="hidden sm:block text-gray-300 font-light tracking-wider text-sm">
            <span className="text-[#d4af37] font-bold">Today: </span> 
            {currentDate}
          </div>
          
          {/* Right Side: Notification Bell & Status */}
          <div className="flex items-center gap-4 ml-auto">
            <div className="flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full border border-green-500/30 text-[10px] font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Cafe Open
            </div>
            
            <button className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* Red Dot (Unread Notification) */}
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-black"></span>
            </button>
          </div>
        </header>

        {/* Content Box */}
        <div className="w-full max-w-6xl mx-auto flex-grow bg-black/45 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 md:p-10 shadow-2xl">
          <Outlet />
        </div>
        
      </main>
      
    </div>
  );
};

export default Dashboard;