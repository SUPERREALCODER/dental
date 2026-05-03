import { Star, Shield, Users, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChooseUs() {
  const highlights = [
    {
      index: "01",
      title: "Highly Rated",
      description: "With a 4.9-star rating on Google, we are proud to be one of Kolkata's most trusted names.",
    },
    {
      index: "02",
      title: "Patient-Centric",
      description: "Our philosophy is rooted in empathy. We listen and tailor treatments to your needs.",
    },
    {
      index: "03",
      title: "Advanced Tech",
      description: "From 3D scanning to painless implant procedures, we use the latest digital tools.",
    },
    {
      index: "04",
      title: "Prime Location",
      description: "Located centrally in Newtown, Kolkata, opposite Apollo Clinic for easy accessibility.",
    }
  ];

  return (
    <section id="about" className="py-32 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 text-editorial-meta text-brand-primary italic">
              Legacy of Trust
            </div>
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-brand-dark mb-6 italic">
              A New Standard in <br/>
              <span className="not-italic font-light">Clinical Excellence.</span>
            </h2>
          </div>
          <p className="text-xl text-slate-500 leading-relaxed font-medium pt-8">
            We don't just treat teeth; we care for people. Our commitment to excellence has made us a leader in implant and general dentistry in Newtown, providing peace of mind through precision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 border-l border-gray-100">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border-r border-b lg:border-b-0 border-gray-100 group hover:bg-brand-light transition-colors"
            >
              <div className="text-brand-primary text-sm font-black uppercase tracking-[0.2em] mb-6 italic">
                {item.index} / Trust
              </div>
              <h3 className="text-2xl font-serif mb-4 italic group-hover:text-brand-primary transition-colors">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-[13px] font-medium tracking-tight">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
