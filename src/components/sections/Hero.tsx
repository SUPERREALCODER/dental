import { motion } from 'framer-motion';
import { ArrowRight, Star, MapPin, ShieldCheck, Clock } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-primary"></div>
            <span className="text-editorial-meta text-brand-primary">Modern Dentistry in Kolkata</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-serif leading-[1.05] text-brand-dark mb-8 italic">
            Precision Care.<br/>
            <span className="not-italic font-light">Radiant Smiles.</span>
          </h1>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-lg mb-10 font-medium">
            Experience the highest standard of implantology and general dentistry at Newtown’s premier dental clinic. Specialized care tailored for your comfort and precision results.
          </p>
          
          <div className="flex flex-wrap gap-6 mb-12">
            <button className="px-10 py-5 bg-brand-primary text-white text-[13px] uppercase tracking-[0.3em] font-black hover:bg-brand-dark transition-all shadow-2xl shadow-brand-primary/20">
              Book Appointment
            </button>
            <button className="px-10 py-5 border border-brand-dark/20 text-brand-dark text-[13px] uppercase tracking-[0.3em] font-black hover:border-brand-dark transition-all">
              Our Services
            </button>
          </div>

          <div className="flex gap-4 max-w-md">
            <div className="bg-white p-8 border border-gray-100 flex-1 shadow-sm">
              <h3 className="text-4xl font-serif text-brand-primary mb-1 italic">4.9/5</h3>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-black">Google Rating</p>
            </div>
            <div className="bg-brand-primary text-white p-8 flex-1 shadow-xl shadow-brand-primary/10">
              <h3 className="text-4xl font-serif mb-1 italic">15+</h3>
              <p className="text-[10px] uppercase tracking-widest opacity-80 font-black">Expert Surgeons</p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Grid Layout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 gap-6 h-full"
        >
          <div className="space-y-6">
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-gray-200">
              <img 
                src="https://images.unsplash.com/photo-1629909605124-4259 pre-rounded-2xl" 
                alt="Modern Equipment"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white border border-gray-100 p-8 shadow-sm">
              <div className="text-brand-primary text-sm font-black uppercase tracking-[0.2em] mb-4 italic">01 / Services</div>
              <h4 className="text-2xl font-serif mb-3">Advanced Implants</h4>
              <p className="text-[13px] leading-relaxed text-slate-500 font-medium tracking-tight">Restoring function with bio-compatible titanium implants and computer-guided surgery for optimal recovery.</p>
            </div>
          </div>
          <div className="space-y-6 pt-12">
             <div className="bg-brand-dark text-white p-8 shadow-2xl">
              <div className="text-brand-primary text-sm font-black uppercase tracking-[0.2em] mb-6 italic">Why Us</div>
              <div className="space-y-6">
                <div>
                  <div className="text-lg font-serif mb-1 italic">Newtown Prime</div>
                  <p className="text-[10px] text-slate-400 leading-tight uppercase tracking-wider font-bold">Opp. Apollo Clinic</p>
                </div>
                <div>
                  <div className="text-lg font-serif mb-1 italic">Safe Clinic</div>
                  <p className="text-[10px] text-slate-400 leading-tight uppercase tracking-wider font-bold">Advanced Sterilization</p>
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
