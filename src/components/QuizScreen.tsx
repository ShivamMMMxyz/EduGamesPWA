import React, { useState, useEffect } from 'react';
import { GameState } from '../types/game';

interface QuizScreenProps {
  gameState: GameState;
  setGameState: React.Dispatch<React.SetStateAction<GameState>>;
  onEndQuiz: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ gameState, setGameState, onEndQuiz }) => {
  const [showConfetti, setShowConfetti] = useState(false);

  const currentQuestion = gameState.currentQuiz?.questions[gameState.currentQuestionIndex];
  const totalQuestions = gameState.currentQuiz?.questions.length || 0;
  const progress = ((gameState.currentQuestionIndex + 1) / totalQuestions) * 100;

  // Timer effect
  useEffect(() => {
    if (!gameState.isQuizActive || gameState.timeLeft <= 0) return;

    const timer = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        timeLeft: prev.timeLeft - 1
      }));
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState.isQuizActive, gameState.timeLeft, setGameState]);

  // Auto-advance when time runs out
  useEffect(() => {
    if (gameState.timeLeft <= 0 && gameState.isQuizActive) {
      handleAnswer(-1); // -1 means time ran out
    }
  }, [gameState.timeLeft, gameState.isQuizActive]);

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion || gameState.showResult) return;

    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const points = isCorrect ? 10 + (gameState.streak * 2) : 0;
    const newStreak = isCorrect ? gameState.streak + 1 : 0;

    setGameState(prev => ({
      ...prev,
      selectedAnswer: answerIndex,
      showResult: true,
      isCorrect,
      score: prev.score + points,
      streak: newStreak
    }));

    if (isCorrect) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 2500);
    }
  };

  const nextQuestion = () => {
    if (gameState.currentQuestionIndex + 1 >= totalQuestions) {
      onEndQuiz();
    } else {
      setGameState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        selectedAnswer: null,
        showResult: false,
        isCorrect: false,
        timeLeft: prev.currentQuiz?.timeLimit || 20
      }));
    }
  };

  // Hint functionality removed as requested

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden flex items-center justify-center">
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

        <div className="text-center relative z-10">
          <div className="text-8xl mb-6 animate-bounce-slow">🌍</div>
          <h2 className="text-3xl font-bold text-cyan-400 mb-6" style={{
            textShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 40px rgba(6, 182, 212, 0.4)'
          }}>No questions available</h2>
          <button
            onClick={onEndQuiz}
            className="mt-4 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-xl text-cyan-300 font-bold text-lg hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
            style={{
              boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)',
              textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
            }}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>🏠</span>
              <span>Back to Menu</span>
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    
     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative p-2 flex flex-col">
    
    {/* <div className="h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden p-2 flex flex-col"> */}
     
     
     
     
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
      {/* <div className="max-w-4xl mx-auto w-full h-full flex flex-col relative z-10 overflow-hidden"> */}

      <div className="max-w-4xl mx-auto w-full flex flex-col relative z-10">




