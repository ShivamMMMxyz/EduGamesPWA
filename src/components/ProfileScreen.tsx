import React from 'react';
import { Player } from '../types/game';
import { badges } from '../data/questions';

interface ProfileScreenProps {
  player: Player;
  onBackToMenu: () => void;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({ player, onBackToMenu }) => {
  const accuracy = player.stats.totalAnswers > 0 
    ? Math.round((player.stats.correctAnswers / player.stats.totalAnswers) * 100) 
    : 0;

  const xpToNextLevel = 1000 - (player.xp % 1000);
  const levelProgress = (player.xp % 1000) / 10;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-primary-600 mb-4">👤 Player Profile</h1>
          <button
            onClick={onBackToMenu}
            className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Menu
          </button>
        </div>

        {/* Player Info Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-6xl text-white">
                🌍
              </div>
            </div>

            {/* Player Details */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{player.name}</h2>
              <div className="text-xl text-gray-600 mb-4">Level {player.level} Explorer</div>
              
              {/* XP Progress */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Level {player.level}</span>
                  <span>{xpToNextLevel} XP to next level</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${levelProgress}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-lg text-gray-700">
                Total Score: <span className="font-bold text-primary-600">{player.totalScore.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{player.stats.totalQuizzes}</div>
            <div className="text-gray-600">Quizzes Played</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-success-600 mb-2">{accuracy}%</div>
            <div className="text-gray-600">Overall Accuracy</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-warning-600 mb-2">{player.stats.bestStreak}</div>
            <div className="text-gray-600">Best Streak</div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">{player.badges.length}</div>
            <div className="text-gray-600">Badges Earned</div>
          </div>
        </div>

        {/* Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Performance Stats */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Performance Statistics</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Total Questions Answered:</span>
                <span className="font-semibold">{player.stats.totalAnswers}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Correct Answers:</span>
                <span className="font-semibold text-success-600">{player.stats.correctAnswers}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Incorrect Answers:</span>
                <span className="font-semibold text-error-600">{player.stats.totalAnswers - player.stats.correctAnswers}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Current Streak:</span>
                <span className="font-semibold text-warning-600">{player.stats.streak}</span>
              </div>
            </div>
          </div>

          {/* Unlocked Regions */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Unlocked Regions</h3>
            <div className="grid grid-cols-2 gap-3">
              {['asia', 'europe', 'africa', 'americas', 'oceania', 'antarctica'].map((region) => (
                <div
                  key={region}
                  className={`p-3 rounded-lg text-center ${
                    player.unlockedRegions.includes(region)
                      ? 'bg-success-100 text-success-700 border border-success-200'
                      : 'bg-gray-100 text-gray-400 border border-gray-200'
                  }`}
                >
                  <div className="text-2xl mb-1">
                    {region === 'asia' && '🌏'}
                    {region === 'europe' && '🌍'}
                    {region === 'africa' && '🌍'}
                    {region === 'americas' && '🌎'}
                    {region === 'oceania' && '🌏'}
                    {region === 'antarctica' && '🧊'}
                  </div>
                  <div className="text-sm font-medium capitalize">{region}</div>
                  {!player.unlockedRegions.includes(region) && (
                    <div className="text-xs text-gray-400">Locked</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Achievement Badges</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badges.map((badge) => {
              const isUnlocked = player.badges.some(b => b.id === badge.id);
              return (
                <div
                  key={badge.id}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isUnlocked
                      ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-300 text-yellow-800'
                      : 'bg-gray-50 border-gray-200 text-gray-400'
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <div className="font-semibold mb-1">{badge.name}</div>
                    <div className="text-sm mb-2">{badge.description}</div>
                    <div className="text-xs">
                      {isUnlocked ? '✅ Unlocked' : badge.requirement}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3 py-2 border-b border-gray-100">
              <div className="text-2xl">🎯</div>
              <div>
                <div className="font-medium">Quiz Completed</div>
                <div className="text-sm text-gray-500">Just now</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2 border-b border-gray-100">
              <div className="text-2xl">📈</div>
              <div>
                <div className="font-medium">Level Up!</div>
                <div className="text-sm text-gray-500">Reached level {player.level}</div>
              </div>
            </div>
            <div className="flex items-center space-x-3 py-2">
              <div className="text-2xl">🏆</div>
              <div>
                <div className="font-medium">Badge Earned</div>
                <div className="text-sm text-gray-500">Capital Master</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;

