export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  imageUrl?: string;
  fact?: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  region: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  topic: string;
  region: string;
  timeLimit?: number;
}

export interface Player {
  id: string;
  name: string;
  level: number;
  xp: number;
  totalScore: number;
  badges: Badge[];
  unlockedRegions: string[];
  stats: {
    totalQuizzes: number;
    correctAnswers: number;
    totalAnswers: number;
    streak: number;
    bestStreak: number;
  };
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  requirement: string;
  unlocked: boolean;
  unlockedAt?: Date;
}

export interface GameState {
  currentQuiz: Quiz | null;
  currentQuestionIndex: number;
  score: number;
  timeLeft: number;
  isQuizActive: boolean;
  selectedAnswer: number | null;
  showResult: boolean;
  isCorrect: boolean;
  streak: number;
  hintsUsed: number;
  difficulty: Difficulty;
}

export interface Region {
  id: string;
  name: string;
  unlocked: boolean;
  color: string;
  icon: string;
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type Topic = 'capitals' | 'landforms' | 'rivers' | 'climate' | 'maps' | 'resources' | 'monuments' | 'countries';
