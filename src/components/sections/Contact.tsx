import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 relative z-10">
        <div>
          <div className="mb-6 inline-flex items-center gap-3 text-editorial-meta text-brand-primary italic">
            Connect With Us
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-brand-dark mb-8 italic">Visit Our Clinic.</h2>
          <p className="text-xl text-slate-500 font-medium mb-16 leading-relaxed max-w-lg">
            Providing exceptional dental care in the heart of Newtown, Kolkata. Our doors are open for consultations and emergency care.
          </p>

          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="text-brand-primary shrink-0 pt-1">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text- editorial-meta text-slate-400 mb-2">Location</h4>
                <p className="text-xl font-serif italic text-brand-dark">
                  Block-D, 179, Crossing, Newtown,<br />
                  Kolkata, West Bengal 700157
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-brand-primary shrink-0 pt-1">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-editorial-meta text-slate-400 mb-2">Availability</h4>
                <p className="text-xl font-serif italic text-brand-dark">
                  Mon — Sat: 10:00 — 20:30<br />
                  Sun: By Appointment
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="text-brand-primary shrink-0 pt-1">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-editorial-meta text-slate-400 mb-2">Contact</h4>
                <p className="text-2xl font-serif italic text-brand-dark">+91 98300 00000</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-brand-dark text-white p-12 shadow-2xl relative"
        >
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-brand-primary/30 m-8" />
          
          <h3 className="text-3xl font-serif mb-4 italic">Request Visit</h3>
          <p className="text-slate-400 mb-10 font-medium tracking-tight">Our concierge will contact you within 2 business hours to confirm your suite.</p>
          
          <form className="space-y-8">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="FULL NAME"
                className="w-full bg-transparent border-b border-white/20 py-4 text-[12px] uppercase tracking-widest font-black focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/20"
              />
              <input 
                type="tel" 
                placeholder="PHONE NUMBER"
                className="w-full bg-transparent border-b border-white/20 py-4 text-[12px] uppercase tracking-widest font-black focus:outline-none focus:border-brand-primary transition-all placeholder:text-white/20"
              />
              <select className="w-full bg-transparent border-b border-white/20 py-4 text-[12px] uppercase tracking-widest font-black focus:outline-none focus:border-brand-primary transition-all appearance-none cursor-pointer">
                <option className="bg-brand-dark">DENTAL IMPLANTS</option>
                <option className="bg-brand-dark">ORTHODONTICS</option>
                <option className="bg-brand-dark">GENERAL CARE</option>
              </select>
            </div>

            <button className="w-full bg-brand-primary text-white py-5 text-[12px] uppercase tracking-[0.4em] font-black hover:bg-white hover:text-brand-dark transition-all">
              Verify Availability
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
