import React from 'react';
import { Difficulty } from '../types/game';

interface DifficultySelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDifficulty: (difficulty: Difficulty) => void;
  currentDifficulty: Difficulty;
}

const DifficultySelectionModal: React.FC<DifficultySelectionModalProps> = ({
  isOpen,
  onClose,
  onSelectDifficulty,
  currentDifficulty
}) => {
  if (!isOpen) return null;

  const difficulties: { value: Difficulty; label: string; description: string; icon: string }[] = [
    {
      value: 'beginner',
      label: 'Beginner',
      description: 'Perfect for newcomers. Basic geography questions with no time limit.',
      icon: '🌱'
    },
    {
      value: 'intermediate',
      label: 'Intermediate',
      description: 'For those with some knowledge. Moderate difficulty with a 20-second timer.',
      icon: '🌿'
    },
    {
      value: 'advanced',
      label: 'Advanced',
      description: 'For geography experts. Complex questions with a 15-second timer and no hints.',
      icon: '🌳'
    }
  ];

  const handleSelectDifficulty = (difficulty: Difficulty) => {
    onSelectDifficulty(difficulty);
    // Modal closing is now handled in the parent component
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-2 border-cyan-400/30">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-cyan-400">Choose Difficulty</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200 text-2xl"
            >
              ×
            </button>
          </div>

          <div className="space-y-4">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty.value}
                onClick={() => handleSelectDifficulty(difficulty.value)}
                className={`w-full p-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                  currentDifficulty === difficulty.value
                    ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 border border-slate-600 hover:bg-slate-600/50 hover:border-cyan-400/50'
                }`}
                style={{
                  boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)'
                }}
              >
                <div className="flex items-center">
                  <div className="text-3xl mr-4">{difficulty.icon}</div>
                  <div>
                    {/* <div className="font-bold text-grey-600 text-lg">{difficulty.label}</div> */}





  <div
    className={`font-bold text-lg ${
      difficulty.value === 'beginner'
        ? 'text-green-400'
        : difficulty.value === 'intermediate'
        ? 'text-yellow-400'
        : 'text-red-400'
    }`}
  >
    {difficulty.label}
  </div>


              

                    <div className="text-gray-500 text-sm">{difficulty.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 text-center text-cyan-300 text-sm">
            Choose wisely! Each difficulty affects scoring and available hints.
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifficultySelectionModal;






