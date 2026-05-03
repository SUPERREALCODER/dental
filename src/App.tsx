/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Contact />
      </main>
      <footer className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
            <div className="flex flex-col">
              <span className="text-2xl font-serif italic tracking-tight text-brand-primary">Aura Dental</span>
              <span className="text-[10px] tracking-[0.3em] uppercase -mt-0.5 font-bold text-brand-dark">Implants & Care</span>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-[11px] font-bold uppercase tracking-widest text-slate-400">
              <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-brand-primary transition-colors">Patient Portal</a>
            </div>
            <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400 md:text-right">
              © {new Date().getFullYear()} AURA DENTAL & IMPLANT CARE. <br/>
              ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="pt-8 border-t border-gray-50 flex justify-center">
            <div className="h-[1px] w-24 bg-brand-primary opacity-20"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

