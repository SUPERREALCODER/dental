import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  index: string;
  className?: string;
}

export function ServiceCard({ title, description, index, className }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "bg-white border border-gray-100 p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300 group min-h-[280px]",
        className
      )}
    >
      <div className="text-brand-primary text-sm font-black uppercase tracking-widest mb-6 italic">
        {index} / Portfolio
      </div>
      <div>
        <h4 className="text-2xl font-serif mb-3 italic group-hover:text-brand-primary transition-colors">{title}</h4>
        <p className="text-[13px] leading-relaxed text-slate-500 font-medium tracking-tight">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
