import { Player, Badge, Question } from '../types/game';
import { badges } from '../data/questions';

export const calculateXP = (score: number, streak: number, difficulty: string): number => {
  let baseXP = score;
  let streakBonus = streak * 5;
  let difficultyMultiplier = 1;
  
  switch (difficulty) {
    case 'intermediate':
      difficultyMultiplier = 1.2;
      break;
    case 'advanced':
      difficultyMultiplier = 1.5;
      break;
    default:
      difficultyMultiplier = 1;
  }
  
  return Math.floor((baseXP + streakBonus) * difficultyMultiplier);
};

export const checkLevelUp = (currentXP: number, newXP: number): boolean => {
  const currentLevel = Math.floor(currentXP / 1000) + 1;
  const newLevel = Math.floor(newXP / 1000) + 1;
  return newLevel > currentLevel;
};

export const checkBadgeEarned = (player: Player, topic: string, accuracy: number, streak: number): Badge[] => {
  const newBadges: Badge[] = [];
  
  // Capital Master badge
  if (topic === 'capitals' && accuracy === 100 && !player.badges.some(b => b.id === 'capital_master')) {
    newBadges.push({
      ...badges.find(b => b.id === 'capital_master')!,
      unlocked: true,
      unlockedAt: new Date()
    });
  }
  
  // Streak Master badge
  if (streak >= 5 && !player.badges.some(b => b.id === 'streak_master')) {
    newBadges.push({
      id: 'streak_master',
      name: 'Streak Master',
      description: 'Achieve a 5+ question streak',
      icon: '🔥',
      requirement: '5+ consecutive correct answers',
      unlocked: true,
      unlockedAt: new Date()
    });
  }
  
  // Geology Genius badge
  if (topic === 'landforms' && accuracy >= 80 && !player.badges.some(b => b.id === 'geology_genius')) {
    newBadges.push({
      ...badges.find(b => b.id === 'geology_genius')!,
      unlocked: true,
      unlockedAt: new Date()
    });
  }
  
  // River Expert badge
  if (topic === 'rivers' && accuracy === 100 && !player.badges.some(b => b.id === 'river_expert')) {
    newBadges.push({
      ...badges.find(b => b.id === 'river_expert')!,
      unlocked: true,
      unlockedAt: new Date()
    });
  }
  
  // Climate Scientist badge
  if (topic === 'climate' && accuracy >= 90 && !player.badges.some(b => b.id === 'climate_scientist')) {
    newBadges.push({
      ...badges.find(b => b.id === 'climate_scientist')!,
      unlocked: true,
      unlockedAt: new Date()
    });
  }
  
  return newBadges;
};

export const unlockRegion = (player: Player, newLevel: number): string[] => {
  const newRegions: string[] = [];
  
  if (newLevel >= 2 && !player.unlockedRegions.includes('africa')) {
    newRegions.push('africa');
  }
  if (newLevel >= 3 && !player.unlockedRegions.includes('americas')) {
    newRegions.push('americas');
  }
  if (newLevel >= 4 && !player.unlockedRegions.includes('oceania')) {
    newRegions.push('oceania');
  }
  if (newLevel >= 5 && !player.unlockedRegions.includes('antarctica')) {
    newRegions.push('antarctica');
  }
  
  return newRegions;
};

export const getPerformanceMessage = (accuracy: number, streak: number): { message: string; color: string; emoji: string } => {
  if (accuracy >= 95 && streak >= 5) {
    return { message: "Perfect! You're a Geography Master! 🌟", color: "text-yellow-600", emoji: "🏆" };
  }
  if (accuracy >= 90) {
    return { message: "Outstanding! 🌟", color: "text-yellow-600", emoji: "⭐" };
  }
  if (accuracy >= 80) {
    return { message: "Excellent! 🎉", color: "text-green-600", emoji: "🎯" };
  }
  if (accuracy >= 70) {
    return { message: "Good job! 👍", color: "text-blue-600", emoji: "💪" };
  }
  if (accuracy >= 60) {
    return { message: "Not bad! 💪", color: "text-orange-600", emoji: "📚" };
  }
  return { message: "Keep practicing! 📚", color: "text-red-600", emoji: "🎓" };
};

export const generateQuizId = (difficulty: string, topic: string, region: string): string => {
  return `${difficulty}-${topic}-${region}-${Date.now()}`;
};

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getRandomQuestions = (questions: Question[], count: number): Question[] => {
  return shuffleArray(questions).slice(0, count);
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const getDifficultyColor = (difficulty: string): string => {
  switch (difficulty) {
    case 'beginner':
      return 'text-green-600';
    case 'intermediate':
      return 'text-yellow-600';
    case 'advanced':
      return 'text-red-600';
    default:
      return 'text-gray-600';
  }
};

export const getTopicIcon = (topic: string): string => {
  const icons: { [key: string]: string } = {
    capitals: '🏛️',
    countries: '🗺️',
    rivers: '🌊',
    landforms: '🏔️',
    climate: '🌤️',
    resources: '⛏️',
    monuments: '🏛️'
  };
  return icons[topic] || '🌍';
};

