import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  index: string;
  image: string;
  className?: string;
}

export function ServiceCard({ title, description, index, image, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white border border-gray-100 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden cursor-pointer",
        className
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-light">
        <div className="absolute inset-0 bg-brand-dark/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
        />
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 bg-white/95 backdrop-blur-sm px-3 py-1.5 text-brand-primary text-[9px] sm:text-[10px] font-black uppercase tracking-widest italic shadow-sm">
          {index} / Service
        </div>
      </div>
      
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white relative z-20">
        <div>
          <h4 className="text-xl sm:text-2xl font-serif mb-3 italic group-hover:text-brand-primary transition-colors">{title}</h4>
          <p className="text-[12px] sm:text-[13px] leading-relaxed text-slate-500 font-medium tracking-tight">
            {description}
          </p>
        </div>
        <div className="mt-8 flex items-center text-[10px] font-black uppercase tracking-widest text-brand-primary group-hover:text-brand-dark transition-colors">
          Explore Service
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
