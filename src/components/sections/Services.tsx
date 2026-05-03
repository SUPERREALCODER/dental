import { Stethoscope, Sparkles, Smile, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

export function Services() {
  const coreServices = [
    {
      index: "01",
      title: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements using state-of-the-art implant surgery techniques.",
    },
    {
      index: "02",
      title: "Orthodontics",
      description: "Get the perfect alignment with clear aligners, traditional braces, and interceptive orthodontics.",
    },
    {
      index: "03",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with professional teeth whitening, veneers, and full smile makeovers.",
    },
    {
      index: "04",
      title: "General Care",
      description: "Routine checkups, cleanings, extractions, and fillings for patients of all ages.",
    },
    {
      index: "05",
      title: "Emergency Care",
      description: "Immediate relief for toothaches, accidents, and dental trauma with 24/7 priority support.",
    },
    {
      index: "06",
      title: "Full Rehab",
      description: "Comprehensive restorative procedures to return function and aesthetics to your entire mouth.",
    }
  ];

  return (
    <section id="services" className="py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="max-w-2xl">
             <div className="mb-6 inline-flex items-center gap-3 text-editorial-meta text-brand-primary italic">
              Our Expertise
            </div>
            <h2 className="text-5xl font-serif mb-6 italic">Precision Services.</h2>
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              From routine maintenance to complex implant surgeries, we provide a full spectrum of dental services under one roof using digital protocols.
            </p>
          </div>
          <button className="px-10 py-5 bg-brand-dark text-white text-[12px] uppercase tracking-widest font-black hover:bg-brand-primary transition-all">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <ServiceCard 
              key={index}
              index={service.index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
