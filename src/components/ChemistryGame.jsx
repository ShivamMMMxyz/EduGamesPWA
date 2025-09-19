








// import React, { useState, useEffect, useRef } from "react";

// const ELEMENTS = [
//   { symbol: "H", name: "Hydrogen", fact: "Lightest element; used in fuel cells and stars." },
//   { symbol: "He", name: "Helium", fact: "Noble gas; used in balloons and cryogenics." },
//   { symbol: "Li", name: "Lithium", fact: "Used in rechargeable batteries." },
//   { symbol: "Be", name: "Beryllium", fact: "Light, strong metal used in aerospace and X-ray windows." },
//   { symbol: "B", name: "Boron", fact: "Used in borosilicate glass and detergents." },
//   { symbol: "C", name: "Carbon", fact: "Backbone of organic molecules." },
//   { symbol: "N", name: "Nitrogen", fact: "Makes up ~78% of Earth's atmosphere." },
//   { symbol: "O", name: "Oxygen", fact: "Essential for respiration and combustion." },
//   { symbol: "F", name: "Fluorine", fact: "Most reactive element; used in toothpaste and Teflon." },
//   { symbol: "Ne", name: "Neon", fact: "Noble gas; famous for neon signs." },
//   { symbol: "Na", name: "Sodium", fact: "Highly reactive metal; common in salts." },
//   { symbol: "Mg", name: "Magnesium", fact: "Light metal used in alloys and fireworks." },
//   { symbol: 'Al', name: 'Aluminium', fact: 'Lightweight metal used in packaging and aircraft.' },
//   { symbol: 'Si', name: 'Silicon', fact: 'Used in semiconductors and glass.' },
//   { symbol: 'P', name: 'Phosphorus', fact: 'Essential for DNA and fertilizers.' },
//   { symbol: 'S', name: 'Sulfur', fact: 'Used in vulcanization of rubber and sulfuric acid.' },
//   { symbol: 'Cl', name: 'Chlorine', fact: 'Used to disinfect water.' },
//   { symbol: 'Ar', name: 'Argon', fact: 'Noble gas; used in welding and lighting.' },
//   { symbol: 'K', name: 'Potassium', fact: 'Essential nutrient; highly reactive in pure form.' },
//   { symbol: 'Ca', name: 'Calcium', fact: 'Key component of bones and shells.' },
//   { symbol: 'Sc', name: 'Scandium', fact: 'Used in aerospace alloys and lighting.' },
//   { symbol: 'Ti', name: 'Titanium', fact: 'Strong, light metal used in implants and aircraft.' },
//   { symbol: 'V', name: 'Vanadium', fact: 'Used to strengthen steel.' },
//   { symbol: 'Cr', name: 'Chromium', fact: 'Provides stainless steel with corrosion resistance.' },
//   { symbol: 'Mn', name: 'Manganese', fact: 'Used in steelmaking and batteries.' },
//   { symbol: 'Fe', name: 'Iron', fact: 'Core component of steel and hemoglobin.' },
//   { symbol: 'Co', name: 'Cobalt', fact: 'Used in rechargeable batteries and blue pigments.' },
//   { symbol: 'Ni', name: 'Nickel', fact: 'Corrosion-resistant; used in coins and alloys.' },
//   { symbol: 'Cu', name: 'Copper', fact: 'Excellent conductor; used in wires and coins.' },
//   { symbol: 'Zn', name: 'Zinc', fact: 'Used in galvanization and brass.' },
//   { symbol: 'Ga', name: 'Gallium', fact: 'Melts in your hand; used in semiconductors.' },
//   { symbol: 'Ge', name: 'Germanium', fact: 'Used in fiber optics and electronics.' },
//   { symbol: 'As', name: 'Arsenic', fact: 'Toxic element; historically used in pesticides.' },
//   { symbol: 'Se', name: 'Selenium', fact: 'Used in photocells and glassmaking.' },
//   { symbol: 'Br', name: 'Bromine', fact: 'Liquid halogen; used in flame retardants.' },
//   { symbol: 'Kr', name: 'Krypton', fact: 'Noble gas; used in lighting and lasers.' },
//   { symbol: 'Rb', name: 'Rubidium', fact: 'Highly reactive; used in research and atomic clocks.' },
//   { symbol: 'Sr', name: 'Strontium', fact: 'Used in fireworks and flares for red color.' },
//   { symbol: 'Y', name: 'Yttrium', fact: 'Used in LEDs and phosphors.' },
//   { symbol: 'Zr', name: 'Zirconium', fact: 'Resistant to corrosion; used in nuclear reactors.' },
//   { symbol: 'Nb', name: 'Niobium', fact: 'Used in superconducting magnets and steel alloys.' },
//   { symbol: 'Mo', name: 'Molybdenum', fact: 'Used in steel alloys and enzymes.' },
//   { symbol: 'Tc', name: 'Technetium', fact: 'Radioactive; used in medical imaging.' },
//   { symbol: 'Ru', name: 'Ruthenium', fact: 'Used in electronics and jewelry plating.' },
//   { symbol: 'Rh', name: 'Rhodium', fact: 'Precious metal; used in catalytic converters.' },
//   { symbol: 'Pd', name: 'Palladium', fact: 'Used in electronics and catalytic converters.' },
//   { symbol: 'Ag', name: 'Silver', fact: 'Excellent conductor; used in jewelry and electronics.' },
//   { symbol: 'Cd', name: 'Cadmium', fact: 'Toxic metal; used in batteries and pigments.' },
//   { symbol: 'In', name: 'Indium', fact: 'Used in touchscreens and semiconductors.' },
//   { symbol: 'Sn', name: 'Tin', fact: 'Used for coating cans and in alloys like bronze.' },
//   { symbol: 'Sb', name: 'Antimony', fact: 'Used in flame retardants and alloys.' },
//   { symbol: 'Te', name: 'Tellurium', fact: 'Used in solar panels and thermoelectrics.' },
//   { symbol: 'I', name: 'Iodine', fact: 'Essential nutrient; used as antiseptic.' },
//   { symbol: 'Xe', name: 'Xenon', fact: 'Noble gas; used in headlights and anesthesia.' },
//   { symbol: 'Cs', name: 'Cesium', fact: 'Used in atomic clocks and drilling fluids.' },
//   { symbol: 'Ba', name: 'Barium', fact: 'Used in X-ray imaging of the digestive system.' },
//   { symbol: 'La', name: 'Lanthanum', fact: 'Used in camera lenses and catalysts.' },
//   { symbol: 'Ce', name: 'Cerium', fact: 'Used in catalytic converters and glass polishing.' },
//   { symbol: 'Pr', name: 'Praseodymium', fact: 'Used in magnets and alloys.' },
//   { symbol: 'Nd', name: 'Neodymium', fact: 'Used in strong permanent magnets and lasers.' }
// ];

