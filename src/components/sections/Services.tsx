import { Stethoscope, Sparkles, Smile, ShieldAlert, Heart, Calendar } from 'lucide-react';
import { ServiceCard } from '../ui/ServiceCard';

export function Services() {
  const coreServices = [
    {
      index: "01",
      title: "Dental Implants",
      description: "Permanent, natural-looking tooth replacements using state-of-the-art implant surgery techniques.",
      image: "/images/service_implants.png"
    },
    {
      index: "02",
      title: "Orthodontics",
      description: "Get the perfect alignment with clear aligners, traditional braces, and interceptive orthodontics.",
      image: "/images/service_orthodontics.png"
    },
    {
      index: "03",
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with professional teeth whitening, veneers, and full smile makeovers.",
      image: "/images/service_cosmetic.png"
    },
    {
      index: "04",
      title: "General Care",
      description: "Routine checkups, cleanings, extractions, and fillings for patients of all ages.",
      image: "/images/service_general.png"
    },
    {
      index: "05",
      title: "Emergency Care",
      description: "Immediate relief for toothaches, accidents, and dental trauma with 24/7 priority support.",
      image: "/images/service_emergency.png"
    },
    {
      index: "06",
      title: "Full Rehab",
      description: "Comprehensive restorative procedures to return function and aesthetics to your entire mouth.",
      image: "/images/service_rehab.png"
    }
  ];

  return (
    <section id="services" className="py-16 lg:py-32 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12 mb-12 lg:mb-20">
          <div className="max-w-2xl text-center lg:text-left">
             <div className="mb-4 lg:mb-6 inline-flex items-center gap-3 text-editorial-meta text-brand-primary italic">
              Our Expertise
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif mb-6 italic">Precision Services.</h2>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">
              From routine maintenance to complex implant surgeries, we provide a full spectrum of dental services using the latest digital protocols.
            </p>
          </div>
          <button className="w-full lg:w-auto px-10 py-5 bg-brand-dark text-white text-[12px] uppercase tracking-widest font-black hover:bg-brand-primary transition-all">
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <ServiceCard 
              key={index}
              index={service.index}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
