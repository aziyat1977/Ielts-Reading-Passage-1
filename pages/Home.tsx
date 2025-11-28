import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, Clock, Users, Languages } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block p-3 rounded-full bg-blue-100 mb-6">
          <Users className="w-12 h-12 text-gov-blue" />
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-gov-blue mb-4">
          Life at Number 10
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          IELTS Academic Reading Lesson Plan & Examination Simulation.
          <br/>Topic: Akshata Murty & Life in Downing Street.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Link to="/teacher" className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="h-full bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col items-center text-center transition-all group-hover:shadow-xl group-hover:border-gov-gold"
          >
            <div className="bg-gov-blue text-white p-4 rounded-full mb-6 group-hover:bg-gov-gold transition-colors">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gov-blue mb-3">Teacher's Master Pack</h2>
            <p className="text-slate-600 mb-6">
              Access the complete CELTA TBL lesson plan, timing, procedure, instructions, and answer keys.
            </p>
            <span className="mt-auto inline-flex items-center text-gov-blue font-medium group-hover:text-gov-gold">
              View Lesson Plan &rarr;
            </span>
          </motion.div>
        </Link>

        <Link to="/student" className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="h-full bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col items-center text-center transition-all group-hover:shadow-xl group-hover:border-blue-500"
          >
            <div className="bg-emerald-600 text-white p-4 rounded-full mb-6 group-hover:bg-emerald-500 transition-colors">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gov-blue mb-3">Student Exam Portal</h2>
            <p className="text-slate-600 mb-6">
              Interactive IELTS Reading task simulation. Read the passage and complete the 13 questions with instant feedback.
            </p>
            <div className="mt-auto flex items-center justify-center space-x-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>20 Minutes</span>
            </div>
          </motion.div>
        </Link>

        <Link to="/learning" className="group">
          <motion.div
            whileHover={{ y: -5 }}
            className="h-full bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col items-center text-center transition-all group-hover:shadow-xl group-hover:border-indigo-500"
          >
            <div className="bg-indigo-600 text-white p-4 rounded-full mb-6 group-hover:bg-indigo-500 transition-colors">
              <Languages className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gov-blue mb-3">Learning Mode</h2>
            <p className="text-slate-600 mb-6">
              Study the text sentence by sentence with instant Russian and Uzbek translations hidden under toggle buttons.
            </p>
            <span className="mt-auto inline-flex items-center text-gov-blue font-medium group-hover:text-indigo-600">
              Start Learning &rarr;
            </span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}