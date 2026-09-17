import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Menu = () => {
  // 30 Premium Items with Exact PKR Prices
  const menuData = {
    signatureMains: [
      { id: 1, name: "Margherita Originale", desc: "San Marzano sauce, fresh mozzarella di bufala, basil, olive oil.", price: "Rs. 1,450", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop" },
      { id: 2, name: "Truffle Mushroom Pizza", desc: "Wild mushrooms, truffle cream base, parmesan, rocket leaves.", price: "Rs. 2,100", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop" },
      { id: 3, name: "Smoked BBQ Chicken", desc: "Hickory smoked chicken, red onions, cilantro, house BBQ sauce.", price: "Rs. 1,850", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop" },
      { id: 4, name: "Fettuccine Alfredo", desc: "Handmade ribbon pasta in rich creamy parmesan butter sauce.", price: "Rs. 1,600", img: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=800&auto=format&fit=crop" },
      { id: 5, name: "Penne Arrabbiata", desc: "Spicy roasted tomato sauce, garlic, chili flakes, fresh parsley.", price: "Rs. 1,350", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800&auto=format&fit=crop" },
      { id: 6, name: "Seafood Linguine", desc: "Tiger prawns, calamari, mussels in a light garlic white wine sauce.", price: "Rs. 2,800", img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=800&auto=format&fit=crop" },
      { id: 7, name: "Lasagna Classico", desc: "Layers of fresh pasta, slow-cooked beef ragu, bechamel, mozzarella.", price: "Rs. 1,950", img: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=800&auto=format&fit=crop" }
    ],
    startersAndBurgers: [
      { id: 8, name: "Truffle Fries", desc: "Crispy skin-on fries tossed in truffle oil and parmesan.", price: "Rs. 850", img: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop" },
      { id: 9, name: "Garlic Bread with Cheese", desc: "Toasted artisanal baguette, garlic herb butter, melted mozzarella.", price: "Rs. 650", img: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=600&auto=format&fit=crop" },
      { id: 10, name: "Crispy Calamari", desc: "Golden fried squid rings served with lemon garlic aioli.", price: "Rs. 1,200", img: "https://images.unsplash.com/photo-1599487405270-8e12ebcf1429?q=80&w=600&auto=format&fit=crop" },
      { id: 11, name: "Classic Beef Smash Burger", desc: "Double smash patty, cheddar, caramelized onions, house sauce.", price: "Rs. 1,450", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" },
      { id: 12, name: "Crunchy Zinger Burger", desc: "Spicy buttermilk fried chicken breast, jalapeños, spicy mayo.", price: "Rs. 1,150", img: "https://images.unsplash.com/photo-1615672152882-9659b85c179c?q=80&w=600&auto=format&fit=crop" },
      { id: 13, name: "Grilled Chicken Panini", desc: "Pesto chicken, sun-dried tomatoes, provolone, pressed ciabatta.", price: "Rs. 1,250", img: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=600&auto=format&fit=crop" },
      { id: 14, name: "Stuffed Mushrooms", desc: "Oven-baked mushrooms filled with cream cheese and herbs.", price: "Rs. 950", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop" },
      { id: 15, name: "Beef Tenderloin Steak", desc: "250g Prime cut, mashed potatoes, seasonal veg, peppercorn sauce.", price: "Rs. 4,500", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=600&auto=format&fit=crop" }
    ],
    desserts: [
      { id: 16, name: "Classic Tiramisu", desc: "Espresso-soaked ladyfingers, mascarpone, cocoa powder.", price: "Rs. 950", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=500&auto=format&fit=crop" },
      { id: 17, name: "Molten Lava Cake", desc: "Warm chocolate cake with a gooey center, vanilla bean ice cream.", price: "Rs. 1,100", img: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?q=80&w=500&auto=format&fit=crop" },
      { id: 18, name: "New York Cheesecake", desc: "Rich and creamy cheesecake with mixed berry compote.", price: "Rs. 1,050", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=500&auto=format&fit=crop" },
      { id: 19, name: "Italian Gelato", desc: "Choice of Pistachio, Dark Chocolate, or Vanilla bean.", price: "Rs. 650", img: "https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?q=80&w=500&auto=format&fit=crop" },
      { id: 20, name: "Panna Cotta", desc: "Silky vanilla cream pudding with fresh strawberry coulis.", price: "Rs. 850", img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=500&auto=format&fit=crop" }
    ],
    drinks: [
      { id: 21, name: "Artisan Espresso", desc: "Double shot of premium dark roast Italian coffee.", price: "Rs. 450", type: "hot" },
      { id: 22, name: "Classic Cappuccino", desc: "Equal parts espresso, steamed milk, and rich foam.", price: "Rs. 600", type: "hot" },
      { id: 23, name: "Caramel Macchiato", desc: "Vanilla syrup, steamed milk, espresso, caramel drizzle.", price: "Rs. 750", type: "hot" },
      { id: 24, name: "Hot Chocolate", desc: "Rich Belgian chocolate melted with steamed whole milk.", price: "Rs. 800", type: "hot" },
      { id: 25, name: "Mint Margarita", desc: "Refreshing blend of fresh mint, lemon juice, and crushed ice.", price: "Rs. 550", type: "cold" },
      { id: 26, name: "Iced Peach Iced Tea", desc: "Brewed black tea mixed with natural peach extract.", price: "Rs. 600", type: "cold" },
      { id: 27, name: "Pina Colada", desc: "Creamy coconut and pineapple blended with ice.", price: "Rs. 700", type: "cold" },
      { id: 28, name: "Blue Lagoon", desc: "Blue curacao, lemon juice, and fizzy soda.", price: "Rs. 550", type: "cold" },
      { id: 29, name: "Iced Spanish Latte", desc: "Espresso over ice with sweetened condensed milk.", price: "Rs. 850", type: "cold" },
      { id: 30, name: "Mineral Water", desc: "Premium local or imported bottled water (500ml).", price: "Rs. 150", type: "cold" }
    ]
  };

  const [activeTab, setActiveTab] = useState("all");
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    // Background Not Too Dark - Warm Cafe Tone
    <div className="relative min-h-screen w-full flex flex-col bg-[#1a1814] text-gray-100 font-sans overflow-x-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* Lighter Warm Background Image with Glass Overlay */}
      <div 
        className="fixed inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&w=1920&auto=format&fit=crop')" }}
      ></div>
      {/* Frosted Glass Effect - Lighter than before */}
      <div className="fixed inset-0 bg-[#161410]/80 backdrop-blur-[8px] pointer-events-none"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        
        {/* Navbar */}
        <div className="w-full sticky top-0 z-50">
          <Navbar />
        </div>

        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 flex flex-col gap-16">
          
          {/* Header Section */}
          <section className="text-center w-full max-w-3xl mx-auto px-2 mt-4">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-[0.2em] text-white uppercase drop-shadow-xl font-serif">
              Our <span className="text-[#d4af37]">Menu</span>
            </h1>
            <p className="text-gray-300 tracking-wider font-light text-base sm:text-lg">
              A symphony of authentic flavors, crafted with passion. 
            </p>
          </section>

          {/* Sticky Internal Category Navigation */}
          <div className="sticky top-20 z-40 flex overflow-x-auto justify-start md:justify-center gap-4 py-4 px-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden bg-[#161410]/60 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
            {["all", "mains", "starters", "desserts", "beverages"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`snap-center flex-shrink-0 px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                  activeTab === tab
                    ? "bg-[#d4af37] text-black border-[#d4af37] shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                    : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-[#d4af37]/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* ======================================= */}
          {/* 1. SIGNATURE MAINS (Magazine Alternating Style) */}
          {/* ======================================= */}
          {(activeTab === "all" || activeTab === "mains") && (
            <section className="flex flex-col gap-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#d4af37] tracking-[0.2em] uppercase">Signature Mains</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
              </div>
              
              {menuData.signatureMains.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8 md:gap-12 group`}
                >
                  {/* Image Side */}
                  <div className="w-full md:w-1/2 relative h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <button 
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-4 right-4 h-12 w-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg className={`w-6 h-6 ${favorites.includes(item.id) ? "fill-[#d4af37] text-[#d4af37]" : "fill-transparent text-white"}`} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </button>
                  </div>
                  
                  {/* Text Side (Glassmorphism card for text) */}
                  <div className="w-full md:w-1/2 p-6 md:p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] hover:border-[#d4af37]/30 transition-all duration-500 shadow-xl">
                    <h3 className="text-3xl font-serif text-white tracking-wider mb-4">{item.name}</h3>
                    <p className="text-gray-300 font-light leading-relaxed mb-8 text-lg">{item.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#d4af37] font-bold text-3xl">{item.price}</span>
                      <button className="px-6 py-3 rounded-full bg-white/10 hover:bg-[#d4af37] text-white hover:text-black transition-colors duration-300 text-sm tracking-[0.2em] uppercase font-bold border border-white/20">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}

          {/* ======================================= */}
          {/* 2. STARTERS & BURGERS (Staggered Glass Cards) */}
          {/* ======================================= */}
          {(activeTab === "all" || activeTab === "starters") && (
            <section className="flex flex-col gap-10 mt-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#d4af37] tracking-[0.2em] uppercase">Starters & Grill</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {menuData.startersAndBurgers.map((item) => (
                  <div key={item.id} className="relative group bg-white/[0.03] backdrop-blur-lg border border-white/10 p-4 rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 flex flex-col sm:flex-row gap-6 items-center shadow-lg">
                    <div className="w-full sm:w-2/5 h-40 rounded-2xl overflow-hidden relative shadow-md">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="w-full sm:w-3/5 flex flex-col justify-center">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold tracking-widest text-white uppercase">{item.name}</h3>
                        <button onClick={() => toggleFavorite(item.id)}>
                          <svg className={`w-5 h-5 transition-colors ${favorites.includes(item.id) ? "fill-[#d4af37] text-[#d4af37]" : "fill-transparent text-gray-400 hover:text-white"}`} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </button>
                      </div>
                      <p className="text-gray-400 font-light text-sm mb-4">{item.desc}</p>
                      <span className="text-[#d4af37] font-bold text-xl">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ======================================= */}
          {/* 3. DESSERTS (Elegant Masonry/Circle Style) */}
          {/* ======================================= */}
          {(activeTab === "all" || activeTab === "desserts") && (
            <section className="flex flex-col gap-10 mt-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#d4af37] tracking-[0.2em] uppercase">Dolci (Desserts)</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 pt-10">
                {menuData.desserts.map((item) => (
                  <div key={item.id} className="relative bg-gradient-to-b from-white/10 to-transparent backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 pt-24 text-center hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                    {/* Floating Circular Image */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-4 border-[#1a1814] overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-10">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <button 
                      onClick={() => toggleFavorite(item.id)}
                      className="absolute top-4 right-4"
                    >
                      <svg className={`w-5 h-5 ${favorites.includes(item.id) ? "fill-[#d4af37] text-[#d4af37]" : "fill-transparent text-gray-400"}`} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </button>
                    <h3 className="text-xl font-bold tracking-widest text-white uppercase mb-3">{item.name}</h3>
                    <p className="text-gray-400 font-light text-sm mb-6">{item.desc}</p>
                    <span className="text-[#d4af37] font-bold text-2xl">{item.price}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ======================================= */}
          {/* 4. BEVERAGES (High-End Text List Style) */}
          {/* ======================================= */}
          {(activeTab === "all" || activeTab === "beverages") && (
            <section className="flex flex-col gap-10 mt-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
                <h2 className="text-2xl md:text-3xl font-serif text-[#d4af37] tracking-[0.2em] uppercase">Beverages</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                {menuData.drinks.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1 group">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2 border-dashed group-hover:border-[#d4af37]/50 transition-colors">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold tracking-widest text-white uppercase">{item.name}</h3>
                        {item.type === "hot" ? (
                          <span className="text-orange-400 text-xs" title="Hot">☕</span>
                        ) : (
                          <span className="text-blue-400 text-xs" title="Cold">❄️</span>
                        )}
                      </div>
                      <span className="text-[#d4af37] font-bold text-lg bg-[#1a1814] pl-2">{item.price}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-gray-400 font-light text-xs md:text-sm">{item.desc}</p>
                      <button onClick={() => toggleFavorite(item.id)} className="pl-2">
                        <svg className={`w-4 h-4 ${favorites.includes(item.id) ? "fill-[#d4af37] text-[#d4af37]" : "fill-transparent text-gray-500 hover:text-[#d4af37]"}`} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>

        {/* Footer - Minimalist for Menu Page */}
        <footer className="w-full bg-black/60 backdrop-blur-md border-t border-white/10 mt-12 py-8 flex flex-col items-center justify-center gap-4">
          <h4 className="text-[#d4af37] font-serif text-2xl font-bold tracking-[0.2em] uppercase">Ciao Amici</h4>
          <div className="flex gap-6 text-xs tracking-widest uppercase font-bold text-gray-400">
            <Link to="/" className="hover:text-[#d4af37] transition-colors">Home</Link>
            <Link to="/dashboard" className="hover:text-[#d4af37] transition-colors">Dashboard</Link>
            <Link to="/contact" className="hover:text-[#d4af37] transition-colors">Contact Us</Link>
          </div>
          <p className="text-gray-500 text-[10px] tracking-widest mt-4">
            © 2026 CIAO AMICI. ALL RIGHTS RESERVED.
          </p>
        </footer>

      </div>
    </div>
  );
};

export default Menu;