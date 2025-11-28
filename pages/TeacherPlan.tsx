import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LESSON_STAGES, VOCABULARY, QUESTIONS_TF, QUESTIONS_GAP } from '../constants';
import { SectionCard } from '../components/SectionCard';
import { CheckCircle, Globe, Lightbulb } from 'lucide-react';

export default function TeacherPlan() {
  const [activeLang, setActiveLang] = useState<'en' | 'ru' | 'uz'>('en');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif font-bold text-gov-blue">Teacher's Master Pack</h1>
          <p className="text-slate-500">CELTA TBL Lesson Plan (50 Minutes)</p>
        </div>
        
        {/* Language Toggle */}
        <div className="bg-white rounded-lg p-1 border border-slate-200 flex space-x-1 shadow-sm self-start">
          {(['en', 'ru', 'uz'] as const).map(lang => (
            <button
              key={lang}
              onClick={() => setActiveLang(lang)}
              className={`px-3 py-1.5 rounded-md text-sm font-medium uppercase transition-colors ${
                activeLang === lang 
                  ? 'bg-gov-blue text-white shadow-sm' 
                  : 'text-slate-500 hover:bg-slate-100'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6">
        {LESSON_STAGES.map((stage, index) => (
          <SectionCard key={stage.id} delay={index * 0.1} className="border-l-4 border-l-gov-blue">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex flex-col">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Stage {stage.id}</span>
                <h3 className="text-xl font-bold text-gov-blue mb-1">{stage.name}</h3>
                <div className="flex items-center text-amber-600 font-mono text-sm">
                  <span className="bg-amber-100 px-2 py-1 rounded">{stage.time}</span>
                </div>
              </div>
              
              <div className="md:w-3/4 space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-2 flex items-center">
                    <Lightbulb className="w-4 h-4 mr-2 text-gov-gold" />
                    Procedure
                  </h4>
                  <p className="text-slate-600">{stage.procedure}</p>
                </div>
                
                {stage.details && (
                  <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                     <p className="text-xs font-bold text-slate-400 uppercase mb-2">Key Items</p>
                     <div className="flex flex-wrap gap-2">
                       {stage.details.map((item, i) => (
                         <span key={i} className="px-2 py-1 bg-white border border-slate-200 rounded text-sm text-slate-700">{item}</span>
                       ))}
                     </div>
                  </div>
                )}

                <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <h4 className="font-semibold text-gov-blue mb-2 flex items-center text-sm">
                    <Globe className="w-4 h-4 mr-2" />
                    Instruction ({activeLang.toUpperCase()})
                  </h4>
                  <p className="text-slate-700 italic font-serif">"{stage.instructions[activeLang]}"</p>
                </div>
              </div>
            </div>
          </SectionCard>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <SectionCard title="Vocabulary Reference (Stage 2)">
          <ul className="space-y-4">
            {VOCABULARY.map((v, i) => (
              <li key={i} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-lg text-gov-blue">{v.word}</span>
                </div>
                <p className="text-slate-600 text-sm mb-2">{v.definition}</p>
                <div className="text-xs text-slate-400 space-x-3">
                  <span>RU: <span className="text-slate-600">{v.translations.ru}</span></span>
                  <span>UZ: <span className="text-slate-600">{v.translations.uz}</span></span>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Answer Key (Stage 5)">
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Questions 1-6 (T/F/NG)</h4>
              <ul className="space-y-2">
                {QUESTIONS_TF.map((q) => (
                  <li key={q.id} className="flex justify-between text-sm">
                    <span className="text-slate-500">Q{q.id}:</span>
                    <span className="font-mono font-bold text-gov-blue">{q.correctAnswer}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-400 uppercase mb-3">Questions 7-13 (One Word)</h4>
              <ul className="space-y-2">
                {QUESTIONS_GAP.map((q) => (
                  <li key={q.id} className="flex justify-between text-sm">
                    <span className="text-slate-500">Q{q.id}:</span>
                    <span className="font-mono font-bold text-gov-blue">{q.correctAnswer}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}