// const PAIRS_COUNT = 6;
// const START_TIME = 60;

// function shuffle(array) {
//   return array.sort(() => Math.random() - 0.5);
// }

// const ChemistryMatchUp = () => {
//   const [cards, setCards] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [matches, setMatches] = useState(0);
//   const [score, setScore] = useState(0);
//   const [lives, setLives] = useState(3);
//   const [timeLeft, setTimeLeft] = useState(START_TIME);
//   const [hints, setHints] = useState(3);
//   const [fact, setFact] = useState(null);
//   const [gameOver, setGameOver] = useState(false);
//   const [win, setWin] = useState(false);
//   const timerRef = useRef(null);
//   const soundToggleRef = useRef(true);

//   // Start timer
//   useEffect(() => {
//     timerRef.current = setInterval(() => {
//       setTimeLeft((t) => {
//         if (t <= 1) {
//           clearInterval(timerRef.current);
//           endGame(false, "Time ran out!");
//           return 0;
//         }
//         return t - 1;
//       });
//     }, 1000);
//     return () => clearInterval(timerRef.current);
//   }, []);

//   // Build cards
//   useEffect(() => {
//     startGame();
//   }, []);

//   function beep(freq = 440, time = 0.08) {
//     if (!soundToggleRef.current) return;
//     const audioCtx = typeof AudioContext !== "undefined" ? new AudioContext() : null;
//     if (!audioCtx) return;
//     const o = audioCtx.createOscillator();
//     const g = audioCtx.createGain();
//     o.type = "sine";
//     o.frequency.value = freq;
//     g.gain.value = 0.05;
//     o.connect(g);
//     g.connect(audioCtx.destination);
//     o.start();
//     o.stop(audioCtx.currentTime + time);
//   }

