import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center font-sans overflow-hidden px-4 bg-[#0a0a0a] text-gray-100 selection:bg-[#d4af37] selection:text-black">
      
      {/* 1. STUNNING RESTAURANT AMBIENCE BACKGROUND */}
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none opacity-80"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>

      {/* 2. GLASS BLUR OVERLAY (Transparent feel ke sath) */}
      <div className="fixed inset-0 bg-black/65 backdrop-blur-[12px] pointer-events-none"></div>

      {/* 3. LUXURY GLASS CARD WITH PURE #d4af37 GOLD ACCENTS */}
      <div className="relative z-10 w-full max-w-md bg-[#121212]/70 backdrop-blur-2xl border border-[#d4af37]/30 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_25px_60px_rgba(212,175,55,0.15)] flex flex-col items-center">
        
        {/* Close / Back to Home Button */}
        <Link 
          to="/" 
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-[#d4af37] text-gray-300 hover:text-black border border-white/10 hover:border-[#d4af37] flex items-center justify-center transition-all duration-300 group"
          title="Back to Home"
        >
          <svg className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>

        {/* Brand / Title */}
        <div className="text-center mb-8 mt-2">
          <h2 className="text-[#d4af37] font-serif font-bold text-3xl tracking-[0.2em] uppercase mb-2 drop-shadow-md">Ciao Amici</h2>
          <p className="text-gray-400 font-light text-xs tracking-[0.25em] uppercase">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full flex flex-col gap-5">
          
          {/* Email Field */}
          <div className="flex flex-col gap-2">
            <label className="text-[#d4af37] text-xs font-bold tracking-widest uppercase">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full h-12 px-4 rounded-xl bg-black/50 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="text-[#d4af37] text-xs font-bold tracking-widest uppercase">Password</label>
              <a href="#forgot" className="text-[11px] text-[#d4af37] hover:underline tracking-wider">Forgot?</a>
            </div>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full h-12 px-4 rounded-xl bg-black/50 border border-white/15 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#d4af37] focus:ring-1 focus:ring-[#d4af37] transition-all"
            />
          </div>

          {/* Submit Button (Pure #d4af37 Gold) */}
          <button 
            type="submit"
            className="w-full h-12 mt-4 rounded-xl bg-[#d4af37] hover:bg-[#e0be47] text-black font-bold tracking-[0.2em] text-xs uppercase transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.4)] transform hover:scale-[1.02]"
          >
            Sign In
          </button>
        </form>

        {/* Footer Link / Register */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-xs tracking-wider">
            Don't have an ltii6l7itlytdlt6uyt6yktaccount?{" "}
            <Link to="/signup" className="text-[#d4af37] font-bold hover:underline ml-1">
              Sign Up
            </Link>
          </p>
        </div>

      </div>
      
    </div>
  );
};

export default Login;