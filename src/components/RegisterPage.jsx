import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa'; // Import the dropdown icon
import { useLanguage } from '../context/LanguageContext'; // Import the language context
import './RegisterPage.css';
import studentImage from '../assets/student.png';
import iconImages from '../assets/icons.png';
import eduGameLogo from '../assets/edugame-logo.png';

const RegisterPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const pageTitle = isLogin ? translations.login : translations.register;

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <div className="register-page-container">
      {/* Language Selection Dropdown */}
      <div className="language-dropdown-section">
        <h2 className="section-title">{translations.selectLanguage}</h2>
        <div className="dropdown-wrapper">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="dropdown-btn"
          >
            <span className="capitalize">
              {language === 'en' ? 'English' : language === 'hi' ? 'Hindi' : 'Odia'}
            </span>
            <FaChevronDown
              className={`dropdown-icon ${isDropdownOpen ? 'rotate' : ''}`}
            />
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <button
                onClick={() => handleLanguageChange('hi')}
                className="dropdown-item"
              >
                Hindi
              </button>
              <button
                onClick={() => handleLanguageChange('en')}
                className="dropdown-item"
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('or')}
                className="dropdown-item"
              >
                Odia
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Top Section with EduGame Logo and Icons */}
      <div className="top-branding">
        <img src={eduGameLogo} alt="EduGame Logo" className="edugame-logo" />
        <p className="tagline">{translations.subtitle}</p>
        <div className="icon-row">
          <img src={iconImages} alt="Subject Icons" className="subject-icons" />
        </div>
      </div>

      <div className="main-content-section">
        {/* Student Illustration */}
        <div className="student-illustration-container">
          <img src={studentImage} alt="Student giving thumbs up" className="student-image" />
        </div>

        {/* Registration/Login Form */}
        <motion.div
          key={pageTitle}
          className="form-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="form-title">{pageTitle}</h2>
          <form className="auth-form">
            <input type="text" placeholder={translations.name} required />
            <input type="text" placeholder={translations.schoolName} required />
            {!isLogin && <input type="text" placeholder={translations.class} required />}
            <input type="tel" placeholder={translations.phone} required />
            <input type="password" placeholder={translations.password} required />
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.startAdventure}
            </motion.button>
            <div className="form-toggle-link-container">
              <span onClick={toggleForm} className="form-toggle-link">
                {isLogin ? translations.noAccount : translations.haveAccount}
              </span>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;