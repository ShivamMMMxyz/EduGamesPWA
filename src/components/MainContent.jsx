// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '../context/LanguageContext';
// import { Link } from 'react-router-dom'; // Import Link component
// import './MainContent.css';

// const floatingVariant = {
//   animate: {
//     y: [0, -5, 0],
//     transition: {
//       duration: 3,
//       ease: 'easeInOut',
//       repeat: Infinity,
//       repeatType: 'reverse',
//     },
//   },
// };

// const MainContent = () => {
//   const { translations } = useLanguage();

//   const cards = [
//     { title: translations.math, imageClass: 'card-math' },
//     { title: translations.wordJourney, imageClass: 'card-word' },
//     { title: translations.grammar, imageClass: 'card-grammar' },
//     { title: translations.science, imageClass: 'card-science' },
//   ];

//   return (
//     <div className="main-content-container">
//       {/* Top-left logo */}
//       <div className="top-left-logo">
//         <img src="/logo.png" alt="App Logo" />
//       </div>

//       {/* Top-right Register button */}
//       <div className="top-right-register">
//         <Link to="/register" className="register-link"> {/* Use Link component with 'to' prop */}
//           <button className="register-btn">Register</button>
//         </Link>
//       </div>

//       <div className="main-content-header">
//         <h2 className="main-title">{translations.title}</h2>
//       </div>

//       <div className="cards-grid">
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className="card-item"
//             variants={floatingVariant}
//             animate="animate"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 10 }}
//           >
//             <div className={`card-image-placeholder ${card.imageClass}`}></div>
//             <h3 className="card-title">{card.title}</h3>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };





// export default MainContent;










import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom'; 
import './MainContent.css';

const floatingVariant = {
  animate: {
    y: [0, -5, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const MainContent = () => {
  const { translations } = useLanguage();

  const cards = [
    { title: translations.exploreGeography, imageClass: 'card-geography', route: '/geography' }, // ✅ New geography card
    { title: translations.playChemistry, imageClass: 'card-Chemistry',route:'/Chemistry' },
    { title: translations.learnPhysics, imageClass: 'card-physics', route:'/physics'},
    { title: translations.science, imageClass: 'card-science' },
  ];

  return (
    <div className="main-content-container">
      {/* Top-left logo */}
      <div className="top-left-logo">
        <img src="/logo.png" alt="App Logo" />
      </div>

      {/* Top-right Register button */}
      <div className="top-right-register">
       
       
     
      
      </div>

      <div className="main-content-header">
        <h2 className="main-title">{translations.title}</h2>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card-item"
            variants={floatingVariant}
            animate="animate"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {card.route ? (
              <Link to={card.route} className="card-link">
                <div className={`card-image-placeholder ${card.imageClass}`}></div>
                <h3 className="card-title">{card.title}</h3>
              </Link>
            ) : (
              <>
                <div className={`card-image-placeholder ${card.imageClass}`}></div>
                <h3 className="card-title">{card.title}</h3>
              </>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
