import React from 'react';
import { motion } from 'framer-motion';

interface SectionCardProps {
  children: React.ReactNode;
  title?: string;
  delay?: number;
  className?: string;
}

export const SectionCard: React.FC<SectionCardProps> = ({ children, title, delay = 0, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden ${className}`}
    >
      {title && (
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-gov-blue font-serif">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </motion.div>
  );
};