<div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 shadow-2xl flex-1 flex flex-col overflow-y-auto">

        {/* <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 shadow-2xl p-2 mb-2"> */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold text-cyan-400" style={{
              textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
            }}>
              {gameState.currentQuiz?.title || "Quiz"}
            </h2>
            <div className="flex items-center space-x-5">
              <div className="text-lg font-semibold text-cyan-300">
                Score: {gameState.score}
              </div>
              {gameState.streak > 0 && (
                <div className="text-lg font-semibold text-orange-400">
                  🔥 {gameState.streak}
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-700 rounded-full h-3 mb-4 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex justify-between items-center text-sm text-cyan-300">
            <span>Question {gameState.currentQuestionIndex + 1} of {totalQuestions}</span>
            {gameState.timeLeft > 0 && (
              <div className={`text-lg font-bold ${
                gameState.timeLeft <= 5 ? 'text-orange-400' : 'text-cyan-300'
              }`} style={{
                textShadow: gameState.timeLeft <= 5 ? '0 0 10px rgba(251, 146, 60, 0.8)' : '0 0 10px rgba(6, 182, 212, 0.8)'
              }}>
                ⏰ {gameState.timeLeft}s
              </div>
            )}
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-slate-800/80 backdrop-blur-sm rounded-xl border border-cyan-500/30 shadow-2xl overflow-hidden flex-1 flex flex-col max-h-[calc(100vh-100px)]">
          {/* Add responsive styles for small screens */}
          <style>{`
            @media (max-height: 600px) {
              .question-container {
                padding: 0.5rem !important;
              }
              .answer-grid {
                gap: 0.25rem !important;
                margin-bottom: 0.25rem !important;
              }
              .answer-button {
                padding: 0.5rem !important;
              }
              .answer-icon {
                width: 1.5rem !important;
                height: 1.5rem !important;
              }
              .result-container {
                padding: 0.5rem !important;
                margin-bottom: 0.25rem !important;
              }
            }
          `}</style>

          {/* Question */}
          <div className="p-3 flex-1 flex flex-col overflow-y-auto question-container">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3 text-center" style={{
              textShadow: '0 0 10px rgba(6, 182, 212, 0.6)'
            }}>
              {currentQuestion.question}
            </h3>

            {/* Answer Options */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2 flex-1 answer-grid">
              {currentQuestion.options.map((option, index) => {
                let buttonClass = "p-3 rounded-xl text-left font-medium transition-all duration-300 transform hover:scale-102 answer-button ";
                let glowStyle = {};
                
                if (gameState.showResult) {
                  if (index === currentQuestion.correctAnswer) {
                    buttonClass += "bg-gradient-to-r from-green-500/20 to-green-600/20 backdrop-blur-sm border-2 border-green-400/60 text-green-300";
                    glowStyle = { boxShadow: '0 0 15px rgba(34, 197, 94, 0.4)' };
                  } else if (index === gameState.selectedAnswer && !gameState.isCorrect) {
                    buttonClass += "bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm border-2 border-red-400/60 text-red-300";
                    glowStyle = { boxShadow: '0 0 15px rgba(239, 68, 68, 0.4)' };
                  } else {
                    buttonClass += "bg-slate-700/50 border-2 border-slate-600/50 text-slate-400";
                  }
                } else {
                  buttonClass += "bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm border-2 border-slate-600/50 text-white/90 hover:border-cyan-400/50 hover:from-slate-700/60 hover:to-slate-800/60";
                  glowStyle = { boxShadow: '0 0 20px rgba(6, 182, 212, 0.1)' };
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={gameState.showResult}
                    className={buttonClass}
                    style={glowStyle}
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base answer-icon ${
                        gameState.showResult && index === currentQuestion.correctAnswer
                          ? 'bg-gradient-to-r from-green-500 to-green-600 text-white'
                          : gameState.showResult && index === gameState.selectedAnswer && !gameState.isCorrect
                          ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                          : 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 text-cyan-300'
                      }`} style={{
                        boxShadow: gameState.showResult && index === currentQuestion.correctAnswer
                          ? '0 0 15px rgba(34, 197, 94, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.4)'
                          : gameState.showResult && index === gameState.selectedAnswer && !gameState.isCorrect
                          ? '0 0 15px rgba(239, 68, 68, 0.6), inset 0 0 8px rgba(255, 255, 255, 0.4)'
                          : '0 0 15px rgba(6, 182, 212, 0.3), inset 0 0 8px rgba(255, 255, 255, 0.1)',
                        textShadow: '0 0 5px rgba(255, 255, 255, 0.5)'
                      }}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-base font-medium">{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hint functionality removed as requested */}

            {/* Result Display */}
            {gameState.showResult && (
              <div className={`rounded-xl p-3 mb-2 result-container ${gameState.isCorrect ? 'animate-flash ' : ''}${
                gameState.isCorrect 
                  ? 'bg-gradient-to-r from-green-500/10 to-green-600/10 backdrop-blur-sm border-2 border-green-400/30' 
                  : 'bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border-2 border-red-400/30'
              }`} style={{
                boxShadow: gameState.isCorrect 
                  ? '0 0 20px rgba(34, 197, 94, 0.2)' 
                  : '0 0 20px rgba(239, 68, 68, 0.2)'
              }}>
                <div className="text-center">
                  <div className="text-3xl mb-2 celebration-emoji">
                    {gameState.isCorrect ? (
                      <div className="flex justify-center space-x-2">
                        <span className="animate-bounce-slow inline-block">🎉</span>
                        <span className="animate-bounce-slow inline-block" style={{ animationDelay: '0.2s' }}>🏆</span>
                      </div>
                    ) : '❌'}
                  </div>
                  <h4 className={`text-lg font-bold mb-1 ${
                    gameState.isCorrect ? 'text-green-400' : 'text-red-400'
                  }`} style={{
                    textShadow: gameState.isCorrect 
                      ? '0 0 10px rgba(34, 197, 94, 0.6)' 
                      : '0 0 10px rgba(239, 68, 68, 0.6)'
                  }}>
                    {gameState.isCorrect ? 'Correct!' : 'Incorrect'}
                  </h4>
                  <p className={`mb-1 text-sm ${
                    gameState.isCorrect ? 'text-green-300' : 'text-red-300'
                  }`}>
                    {currentQuestion.explanation}
                  </p>
                  {/* Fun fact highlight removed as requested */}
                  {/* Points highlight removed as requested */}
                </div>
              </div>
            )}

            {/* Next Button */}
            {gameState.showResult && (
              <div className="text-center mt-4">
                <button
                  onClick={nextQuestion}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border-2 border-cyan-400/50 rounded-xl text-cyan-300 font-bold text-base hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                  style={{
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(6, 182, 212, 0.1)',
                    textShadow: '0 0 10px rgba(6, 182, 212, 0.8)'
                  }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {gameState.currentQuestionIndex + 1 >= totalQuestions ? (
                      <>
                        <span>🏁</span>
                        <span>Finish Quiz</span>
                      </>
                    ) : (
                      <>
                        <span>🚀</span>
                        <span>Next Question</span>
                      </>
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sci-Fi Confetti Animation */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(30)].map((_, i) => {
            const size = Math.floor(Math.random() * 10) + 3; // Smaller size for better performance on small screens
            const shape = Math.random() > 0.7 ? 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' : // Diamond
                         Math.random() > 0.5 ? 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)' : // Pentagon
                         ''; // Circle
            
            // Sci-fi color palette
            const colors = [
              'rgba(6, 182, 212, 0.9)', // cyan
              'rgba(59, 130, 246, 0.9)', // blue
              'rgba(16, 185, 129, 0.9)', // green
              'rgba(245, 158, 11, 0.9)', // amber
              'rgba(139, 92, 246, 0.9)', // purple
              'rgba(236, 72, 153, 0.9)', // pink
              'rgba(249, 115, 22, 0.9)', // orange
              'rgba(20, 184, 166, 0.9)' // teal
            ];
            const rotation = Math.floor(Math.random() * 360); // Random rotation
            const glow = `0 0 ${5 + Math.random() * 10}px ${colors[Math.floor(Math.random() * colors.length)]}`;
            
            return (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-${size}px`,
                  backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                  width: `${size}px`,
                  height: `${size}px`,
                  clipPath: shape,
                  borderRadius: shape ? '0' : '50%',
                  animationDelay: `${Math.random() * 0.8}s`,
                  animationDuration: `${1 + Math.random() * 2}s`,
                  transform: `rotate(${rotation}deg)`,
                  opacity: 0.8 + Math.random() * 0.2,
                  boxShadow: glow,
                  filter: 'blur(0.5px)'
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuizScreen;

