// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../context/LanguageContext';
// import { FaTrophy, FaHome,FaBookOpen , FaUser, FaRobot } from 'react-icons/fa';
// import './Navbar.css';

// const Navbar = () => {
//   const { translations } = useLanguage();

//   return (
//     <nav className="navbar-container">
//       <Link to="/leaderboard" className="nav-item">
//         <FaTrophy className="nav-icon" />
//         <span className="nav-text">{translations.leaderboard}</span>
//       </Link>
      
//       <Link to="/" className="nav-item">
//         <FaHome className="nav-icon" />
//         <span className="nav-text">{translations.home}</span>
//       </Link>

// <Link to="/chat" className="nav-item">
//     <FaRobot className="nav-icon" />
//     <span className="nav-text">{translations.askme}</span>
// </Link>

      
//       <Link to="/profile" className="nav-item">
//         <FaUser className="nav-icon" />
//         <span className="nav-text">{translations.profile}</span>
//       </Link>
//       <Link to="/home" className="nav-item">
//   <FaBookOpen className="nav-icon" />
//   <span className="nav-text">{translations.courses}</span>
// </Link>
//     </nav>
//   );
// };

// export default Navbar;










import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { FaTrophy, FaHome, FaBookOpen, FaUser, FaRobot } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const { translations } = useLanguage();

  return (
    <nav className="navbar-container">
      <Link to="/leaderboard" className="nav-item">
        <FaTrophy className="nav-icon" />
        <span className="nav-text">{translations.leaderboard}</span>
      </Link>
      
      <Link to="/" className="nav-item">
        <FaHome className="nav-icon" />
        <span className="nav-text">{translations.home}</span>
      </Link>

      <Link to="/chat" className="nav-item">
        <FaRobot className="nav-icon" />
        <span className="nav-text">{translations.askMe}</span>
      </Link>
      
      <Link to="/profile" className="nav-item">
        <FaUser className="nav-icon" />
        <span className="nav-text">{translations.profile}</span>
      </Link>
      
      <Link to="/home" className="nav-item">
        <FaBookOpen className="nav-icon" />
        <span className="nav-text">{translations.coursest}</span>
      </Link>
    </nav>
  );
};

export default Navbar;