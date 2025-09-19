import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './ProfilePage.css';
import eduGameLogo from '../assets/edugame-logo.png'; // Make sure to have this asset
import profilePic from '../assets/profile-photo.png'; // Make sure to have this asset

// Icon assets
import progressIcon from '../assets/progress-icon.png';
import courseIcon from '../assets/course-Icon.png';
import quizIcon from '../assets/quiz-icon.png';
import subjectIcon from '../assets/subject-icon.png';
import achievementTrophy from '../assets/achievement-star.png';
import achievementBadge from '../assets/achievement-badge.png';
import achievementStar from '../assets/achievement-Trophy.png';

const ProfilePage = () => {
  const { translations } = useLanguage();

  return (
    <div className="profile-page-container">
      {/* Top Header */}
      <header className="profile-header">
        <img src={eduGameLogo} alt="EduGame Logo" className="header-logo" />
        <h1 className="page-title">Profile</h1>
        {/* <Link to="/home" className="home-btn">{translations.home}</Link> */}
      </header>

      {/* Profile Card Section */}
      <div className="profile-card">
        <div className="profile-avatar-container">
          <img src={profilePic} alt="User Profile" className="profile-avatar" />
          <div className="profile-badge"></div>
        </div>
        <div className="profile-info">
          <p><strong>Name: </strong></p>
          <p><strong>Class:</strong></p>
          <p><strong>School:</strong></p>
        </div>
      </div>

      {/* Progress Bars Section */}
      <div className="progress-section">
        <ProgressCard 
          title="My Progress" 
          progress={75} 
          icon={progressIcon}
          badgeColor="yellow"
        />
        <ProgressCard 
          title="Course Complete" 
          progress={55} 
          icon={courseIcon}
          badgeColor="blue"
        />
        <ProgressCard 
          title="Quiz Completed" 
          progress={88} 
          icon={quizIcon}
          badgeColor="blue"
        />
        <ProgressCard 
          title="Subject Completed" 
          progress={45} 
          icon={subjectIcon}
          badgeColor="yellow"
        />
      </div>

      {/* Achievements Section */}
      <div className="achievements-section">
        <h2 className="section-heading">Achievements</h2>
        <div className="achievements-grid">
          <AchievementItem 
            icon={achievementTrophy} 
            name="Mathematics"
          />
          <AchievementItem 
            icon={achievementBadge} 
            name="History Buff"
          />
          <AchievementItem 
            icon={achievementStar} 
            name="Spelling Star"
          />
        </div>
      </div>
    </div>
  );
};

// Helper components for modularity
const ProgressCard = ({ title, progress, icon, badgeColor }) => (
  <div className="progress-card">
    <div className="progress-card-header">
      <img src={icon} alt={`${title} icon`} className="progress-icon" />
      <h3 className="card-title">{title}</h3>
    </div>
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
    </div>
    <div className="progress-details">
      <span>{progress}%</span>
      <span className={`progress-badge badge-${badgeColor}`}></span>
    </div>
  </div>
);

const AchievementItem = ({ icon, name }) => (
  <div className="achievement-item">
    <img src={icon} alt={`${name} icon`} className="achievement-icon" />
    <span className="achievement-name">{name}</span>
  </div>
);

export default ProfilePage;