import React from 'react';
import { HashRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, GraduationCap, School } from 'lucide-react';
import Home from './pages/Home';
import TeacherPlan from './pages/TeacherPlan';
import StudentExam from './pages/StudentExam';
import LearningMode from './pages/LearningMode';

const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="bg-gov-blue text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <School className="h-8 w-8 text-gov-gold group-hover:rotate-12 transition-transform" />
            <span className="font-serif font-bold text-xl tracking-tight">CELTA TBL</span>
          </Link>
          {!isHome && (
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto">
              <Link
                to="/teacher"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === '/teacher' 
                    ? 'bg-gov-gold text-gov-blue' 
                    : 'hover:bg-blue-800'
                }`}
              >
                Teacher Mode
              </Link>
              <Link
                to="/student"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === '/student' 
                    ? 'bg-white text-gov-blue' 
                    : 'hover:bg-blue-800'
                }`}
              >
                Student Mode
              </Link>
              <Link
                to="/learning"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === '/learning' 
                    ? 'bg-indigo-500 text-white' 
                    : 'hover:bg-blue-800'
                }`}
              >
                Learning Mode
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-100 border-t border-slate-200 mt-auto py-6">
    <div className="max-w-7xl mx-auto px-4 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Educational Resource. Based on IELTS Academic Reading.</p>
    </div>
  </footer>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<TeacherPlan />} />
        <Route path="/student" element={<StudentExam />} />
        <Route path="/learning" element={<LearningMode />} />
      </Routes>
    </AnimatePresence>
  );
};

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col font-sans bg-slate-50">
        <NavBar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}