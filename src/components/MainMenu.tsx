import React, { useState, useEffect } from 'react';
import { Player, Quiz, Difficulty, Topic } from '../types/game';
import { questions } from '../data/questions';
import DifficultySelectionModal from './DifficultySelectionModal';
// Import question data directly to ensure we're using the correct data
import { beginnerQuestions } from '../data/beginner';
import { intermediateQuestions } from '../data/intermediate';
import { advancedQuestions } from '../data/advanced';

interface MainMenuProps {
  onStartQuiz: (quiz: Quiz) => void;
  onViewProfile: () => void;
  onOpenSettings: () => void;
  player: Player;
}

const MainMenu: React.FC<MainMenuProps> = ({ onStartQuiz, onViewProfile, onOpenSettings, player }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('beginner');
  const [selectedTopic, setSelectedTopic] = useState<Topic>('capitals');
  const [selectedRegion, setSelectedRegion] = useState<string>('asia');
  const [showDifficultyModal, setShowDifficultyModal] = useState<boolean>(false);
  
  // Debug: Log the questions arrays when component mounts
  useEffect(() => {
    console.log('Beginner Questions Array:', beginnerQuestions);
    console.log('Intermediate Questions Array:', intermediateQuestions);
    console.log('Advanced Questions Array:', advancedQuestions);
  }, []);

  const createQuiz = (): Quiz => {
    let filteredQuestions;
    let questionLimit = selectedDifficulty === 'beginner' ? beginnerQuestions.length : selectedDifficulty === 'intermediate' ? 20 : 20;
    
    console.log('Creating quiz with difficulty:', selectedDifficulty);
    
    // Ensure we're using the correct question arrays
    if (selectedDifficulty === 'beginner') {
      // For beginner level, use only questions with difficulty 'beginner'
      filteredQuestions = beginnerQuestions.filter(q => q.difficulty === 'beginner');
      console.log('Selected beginner questions:', filteredQuestions.length);
    } else if (selectedDifficulty === 'intermediate') {
      // For intermediate level, use intermediate questions only
      // Make sure we're using the correct array
      filteredQuestions = intermediateQuestions.slice(0, questionLimit);
      
      // Debug information
      console.log('Intermediate questions available:', intermediateQuestions.length);
      console.log('Selected intermediate questions:', filteredQuestions.length);
      
      // Verify the questions are actually intermediate
      if (filteredQuestions.length > 0) {
        console.log('First selected question ID:', filteredQuestions[0].id);
        console.log('First selected question difficulty:', filteredQuestions[0].difficulty);
      }
    } else {
      // For advanced level, use advanced questions array
      filteredQuestions = advancedQuestions.slice(0, 20); // Show up to 20 advanced questions
      console.log('Selected advanced questions:', filteredQuestions.length);
      
      // Verify the questions are actually advanced
      if (filteredQuestions.length > 0) {
        console.log('First selected advanced question ID:', filteredQuestions[0].id);
        console.log('First selected advanced question difficulty:', filteredQuestions[0].difficulty);
      }
    }

    return {
      id: `${selectedDifficulty}-${selectedTopic}-${selectedRegion}`,
      title: selectedDifficulty === 'beginner'
        ? `All Topics - Beginner`
        : selectedDifficulty === 'intermediate'
          ? `All Topics - Intermediate`
          : `Advanced Geography Quiz`,
      questions: filteredQuestions,
      difficulty: selectedDifficulty,
      topic: selectedTopic,
      region: selectedRegion,
      timeLimit: selectedDifficulty === 'beginner' ? undefined : selectedDifficulty === 'intermediate' ? 20 : 15
    };
  };

  const handleStartQuiz = () => {
    // Show difficulty selection modal instead of starting quiz immediately
    setShowDifficultyModal(true);
  };
  
  const handleSelectDifficulty = (difficulty: Difficulty) => {
    console.log('Selected difficulty:', difficulty);
    
    // Set the difficulty state first
    setSelectedDifficulty(difficulty);
    setShowDifficultyModal(false);
    
    // Create quiz with the selected difficulty after a short delay
    setTimeout(() => {
      console.log('Creating quiz with difficulty:', difficulty);
      
      // Create the quiz with the selected difficulty
      const quiz = {
        id: `${difficulty}-quiz`,
        title: difficulty === 'beginner' 
          ? 'Beginner Geography Quiz' 
          : difficulty === 'intermediate' 
            ? 'Intermediate Geography Quiz' 
            : 'Advanced Geography Quiz',
        difficulty: difficulty,
        topic: 'all',
        region: 'all',
        timeLimit: difficulty === 'beginner' ? undefined : difficulty === 'intermediate' ? 20 : 15,
        questions: difficulty === 'beginner' 
          ? beginnerQuestions.filter(q => q.difficulty === 'beginner')
          : difficulty === 'intermediate' 
            ? intermediateQuestions.slice(0, 20)
            : advancedQuestions.slice(0, 20)
      };
      
      if (quiz.questions.length === 0) {
        alert('No questions available for this difficulty. Please try a different difficulty.');
        return;
      }
      
      console.log('Starting quiz with difficulty:', quiz.difficulty);
      console.log('Quiz questions:', quiz.questions.length);
      
      // Start the quiz
      onStartQuiz(quiz);
    }, 100); // Small delay to ensure modal is closed before quiz starts
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Sci-Fi Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Header */}
      <div className="text-center pt-6 md:pt-8 pb-2 md:pb-4 relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-400 mb-1 md:mb-2 drop-shadow-2xl" style={{
          textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)'
        }}>
          GeoExplorer
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-2 md:mb-4">Embark on Your Global Journey!</p>
        
        {/* User Icon - Top Right */}
        <div className="absolute top-4 md:top-8 right-4 md:right-8">
          <button 
            onClick={() => onViewProfile()}
            className="group relative w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-full border-2 border-cyan-400/60 hover:border-cyan-300 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-2xl"
            style={{
              boxShadow: '0 0 25px rgba(6, 182, 212, 0.4), 0 0 50px rgba(6, 182, 212, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* 3D User Icon */}
            <div className="w-full h-full flex items-center justify-center text-2xl relative">
              <div 
                className="text-cyan-300 font-bold"
                style={{
                  textShadow: '0 0 10px rgba(6, 182, 212, 0.8), 0 2px 4px rgba(0, 0, 0, 0.5)',
                  filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))'
                }}
              >
                👤
              </div>
            </div>
            
            {/* Sci-Fi Level Badge */}
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg border border-orange-300/50"
                 style={{
                   boxShadow: '0 0 15px rgba(251, 146, 60, 0.6), 0 2px 4px rgba(0, 0, 0, 0.3)',
                   textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
                 }}>
              {player.level}
            </div>
            
            {/* Sci-Fi Hover Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-gradient-to-r from-slate-800/95 to-slate-900/95 backdrop-blur-sm text-cyan-300 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap border border-cyan-400/30"
                 style={{
                   boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 4px 8px rgba(0, 0, 0, 0.4)',
                   textShadow: '0 0 8px rgba(6, 182, 212, 0.6)'
                 }}>

              <div className="font-semibold">{player.name}</div>
              <div className="text-xs text-cyan-400">Level {player.level} Explorer</div>
            </div>
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-180px)] px-4 md:px-6 gap-4 md:gap-6">
        {/* Left Panel - Explore Topics */}
        <div className="w-full md:w-1/4 flex flex-col">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-cyan-500/30 shadow-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 mb-4 md:mb-6 text-center">
              {selectedDifficulty !== 'advanced' ? 'Explore Topics' : 'Advanced Quiz'}
            </h2>
            
            {/* Hexagonal Topic Grid - Only shown for beginner and intermediate difficulties */}
            {selectedDifficulty !== 'advanced' ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  { icon: '🌍', label: 'World Capitals', topic: 'capitals' },
                  { icon: '🌊', label: 'Rivers', topic: 'rivers' },
                  { icon: '🗺️', label: 'Maps', topic: 'maps' },
                  { icon: '🏴', label: 'Flags', topic: 'countries' },
                  { icon: '🌤️', label: 'Climate', topic: 'climate' },
                  { icon: '📚', label: 'History', topic: 'monuments' }
                ].map((item, index) => (
                  <button
                    key={item.topic}
                    onClick={() => setSelectedTopic(item.topic as Topic)}
                    className={`group relative p-2 md:p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      selectedTopic === item.topic
                        ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 hover:border-cyan-400/50'
                    }`}
                    style={{
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.4), 0 0 40px rgba(6, 182, 212, 0.2)'
                    }}
                  >
                    <div className="text-2xl md:text-3xl mb-1 md:mb-2">{item.icon}</div>
                    <div className="text-xs md:text-sm font-medium text-white group-hover:text-cyan-300">
                      {item.label}
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center p-4">
                <div className="text-3xl mb-4">🌟</div>
                <p className="text-cyan-300 font-medium">Advanced Quiz</p>
                <p className="text-sm text-white/70 mt-2">All topics included</p>
              </div>
            )}
            
            <div className="mt-6 text-center">
              <p className="text-cyan-300 text-sm">Unlock New Horizons with XP!</p>
            </div>
          </div>
        </div>

        {/* Center - Rotating Earth */}
        <div className="flex-1 flex items-start justify-center pt-4 order-first md:order-none">
          <div className="relative flex flex-col items-center w-full">
            {/* Rotating Earth with Real Image - Shifted Upward by 10% */}
            <div className="relative w-64 h-64 md:w-80 lg:w-96 md:h-80 lg:h-96 -mt-0 md:-mt-12">
              <div className="w-full h-full rounded-full overflow-hidden relative animate-spin-slow" style={{
                transform: 'rotateY(0deg) rotateZ(0deg)',
                animation: 'spin-slow 20s linear infinite'
              }}>
                {/* Real Earth Image */}
                <img 
                  src="/earth.png" 
                  alt="Earth from space"
                  className="w-full h-full object-cover rounded-full"
                  style={{
                    filter: 'brightness(1.1) contrast(1.1) saturate(1.2)',
                    transform: 'rotateZ(0deg)'
                  }}
                />
              </div>
            </div>
            
            {/* Sci-Fi Start Exploration Button */}
            <button 
              onClick={handleStartQuiz}
              className="mt-4 md:mt-8 px-6 md:px-12 py-4 md:py-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-xl text-cyan-300 font-bold text-lg md:text-xl hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              style={{
                boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)',
                textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
              }}
            >
              <span className="flex items-center space-x-3">
                <span>🚀</span>
                <span>Start Exploration</span>
                <span>🌍</span>
              </span>
            </button>
          </div>
        </div>

        {/* Right Panel - Adventure Mode */}
        <div className="w-full md:w-1/4 flex flex-col">
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30 shadow-2xl min-h-0 md:min-h-[347px]">
            <h2 className="text-xl md:text-2xl font-bold text-orange-400 mb-4 md:mb-6 text-center">Adventure Mode</h2>
            
            {/* World Map with Journey Path - Compact Size */}
            <div className="relative mb-4">
              <div className="w-full h-[140px] sm:h-[160px] md:h-[176px] bg-slate-700 rounded-lg relative overflow-hidden">
                {/* World Map Image */}
                <img 
                  src="/worldMap.jpg" 
                  alt="World Map"
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Journey Path Overlay */}
                <div className="absolute inset-0">
                  {/* Journey Path with Dots */}
                  <div className="absolute top-6 left-3 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-12 left-12 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                  <div className="absolute top-9 right-12 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                  <div className="absolute bottom-9 right-9 w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                  
                  {/* Connecting Lines */}
                  <svg className="absolute inset-0 w-full h-full">
                    <line x1="18" y1="24" x2="54" y2="48" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6,6" />
                    <line x1="54" y1="48" x2="102" y2="36" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6,6" />
                    <line x1="102" y1="36" x2="84" y2="84" stroke="#fbbf24" strokeWidth="3" strokeDasharray="6,6" />
                  </svg>
                </div>
              </div>
            </div>
            
            <button className="w-full py-2 md:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 text-sm md:text-base">
              <span>🧭</span>
              <span>Next Stop: Africa!</span>
            </button>
          </div>

          {/* Level Progress and Top Explorers - Side by Side Below Adventure Mode */}
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            {/* Level Progress - Left Side */}
            <div className="flex-1 bg-slate-800/80 backdrop-blur-sm rounded-lg p-2 border border-cyan-500/30 text-center min-h-[144px] flex flex-col justify-between">
              <div>
                <div className="text-cyan-400 font-semibold mb-1 text-sm md:text-base">Level {player.level} - Voyager</div>
                <div className="w-full h-1.5 bg-slate-700 rounded-full mb-1">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                    style={{ width: `${(player.xp % 1000) / 10}%` }}
                  ></div>
                </div>
                <div className="text-xs text-white/80 mb-2">Unlocking Intermediate</div>
              </div>
              
              {/* Achievements Inside Level Box */}
              <div className="border-t border-cyan-500/30 pt-1">
                <h4 className="text-orange-400 font-semibold mb-1 text-xs">Achievements</h4>
                <div className="flex justify-center space-x-1">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-xs shadow-lg">🏆</div>
                  <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center text-xs shadow-lg">👢</div>
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs shadow-lg">⏱️</div>
                </div>
              </div>
            </div>

            {/* Top Explorers - Right Side */}
            <div className="flex-1 min-h-[144px] flex flex-col justify-between">
              <div className="bg-slate-800/80 backdrop-blur-sm rounded-lg p-2 border border-orange-500/30 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-orange-400 font-semibold mb-1 flex items-center text-sm md:text-base">
                    <span className="mr-1">🏆</span>
                    Top Explorers
                  </h3>
                  <div className="space-y-0.5 text-white/80" style={{ fontSize: 'calc(0.75rem * 1.05)' }}>
                    <div>1. Shoheb</div>
                    <div>2. Shivam</div>
                    <div>3. Ananya</div>
                  </div>
                </div>
                
                {/* Social Icons */}
                <div className="flex space-x-1 mt-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center text-xs">📱</div>
                  <div className="w-4 h-4 bg-pink-500 rounded-full flex items-center justify-center text-xs">📷</div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs">🐦</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Difficulty Selection Modal */}
      <DifficultySelectionModal
        isOpen={showDifficultyModal}
        onClose={() => setShowDifficultyModal(false)}
        onSelectDifficulty={handleSelectDifficulty}
        currentDifficulty={selectedDifficulty}
      />
    </div>
  );
};

export default MainMenu;





