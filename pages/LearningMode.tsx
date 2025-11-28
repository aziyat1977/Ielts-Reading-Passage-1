import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Languages, PenTool, MessageCircle, Brain, Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';
import { SENTENCE_DATA, EXTENSION_SENTENCES, PARAPHRASING_DATA, VOCAB_TEST_SETS, DISCUSSION_QUESTIONS } from '../constants';

type Tab = 'text' | 'grammar' | 'vocab' | 'speaking';

type DisplayItem = 
  | { type: 'header'; title: string }
  | { type: 'sentence'; en: string; ru: string; uz: string };

export default function LearningMode() {
  const [activeTab, setActiveTab] = useState<Tab>('text');
  const [visibleTranslations, setVisibleTranslations] = useState<Record<number, { ru: boolean; uz: boolean }>>({});
  const [revealedParaphrase, setRevealedParaphrase] = useState<number | null>(null);
  
  // Vocab Quiz State
  const [activeTestId, setActiveTestId] = useState<number>(1);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, string | null>>({});
  // Derived state for score is calculated on render or via simple memo, no need for complex state syncing

  // Speaking State
  const [activeTopic, setActiveTopic] = useState<string | null>(null);

  const toggleTranslation = (index: number, lang: 'ru' | 'uz') => {
    setVisibleTranslations(prev => ({
      ...prev,
      [index]: {
        ...prev[index],
        [lang]: !prev[index]?.[lang]
      }
    }));
  };

  const handleQuizAnswer = (id: number, option: string) => {
    if (quizAnswers[id]) return; // Prevent changing answer
    setQuizAnswers(prev => ({ ...prev, [id]: option }));
  };

  const activeTest = VOCAB_TEST_SETS.find(t => t.id === activeTestId) || VOCAB_TEST_SETS[0];
  
  // Calculate score for active test
  const currentTestScore = activeTest.questions.reduce((acc, q) => {
     if (quizAnswers[q.id] === q.correctOption) return acc + 1;
     return acc;
  }, 0);

  // Group Speaking Questions
  const topics = Array.from(new Set(DISCUSSION_QUESTIONS.map(q => q.topic)));

  const tabs = [
    { id: 'text', label: 'Text Study', icon: BookOpen },
    { id: 'grammar', label: 'Grammar & Paraphrasing', icon: PenTool },
    { id: 'vocab', label: 'Vocab Quiz', icon: Brain },
    { id: 'speaking', label: 'IELTS Speaking Part 1', icon: MessageCircle },
  ] as const;

  // Combine Original + Extension sentences for display
  // We need to offset the extension indices to avoid collision with original SENTENCE_DATA keys in visibleTranslations
  const allSentences: DisplayItem[] = [
    { type: 'header', title: "Original Text" },
    ...SENTENCE_DATA.map(d => ({ ...d, type: 'sentence' as const })),
    { type: 'header', title: "Extension: Further Context" },
    ...EXTENSION_SENTENCES.map(d => ({ ...d, type: 'sentence' as const }))
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 pb-20">
      <div className="mb-8 text-center">
        <div className="inline-block p-3 rounded-full bg-indigo-100 mb-4">
          <Languages className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-gov-blue mb-2">Learning Hub</h1>
        <p className="text-slate-500">Master the text through analysis, practice, and discussion.</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                isActive 
                  ? 'bg-gov-blue text-white shadow-md transform scale-105' 
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: TEXT STUDY */}
          {activeTab === 'text' && (
            <motion.div
              key="text"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
              {allSentences.map((item, flatIndex) => {
                if (item.type === 'header') {
                    return (
                        <div key={`h-${flatIndex}`} className="pt-8 pb-2 border-b border-slate-200">
                             <h3 className="text-xl font-bold text-gov-blue font-serif">{item.title}</h3>
                        </div>
                    );
                }

                // Calculate real index for state tracking logic (simplified for UI)
                const index = flatIndex; 
                const state = visibleTranslations[index] || { ru: false, uz: false };

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                  >
                    <div className="p-6">
                      <p className="text-lg text-slate-800 font-serif leading-relaxed mb-6">
                        {item.en}
                      </p>
                      
                      <div className="flex space-x-3 border-t border-slate-100 pt-4">
                        <button
                          onClick={() => toggleTranslation(index, 'ru')}
                          className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all flex items-center space-x-2 ${
                            state.ru 
                              ? 'bg-blue-600 text-white shadow-md' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <span>RU</span>
                        </button>
                        
                        <button
                          onClick={() => toggleTranslation(index, 'uz')}
                          className={`px-3 py-1.5 rounded-md text-sm font-bold transition-all flex items-center space-x-2 ${
                            state.uz 
                              ? 'bg-emerald-600 text-white shadow-md' 
                              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                          }`}
                        >
                          <span>UZ</span>
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {(state.ru || state.uz) && (
                        <div className="bg-slate-50 border-t border-slate-100">
                          <div className="p-6 space-y-4">
                            {state.ru && (
                              <motion.div 
                                initial={{ x: -10, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }}
                                className="flex gap-3"
                              >
                                <span className="text-xs font-bold text-blue-600 uppercase mt-1 shrink-0 w-6">RU</span>
                                <p className="text-slate-700">{item.ru}</p>
                              </motion.div>
                            )}
                            {state.uz && (
                              <motion.div 
                                initial={{ x: -10, opacity: 0 }} 
                                animate={{ x: 0, opacity: 1 }}
                                className="flex gap-3"
                              >
                                <span className="text-xs font-bold text-emerald-600 uppercase mt-1 shrink-0 w-6">UZ</span>
                                <p className="text-slate-700">{item.uz}</p>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* TAB 2: GRAMMAR & PARAPHRASING */}
          {activeTab === 'grammar' && (
            <motion.div
              key="grammar"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-gov-blue mb-2 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-gov-gold" />
                  Understanding Paraphrasing (MFP)
                </h3>
                <p className="text-slate-700">
                  IELTS Reading tests your ability to match meaning, not just words. Analyze how the exam questions rewrite the original text using different grammar and vocabulary (Meaning, Form).
                </p>
              </div>

              {PARAPHRASING_DATA.map((item) => {
                const isOpen = revealedParaphrase === item.id;
                return (
                  <div key={item.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-6 grid md:grid-cols-2 gap-6 relative">
                      {/* Original Text */}
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                         <span className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-2 block">Original Text</span>
                         <p className="font-serif text-slate-800 text-lg">"{item.sourceText}"</p>
                      </div>
                      
                      {/* Exam Question */}
                      <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                         <span className="text-xs font-bold text-indigo-400 uppercase tracking-wide mb-2 block">Exam Question</span>
                         <p className="font-medium text-indigo-900 text-lg">...{item.examText}...</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => setRevealedParaphrase(isOpen ? null : item.id)}
                      className="w-full py-3 bg-slate-50 border-t border-slate-100 text-sm font-bold text-slate-600 flex items-center justify-center hover:bg-slate-100 transition-colors"
                    >
                      {isOpen ? 'Hide Analysis' : 'Show MFP Analysis'}
                      {isOpen ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="bg-gov-blue text-white"
                        >
                          <div className="p-6 grid gap-6">
                            <div>
                              <h4 className="text-gov-gold font-bold text-xs uppercase mb-1">Grammar Point (Form)</h4>
                              <p className="font-mono text-sm opacity-90">{item.form}</p>
                              <p className="text-sm mt-1 font-bold">{item.grammarPoint}</p>
                            </div>
                            <div>
                              <h4 className="text-gov-gold font-bold text-xs uppercase mb-1">Meaning (Concept)</h4>
                              <p className="text-sm opacity-90">{item.meaning}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* TAB 3: VOCAB QUIZ */}
          {activeTab === 'vocab' && (
            <motion.div
              key="vocab"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-8"
            >
               {/* Test Selector */}
               <div className="flex flex-wrap gap-2 justify-center bg-slate-100 p-2 rounded-xl">
                  {VOCAB_TEST_SETS.map((test) => (
                      <button
                        key={test.id}
                        onClick={() => setActiveTestId(test.id)}
                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                            activeTestId === test.id
                            ? 'bg-white text-gov-blue shadow-sm'
                            : 'text-slate-500 hover:text-slate-800'
                        }`}
                      >
                          Test {test.id}
                      </button>
                  ))}
               </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 flex justify-between items-center">
                 <div>
                    <h3 className="font-bold text-gov-blue text-lg">{activeTest.title}</h3>
                    <p className="text-slate-500 text-sm">Select the best word to complete each sentence.</p>
                 </div>
                 <div className="text-right">
                    <div className="text-3xl font-black text-gov-blue">{currentTestScore} <span className="text-lg text-slate-400 font-medium">/ 10</span></div>
                    <span className="text-xs font-bold text-slate-400 uppercase">Score</span>
                 </div>
              </div>

              <div className="grid gap-6">
                {activeTest.questions.map((q) => {
                   const userAnswer = quizAnswers[q.id];
                   const isCorrect = userAnswer === q.correctOption;
                   const isAnswered = !!userAnswer;

                   return (
                     <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                       <p className="text-lg text-slate-700 font-medium mb-4">
                         {q.sentence.split('[.....]').map((part, i, arr) => (
                           <React.Fragment key={i}>
                             {part}
                             {i < arr.length - 1 && (
                               <span className={`inline-block w-32 border-b-2 mx-1 text-center font-bold px-1
                                 ${!isAnswered ? 'border-slate-300 text-transparent' : ''}
                                 ${isAnswered && isCorrect ? 'border-green-500 text-green-600 bg-green-50 rounded-t' : ''}
                                 ${isAnswered && !isCorrect ? 'border-red-500 text-red-600 bg-red-50 rounded-t' : ''}
                               `}>
                                 {userAnswer || '.....'}
                               </span>
                             )}
                           </React.Fragment>
                         ))}
                       </p>

                       <div className="flex flex-wrap gap-3">
                         {q.options.map((opt) => (
                           <button
                             key={opt}
                             onClick={() => handleQuizAnswer(q.id, opt)}
                             disabled={isAnswered}
                             className={`px-4 py-2 rounded-lg text-sm font-bold border transition-all
                               ${!isAnswered ? 'bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600' : ''}
                               ${isAnswered && opt === q.correctOption ? 'bg-green-100 border-green-500 text-green-700' : ''}
                               ${isAnswered && opt === userAnswer && opt !== q.correctOption ? 'bg-red-100 border-red-500 text-red-700' : ''}
                               ${isAnswered && opt !== userAnswer && opt !== q.correctOption ? 'opacity-40 grayscale' : ''}
                             `}
                           >
                             {opt}
                           </button>
                         ))}
                       </div>
                       
                       {isAnswered && (
                         <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 pt-4 border-t border-slate-100">
                            <p className="text-sm text-slate-500 italic">"{q.translation}"</p>
                         </motion.div>
                       )}
                     </div>
                   );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 4: SPEAKING */}
          {activeTab === 'speaking' && (
            <motion.div
              key="speaking"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-6"
            >
               <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100 mb-4">
                  <h3 className="font-bold text-indigo-900 mb-2">IELTS Speaking Part 1 (4-5 minutes)</h3>
                  <p className="text-indigo-800 text-sm">
                    In Part 1, the examiner asks you general questions about yourself, your home, work, studies, and interests. 
                    Practice answering these 2025 forecast topics naturally.
                  </p>
               </div>

               <div className="grid gap-4">
                   {topics.map(topic => {
                       const questions = DISCUSSION_QUESTIONS.filter(q => q.topic === topic);
                       const isOpen = activeTopic === topic;

                       return (
                           <div key={topic} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                               <button 
                                 onClick={() => setActiveTopic(isOpen ? null : topic)}
                                 className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
                               >
                                   <div className="flex items-center space-x-3">
                                       <span className="bg-gov-blue text-white text-xs font-bold px-2 py-1 rounded uppercase w-8 h-8 flex items-center justify-center">
                                            {questions.length}
                                       </span>
                                       <span className="font-bold text-lg text-slate-800">{topic}</span>
                                   </div>
                                   {isOpen ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                               </button>
                               <AnimatePresence>
                                   {isOpen && (
                                       <motion.div
                                         initial={{ height: 0 }}
                                         animate={{ height: 'auto' }}
                                         exit={{ height: 0 }}
                                         className="bg-slate-50 border-t border-slate-100"
                                       >
                                           <div className="p-6 space-y-4">
                                               {questions.map((q, i) => (
                                                   <div key={q.id} className="flex items-start space-x-3">
                                                       <MessageCircle className="w-5 h-5 text-indigo-400 mt-0.5 shrink-0" />
                                                       <p className="text-slate-700 font-medium">{q.question}</p>
                                                   </div>
                                               ))}
                                           </div>
                                       </motion.div>
                                   )}
                               </AnimatePresence>
                           </div>
                       );
                   })}
               </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}