import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, Star, ChevronRight, Menu as MenuIcon, X, Calendar, Users, Wine, Music, Utensils, Quote, Instagram, Facebook } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-wood-900 bg-cream-50 min-h-screen selection:bg-wine-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <span className={`font-serif text-2xl font-bold tracking-wider uppercase ${isScrolled ? 'text-wine-800' : 'text-white'}`}>
              Tsiskvili <span className="font-light">Terrace</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {['Story', 'Menu', 'Experience', 'Gallery', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-wine-500 ${isScrolled ? 'text-wood-800' : 'text-white/90'}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollTo('reservation')}
              className={`px-6 py-2.5 text-sm tracking-widest uppercase transition-all duration-300 border ${isScrolled ? 'bg-wine-700 text-white border-wine-700 hover:bg-wine-800' : 'bg-white text-wood-900 border-white hover:bg-transparent hover:text-white'}`}
            >
              Reserve
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden p-2 ${isScrolled ? 'text-wood-900' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream-50 pt-24 px-6 flex flex-col"
          >
            <div className="flex flex-col space-y-6 text-center">
              {['Story', 'Menu', 'Experience', 'Gallery', 'Contact'].map((item) => (
                <button 
                  key={item} 
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="font-serif text-2xl text-wood-900 hover:text-wine-600"
                >
                  {item}
                </button>
              ))}
              <div className="pt-8">
                <button 
                  onClick={() => scrollTo('reservation')}
                  className="w-full py-4 bg-wine-700 text-white tracking-widest uppercase text-sm"
                >
                  Reserve a Table
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1920&auto=format&fit=crop" 
            alt="Restaurant Ambiance" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="block text-wine-400 font-sans tracking-[0.2em] text-sm md:text-base uppercase mb-4">
              Welcome to Tbilisi
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              A Taste of <br/><span className="italic font-light">Georgian Soul</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl mx-auto mb-10">
              Experience the authentic flavors, warm hospitality, and breathtaking terrace views that define true Georgian dining.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => scrollTo('reservation')}
                className="w-full sm:w-auto px-8 py-4 bg-wine-700 text-white tracking-widest uppercase text-sm hover:bg-wine-800 transition-colors"
              >
                Reserve a Table
              </button>
              <button 
                onClick={() => scrollTo('menu')}
                className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white tracking-widest uppercase text-sm hover:bg-white hover:text-wood-900 transition-colors"
              >
                View Menu
              </button>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-white/80 text-sm tracking-wider">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500"><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/><Star size={16} fill="currentColor"/></div>
                <span>4.9/5 Reviews</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <span>Est. 2002</span>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <span>Live Music Daily</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { text: "The most authentic Khinkali I've had in Tbilisi. The terrace view is simply unmatched.", author: "Sarah M.", source: "TripAdvisor" },
              { text: "A luxurious experience that still feels deeply rooted in Georgian tradition. Exceptional wine list.", author: "David L.", source: "Google Reviews" },
              { text: "Live music, incredible food, and service that treats you like family. A must-visit.", author: "Elena K.", source: "Yelp" }
            ].map((review, i) => (
              <FadeIn key={i} delay={i * 0.1} className="p-6">
                <div className="flex justify-center text-wine-600 mb-4">
                  <Quote size={32} strokeWidth={1} />
                </div>
                <p className="font-serif text-xl italic text-wood-800 mb-4">"{review.text}"</p>
                <div className="flex items-center justify-center gap-2 mb-1">
                  {[...Array(5)].map((_, j) => <Star key={j} size={14} className="text-yellow-500" fill="currentColor" />)}
                </div>
                <p className="text-sm font-semibold text-wood-900">{review.author}</p>
                <p className="text-xs text-wood-500 uppercase tracking-wider mt-1">{review.source}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* About / Story */}
      <section id="story" className="py-24 bg-cream-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <FadeIn className="lg:w-1/2 relative">
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000&auto=format&fit=crop" 
                  alt="Georgian Wine and Food" 
                  className="w-full h-[600px] object-cover rounded-t-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-wine-100 rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 border border-wine-300 rounded-full -z-10"></div>
            </FadeIn>
            
            <FadeIn className="lg:w-1/2" delay={0.2}>
              <span className="text-wine-600 font-sans tracking-[0.2em] text-sm uppercase mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-5xl font-serif text-wood-900 mb-6 leading-tight">
                A Legacy of <br/><span className="italic font-light">Georgian Hospitality</span>
              </h2>
              <p className="text-wood-600 mb-6 font-light leading-relaxed">
                Nestled on the banks of the Mtkvari River, Tsiskvili Terrace is more than a restaurant—it is a celebration of Georgian culture. For over two decades, we have been serving recipes passed down through generations, prepared with the finest local ingredients and an abundance of love.
              </p>
              <p className="text-wood-600 mb-8 font-light leading-relaxed">
                From the moment you step onto our terrace, you are not just a guest; you are family. Experience the harmony of nature, traditional architecture, and the soulful melodies of live Georgian polyphonic singing.
              </p>
              <button className="flex items-center gap-2 text-wine-700 font-medium tracking-wider uppercase text-sm hover:text-wine-900 transition-colors group">
                Discover Our Story 
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <span className="text-wine-600 font-sans tracking-[0.2em] text-sm uppercase mb-4 block">The Menu</span>
            <h2 className="text-4xl md:text-5xl font-serif text-wood-900 mb-6">Culinary Masterpieces</h2>
            <p className="text-wood-600 max-w-2xl mx-auto font-light">
              A curated selection of our most beloved dishes, blending ancient culinary traditions with premium modern presentation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Adjaruli Khachapuri",
                desc: "Boat-shaped bread baked to perfection, filled with a blend of local cheeses, topped with a raw egg and butter.",
                price: "₾ 28",
                img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Traditional Khinkali",
                desc: "Hand-rolled dumplings filled with spiced meat and rich broth. A true test of Georgian culinary craftsmanship.",
                price: "₾ 2.5 / pc",
                img: "https://images.unsplash.com/photo-1563514988085-78e02535787a?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Mtsvadi on Coals",
                desc: "Premium cuts of pork or veal, marinated in traditional spices and roasted over vine wood coals.",
                price: "₾ 35",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Saperavi Reserve",
                desc: "An exclusive selection of deep, full-bodied red wines from the finest vineyards of the Kakheti region.",
                price: "₾ 85",
                img: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop"
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden mb-4">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-2xl text-wood-900 mb-2">{item.name}</h3>
                    <p className="text-wood-600 font-light text-sm max-w-md">{item.desc}</p>
                  </div>
                  <span className="font-serif text-xl text-wine-700">{item.price}</span>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center">
            <button className="px-8 py-4 border border-wood-900 text-wood-900 tracking-widest uppercase text-sm hover:bg-wood-900 hover:text-white transition-colors">
              View Full Menu
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-wood-900 text-cream-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920&auto=format&fit=crop" 
            alt="Texture" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <span className="text-wine-400 font-sans tracking-[0.2em] text-sm uppercase mb-4 block">The Atmosphere</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Immerse Yourself in Culture</h2>
            <p className="text-cream-200 max-w-2xl mx-auto font-light">
              Dining at Tsiskvili is a multi-sensory journey. Every detail is designed to transport you to the heart of Georgia.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {[
              { icon: <Music size={40} strokeWidth={1} />, title: "Live Polyphony", desc: "Experience the UNESCO-recognized tradition of Georgian polyphonic singing and traditional dance performances every evening." },
              { icon: <Utensils size={40} strokeWidth={1} />, title: "Terrace Views", desc: "Dine amidst lush greenery and waterfalls, with breathtaking views of the Mtkvari River flowing gently by." },
              { icon: <Wine size={40} strokeWidth={1} />, title: "8,000 Vintages", desc: "Explore the birthplace of wine. Our sommeliers will guide you through an extensive collection of Qvevri wines." }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full border border-wine-500/30 flex items-center justify-center text-wine-400 mb-6">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4">{feature.title}</h3>
                <p className="text-cream-200 font-light text-sm leading-relaxed">{feature.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-wood-900">Gallery</h2>
            </div>
            <button className="hidden sm:flex items-center gap-2 text-wine-700 font-medium tracking-wider uppercase text-sm hover:text-wine-900 transition-colors">
              Follow our Instagram <ChevronRight size={16} />
            </button>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <FadeIn delay={0.1} className="col-span-2 row-span-2 relative h-[400px] md:h-[616px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1000&auto=format&fit=crop" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-[192px] md:h-[300px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=600&auto=format&fit=crop" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-[192px] md:h-[300px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=600&auto=format&fit=crop" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.4} className="relative h-[192px] md:h-[300px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=600&auto=format&fit=crop" alt="Gallery 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.5} className="relative h-[192px] md:h-[300px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Reservation Section */}
      <section id="reservation" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-cream-50"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="bg-white shadow-2xl rounded-sm overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 bg-wine-900 text-white p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop" alt="Bg" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="relative z-10">
                <h3 className="font-serif text-3xl mb-4">Reserve Your Table</h3>
                <p className="font-light text-white/80 mb-8">
                  Join us for an unforgettable evening. We recommend booking in advance, especially for terrace seating.
                </p>
                <div className="space-y-4 font-light text-sm">
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-wine-400" />
                    <span>+995 32 2 000 000</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-wine-400" />
                    <span>Beliashvili St, Tbilisi, Georgia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock size={18} className="text-wine-400" />
                    <span>Daily: 12:00 PM - 12:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Name</label>
                    <input type="text" className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent" placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Phone</label>
                    <input type="tel" className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent" placeholder="+995" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Date</label>
                    <div className="relative">
                      <input type="date" className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent appearance-none" />
                      <Calendar size={16} className="absolute right-0 top-3 text-wood-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Time</label>
                    <div className="relative">
                      <select className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent appearance-none">
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                        <option>20:30</option>
                        <option>21:00</option>
                      </select>
                      <Clock size={16} className="absolute right-0 top-3 text-wood-400 pointer-events-none" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Guests</label>
                    <div className="relative">
                      <select className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent appearance-none">
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                      <Users size={16} className="absolute right-0 top-3 text-wood-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-wider uppercase text-wood-500 mb-2">Special Requests</label>
                  <textarea rows={2} className="w-full border-b border-wood-200 py-2 focus:outline-none focus:border-wine-600 transition-colors bg-transparent resize-none" placeholder="Allergies, terrace preference, etc."></textarea>
                </div>

                <div className="pt-4">
                  <button className="w-full py-4 bg-wine-700 text-white tracking-widest uppercase text-sm hover:bg-wine-800 transition-colors">
                    Confirm Reservation
                  </button>
                  <p className="text-center text-xs text-wood-400 mt-4">
                    <span className="text-wine-600 font-semibold">Limited availability.</span> We will contact you to confirm your booking.
                  </p>
                </div>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <FadeIn className="lg:w-1/3">
              <span className="text-wine-600 font-sans tracking-[0.2em] text-sm uppercase mb-4 block">Visit Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-wood-900 mb-8">Location & Hours</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-2"><MapPin size={20} className="text-wine-600"/> Address</h4>
                  <p className="text-wood-600 font-light">Beliashvili St, Right Bank of Mtkvari River<br/>Tbilisi, Georgia</p>
                </div>
                
                <div>
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-2"><Clock size={20} className="text-wine-600"/> Opening Hours</h4>
                  <p className="text-wood-600 font-light">Monday - Sunday<br/>12:00 PM - 12:00 AM</p>
                  <p className="text-wood-500 text-sm mt-1 italic">Live music starts at 8:00 PM</p>
                </div>

                <div>
                  <h4 className="font-serif text-xl mb-2 flex items-center gap-2"><Phone size={20} className="text-wine-600"/> Contact</h4>
                  <p className="text-wood-600 font-light">+995 32 2 000 000<br/>info@tsiskviliterrace.ge</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn className="lg:w-2/3 h-[400px] bg-wood-200 rounded-sm overflow-hidden relative">
              {/* Placeholder for Map - using an image for aesthetic purposes in this demo */}
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop" 
                alt="Map Location" 
                className="w-full h-full object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-white p-4 rounded-full shadow-xl text-wine-600">
                  <MapPin size={32} />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-900 text-white/70 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-serif text-3xl font-bold tracking-wider uppercase text-white mb-6 block">
                Tsiskvili <span className="font-light">Terrace</span>
              </span>
              <p className="font-light max-w-sm mb-6">
                A premium dining destination in Tbilisi, offering an authentic Georgian culinary and cultural experience.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-wine-700 hover:border-wine-700 transition-colors text-white">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-wine-700 hover:border-wine-700 transition-colors text-white">
                  <Facebook size={18} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-6">Explore</h4>
              <ul className="space-y-3 font-light">
                <li><button onClick={() => scrollTo('story')} className="hover:text-wine-400 transition-colors">Our Story</button></li>
                <li><button onClick={() => scrollTo('menu')} className="hover:text-wine-400 transition-colors">Menu</button></li>
                <li><button onClick={() => scrollTo('experience')} className="hover:text-wine-400 transition-colors">Experience</button></li>
                <li><button onClick={() => scrollTo('gallery')} className="hover:text-wine-400 transition-colors">Gallery</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold tracking-widest uppercase text-sm mb-6">Legal</h4>
              <ul className="space-y-3 font-light">
                <li><a href="#" className="hover:text-wine-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-wine-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-wine-400 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-light">
            <p>&copy; {new Date().getFullYear()} Tsiskvili Terrace. All rights reserved.</p>
            <p>Designed for Georgian Hospitality.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
