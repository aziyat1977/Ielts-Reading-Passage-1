import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { READING_PASSAGE_TITLE, SENTENCE_DATA, QUESTIONS_TF, QUESTIONS_GAP } from '../constants';
import { AlertCircle, CheckCircle, Clock, Trophy, AlertTriangle, XCircle, Pause, Play, RotateCcw, Square, Quote, ArrowRight, Brain, Lightbulb, List, Layout, MoveRight } from 'lucide-react';

type ExamStage = 'intro' | 'vocab' | 'exam' | 'analysis';

export default function StudentExam() {
  const [currentStage, setCurrentStage] = useState<ExamStage>('intro');
  
  // --- EXAM STATE ---
  const [activeTab, setActiveTab] = useState<'text' | 'questions'>('text');
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes
  const [isPaused, setIsPaused] = useState(false);
  const [visibleTranslations, setVisibleTranslations] = useState<Record<number, { ru: boolean; uz: boolean }>>({});
  
  // --- INTRO STATE ---
  const [pros, setPros] = useState(['', '', '']);
  const [cons, setCons] = useState(['', '', '']);

  // --- VOCAB STATE ---
  const [vocabMatches, setVocabMatches] = useState<Record<string, string>>({});
  const [vocabSubmitted, setVocabSubmitted] = useState(false);
  const vocabItems = [
    { word: "Scrutiny", def: "Critical observation or examination." },
    { word: "Gilded cage", def: "Living in luxury but without freedom." },
    { word: "Self-effacing", def: "Modest, not seeking attention." }
  ];

  // --- ANALYSIS STATE ---
  const [collocationAnswers, setCollocationAnswers] = useState({ q1: '', q2: '', q3: '' });
  const [analysisSubmitted, setAnalysisSubmitted] = useState(false);

  const totalQuestions = QUESTIONS_TF.length + QUESTIONS_GAP.length;
  // Count only non-empty answers
  const answeredCount = (Object.values(answers) as string[]).filter(val => val && val.trim().length > 0).length;
  const progressPercentage = Math.min(100, Math.max(0, (answeredCount / totalQuestions) * 100));
  
  // Refs for navigation
  const questionRefs = useRef<Record<number, HTMLDivElement | null>>({});

  // Handle Resize for desktop split view
  useEffect(() => {
    const handleResize = () => {
      // Logic if needed for complex layouts
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Timer Logic
  useEffect(() => {
    if (currentStage !== 'exam' || submitted || isPaused) return;
    
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted, isPaused, currentStage]);

  // --- EXAM HANDLERS ---
  const handleInputChange = (id: number, value: string) => {
    if (submitted || isPaused) return;
    if (timeLeft === 0) return; 
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const checkIsCorrect = (id: number) => {
    const val = answers[id];
    if (id <= 6) {
      const q = QUESTIONS_TF.find(item => item.id === id);
      return q ? val === q.correctAnswer : false;
    } else {
      const q = QUESTIONS_GAP.find(item => item.id === id);
      if (!q) return false;
      const userVal = (val || "").trim().toLowerCase();
      const correctVal = q.correctAnswer.toLowerCase();
      return userVal === correctVal || (q.correctAnswer === "dog" && userVal === "labrador");
    }
  };

  const calculateScore = () => {
    let newScore = 0;
    for (let i = 1; i <= totalQuestions; i++) {
        if (checkIsCorrect(i)) {
            newScore++;
        }
    }

    setScore(newScore);
    setSubmitted(true);
    setIsPaused(false);
    setActiveTab('questions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to reset the exam? All answers will be lost.")) {
      setAnswers({});
      setSubmitted(false);
      setScore(0);
      setTimeLeft(20 * 60);
      setIsPaused(false);
      setVisibleTranslations({});
    }
  };

  const handleStop = () => {
    if (window.confirm("Are you sure you want to stop and submit the exam now?")) {
      calculateScore();
    }
  };

  const togglePause = () => {
    if (!submitted) {
      setIsPaused(!isPaused);
    }
  };

  const toggleTranslation = (index: number, lang: 'ru' | 'uz') => {
    if (isPaused && !submitted) return; // Prevent interaction when paused
    setVisibleTranslations(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [lang]: !prev[index]?.[lang]
      }
    }));
  };

  const scrollToQuestion = (id: number) => {
    if (isPaused) return;
    setActiveTab('questions');
    questionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const getStatusColor = (id: number, correctVal: string) => {
    if (!submitted) return "border-slate-200 focus:border-blue-500 focus:ring-blue-500";
    
    const isCorrect = checkIsCorrect(id);
    return isCorrect
      ? "border-green-500 bg-green-50 text-green-700 font-bold" 
      : "border-red-300 bg-red-50 text-red-700 line-through decoration-red-400 opacity-70";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // --- RENDER HELPERS ---

  const isLowTime = timeLeft < 120 && timeLeft > 0;
  const isTimeUp = timeLeft === 0;
  
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const progress = timeLeft / (20 * 60);
  const strokeDashoffset = circumference - (progress * circumference);

  // --- STAGE COMPONENTS ---

  const StageIntro = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
      className="max-w-3xl mx-auto p-6"
    >
      <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
        <div className="h-64 bg-slate-800 relative overflow-hidden group">
             {/* Fallback pattern if image fails or for aesthetic */}
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200" 
               alt="London Westminster" 
               className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute bottom-0 left-0 p-8 z-20">
                <span className="bg-gov-gold text-gov-blue text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase">Stage 1: Lead-in</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Life at Number 10</h2>
                <p className="text-slate-200 text-lg">Context Setting & Discussion</p>
             </div>
        </div>
        
        <div className="p-8">
           <div className="flex items-start space-x-4 mb-8">
              <div className="p-3 bg-blue-50 rounded-full text-gov-blue">
                 <Layout className="w-6 h-6" />
              </div>
              <div>
                  <h3 className="text-xl font-bold text-gov-blue mb-2">Private Life vs. Public Duty</h3>
                  <p className="text-slate-600">
                    Imagine living inside 10 Downing Street. It is both a family home and a national headquarters.
                    <br/><span className="italic text-slate-500">"What are the pros and cons of being the Prime Minister's wife?"</span>
                  </p>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                 <h4 className="font-bold text-green-800 mb-4 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" /> Pros (Positives)
                 </h4>
                 <div className="space-y-3">
                    {pros.map((val, i) => (
                       <input 
                         key={i}
                         type="text"
                         placeholder={`Benefit ${i+1}...`}
                         value={val}
                         onChange={(e) => {
                             const newPros = [...pros];
                             newPros[i] = e.target.value;
                             setPros(newPros);
                         }}
                         className="w-full px-4 py-2 rounded border border-green-200 focus:ring-2 focus:ring-green-500 outline-none text-sm"
                       />
                    ))}
                 </div>
              </div>

              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                 <h4 className="font-bold text-red-800 mb-4 flex items-center">
                    <AlertTriangle className="w-4 h-4 mr-2" /> Cons (Negatives)
                 </h4>
                 <div className="space-y-3">
                    {cons.map((val, i) => (
                       <input 
                         key={i}
                         type="text"
                         placeholder={`Drawback ${i+1}...`}
                         value={val}
                         onChange={(e) => {
                             const newCons = [...cons];
                             newCons[i] = e.target.value;
                             setCons(newCons);
                         }}
                         className="w-full px-4 py-2 rounded border border-red-200 focus:ring-2 focus:ring-red-500 outline-none text-sm"
                       />
                    ))}
                 </div>
              </div>
           </div>

           <div className="flex justify-end">
              <button 
                onClick={() => setCurrentStage('vocab')}
                className="bg-gov-blue text-white hover:bg-blue-900 font-bold py-3 px-8 rounded-full shadow-md flex items-center space-x-2 transition-transform hover:scale-105"
              >
                 <span>Continue to Vocabulary</span>
                 <ArrowRight className="w-4 h-4" />
              </button>
           </div>
        </div>
      </div>
    </motion.div>
  );

  const StageVocab = () => {
    // Only verify if all are selected
    const allSelected = Object.keys(vocabMatches).length === 3;
    const checkVocab = () => {
       setVocabSubmitted(true);
    };

    const isVocabCorrect = (word: string) => {
       const correctDef = vocabItems.find(v => v.word === word)?.def;
       return vocabMatches[word] === correctDef;
    };

    const allCorrect = vocabItems.every(v => isVocabCorrect(v.word));

    return (
      <motion.div 
        initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
        className="max-w-3xl mx-auto p-6"
      >
         <div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden p-8">
            <div className="mb-8 text-center">
               <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block uppercase">Stage 2: Pre-teaching</span>
               <h2 className="text-3xl font-serif font-bold text-gov-blue mb-2">Key Vocabulary</h2>
               <p className="text-slate-500">Match the words to their correct definitions before reading.</p>
            </div>

            <div className="grid gap-6 mb-8">
               {vocabItems.map((item) => (
                  <div key={item.word} className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="font-bold text-xl text-gov-blue md:w-1/3 flex items-center">
                         {item.word}
                         {vocabSubmitted && isVocabCorrect(item.word) && <CheckCircle className="w-5 h-5 text-green-500 ml-2" />}
                         {vocabSubmitted && !isVocabCorrect(item.word) && <XCircle className="w-5 h-5 text-red-500 ml-2" />}
                      </div>
                      
                      <div className="flex items-center md:w-2/3">
                         <MoveRight className="w-5 h-5 text-slate-300 mr-4 hidden md:block" />
                         <select 
                           value={vocabMatches[item.word] || ''}
                           disabled={vocabSubmitted && allCorrect}
                           onChange={(e) => setVocabMatches(prev => ({ ...prev, [item.word]: e.target.value }))}
                           className={`flex-1 p-3 rounded-lg border outline-none cursor-pointer transition-colors ${
                              vocabSubmitted 
                                ? (isVocabCorrect(item.word) ? 'border-green-500 bg-green-50 text-green-800' : 'border-red-300 bg-red-50 text-red-800')
                                : 'border-slate-200 bg-white hover:border-blue-300'
                           }`}
                         >
                            <option value="" disabled>Select definition...</option>
                            {vocabItems.map(opt => (
                               <option key={opt.def} value={opt.def}>{opt.def}</option>
                            ))}
                         </select>
                      </div>
                  </div>
               ))}
            </div>

            <div className="flex justify-between items-center">
                <button onClick={() => setCurrentStage('intro')} className="text-slate-400 hover:text-slate-600 font-medium">Back</button>
                
                {!vocabSubmitted || !allCorrect ? (
                    <button 
                      onClick={checkVocab}
                      disabled={!allSelected}
                      className={`font-bold py-3 px-8 rounded-full shadow-md transition-all ${allSelected ? 'bg-gov-blue text-white hover:bg-blue-900' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                       Check Answers
                    </button>
                ) : (
                    <button 
                      onClick={() => setCurrentStage('exam')}
                      className="bg-green-600 text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full shadow-md flex items-center space-x-2 animate-bounce"
                    >
                       <span>Start Examination</span>
                       <Clock className="w-4 h-4" />
                    </button>
                )}
            </div>
         </div>
      </motion.div>
    );
  };

  const StageAnalysis = () => {
     const solutions = {
         q1: "expectations",
         q2: "conscience",
         q3: "mindset"
     };

     const checkAnalysis = () => {
         setAnalysisSubmitted(true);
     };

     return (
       <motion.div 
         initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
         className="max-w-3xl mx-auto p-6"
       >
         <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
            <div className="mb-8 text-center">
               <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2 py-1 rounded mb-3 inline-block uppercase">Stage 4: Post-Exam</span>
               <h2 className="text-3xl font-serif font-bold text-gov-blue mb-2">Language Analysis</h2>
               <p className="text-slate-500">Focus on Collocations. Complete the phrases from the text context.</p>
            </div>

            <div className="space-y-6 mb-8">
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                    <div className="grid gap-6">
                        {/* Q1 */}
                        <div className="flex items-center gap-3">
                           <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">1</span>
                           <div className="flex-1 text-lg">
                              <span className="font-bold text-slate-700">High</span>
                              <input 
                                type="text" 
                                placeholder="..." 
                                value={collocationAnswers.q1}
                                onChange={e => setCollocationAnswers(prev => ({ ...prev, q1: e.target.value }))}
                                disabled={analysisSubmitted}
                                className={`mx-2 border-b-2 bg-transparent outline-none text-center w-32 font-mono ${
                                    analysisSubmitted 
                                    ? (collocationAnswers.q1.toLowerCase().includes('expect') ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                                    : 'border-slate-300 focus:border-indigo-500'
                                }`}
                              />
                           </div>
                           {analysisSubmitted && <span className="text-sm text-slate-400 font-mono">({solutions.q1})</span>}
                        </div>

                        {/* Q2 */}
                        <div className="flex items-center gap-3">
                           <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">2</span>
                           <div className="flex-1 text-lg">
                              <span className="font-bold text-slate-700">Clear</span>
                              <input 
                                type="text" 
                                placeholder="..." 
                                value={collocationAnswers.q2}
                                onChange={e => setCollocationAnswers(prev => ({ ...prev, q2: e.target.value }))}
                                disabled={analysisSubmitted}
                                className={`mx-2 border-b-2 bg-transparent outline-none text-center w-32 font-mono ${
                                    analysisSubmitted 
                                    ? (collocationAnswers.q2.toLowerCase().includes('conscien') ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                                    : 'border-slate-300 focus:border-indigo-500'
                                }`}
                              />
                           </div>
                           {analysisSubmitted && <span className="text-sm text-slate-400 font-mono">({solutions.q2})</span>}
                        </div>

                        {/* Q3 */}
                        <div className="flex items-center gap-3">
                           <span className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">3</span>
                           <div className="flex-1 text-lg">
                              <span className="font-bold text-slate-700">Entrepreneurial</span>
                              <input 
                                type="text" 
                                placeholder="..." 
                                value={collocationAnswers.q3}
                                onChange={e => setCollocationAnswers(prev => ({ ...prev, q3: e.target.value }))}
                                disabled={analysisSubmitted}
                                className={`mx-2 border-b-2 bg-transparent outline-none text-center w-32 font-mono ${
                                    analysisSubmitted 
                                    ? (collocationAnswers.q3.toLowerCase().includes('mind') ? 'border-green-500 text-green-700' : 'border-red-500 text-red-700')
                                    : 'border-slate-300 focus:border-indigo-500'
                                }`}
                              />
                           </div>
                           {analysisSubmitted && <span className="text-sm text-slate-400 font-mono">({solutions.q3})</span>}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center">
                 <button onClick={() => setCurrentStage('exam')} className="text-slate-400 hover:text-slate-600 font-medium">Review Exam</button>
                 {!analysisSubmitted ? (
                    <button 
                       onClick={checkAnalysis}
                       className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold py-3 px-8 rounded-full shadow-md transition-all"
                    >
                       Check Collocations
                    </button>
                 ) : (
                    <button 
                       onClick={() => window.location.hash = '#/'}
                       className="bg-slate-800 text-white hover:bg-slate-900 font-bold py-3 px-8 rounded-full shadow-md flex items-center space-x-2"
                    >
                       <CheckCircle className="w-4 h-4" />
                       <span>Finish Lesson</span>
                    </button>
                 )}
            </div>
         </div>
       </motion.div>
     );
  };


  // --- MAIN RENDER ---
  if (currentStage === 'intro') return <StageIntro />;
  if (currentStage === 'vocab') return <StageVocab />;
  if (currentStage === 'analysis') return <StageAnalysis />;

  // --- EXAM STAGE (EXISTING UI) ---
  return (
    <div className="h-[calc(100vh-64px)] overflow-hidden flex flex-col lg:flex-row bg-slate-50">
      
      {/* Mobile Tab Switcher */}
      <div className="lg:hidden bg-white border-b border-slate-200 p-2 flex justify-center space-x-4 shrink-0 z-30 relative shadow-sm">
        <button 
          onClick={() => setActiveTab('text')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'text' ? 'bg-gov-blue text-white' : 'text-slate-600'}`}
        >
          Reading Passage
        </button>
        <button 
          onClick={() => setActiveTab('questions')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'questions' ? 'bg-gov-blue text-white' : 'text-slate-600'}`}
        >
          Questions
        </button>
      </div>

      {/* Left Panel: Text with Translations */}
      <div className={`
        flex-1 h-full overflow-y-auto p-6 lg:p-10 border-r border-slate-200 bg-white
        ${activeTab === 'questions' ? 'hidden lg:block' : 'block'}
      `}>
        <div className="max-w-2xl mx-auto pb-10">
          <div className="mb-6 border-b border-slate-100 pb-4">
             <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded mb-2 inline-block uppercase">Stage 3: Task Cycle</span>
             <h2 className="text-3xl font-serif font-bold text-gov-blue leading-tight mt-1">
              {READING_PASSAGE_TITLE}
            </h2>
          </div>
          <div className={`space-y-4 ${isPaused && !submitted ? 'blur-sm select-none pointer-events-none' : ''}`}>
            {SENTENCE_DATA.map((item, index) => {
               const state = visibleTranslations[index] || { ru: false, uz: false };
               return (
                 <div key={index} className="group relative">
                    <p className="text-slate-700 font-serif leading-relaxed text-lg mb-2">
                       {item.en}
                       <span className="inline-flex ml-2 space-x-1 align-middle opacity-0 group-hover:opacity-100 transition-opacity">
                          <button 
                            onClick={() => toggleTranslation(index, 'ru')}
                            className={`text-[10px] px-1.5 py-0.5 rounded font-sans font-bold transition-colors ${state.ru ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500 hover:bg-slate-300'}`}
                          >
                            RU
                          </button>
                          <button 
                            onClick={() => toggleTranslation(index, 'uz')}
                            className={`text-[10px] px-1.5 py-0.5 rounded font-sans font-bold transition-colors ${state.uz ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-500 hover:bg-slate-300'}`}
                          >
                            UZ
                          </button>
                       </span>
                    </p>
                    <AnimatePresence>
                      {(state.ru || state.uz) && (
                         <motion.div 
                           initial={{ height: 0, opacity: 0 }}
                           animate={{ height: 'auto', opacity: 1 }}
                           exit={{ height: 0, opacity: 0 }}
                           className="bg-slate-50 rounded p-3 text-sm space-y-2 mb-4 overflow-hidden"
                         >
                            {state.ru && (
                              <div className="flex gap-2">
                                <span className="text-[10px] font-bold text-blue-600 uppercase mt-0.5 w-5 shrink-0">RU</span>
                                <span className="text-slate-600">{item.ru}</span>
                              </div>
                            )}
                            {state.uz && (
                              <div className="flex gap-2">
                                <span className="text-[10px] font-bold text-emerald-600 uppercase mt-0.5 w-5 shrink-0">UZ</span>
                                <span className="text-slate-600">{item.uz}</span>
                              </div>
                            )}
                         </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               );
            })}
          </div>
        </div>
      </div>

      {/* Right Panel: Questions Container */}
      <div className={`
        flex-1 h-full flex flex-col bg-slate-50 relative
        ${activeTab === 'text' ? 'hidden lg:block' : 'block'}
      `}>
        
        {/* Sticky Exam Header - Enhanced */}
        <div className="bg-white border-b border-slate-200 shadow-sm shrink-0 z-20">
            <div className="px-6 py-4">
              <div className="flex justify-between items-start mb-6">
                  {/* Enhanced Timer & Controls */}
                  <div className="flex flex-col">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="relative">
                          {/* Pulse Effect for Low Time */}
                          {isLowTime && !isPaused && (
                            <motion.div
                              className="absolute inset-0 rounded-full bg-red-500"
                              initial={{ opacity: 0, scale: 1 }}
                              animate={{ opacity: [0, 0.2, 0], scale: [1, 1.5, 1.2] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                            />
                          )}
                          <motion.div 
                            className="relative w-12 h-12 flex items-center justify-center bg-white rounded-full z-10"
                            animate={isLowTime && !isPaused ? { 
                              boxShadow: ["0 0 0px rgba(239, 68, 68, 0)", "0 0 15px rgba(239, 68, 68, 0.4)", "0 0 0px rgba(239, 68, 68, 0)"],
                              scale: [1, 1.05, 1],
                            } : {}}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <svg className="w-full h-full transform -rotate-90">
                              <circle
                                cx="24" cy="24" r={radius}
                                fill="transparent"
                                stroke={isLowTime ? "#fee2e2" : "#e2e8f0"}
                                strokeWidth="4"
                              />
                              <circle
                                cx="24" cy="24" r={radius}
                                fill="transparent"
                                stroke={isLowTime ? "#ef4444" : "#1d2433"}
                                strokeWidth="4"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                className="transition-colors duration-500 ease-in-out"
                              />
                            </svg>
                            <Clock className={`w-5 h-5 absolute transition-colors duration-500 ${isLowTime ? 'text-red-500' : 'text-gov-blue'}`} />
                          </motion.div>
                        </div>

                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Time Left</span>
                            <span className={`font-mono text-2xl font-bold transition-colors duration-500 ${isLowTime ? 'text-red-600' : 'text-gov-blue'}`}>
                                {formatTime(timeLeft)}
                            </span>
                        </div>
                      </div>
                      
                      {/* Controls */}
                      <div className="flex space-x-1 pl-1">
                        {!submitted && (
                          <>
                            <button 
                              onClick={togglePause}
                              title={isPaused ? "Resume" : "Pause"}
                              className={`p-1.5 rounded-md transition-colors ${isPaused ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                            >
                              {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                            </button>
                            <button 
                              onClick={handleReset}
                              title="Reset Exam"
                              className="p-1.5 rounded-md bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-600 transition-colors"
                            >
                              <RotateCcw className="w-4 h-4" />
                            </button>
                            <button 
                              onClick={handleStop}
                              title="Stop & Submit"
                              className="p-1.5 rounded-md bg-slate-100 text-slate-600 hover:bg-red-100 hover:text-red-600 transition-colors"
                            >
                              <Square className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                  </div>

                  {/* Status */}
                   <div className="text-right">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Status</span>
                      <span className={`font-bold text-lg ${isPaused && !submitted ? 'text-amber-500' : 'text-gov-blue'}`}>
                        {submitted ? "Completed" : isPaused ? "Paused" : "In Progress"}
                      </span>
                   </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-end mb-2">
                   <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Completion</span>
                   <span className="text-xs font-bold text-gov-blue">{Math.round(progressPercentage)}%</span>
                </div>
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden shadow-inner">
                   <motion.div 
                     className="h-full bg-gradient-to-r from-gov-blue to-blue-500"
                     initial={{ width: 0 }}
                     animate={{ width: `${progressPercentage}%` }}
                     transition={{ duration: 0.5, ease: "easeOut" }}
                   />
                </div>
              </div>

              {/* Question Navigator (Dots) */}
              <div className="flex flex-col space-y-2">
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Question Navigator</span>
                 </div>
                 <div className="flex flex-wrap gap-2">
                    {Array.from({ length: totalQuestions }, (_, i) => {
                       const id = i + 1;
                       const hasValue = answers[id] && answers[id].trim().length > 0;
                       const isCorrect = submitted && checkIsCorrect(id);
                       
                       let bgClass = "bg-slate-100 text-slate-300 border-slate-200 hover:border-blue-300 hover:text-blue-500";
                       if (submitted) {
                         bgClass = isCorrect ? "bg-green-500 text-white border-green-600" : "bg-red-500 text-white border-red-600";
                       } else if (hasValue) {
                         bgClass = "bg-gov-blue text-white border-gov-blue shadow-md ring-2 ring-blue-100 scale-105 font-bold";
                       }

                       return (
                         <button
                           key={id}
                           onClick={() => scrollToQuestion(id)}
                           disabled={isPaused}
                           className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border transition-all transform hover:scale-110 ${bgClass} ${isPaused ? 'opacity-50 cursor-not-allowed' : ''}`}
                         >
                           {id}
                         </button>
                       );
                    })}
                 </div>
              </div>
            </div>
        </div>

        {/* Scrollable Questions Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scroll-smooth bg-slate-50/50 relative">
          
          {/* Pause Overlay */}
          <AnimatePresence>
            {isPaused && !submitted && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/80 backdrop-blur-md z-40 flex flex-col items-center justify-center text-center p-6"
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-sm w-full">
                  <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Pause className="w-8 h-8 fill-current" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-gov-blue mb-2">Exam Paused</h3>
                  <p className="text-slate-500 mb-6">The timer is stopped. Resume to continue answering questions.</p>
                  <button 
                    onClick={togglePause}
                    className="w-full py-3 px-4 bg-gov-blue text-white rounded-lg font-bold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Play className="w-4 h-4" />
                    <span>Resume Exam</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="max-w-xl mx-auto space-y-10 pb-20">
            
            {/* Results Card */}
            <AnimatePresence>
                {submitted && (
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg text-center relative overflow-hidden mb-8"
                    >
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gov-blue to-gov-gold"></div>
                    <div className="inline-flex p-3 rounded-full bg-blue-50 mb-4">
                        <Trophy className="w-8 h-8 text-gov-gold" />
                    </div>
                    <h3 className="text-xl font-bold text-gov-blue mb-2">Examination Complete</h3>
                    <div className="text-5xl font-black text-gov-blue mb-2 tracking-tight">{score} <span className="text-2xl text-slate-400 font-medium">/ 13</span></div>
                    <p className="text-slate-500 font-medium mb-6">
                        {score >= 12 ? "Outstanding! Mastery level." : score >= 9 ? "Great job! Strong comprehension." : "Keep practicing. Review your answers below."}
                    </p>
                    <button 
                      onClick={() => setCurrentStage('analysis')}
                      className="inline-flex items-center space-x-2 bg-indigo-600 text-white font-bold py-2 px-6 rounded-full hover:bg-indigo-700 transition-colors"
                    >
                       <span>Proceed to Analysis</span>
                       <ArrowRight className="w-4 h-4" />
                    </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Time Up Alert */}
            <AnimatePresence>
                {isTimeUp && !submitted && (
                    <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center text-red-800 mb-8"
                    >
                        <AlertTriangle className="w-5 h-5 mr-3" />
                        <span className="font-bold">Time is up! Please submit your answers.</span>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Part 1 */}
            <section className={isPaused ? "blur-sm transition-all duration-300 pointer-events-none select-none" : "transition-all duration-300"}>
              <div className="mb-6 flex items-baseline justify-between border-b border-slate-200 pb-2">
                <div>
                    <span className="text-xs font-bold text-gov-gold uppercase tracking-wider">Part 1</span>
                    <h3 className="text-xl font-bold text-gov-blue">Identification</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Questions 1–6</span>
              </div>
              <p className="text-slate-500 text-sm mb-4 bg-blue-50 p-3 rounded border border-blue-100 italic">
                Do the following statements agree with the information in the text?
              </p>

              <div className="space-y-4">
                {QUESTIONS_TF.map((q) => {
                  const isCorrect = checkIsCorrect(q.id);
                  return (
                    <motion.div 
                      layout
                      key={q.id} 
                      ref={el => questionRefs.current[q.id] = el}
                      className={`bg-white p-5 rounded-lg border transition-all 
                        ${submitted 
                          ? (isCorrect ? 'border-green-200 ring-1 ring-green-100 bg-green-50/20' : 'border-red-200 ring-1 ring-red-100 bg-red-50/20')
                          : 'border-slate-200 shadow-sm hover:shadow-md'
                        }`}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 font-bold text-gov-blue text-sm mr-3 border border-slate-200">{q.id}</span>
                        <div className="flex-1">
                          <p className="text-slate-700 font-medium leading-relaxed pt-1">{q.text}</p>
                          
                          {/* Feedback Badge for Part 1 */}
                          {submitted && (
                            <div className="mt-2">
                              {isCorrect ? (
                                <span className="inline-flex items-center text-xs font-bold text-green-700 bg-green-100 px-2 py-1 rounded border border-green-200">
                                  <CheckCircle className="w-3 h-3 mr-1" /> Correct
                                </span>
                              ) : (
                                <span className="inline-flex items-center text-xs font-bold text-red-700 bg-red-100 px-2 py-1 rounded border border-red-200">
                                  <XCircle className="w-3 h-3 mr-1" /> Incorrect
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="ml-11 flex flex-wrap gap-2">
                        {q.options?.map((opt) => {
                           const isSelected = answers[q.id] === opt;
                           const isCorrectOption = opt === q.correctAnswer;
                           
                           let optionStyle = "bg-slate-50 text-slate-500 border-slate-200 hover:border-blue-300 hover:bg-white";
                           
                           if (!submitted) {
                             if (isSelected) optionStyle = "bg-gov-blue text-white border-gov-blue shadow-md";
                           } else {
                             if (isCorrectOption) {
                               // Highlight correct answer distinctly (Green)
                               optionStyle = "bg-green-600 text-white border-green-700 shadow-md ring-2 ring-green-200 z-10 transform scale-105";
                             } else if (isSelected) {
                               // Highlight user's wrong answer (Red)
                               optionStyle = "bg-red-100 text-red-800 border-red-300 line-through decoration-red-500 opacity-80";
                             } else {
                               // Dim irrelevant options
                               optionStyle = "opacity-40 bg-slate-50 grayscale border-slate-100";
                             }
                           }

                           return (
                             <label key={opt} className={`
                               relative overflow-hidden cursor-pointer px-4 py-2 rounded text-xs font-bold transition-all border flex items-center space-x-2
                               ${optionStyle}
                               ${submitted || isPaused ? 'pointer-events-none' : ''}
                             `}>
                               <input
                                 type="radio"
                                 name={`q-${q.id}`}
                                 value={opt}
                                 checked={isSelected}
                                 onChange={() => handleInputChange(q.id, opt)}
                                 disabled={submitted || isTimeUp || isPaused}
                                 className="hidden"
                               />
                               <span>{opt}</span>
                               {submitted && isCorrectOption && <CheckCircle className="w-3 h-3 ml-1" />}
                               {submitted && isSelected && !isCorrectOption && <XCircle className="w-3 h-3 ml-1" />}
                             </label>
                           );
                        })}
                      </div>
                      
                      {/* Evidence Block for FALSE answers */}
                      {submitted && q.evidence && (
                        <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                            className="ml-11 bg-orange-50 border-l-4 border-orange-300 p-4 rounded-r-lg shadow-sm"
                        >
                            <div className="flex items-start">
                              <AlertCircle className="w-4 h-4 text-orange-600 mt-0.5 mr-2 shrink-0" />
                              <div>
                                <h5 className="text-xs font-bold text-orange-800 uppercase tracking-wide mb-1">
                                  Why is this False?
                                </h5>
                                <p className="text-sm text-slate-700 mb-2">
                                  The text directly contradicts the statement:
                                </p>
                                <div className="bg-white/60 p-2 rounded border border-orange-100">
                                  <p className="text-sm text-slate-800 italic font-serif leading-relaxed">
                                    "{q.evidence}"
                                  </p>
                                </div>
                              </div>
                            </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Part 2 */}
            <section className={isPaused ? "blur-sm transition-all duration-300 pointer-events-none select-none" : "transition-all duration-300"}>
              <div className="mb-6 flex items-baseline justify-between border-b border-slate-200 pb-2">
                <div>
                    <span className="text-xs font-bold text-gov-gold uppercase tracking-wider">Part 2</span>
                    <h3 className="text-xl font-bold text-gov-blue">Sentence Completion</h3>
                </div>
                <span className="text-xs font-mono text-slate-400">Questions 7–13</span>
              </div>
              <p className="text-slate-500 text-sm mb-4 bg-blue-50 p-3 rounded border border-blue-100 italic">
                Complete the notes. Choose <strong className="text-gov-blue">ONE WORD ONLY</strong> from the passage.
              </p>

              <div className="space-y-4">
                {QUESTIONS_GAP.map((q) => {
                  const parts = q.text.split('[.....]');
                  const isCorrect = checkIsCorrect(q.id);
                  return (
                    <motion.div 
                        layout 
                        key={q.id} 
                        ref={el => questionRefs.current[q.id] = el}
                        className={`bg-white p-5 rounded-lg border shadow-sm transition-all relative overflow-hidden
                         ${submitted 
                          ? (isCorrect ? 'border-green-200 bg-green-50/20' : 'border-red-200 bg-red-50/20')
                          : 'border-slate-200 hover:shadow-md'
                         }
                        `}
                    >
                       {submitted && isCorrect && (
                         <div className="absolute top-2 right-2">
                           <CheckCircle className="w-5 h-5 text-green-500" />
                         </div>
                       )}
                       {submitted && !isCorrect && (
                         <div className="absolute top-2 right-2">
                           <XCircle className="w-5 h-5 text-red-500" />
                         </div>
                       )}

                      <div className="flex items-start text-slate-700 leading-loose">
                        <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 font-bold text-gov-blue text-sm mr-3 border border-slate-200">{q.id}</span>
                        <div className="flex-1">
                          <span>{parts[0]}</span>
                          <input
                            type="text"
                            value={answers[q.id] || ''}
                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                            disabled={submitted || isTimeUp || isPaused}
                            placeholder="?"
                            autoComplete="off"
                            className={`
                              mx-2 px-3 py-1 border-b-2 outline-none font-bold text-center transition-all min-w-[100px] rounded-t
                              ${getStatusColor(q.id, q.correctAnswer)}
                              ${submitted ? 'bg-transparent' : 'focus:w-40 focus:bg-blue-50'}
                              ${isPaused ? 'bg-slate-100 text-transparent' : ''}
                            `}
                          />
                          <span>{parts[1]}</span>
                          
                          {/* Part 2 Inline Feedback */}
                          {submitted && (
                            <div className="block mt-3">
                                {isCorrect ? (
                                    <span className="text-xs text-green-600 font-bold bg-green-100 px-2 py-0.5 rounded border border-green-200">Correct</span>
                                ) : (
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                                      <div className="text-xs text-red-600 font-bold inline-flex items-center bg-white border border-red-100 px-2 py-1 rounded shadow-sm opacity-80">
                                         <XCircle className="w-3 h-3 mr-1" /> Your Answer
                                      </div>
                                      <div className="text-xs font-bold inline-flex items-center bg-green-600 text-white border border-green-700 px-2 py-1 rounded shadow-sm">
                                          <CheckCircle className="w-3 h-3 mr-1 text-white" />
                                          Correct: <span className="ml-1 uppercase">{q.correctAnswer}</span>
                                      </div>
                                    </div>
                                )}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </section>

            {/* Final Review Navigator (Above Submit) */}
            {!submitted && !isPaused && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-6"
              >
                 <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 border-b border-slate-100 pb-2 flex justify-between">
                    <span>Final Review</span>
                    <span className={answeredCount === totalQuestions ? "text-green-600" : "text-slate-400"}>
                      {answeredCount} / {totalQuestions} Completed
                    </span>
                 </h4>
                 <div className="flex flex-wrap gap-2 justify-center">
                    {Array.from({ length: totalQuestions }, (_, i) => {
                       const id = i + 1;
                       const hasValue = answers[id] && answers[id].trim().length > 0;
                       return (
                         <button
                           key={id}
                           onClick={() => scrollToQuestion(id)}
                           className={`
                             w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border transition-all 
                             ${hasValue 
                               ? 'bg-gov-blue text-white border-gov-blue shadow-md ring-2 ring-blue-100 scale-105 hover:bg-blue-800' 
                               : 'bg-slate-50 text-slate-300 border-slate-200 hover:border-blue-300 hover:text-blue-400 hover:bg-white'
                             }
                           `}
                         >
                           {id}
                         </button>
                       );
                    })}
                 </div>
                 <div className="mt-4 text-center text-xs text-slate-400">
                    Review your answers before submitting. Click a number to jump to the question.
                 </div>
              </motion.div>
            )}

            {/* Submit Action */}
            {!submitted && (
              <motion.div 
                className="sticky bottom-6 flex justify-center pt-4"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <button
                  onClick={calculateScore}
                  disabled={isPaused}
                  className={`bg-gov-blue text-white hover:bg-blue-900 border-2 border-transparent hover:border-gov-gold font-bold py-4 px-10 rounded-full shadow-xl transform transition hover:scale-105 active:scale-95 flex items-center space-x-2 ${isPaused ? 'opacity-50 cursor-not-allowed hover:scale-100' : ''}`}
                >
                    <span>Submit Examination</span>
                    <CheckCircle className="w-5 h-5" />
                </button>
              </motion.div>
            )}
            
            {/* Back to Home (Post Submit) */}
            {submitted && (
                 <div className="flex justify-center pt-8">
                    <button onClick={() => window.location.hash = '#/'} className="text-slate-400 hover:text-gov-blue underline text-sm transition-colors">
                        Return to Dashboard
                    </button>
                 </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
