import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="w-full py-2.5 px-6 md:px-12 bg-white border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center text-editorial-meta text-slate-500 gap-3 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-8">
          <span className="hidden xs:inline">BLOCK-D, 179, NEWTOWN, KOLKATA</span>
          <span className="text-brand-primary flex items-center justify-center sm:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 bg-brand-primary rounded-full animate-pulse" />
            OPEN: 09:00 — 20:30
          </span>
        </div>
        <div className="flex gap-4 md:gap-8">
          <span>+91 98300 00000</span>
          <span className="hidden sm:inline">4.9 ★ RATING</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-300",
          scrolled ? "bg-white/95 backdrop-blur-md shadow-sm py-4" : "bg-brand-light/80"
        )}
      >
        <div className="flex flex-col">
          <span className="text-2xl font-serif italic tracking-tight text-brand-primary">Aura Dental</span>
          <span className="text-[10px] tracking-[0.3em] uppercase -mt-0.5 font-bold text-brand-dark">Implants & Care</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-[12px] font-bold uppercase tracking-widest text-slate-600">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-brand-primary transition-colors border-b-2 border-transparent hover:border-brand-primary py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="px-6 py-3 bg-brand-primary text-white text-[11px] uppercase tracking-widest font-black hover:bg-brand-dark transition-all">
            Book Appointment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-brand-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-white border-t border-slate-100 shadow-xl"
          >
            <div className="flex flex-col p-8 gap-6 text-[13px] font-bold uppercase tracking-widest text-brand-dark">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-brand-primary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-primary text-white py-4 text-[12px] uppercase tracking-widest font-black">
                Book Appointment
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
