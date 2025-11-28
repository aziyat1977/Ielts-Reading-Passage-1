

export type QuestionType = 'boolean' | 'text';

export interface Question {
  id: number;
  text: string;
  type: QuestionType;
  options?: string[]; // For True/False/Not Given
  correctAnswer: string;
  evidence?: string; // Optional text snippet explaining the answer (mainly for False)
}

export interface LessonStage {
  id: number;
  name: string;
  time: string;
  procedure: string;
  instructions: {
    en: string;
    ru: string;
    uz: string;
  };
  details?: string[];
}

export interface VocabItem {
  word: string;
  definition: string;
  translations: {
    ru: string;
    uz: string;
  };
}

export interface ParaphraseItem {
  id: number;
  sourceText: string;
  examText: string;
  grammarPoint: string;
  meaning: string;
  form: string;
}

export interface VocabQuizItem {
  id: number;
  sentence: string;
  correctOption: string;
  options: string[];
  translation: string;
}

export interface VocabTestSet {
  id: number;
  title: string;
  questions: VocabQuizItem[];
}

export interface DiscussionQuestion {
  id: number;
  topic: string;
  question: string;
}

export interface LearningActivity {
  id: number;
  title: string;
  category: 'introvert' | 'extrovert';
  description: string;
  steps: string[];
}
