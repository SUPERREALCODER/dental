import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, ShieldCheck, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col text-center lg:text-left items-center lg:items-start"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-primary hidden lg:block"></div>
            <span className="text-editorial-meta text-brand-primary">Modern Dentistry in Kolkata</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif leading-[1.05] text-brand-dark mb-8 italic">
            Precision Care.<br/>
            <span className="not-italic font-light">Radiant Smiles.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
            Experience the highest standard of implantology and general dentistry at Newtown’s premier dental clinic. Specialized care tailored for your comfort and precision results.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mb-12 w-full">
            <button className="flex-1 sm:flex-none px-6 sm:px-10 py-5 bg-brand-primary text-white text-[12px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black hover:bg-brand-dark transition-all shadow-2xl shadow-brand-primary/20">
              Book Visit
            </button>
            <button className="flex-1 sm:flex-none px-6 sm:px-10 py-5 border border-brand-dark/20 text-brand-dark text-[12px] sm:text-[13px] uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black hover:border-brand-dark transition-all">
              Our Services
            </button>
          </div>

          <div className="flex gap-4 w-full max-w-md">
            <div className="bg-white p-6 sm:p-8 border border-gray-100 flex-1 shadow-sm">
              <h3 className="text-3xl sm:text-4xl font-serif text-brand-primary mb-1 italic">4.9/5</h3>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Rating</p>
            </div>
            <div className="bg-brand-primary text-white p-6 sm:p-8 flex-1 shadow-xl shadow-brand-primary/10">
              <h3 className="text-3xl sm:text-4xl font-serif mb-1 italic">15+</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-80 font-black">Surgeons</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Grid Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-4 sm:gap-6 h-full"
        >
          <div className="space-y-4 sm:space-y-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1629909605124-4259 pre-rounded-2xl" 
                alt="Modern Equipment"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white border border-gray-100 p-6 sm:p-8 shadow-sm">
              <div className="text-brand-primary text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] mb-2 sm:mb-4 italic">01 / Services</div>
              <h4 className="text-lg sm:text-2xl font-serif mb-2 sm:mb-3">Advanced Implants</h4>
              <p className="text-[11px] sm:text-[13px] leading-relaxed text-slate-500 font-medium tracking-tight">Restoring function with bio-compatible titanium implants.</p>
            </div>
          </div>
          <div className="space-y-4 sm:space-y-6 pt-8 sm:pt-12">
             <div className="bg-brand-dark text-white p-6 sm:p-8 shadow-2xl">
              <div className="text-brand-primary text-[10px] sm:text-sm font-black uppercase tracking-[0.2em] mb-4 sm:mb-6 italic">Why Us</div>
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="text-base sm:text-lg font-serif mb-0.5 sm:italic">Newtown Prime</div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight uppercase tracking-wider font-bold">Opp. Apollo Clinic</p>
                </div>
                <div>
                  <div className="text-base sm:text-lg font-serif mb-0.5 sm:italic">Safe Clinic</div>
                  <p className="text-[9px] sm:text-[10px] text-slate-400 leading-tight uppercase tracking-wider font-bold">Advanced Sterilization</p>
                </div>
              </div>
            </div>
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Expert Care"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