//   function pickRandomElements(n) {
//     const copy = [...ELEMENTS];
//     return shuffle(copy).slice(0, n);
//   }

//   function startGame() {
//     clearInterval(timerRef.current);
//     const pool = pickRandomElements(PAIRS_COUNT);

//     const symbolCards = pool.map((e) => ({ type: "symbol", id: e.symbol, label: e.symbol, ref: e.name, matched: false }));
//     const nameCards = pool.map((e) => ({ type: "name", id: e.name, label: e.name, ref: e.symbol, matched: false }));

//     const allCards = shuffle([...symbolCards, ...nameCards]);
//     setCards(allCards);
//     setSelected([]);
//     setMatches(0);
//     setScore(0);
//     setLives(3);
//     setTimeLeft(START_TIME);
//     setHints(3);
//     setFact(null);
//     setGameOver(false);
//     setWin(false);

//     timerRef.current = setInterval(() => {
//       setTimeLeft((t) => {
//         if (t <= 1) {
//           clearInterval(timerRef.current);
//           endGame(false, "Time ran out!");
//           return 0;
//         }
//         return t - 1;
//       });
//     }, 1000);
//   }

//   function endGame(winStatus, message) {
//     setGameOver(true);
//     setWin(winStatus);
//   }

//   function handleCardClick(index) {
//     if (cards[index].matched || selected.length === 2) return;

//     beep(600, 0.06);

//     const newSelected = [...selected, index];
//     setSelected(newSelected);

//     if (newSelected.length === 2) {
//       setTimeout(() => {
//         const [aIdx, bIdx] = newSelected;
//         const a = cards[aIdx];
//         const b = cards[bIdx];
//         let newCards = [...cards];
//         let newScore = score;
//         let newLives = lives;
//         let newMatches = matches;

//         const isMatch =
//           (a.type === "symbol" && b.type === "name" && a.ref === b.label) ||
//           (b.type === "symbol" && a.type === "name" && b.ref === a.label);

//         if (isMatch) {
//           newCards[aIdx].matched = true;
//           newCards[bIdx].matched = true;
//           newScore += 10;
//           newMatches += 1;
//           showFactForPair(a, b);
//           beep(900, 0.12);
//           if (newMatches === PAIRS_COUNT) {
//             endGame(true, `You matched all ${PAIRS_COUNT} pairs!`);
//           }
//         } else {
//           newScore = Math.max(0, newScore - 5);
//           newLives -= 1;
//           beep(200, 0.14);
//           if (newLives <= 0) {
//             endGame(false, "You've run out of lives!");
//           }
//         }

//         setCards(newCards);
//         setScore(newScore);
//         setLives(newLives);
//         setMatches(newMatches);
//         setSelected([]);
//       }, 500);
//     }
//   }

//   function showFactForPair(a, b) {
//     const id = a.type === "symbol" ? a.id : b.id;
//     const elem = ELEMENTS.find((e) => e.symbol === id || e.name === id);
//     if (!elem) return;
//     setFact(elem);
//     setTimeout(() => setFact(null), 3500);
//   }

//   function useHint() {
//     if (hints <= 0) return;
//     setHints(hints - 1);

//     const unmatched = cards.map((c, i) => ({ ...c, index: i })).filter((c) => !c.matched);
//     if (unmatched.length < 2) return;

