import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Deals = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // 12 Halal, Budget-Friendly & Premium Deals
  const offers = [
    {
      id: 1,
      title: "La Famiglia Feast",
      subtitle: "Family Combo",
      description: "1 Large Neapolitan Pizza, 2 Authentic Pastas, Garlic Bread aur 1.5L Drink. Poori family ke liye perfect!",
      price: "Rs. 3,499",
      oldPrice: "Rs. 4,500",
      image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop",
      badge: "SAVE 25%",
    },
    {
      id: 2,
      title: "Doston Ki Mehfil",
      subtitle: "Budget Deal",
      description: "2 Crispy Zinger Burgers, 2 Regular Fries, aur 2 Chilled Drinks. Zabardast taste, munasib daam!",
      price: "Rs. 999",
      oldPrice: "Rs. 1,400",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
      badge: "BEST SELLER",
    },
    {
      id: 3,
      title: "Student Craving",
      subtitle: "Budget Deal",
      description: "Cheesy Loaded Chicken Fries with spicy mayo aur 1 Soft Drink. Pait full, budget cool!",
      price: "Rs. 499",
      oldPrice: "Rs. 750",
      image: "https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1000&auto=format&fit=crop",
      badge: "FOR STUDENTS",
    },
    {
      id: 4,
      title: "Shaam Ki Chai",
      subtitle: "Desi Touch",
      description: "2 Kadak Karak Chai aur 2 Crispy Chicken Samosay. Shaam ki baithak ka asli maza!",
      price: "Rs. 350",
      oldPrice: "Rs. 500",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdnwFae5vDOYYZWqmVQCMeLCvro7LD2UwexBRP1d_FuqYUn_yLuQR1xcQ&s=10",
      badge: "EVENING SPECIAL",
    },
    {
      id: 5,
      title: "Piccolo Menu",
      subtitle: "Kids Combo",
      description: "Mini Margherita Pizza, Crispy Fries, aur 1 Fresh Juice. Bachon ki pehli pasand.",
      price: "Rs. 799",
      oldPrice: "Rs. 1,100",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1000&auto=format&fit=crop",
      badge: "KIDS FAVORITE",
    },
    {
      id: 6,
      title: "Midnight Craving",
      subtitle: "Late Night Deal",
      description: "2 Artisanal Espressos aur 1 slice Classic Tiramisu. Raat ki bhook ka perfect ilaaj.",
      price: "Rs. 1,199",
      oldPrice: "Rs. 1,600",
      image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000&auto=format&fit=crop",
      badge: "AFTER 10 PM",
    },
    {
      id: 7,
      title: "Weekend BBQ Platter",
      subtitle: "Family Combo",
      description: "Spicy Chicken Tikka, Malai Boti, 4 Puri Parathay aur Raita. Desi family dinner ka maza.",
      price: "Rs. 2,899",
      oldPrice: "Rs. 3,500",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1000&auto=format&fit=crop",
      badge: "WEEKEND SPECIAL",
    },
    {
      id: 8,
      title: "Pasta Fiesta",
      subtitle: "Budget Deal",
      description: "1 Creamy Alfredo Pasta, 2 pieces Garlic Bread aur Drink. Premium taste affordabe price mein.",
      price: "Rs. 850",
      oldPrice: "Rs. 1,200",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1000&auto=format&fit=crop",
      badge: "HOT SELLER",
    },
    {
      id: 9,
      title: "Mini Ninja Box",
      subtitle: "Kids Combo",
      description: "6pcs Crispy Chicken Nuggets, Fries, Apple Juice aur ek chota surprise toy.",
      price: "Rs. 650",
      oldPrice: "Rs. 900",
      image: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1000&auto=format&fit=crop",
      badge: "HAPPY MEAL",
    },
    {
      id: 10,
      title: "Desi Chatkara",
      subtitle: "Desi Touch",
      description: "Crunchy Gol Gappay platter with spicy khatta pani aur ek thandi Meethi Lassi.",
      price: "Rs. 450",
      oldPrice: "Rs. 600",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=1000&auto=format&fit=crop",
      badge: "SPICY ALERT",
    },
    {
      id: 11,
      title: "Sweet Tooth Duo",
      subtitle: "Late Night Deal",
      description: "2 Molten Lava Cakes aur 2 Chilled Frappuccinos. Raat ke meethe ki craving ke liye.",
      price: "Rs. 1,450",
      oldPrice: "Rs. 1,900",
      image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=1000&auto=format&fit=crop",
      badge: "DESSERT LOVERS",
    },
    {
      id: 12,
      title: "Night Owl Wrap",
      subtitle: "Late Night Deal",
      description: "Jumbo Loaded Chicken Shawarma with extra garlic sauce. Raat 2 baje wali bhook ka sathi.",
      price: "Rs. 400",
      oldPrice: "Rs. 550",
      image: "https://i0.wp.com/thereciple.com/wp-content/uploads/2025/09/Chicken_Shawarma_with_Garlic_Sauce_Recipe.png?fit=1024%2C1024&ssl=1",
      badge: "MIDNIGHT SNACK",
    }
  ];

  const categories = ["All", "Family Combo", "Kids Combo", "Budget Deal", "Desi Touch", "Late Night Deal"];

  const filteredOffers = activeCategory === "All" 
    ? offers 
    : offers.filter(offer => offer.subtitle === activeCategory);

  return (
    <div className="relative min-h-screen w-full flex flex-col bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      
      {/* Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        <div className="w-full relative z-50">
          <Navbar />
        </div>

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-10 flex flex-col gap-10 mt-4">
          
          <section className="text-center w-full max-w-3xl mx-auto px-2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 tracking-widest text-neutral-100 uppercase drop-shadow-lg">
              Deals & <span className="text-[#d4af37]">Discounts</span>
            </h1>
            <p className="text-gray-400 tracking-wider font-light text-base sm:text-lg">
              Har budget aur har craving ke liye VIP offers. Savor the premium taste for less.
            </p>
          </section>

          {/* Limited Time Offer Banner */}
          <section className="w-full bg-gradient-to-r from-black/80 to-[#d4af37]/20 backdrop-blur-2xl border border-[#d4af37]/40 rounded-[2rem] p-6 sm:p-8 md:p-12 shadow-[0_10px_40px_rgba(212,175,55,0.2)] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 transform hover:scale-[1.01] transition-transform duration-500">
            <div className="flex-1 space-y-3 sm:space-y-4 text-center md:text-left">
              <span className="inline-block px-4 py-1 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#d4af37] text-xs font-bold tracking-widest uppercase">
                Limited Time Partner Offer
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide uppercase">
                Flat <span className="text-[#d4af37] text-4xl sm:text-5xl block sm:inline mt-2 sm:mt-0">50% OFF</span>
              </h2>
              <p className="text-gray-300 font-light text-sm sm:text-lg tracking-wider">
                On <span className="font-semibold text-white">Easypaisa & Meezan Student Card</span> & 20% OFF on Debit & Credit Cards. Valid on dine-in and takeaways.
              </p>
            </div>
            <div className="hidden md:flex flex-1 justify-end">
              <div className="h-40 w-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=600&auto=format&fit=crop" 
                  alt="Premium Card Offer"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-center pb-4">
                  <span className="text-[#d4af37] font-bold tracking-widest uppercase text-sm drop-shadow-md">Pay Smart, Eat Premium</span>
                </div>
              </div>
            </div>
          </section>

          {/* MODERN HORIZONTAL SWIPEABLE FILTER BAR */}
          <section className="w-full relative mt-2 mb-4">
            {/* 
              Modern approach: 
              - overflow-x-auto allows scrolling horizontally on small screens.
              - [&::-webkit-scrollbar]:hidden removes the ugly scrollbar.
              - snap-x ensures it snaps nicely to each button when swiping. 
              - whitespace-nowrap prevents buttons from breaking into multiple lines.
            */}
            <div className="flex overflow-x-auto gap-3 py-2 px-1 snap-x snap-mandatory whitespace-nowrap [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-lg backdrop-blur-md border ${
                    activeCategory === category
                      ? "bg-[#d4af37] text-black border-[#d4af37] scale-105"
                      : "bg-white/5 text-gray-300 border-white/20 hover:bg-white/10 hover:border-[#d4af37]/50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </section>

          {/* Deals Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredOffers.map((deal) => (
              <div key={deal.id} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-xl hover:border-[#d4af37]/50 transition-all duration-500 flex flex-col animate-fade-in">
                
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={deal.image} 
                    alt={deal.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <span className="absolute top-4 right-4 bg-[#d4af37] text-black text-[10px] font-extrabold px-3 py-1.5 rounded-full tracking-widest uppercase shadow-lg">
                    {deal.badge}
                  </span>
                </div>

                <div className="p-5 sm:p-8 flex flex-col flex-grow text-center">
                  <span className="text-[#d4af37] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-1">{deal.subtitle}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-widest uppercase mb-3 sm:mb-4">{deal.title}</h3>
                  <p className="text-gray-400 font-light text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 flex-grow">
                    {deal.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <span className="text-gray-500 line-through text-sm sm:text-lg">{deal.oldPrice}</span>
                    <span className="text-[#d4af37] font-bold text-xl sm:text-2xl">{deal.price}</span>
                  </div>

                  <button className="w-full py-3 rounded-xl bg-white/5 border border-white/20 text-white font-bold text-[10px] sm:text-xs tracking-[0.2em] uppercase group-hover:bg-[#d4af37]/20 group-hover:border-[#d4af37]/50 group-hover:text-[#d4af37] transition-all duration-300 active:scale-95">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
            
            {filteredOffers.length === 0 && (
              <div className="col-span-full text-center py-10 text-gray-400 font-light tracking-widest">
                Is category mein abhi koi deal available nahi hai.
              </div>
            )}
          </section>

        </main>

        <footer className="w-full bg-black/80 backdrop-blur-md border-t border-white/10 mt-auto px-6 sm:px-8 md:px-16 py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 text-sm">
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
              <li><Link to="/deals" className="text-[#d4af37] transition-colors w-fit">Deals & Discounts</Link></li>
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
        
        <div className="w-full bg-black py-4 text-center text-gray-500 text-[10px] sm:text-xs tracking-widest px-4">
          © 2026 CIAO AMICI CAFE. ALL RIGHTS RESERVED.
        </div>

      </div>
    </div>
  );
};

export default Deals;