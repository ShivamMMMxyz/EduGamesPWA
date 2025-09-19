import { Question } from '../types/game';

export const questions: Question[] = [
  // Questions have been removed as requested
];

export const regions = [
  { id: 'asia', name: 'Asia', unlocked: true, color: '#ef4444', icon: '🌏' },
  { id: 'europe', name: 'Europe', unlocked: true, color: '#3b82f6', icon: '🌍' },
  { id: 'africa', name: 'Africa', unlocked: false, color: '#f59e0b', icon: '🌍' },
  { id: 'americas', name: 'Americas', unlocked: false, color: '#10b981', icon: '🌎' },
  { id: 'oceania', name: 'Oceania', unlocked: false, color: '#8b5cf6', icon: '🌏' },
  { id: 'antarctica', name: 'Antarctica', unlocked: false, color: '#06b6d4', icon: '🧊' },
  { id: 'global', name: 'Global', unlocked: false, color: '#14b8a6', icon: '🌐' }
];

export const topics = [
  { id: 'capitals', name: 'Capitals', icon: '🏛️', color: '#ef4444' },
  { id: 'countries', name: 'Countries', icon: '🗺️', color: '#3b82f6' },
  { id: 'rivers', name: 'Rivers', icon: '🌊', color: '#06b6d4' },
  { id: 'landforms', name: 'Landforms', icon: '🏔️', color: '#f59e0b' },
  { id: 'climate', name: 'Climate', icon: '🌤️', color: '#8b5cf6' },
  { id: 'resources', name: 'Resources', icon: '⛏️', color: '#10b981' },
  { id: 'monuments', name: 'Monuments', icon: '🏛️', color: '#f97316' },
  { id: 'geography', name: 'Geography', icon: '🧭', color: '#ec4899' },
  { id: 'cities', name: 'Cities', icon: '🏙️', color: '#6366f1' }
];

export const badges = [
  {
    id: 'capital_master',
    name: 'Capital Master',
    description: 'Answer all capital questions correctly',
    icon: '🏅',
    requirement: '100% accuracy in capitals topic'
  },
  {
    id: 'map_explorer',
    name: 'Map Explorer',
    description: 'Identify 20 maps correctly',
    icon: '🗺️',
    requirement: '20 correct map identifications'
  },
  {
    id: 'geology_genius',
    name: 'Geology Genius',
    description: 'Score >80% in rocks & landforms',
    icon: '🌋',
    requirement: '80%+ accuracy in landforms topic'
  },
  {
    id: 'river_expert',
    name: 'River Expert',
    description: 'Master all river questions',
    icon: '🌊',
    requirement: '100% accuracy in rivers topic'
  },
  {
    id: 'climate_scientist',
    name: 'Climate Scientist',
    description: 'Excel in climate questions',
    icon: '🌡️',
    requirement: '90%+ accuracy in climate topic'
  }
];