//     const symbol = unmatched.find((c) => c.type === "symbol");
//     const match = unmatched.find((c) => c.type === "name" && c.label === symbol.ref);
//     if (!symbol || !match) return;

//     const highlightClass = "ring-4 ring-yellow-400";
//     const tmpCards = [...cards];
//     tmpCards[symbol.index].highlight = highlightClass;
//     tmpCards[match.index].highlight = highlightClass;
//     setCards(tmpCards);

//     setTimeout(() => {
//       const tmpCards2 = [...cards];
//       tmpCards2[symbol.index].highlight = null;
//       tmpCards2[match.index].highlight = null;
//       setCards(tmpCards2);
//     }, 1200);
//   }







// return (
//   <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 flex items-center justify-center p-6">
//     <div className="w-full max-w-5xl">
//       {/* Header */}
//       <header className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
//         <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold flex items-center gap-2 sm:gap-3">
//           <span className="text-2xl sm:text-3xl">⚗️</span>
//           <span className="leading-tight">Chemistry Match-Up</span>
//         </h1>
//         <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
//           <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
//             Score: {score}
//           </div>
//           <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
//             ⏱️ {timeLeft}s
//           </div>
//           <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
//             Lives: {"❤️".repeat(lives)}
//           </div>
//           <button
//             onClick={startGame}
          
//                 className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
          
          
//             // className="bg-blue--600 hover:bg-indigo-500 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200"
//           >
//             Restart
//           </button>
//         </div>
//       </header>

//       {/* Controls */}
//       <section className="mb-4 flex items-center gap-3">
//         <button
//           onClick={useHint}
//           className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-3 py-2 rounded-md shadow-md transition-all duration-200"
//         >
//           Hint ({hints})
//         </button>
//         <label className="inline-flex items-center gap-2 text-sm bg-slate-700 px-3 py-2 rounded-md">
//           <input
//             type="checkbox"
//             checked={soundToggleRef.current}
//             onChange={(e) => (soundToggleRef.current = e.target.checked)}
//           />
//           <span>Sound</span>
//         </label>
//       </section>

//       {/* Game Board */}
//       <section className={`grid gap-3 sm:gap-4 md:gap-6 ${cards.length <= 8 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3 md:grid-cols-4"}`}>
//         {cards.map((card, idx) => (
//           <div
//             key={idx}
//             className={`relative h-24 sm:h-28 md:h-36 cursor-pointer perspective ${
//               card.highlight ? "ring-4 ring-yellow-400 animate-pulse" : ""
//             }`}
//             onClick={() => handleCardClick(idx)}
//           >
//             <div
//               className={`card-flip w-full h-full rounded-lg shadow-lg relative bg-transparent ${
//                 selected.includes(idx) || card.matched ? "flipped" : ""
//               } ${
//                 card.matched ? "bg-gradient-to-r from-green-400 to-green-600 shadow-lg" : ""
//               } ${
//                 card.wrong ? "bg-gradient-to-r from-red-500 to-red-700" : ""
//               } transition-all duration-300`}
//             >
//               <div className="card-face bg-slate-700 text-lg sm:text-xl md:text-2xl font-bold rounded-lg flex items-center justify-center">
//                 {card.label}
//               </div>
//               <div
//                 className="card-face flipped bg-slate-600 text-lg sm:text-xl md:text-2xl font-bold rounded-lg flex items-center justify-center"
//                 style={{ transform: "rotateY(180deg)" }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* Fact Box */}
//       {fact && (
//         <div className="mt-6 p-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 rounded-xl shadow-xl text-center animate-fade-in">
//           <div className="text-2xl font-bold mb-2">
//             {fact.symbol} — {fact.name}
//           </div>
//           <div>{fact.fact}</div>
//         </div>
//       )}

//       {/* End Overlay */}
//       {gameOver && (
//         <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
//           <div className="bg-slate-900 rounded-2xl p-8 text-center w-11/12 max-w-md shadow-2xl">
//             <h2 className="text-3xl font-bold mb-3">{win ? "🎉 You Won!" : "💥 Game Over"}</h2>
//             <p className="mb-6">
//               Score: {score}. High score: {Number(localStorage.getItem("chem_highscore") || 0)}.
//             </p>
//             <div className="flex justify-center gap-3">
//               <button
//                 onClick={() => {
//                   setGameOver(false);
//                   startGame();
//                 }}
//                 className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
//               >
//                 Play Again
//               </button>
//               <button
//                 onClick={() => setGameOver(false)}
                
//                 className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
                
                
//                 // className="bg-700 px-4 py-2 rounded-md shadow-md transition-all duration-200"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>

//     {/* Extra Tailwind Flip Animation */}
//     <style>
//       {`
//         .perspective { perspective: 1000px; }
//         .card-flip { transform-style: preserve-3d; transition: transform 400ms; }
//         .card-flip.flipped { transform: rotateY(180deg); }
//         .card-face { backface-visibility: hidden; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
//         .card-face.flipped { transform: rotateY(180deg); }
//         .animate-fade-in { animation: fadeIn 0.5s ease forwards; }
//         @keyframes fadeIn { from {opacity:0} to {opacity:1} }
//       `}
//     </style>
//   </div>
// );

// };
// export default ChemistryMatchUp;



































import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

const ELEMENTS = [
  { symbol: "H", name: "Hydrogen", fact: "Lightest element; used in fuel cells and stars." },
  { symbol: "He", name: "Helium", fact: "Noble gas; used in balloons and cryogenics." },
  { symbol: "Li", name: "Lithium", fact: "Used in rechargeable batteries." },
  { symbol: "Be", name: "Beryllium", fact: "Light, strong metal used in aerospace and X-ray windows." },
  { symbol: "B", name: "Boron", fact: "Used in borosilicate glass and detergents." },
  { symbol: "C", name: "Carbon", fact: "Backbone of organic molecules." },
  { symbol: "N", name: "Nitrogen", fact: "Makes up ~78% of Earth's atmosphere." },
  { symbol: "O", name: "Oxygen", fact: "Essential for respiration and combustion." },
  { symbol: "F", name: "Fluorine", fact: "Most reactive element; used in toothpaste and Teflon." },
  { symbol: "Ne", name: "Neon", fact: "Noble gas; famous for neon signs." },
  { symbol: "Na", name: "Sodium", fact: "Highly reactive metal; common in salts." },
  { symbol: "Mg", name: "Magnesium", fact: "Light metal used in alloys and fireworks." },
  { symbol: 'Al', name: 'Aluminium', fact: 'Lightweight metal used in packaging and aircraft.' },
  { symbol: 'Si', name: 'Silicon', fact: 'Used in semiconductors and glass.' },
  { symbol: 'P', name: 'Phosphorus', fact: 'Essential for DNA and fertilizers.' },
  { symbol: 'S', name: 'Sulfur', fact: 'Used in vulcanization of rubber and sulfuric acid.' },
  { symbol: 'Cl', name: 'Chlorine', fact: 'Used to disinfect water.' },
  { symbol: 'Ar', name: 'Argon', fact: 'Noble gas; used in welding and lighting.' },
  { symbol: 'K', name: 'Potassium', fact: 'Essential nutrient; highly reactive in pure form.' },
  { symbol: 'Ca', name: 'Calcium', fact: 'Key component of bones and shells.' },
  { symbol: 'Sc', name: 'Scandium', fact: 'Used in aerospace alloys and lighting.' },
  { symbol: 'Ti', name: 'Titanium', fact: 'Strong, light metal used in implants and aircraft.' },
  { symbol: 'V', name: 'Vanadium', fact: 'Used to strengthen steel.' },
  { symbol: 'Cr', name: 'Chromium', fact: 'Provides stainless steel with corrosion resistance.' },
  { symbol: 'Mn', name: 'Manganese', fact: 'Used in steelmaking and batteries.' },
  { symbol: 'Fe', name: 'Iron', fact: 'Core component of steel and hemoglobin.' },
  { symbol: 'Co', name: 'Cobalt', fact: 'Used in rechargeable batteries and blue pigments.' },
  { symbol: 'Ni', name: 'Nickel', fact: 'Corrosion-resistant; used in coins and alloys.' },
  { symbol: 'Cu', name: 'Copper', fact: 'Excellent conductor; used in wires and coins.' },
  { symbol: 'Zn', name: 'Zinc', fact: 'Used in galvanization and brass.' },
  { symbol: 'Ga', name: 'Gallium', fact: 'Melts in your hand; used in semiconductors.' },
  { symbol: 'Ge', name: 'Germanium', fact: 'Used in fiber optics and electronics.' },
  { symbol: 'As', name: 'Arsenic', fact: 'Toxic element; historically used in pesticides.' },
  { symbol: 'Se', name: 'Selenium', fact: 'Used in photocells and glassmaking.' },
  { symbol: 'Br', name: 'Bromine', fact: 'Liquid halogen; used in flame retardants.' },
  { symbol: 'Kr', name: 'Krypton', fact: 'Noble gas; used in lighting and lasers.' },
  { symbol: 'Rb', name: 'Rubidium', fact: 'Highly reactive; used in research and atomic clocks.' },
  { symbol: 'Sr', name: 'Strontium', fact: 'Used in fireworks and flares for red color.' },
  { symbol: 'Y', name: 'Yttrium', fact: 'Used in LEDs and phosphors.' },
  { symbol: 'Zr', name: 'Zirconium', fact: 'Resistant to corrosion; used in nuclear reactors.' },
  { symbol: 'Nb', name: 'Niobium', fact: 'Used in superconducting magnets and steel alloys.' },
  { symbol: 'Mo', name: 'Molybdenum', fact: 'Used in steel alloys and enzymes.' },
  { symbol: 'Tc', name: 'Technetium', fact: 'Radioactive; used in medical imaging.' },
  { symbol: 'Ru', name: 'Ruthenium', fact: 'Used in electronics and jewelry plating.' },
  { symbol: 'Rh', name: 'Rhodium', fact: 'Precious metal; used in catalytic converters.' },
  { symbol: 'Pd', name: 'Palladium', fact: 'Used in electronics and catalytic converters.' },
  { symbol: 'Ag', name: 'Silver', fact: 'Excellent conductor; used in jewelry and electronics.' },
  { symbol: 'Cd', name: 'Cadmium', fact: 'Toxic metal; used in batteries and pigments.' },
  { symbol: 'In', name: 'Indium', fact: 'Used in touchscreens and semiconductors.' },
  { symbol: 'Sn', name: 'Tin', fact: 'Used for coating cans and in alloys like bronze.' },
  { symbol: 'Sb', name: 'Antimony', fact: 'Used in flame retardants and alloys.' },
  { symbol: 'Te', name: 'Tellurium', fact: 'Used in solar panels and thermoelectrics.' },
  { symbol: 'I', name: 'Iodine', fact: 'Essential nutrient; used as antiseptic.' },
  { symbol: 'Xe', name: 'Xenon', fact: 'Noble gas; used in headlights and anesthesia.' },
  { symbol: 'Cs', name: 'Cesium', fact: 'Used in atomic clocks and drilling fluids.' },
  { symbol: 'Ba', name: 'Barium', fact: 'Used in X-ray imaging of the digestive system.' },
  { symbol: 'La', name: 'Lanthanum', fact: 'Used in camera lenses and catalysts.' },
  { symbol: 'Ce', name: 'Cerium', fact: 'Used in catalytic converters and glass polishing.' },
  { symbol: 'Pr', name: 'Praseodymium', fact: 'Used in magnets and alloys.' },
  { symbol: 'Nd', name: 'Neodymium', fact: 'Used in strong permanent magnets and lasers.' }
];

const PAIRS_COUNT = 6;
const START_TIME = 60;

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const ChemistryMatchUp = () => {
  const { translations } = useLanguage();
  const [cards, setCards] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [timeLeft, setTimeLeft] = useState(START_TIME);
  const [hints, setHints] = useState(3);
  const [fact, setFact] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  const timerRef = useRef(null);
  const soundToggleRef = useRef(true);

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          endGame(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, []);

  function beep(freq = 440, time = 0.08) {
    if (!soundToggleRef.current) return;
    const audioCtx = typeof AudioContext !== "undefined" ? new AudioContext() : null;
    if (!audioCtx) return;
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = "sine";
    o.frequency.value = freq;
    g.gain.value = 0.05;
    o.connect(g);
    g.connect(audioCtx.destination);
    o.start();
    o.stop(audioCtx.currentTime + time);
  }

  function pickRandomElements(n) {
    const copy = [...ELEMENTS];
    return shuffle(copy).slice(0, n);
  }

  function startGame() {
    clearInterval(timerRef.current);
    const pool = pickRandomElements(PAIRS_COUNT);

    const symbolCards = pool.map((e) => ({ type: "symbol", id: e.symbol, label: e.symbol, ref: e.name, matched: false }));
    const nameCards = pool.map((e) => ({ type: "name", id: e.name, label: e.name, ref: e.symbol, matched: false }));

    const allCards = shuffle([...symbolCards, ...nameCards]);
    setCards(allCards);
    setSelected([]);
    setMatches(0);
    setScore(0);
    setLives(3);
    setTimeLeft(START_TIME);
    setHints(3);
    setFact(null);
    setGameOver(false);
    setWin(false);

    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          endGame(false);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  function endGame(winStatus) {
    setGameOver(true);
    setWin(winStatus);
  }

  function handleCardClick(index) {
    if (cards[index].matched || selected.length === 2) return;

    beep(600, 0.06);

    const newSelected = [...selected, index];
    setSelected(newSelected);

    if (newSelected.length === 2) {
      setTimeout(() => {
        const [aIdx, bIdx] = newSelected;
        const a = cards[aIdx];
        const b = cards[bIdx];
        let newCards = [...cards];
        let newScore = score;
        let newLives = lives;
        let newMatches = matches;

        const isMatch =
          (a.type === "symbol" && b.type === "name" && a.ref === b.label) ||
          (b.type === "symbol" && a.type === "name" && b.ref === a.label);

        if (isMatch) {
          newCards[aIdx].matched = true;
          newCards[bIdx].matched = true;
          newScore += 10;
          newMatches += 1;
          showFactForPair(a, b);
          beep(900, 0.12);
          if (newMatches === PAIRS_COUNT) {
            endGame(true);
          }
        } else {
          newScore = Math.max(0, newScore - 5);
          newLives -= 1;
          beep(200, 0.14);
          if (newLives <= 0) {
            endGame(false);
          }
        }

        setCards(newCards);
        setScore(newScore);
        setLives(newLives);
        setMatches(newMatches);
        setSelected([]);
      }, 500);
    }
  }

  function showFactForPair(a, b) {
    const id = a.type === "symbol" ? a.id : b.id;
    const elem = ELEMENTS.find((e) => e.symbol === id || e.name === id);
    if (!elem) return;
    setFact(elem);
    setTimeout(() => setFact(null), 3500);
  }

  function useHint() {
    if (hints <= 0) return;
    setHints(hints - 1);

    const unmatched = cards.map((c, i) => ({ ...c, index: i })).filter((c) => !c.matched);
    if (unmatched.length < 2) return;

    const symbol = unmatched.find((c) => c.type === "symbol");
    const match = unmatched.find((c) => c.type === "name" && c.label === symbol.ref);
    if (!symbol || !match) return;

    const highlightClass = "ring-4 ring-yellow-400";
    const tmpCards = [...cards];
    tmpCards[symbol.index].highlight = highlightClass;
    tmpCards[match.index].highlight = highlightClass;
    setCards(tmpCards);

    setTimeout(() => {
      const tmpCards2 = [...cards];
      tmpCards2[symbol.index].highlight = null;
      tmpCards2[match.index].highlight = null;
      setCards(tmpCards2);
    }, 1200);
  }
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <header className="mb-4 sm:mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold flex items-center gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl">⚗️</span>
            <span className="leading-tight">{translations.title}</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
            <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
              {translations.score} {score}
            </div>
            <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
              ⏱️ {timeLeft}s
          </div>
            <div className="bg-slate-700 px-2 sm:px-3 md:px-4 py-1 sm:py-2 rounded-lg text-sm sm:text-base md:text-lg font-semibold">
              {translations.lives} {"❤️".repeat(lives)}
          </div>
            <button
              onClick={startGame}
              className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
            >
              {translations.restart}
            </button>
        </div>
      </header>

      {/* Controls */}
      <section className="mb-4 flex items-center gap-3">
        <button
          onClick={useHint}
          className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-3 py-2 rounded-md shadow-md transition-all duration-200"
        >
          {translations.hint} ({hints})
        </button>
        <label className="inline-flex items-center gap-2 text-sm bg-slate-700 px-3 py-2 rounded-md">
          <input
            type="checkbox"
            checked={soundToggleRef.current}
            onChange={(e) => (soundToggleRef.current = e.target.checked)}
          />
          <span>{translations.sound}</span>
        </label>
      </section>

      {/* Game Board */}
      <section className={`grid gap-3 sm:gap-4 md:gap-6 ${cards.length <= 8 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3 md:grid-cols-4"}`}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`relative h-24 sm:h-28 md:h-36 cursor-pointer perspective ${
              card.highlight ? "ring-4 ring-yellow-400 animate-pulse" : ""
            }`}
            onClick={() => handleCardClick(idx)}
          >
            <div
              className={`card-flip w-full h-full rounded-lg shadow-lg relative bg-transparent ${
                selected.includes(idx) || card.matched ? "flipped" : ""
              } ${
                card.matched ? "bg-gradient-to-r from-green-400 to-green-600 shadow-lg" : ""
              } ${
                card.wrong ? "bg-gradient-to-r from-red-500 to-red-700" : ""
              } transition-all duration-300`}
            >
              <div className="card-face bg-slate-700 text-lg sm:text-xl md:text-2xl font-bold rounded-lg flex items-center justify-center">
                {card.label}
              </div>
              <div
                className="card-face flipped bg-slate-600 text-lg sm:text-xl md:text-2xl font-bold rounded-lg flex items-center justify-center"
                style={{ transform: "rotateY(180deg)" }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      {/* Fact Box */}
      {fact && (
        <div className="mt-6 p-4 bg-gradient-to-r from-indigo-700 via-indigo-600 to-indigo-700 rounded-xl shadow-xl text-center animate-fade-in">
          <div className="text-2xl font-bold mb-2">
            {fact.symbol} — {fact.name}
          </div>
          <div>{fact.fact}</div>
        </div>
      )}

      {/* End Overlay */}
      {gameOver && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-40">
          <div className="bg-slate-900 rounded-2xl p-8 text-center w-11/12 max-w-md shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">{win ? translations.endGameWin : translations.endGameLose}</h2>
            <p className="mb-6">
              {translations.score} {score}. {translations.highScore} {Number(localStorage.getItem("chem_highscore") || 0)}.
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setGameOver(false);
                  startGame();
                }}
                className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
              >
                {translations.playAgain}
              </button>
              <button
                onClick={() => setGameOver(false)}
                className="bg-gradient-to-r from-green-400 to-green-600 px-4 py-2 rounded-md shadow-md transition-all duration-200"
              >
                {translations.close}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    <style>
      {`
        .perspective { perspective: 1000px; }
        .card-flip { transform-style: preserve-3d; transition: transform 400ms; }
        .card-flip.flipped { transform: rotateY(180deg); }
        .card-face { backface-visibility: hidden; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; }
        .card-face.flipped { transform: rotateY(180deg); }
        .animate-fade-in { animation: fadeIn 0.5s ease forwards; }
        @keyframes fadeIn { from {opacity:0} to {opacity:1} }
      `}
    </style>
  </div>
);

};
export default ChemistryMatchUp;