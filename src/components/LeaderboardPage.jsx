import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './LeaderboardPage.css';
import edugameLogo from '../assets/edugame-logo.png'; // Placeholder for the EduGame logo

// Placeholder images for top players
import firstPlaceImage from '../assets/first-place.jpg';
import secondPlaceImage from '../assets/second-place.jpg';
import thirdPlaceImage from '../assets/third-place.jpg';

// Placeholder image for other users and the current user
import userAvatar from '../assets/user-avatar.png';

const LeaderboardPage = () => {
  const { translations } = useLanguage();

  const leaderboardData = [
    { rank: 1, name: 'Eiden', username: '@username', score: 2430, image: firstPlaceImage },
    { rank: 2, name: 'Jackson', username: '@username', score: 1847, image: secondPlaceImage },
    { rank: 3, name: 'Emma Aria', username: '@username', score: 1674, image: thirdPlaceImage },
    { rank: 4, name: 'Sebastian', username: '@username', score: 1300, image: userAvatar },
    { rank: 5, name: 'Sebastian', username: '@username', score: 1124, image: userAvatar },
    { rank: 6, name: 'Sebastian', username: '@username', score: 1120, image: userAvatar },
    // ... other ranks up to 101, 102
    { rank: 101, name: 'Sebastian', username: '@username', score: 900, image: userAvatar },
    { rank: 102, name: 'Sebastian', username: '@username', score: 850, image: userAvatar },
    { rank: 103, name: 'You', username: '@username', score: 799, isYou: true, image: userAvatar },
    { rank: 104, name: 'Sebastian', username: '@username', score: 649, image: userAvatar },
  ];

  return (
    <div className="leaderboard-page-container">
      {/* Top Header */}
      <header className="leaderboard-header">
        <img src={edugameLogo} alt="EduGame Logo" className="header-logo" />
        <h1 className="page-title">{translations.leaderboard}</h1>
        {/* <Link to="/home" className="home-btn">
          Home
        </Link> */}
      </header>

      {/* Top 3 Ranks */}
      <div className="top-ranks-container">
        {leaderboardData.slice(0, 3).map((player) => (
          <div key={player.rank} className={`top-player player-${player.rank}`}>
            <span className="rank-number">{player.rank}</span>
            <img src={player.image} alt={`${player.name} profile`} className="player-image" />
            <h3 className="player-name">{player.name}</h3>
            <p className="player-username">{player.username}</p>
            <p className="player-score">{player.score}</p>
          </div>
        ))}
      </div>

      {/* Leaderboard List */}
      <div className="leaderboard-list-container">
        {leaderboardData.slice(3).map((player) => (
          <div
            key={player.rank}
            className={`list-item ${player.isYou ? 'you-highlight' : ''}`}
          >
            <div className="left-section">
              <span className="list-rank">{player.rank}</span>
              <img src={player.image} alt={`${player.name} avatar`} className="list-avatar" />
              <div className="list-info">
                <span className="list-name">{player.name}</span>
                <span className="list-username">{player.username}</span>
              </div>
            </div>
            <span className="list-score">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardPage;