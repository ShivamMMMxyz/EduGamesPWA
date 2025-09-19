// import React, { useState, useEffect, useRef } from "react";
// import { LanguageProvider } from "../context/LanguageContext";
// import "./Physics.css"
// // Question bank
// const QUESTION_BANK = [
//   { formula: "F = m × __", blank: "a", choices: ["a","v","t","s"], fact: "F = m × a — Newton's Second Law. Force = mass × acceleration." },
//   { formula: "v = u + __ × t", blank: "a", choices: ["a","s","m","F"], fact: "v = u + at — relates initial and final velocity with acceleration." },
//   { formula: "s = ut + 1/2 × __ × t²", blank: "a", choices: ["a","v","m","t"], fact: "s = ut + 1/2 a t² — displacement under constant acceleration." },
//   { formula: "W = F × __", blank: "d", choices: ["d","m","a","t"], fact: "W = F × d — Work equals force times displacement." },
//   { formula: "P = W / __", blank: "t", choices: ["t","m","d","a"], fact: "P = W/t — Power is work done per unit time." },
//   { formula: "ρ = m / __", blank: "V", choices: ["V","A","d","F"], fact: "ρ = m/V — Density equals mass divided by volume." },
//   { formula: "KE = 1/2 × m × __²", blank: "v", choices: ["v","a","t","s"], fact: "KE = 1/2 mv² — Kinetic energy of a moving object." },
//   { formula: "p = m × __", blank: "v", choices: ["v","a","F","d"], fact: "p = mv — Momentum equals mass times velocity." },
//   { formula: "F = k × __", blank: "x", choices: ["x","m","a","t"], fact: "Hooke's Law: F = kx — restoring force in a spring." },
//   { formula: "v² = u² + 2 × __ × s", blank: "a", choices: ["a","m","t","d"], fact: "v² = u² + 2as — equation connecting velocities, acceleration and distance." },
//   { formula: "Q = m × c × Δ__", blank: "T", choices: ["T","v","a","P"], fact: "Q = mcΔT — Heat energy equation." },
//   { formula: "p = F / __", blank: "A", choices: ["A","V","t","m"], fact: "p = F/A — Pressure equals force per unit area." },
//   { formula: "E = q × __", blank: "V", choices: ["V","I","R","t"], fact: "E = qV — Energy in electric field." },
//   { formula: "V = I × __", blank: "R", choices: ["R","P","C","L"], fact: "Ohm’s Law: V = IR." },
//   { formula: "P = I × __", blank: "V", choices: ["V","R","t","C"], fact: "P = IV — Electric power formula." },
//   { formula: "f = 1 / __", blank: "T", choices: ["T","λ","v","c"], fact: "f = 1/T — Frequency is reciprocal of time period." },
//   { formula: "v = f × __", blank: "λ", choices: ["λ","c","T","E"], fact: "Wave speed equation: v = fλ." },
//   { formula: "E = h × __", blank: "f", choices: ["f","c","λ","m"], fact: "E = hf — Planck’s equation for photon energy." },
//   { formula: "p = h / __", blank: "λ", choices: ["λ","c","f","v"], fact: "p = h/λ — de Broglie wavelength relation." },
//   { formula: "PV = n × __ × T", blank: "R", choices: ["R","k","E","q"], fact: "Ideal Gas Law: PV = nRT." }
// ];

// // Shuffle helper
// const shuffleArray = (arr) => {
//   const a = [...arr];
//   for (let i = a.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// };

// export default function Physics() {
//   // game states
//   const { translations } = useLanguage();

//   const [screen, setScreen] = useState("start"); // start | game | end
//   const [score, setScore] = useState(0);
//   const [streak, setStreak] = useState(0);
//   const [hearts, setHearts] = useState(3);
//   const [timeLeft, setTimeLeft] = useState(60);
//   const [hints, setHints] = useState(2);
//   const [question, setQuestion] = useState(null);
//   const [fact, setFact] = useState("");
//   const [used, setUsed] = useState([]);
//   const [topScore, setTopScore] = useState(0);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [running, setRunning] = useState(false);
//   const startTime = useRef(null);
//   const timerRef = useRef(null);

//   // init load top score
//   useEffect(() => {
//     loadTopScore();
//   }, []);

//   // timer
//   useEffect(() => {
//     if (running) {
//       timerRef.current = setInterval(() => {
//         setTimeLeft((t) => {
//           if (t <= 1) {
//             clearInterval(timerRef.current);
//             endGame();
//             return 0;
//           }
//           return t - 1;
//         });
//       }, 1000);
//     }
//     return () => clearInterval(timerRef.current);
//   }, [running]);

//   function startGame() {
//     setScore(0);
//     setStreak(0);
//     setHearts(3);
//     setTimeLeft(60);
//     setHints(2);
//     setUsed([]);
//     setRunning(true);
//     setScreen("game");
//     startTime.current = Date.now();
//     nextQuestion([]);
//   }

//   function endGame() {
//     setRunning(false);
//     setScreen("end");
//     const survived = Math.round((Date.now() - startTime.current) / 1000);
//     saveScore(score);
//     renderLeaderboard();
//     // attach survive time on end-screen (rendered below)
//     document.getElementById("survive-time").textContent = survived;
//   }

//   function nextQuestion(prevUsed = used) {
//     if (prevUsed.length >= QUESTION_BANK.length) prevUsed = [];
//     let idx;
//     do {
//       idx = Math.floor(Math.random() * QUESTION_BANK.length);
//     } while (prevUsed.includes(idx));
//     setUsed([...prevUsed, idx]);
//     setQuestion({ ...QUESTION_BANK[idx], choices: shuffleArray(QUESTION_BANK[idx].choices) });
//     setFact("Select the missing term");
//   }

//   function onChoice(choice) {
//     if (!running) return;
//     if (choice === question.blank) {
//       const newStreak = streak + 1;
//       const base = 10;
//       const bonus = Math.max(0, (newStreak - 1) * 5);
//       setScore(score + base + bonus);
//       setTimeLeft(timeLeft + 3);
//       setFact(question.fact);
//       setStreak(newStreak);
//     } else {
//       setStreak(0);
//       setHearts(hearts - 1);
//       setTimeLeft(Math.max(0, timeLeft - 5));
//       setFact(`Wrong — ${question.fact}`);
//       if (hearts - 1 <= 0) {
//         endGame();
//         return;
//       }
//     }
//     setTimeout(() => {
//       nextQuestion(used);
//     }, 800);
//   }

//   function useHint() {
//     if (!running || hints <= 0) return;
//     setHints(hints - 1);
//     setScore(Math.max(0, score - 5));
//   }

//   // leaderboard storage
//   function saveScore(s) {
//     let arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
//     arr.push({ score: s, date: new Date().toISOString() });
//     arr.sort((a, b) => b.score - a.score);
//     arr = arr.slice(0, 10);
//     localStorage.setItem("pf_scores", JSON.stringify(arr));
//     setTopScore(arr[0]?.score || 0);
//   }

//   function loadTopScore() {
//     const arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
//     setTopScore(arr[0]?.score || 0);
//   }

//   function renderLeaderboard() {
//     const arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
//     setLeaderboard(arr);
//   }

//   function share() {
//     const text = `I scored ${score} pts in Physics Formula Fill! Try to beat me.`;
//     navigator.clipboard?.writeText(text).then(
//       () => alert("Score copied to clipboard — share it!"),
//       () => alert("Copy failed — share manually.")
//     );
//   }

//   // streak flame
//   const flames = ["","🔥","🔥🔥","🔥🔥🔥","🔥🔥🔥🔥","🔥🔥🔥🔥🔥"];
//   const flame = flames[Math.min(5, streak)];

//   return (


//     // <div className="w-full max-w-3xl bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fadeIn">
// //    <div className="flex-grow bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fadeIn">
   
// <div className="w-8/12 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fadeIn mx-auto">

//       {screen === "start" && (
//         <section className="space-y-6 text-center">
//           <h1 className="text-4xl font-extrabold text-white relative inline-block">
//             Physics Formula Fill
//             <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 rounded-full"></span>
//           </h1>
//           <p className="text-white/90">Arcade Survival Mode — survive as long as you can ⚡</p>
//           <div className="mt-6">
//             <button className="px-6 py-2 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
//               ⚡ Physics
//             </button>
//           </div>
//           <div className="flex justify-center gap-4 mt-6">
//             <button onClick={startGame} className="px-6 py-3 text-lg font-semibold bg-white/80 text-gray-800 rounded-xl shadow-md hover:bg-white hover:shadow-lg transition duration-300">
//               Start Game
//             </button>
//             <button onClick={() => document.getElementById("how").classList.toggle("hidden")} className="px-6 py-3 text-lg font-semibold bg-white/80 text-gray-800 rounded-xl shadow-md hover:bg-white hover:shadow-lg transition duration-300">
//               How to Play
//             </button>
//           </div>
//           <div id="how" className="hidden mt-6 p-4 rounded-lg bg-white/80 text-gray-800 text-left">
//             <ul className="list-disc pl-5 space-y-2 text-sm">
//               <li>Start with <strong>3 hearts</strong> and <strong>60s</strong>.</li>
//               <li>Correct → +10 pts, +3s, builds streaks. Wrong → lose heart & -5s.</li>
//               <li>2 hints per run: removes one wrong option (-5 pts each).</li>
//               <li>Survive as long as you can. Top scores saved locally.</li>
//             </ul>
//           </div>
//           <div className="mt-4 text-sm text-white/90 animate-bounce">🔥 Keep streaks going to earn bonus points!</div>
//         </section>
//       )}

//       {screen === "game" && question && (
//         <section>
//           <div className="flex justify-between items-center mb-4">
//             <div className="flex items-center gap-4">
//               <div className="text-sm text-white">Score</div>
//               <div className="text-xl font-bold text-white">{score}</div>
//               <div className="ml-4 text-sm text-white">Streak</div>
//               <div className="text-lg font-medium text-white">{streak}</div>
//               <div className="ml-1 text-xl text-yellow-300">{flame}</div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-1 text-sm text-white">
//                 <span>Hearts</span>
//                 <div className="flex gap-1 ml-2">
//                   {Array.from({ length: hearts }).map((_, i) => <span key={i}>❤️</span>)}
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="text-sm text-white">Time</div>
//                 <div className="text-lg font-bold text-white">{timeLeft}</div>
//               </div>
//             </div>
//           </div>
//           <div className="w-full bg-white/30 rounded-full h-3 mb-4 overflow-hidden">
//             <div className="progress-inner h-3 rounded-full bg-yellow-400" style={{ width: `${Math.min(100, score % 100)}%` }}></div>
//           </div>
         
//           <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-xl shadow-inner mb-4">
         
         
//             {/* <div className="text-2xl font-semibold text-center" dangerouslySetInnerHTML={{ __html: question.formula.replace("__","<span class='underline'>__</span>") }}></div> */}
          
//           <div className="text-2xl font-semibold text-center text-slate-900" dangerouslySetInnerHTML={{ __html: question.formula.replace("__","<span class='underline'>__</span>") }}></div>

//             <div className="text-sm text-slate-600 text-center mt-2">{fact}</div>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {question.choices.map((ch,i) => (
           
//         //    <button key={i} onClick={() => onChoice(ch)} className="choice-anim text-left p-4 rounded-lg border hover:shadow-md bg-white font-medium">
          
//         <button key={i} onClick={() => onChoice(ch)} className="choice-anim text-left p-4 rounded-lg border hover:shadow-md bg-white font-medium text-slate-800">  

//                 {ch}
//               </button>
//             ))}
//           </div>
//           <div className="flex items-center justify-between mt-4">
//             <div className="flex items-center gap-3">
         
//               {/* <button onClick={useHint} className="px-4 py-2 rounded-lg bg-yellow-100 border border-yellow-300">Hint ({hints})</button> */}
         
// <button
//   onClick={useHint}
//   disabled={hints <= 0}
//   className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
//     hints > 0 
//       ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 hover:scale-105' 
//       : 'bg-white/20 text-white/50 cursor-not-allowed'
//   }`}
// >
//   💡 Hint ({hints})
// </button>

         
//               {/* <button onClick={() => setRunning(!running)} className="px-4 py-2 rounded-lg border text-white">{running ? "Pause" : "Resume"}</button> */}
         
//          <button
//   onClick={() => setRunning(!running)}
//   className="px-4 py-2 rounded-lg border border-white/50 text-gray-900 bg-white/10 hover:bg-white/20 transition-all"
// >
//   {running ? "⏸️ Pause" : "▶️ Resume"}
// </button>

         
//             </div>
//             <div className="text-sm text-white">Top Score: <span>{topScore}</span></div>
//           </div>
//         </section>
//       )}

//       {screen === "end" && (
//         <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-600 p-6">
//           <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 text-center space-y-6 animate-fade-in">
//             <h2 className="text-4xl font-extrabold tracking-wide text-white drop-shadow-md animate-bounce">🎮 Game Over</h2>
//             <div className="bg-white/20 backdrop-blur-md rounded-xl py-4 px-6 text-white shadow-inner">
//               <div className="text-xl font-medium">Final Score</div>
//               <div className="text-5xl font-extrabold mt-2 text-yellow-300 drop-shadow-lg">{score}</div>
//               <div className="text-sm mt-1 text-gray-200">⏳ You survived <span id="survive-time">0</span>s</div>
//             </div>
//             <div className="flex justify-center gap-4">
//               <button onClick={startGame} className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all">🔄 Play Again</button>
//               <button onClick={share} className="px-6 py-3 rounded-xl bg-white/80 text-gray-900 font-semibold shadow-md hover:bg-white hover:scale-105 transition-all">📤 Share</button>
//             </div>
//             <div className="w-full mt-6">
//               <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">🏆 Top Scores</h3>
//               <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
//                 <ol className="space-y-2 text-sm">
//                   {leaderboard.map((a,i) => (
//                     <li key={i} className="flex justify-between items-center bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md">
//                       <span>{i+1}️⃣ {a.score} pts</span>
//                       <span className="text-gray-300 text-xs">{new Date(a.date).toLocaleString()}</span>
//                     </li>
//                   ))}
//                 </ol>
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }







import React, { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext"; // Make sure this path is correct
import "./Physics.css";

// Question bank
const QUESTION_BANK = [
  { formula: "F = m × __", blank: "a", choices: ["a","v","t","s"], fact: "F = m × a — Newton's Second Law. Force = mass × acceleration." },
  { formula: "v = u + __ × t", blank: "a", choices: ["a","s","m","F"], fact: "v = u + at — relates initial and final velocity with acceleration." },
  { formula: "s = ut + 1/2 × __ × t²", blank: "a", choices: ["a","v","m","t"], fact: "s = ut + 1/2 a t² — displacement under constant acceleration." },
  { formula: "W = F × __", blank: "d", choices: ["d","m","a","t"], fact: "W = F × d — Work equals force times displacement." },
  { formula: "P = W / __", blank: "t", choices: ["t","m","d","a"], fact: "P = W/t — Power is work done per unit time." },
  { formula: "ρ = m / __", blank: "V", choices: ["V","A","d","F"], fact: "ρ = m/V — Density equals mass divided by volume." },
  { formula: "KE = 1/2 × m × __²", blank: "v", choices: ["v","a","t","s"], fact: "KE = 1/2 mv² — Kinetic energy of a moving object." },
  { formula: "p = m × __", blank: "v", choices: ["v","a","F","d"], fact: "p = mv — Momentum equals mass times velocity." },
  { formula: "F = k × __", blank: "x", choices: ["x","m","a","t"], fact: "Hooke's Law: F = kx — restoring force in a spring." },
  { formula: "v² = u² + 2 × __ × s", blank: "a", choices: ["a","m","t","d"], fact: "v² = u² + 2as — equation connecting velocities, acceleration and distance." },
  { formula: "Q = m × c × Δ__", blank: "T", choices: ["T","v","a","P"], fact: "Q = mcΔT — Heat energy equation." },
  { formula: "p = F / __", blank: "A", choices: ["A","V","t","m"], fact: "p = F/A — Pressure equals force per unit area." },
  { formula: "E = q × __", blank: "V", choices: ["V","I","R","t"], fact: "E = qV — Energy in electric field." },
  { formula: "V = I × __", blank: "R", choices: ["R","P","C","L"], fact: "Ohm’s Law: V = IR." },
  { formula: "P = I × __", blank: "V", choices: ["V","R","t","C"], fact: "P = IV — Electric power formula." },
  { formula: "f = 1 / __", blank: "T", choices: ["T","λ","v","c"], fact: "f = 1/T — Frequency is reciprocal of time period." },
  { formula: "v = f × __", blank: "λ", choices: ["λ","c","T","E"], fact: "Wave speed equation: v = fλ." },
  { formula: "E = h × __", blank: "f", choices: ["f","c","λ","m"], fact: "E = hf — Planck’s equation for photon energy." },
  { formula: "p = h / __", blank: "λ", choices: ["λ","c","f","v"], fact: "p = h/λ — de Broglie wavelength relation." },
  { formula: "PV = n × __ × T", blank: "R", choices: ["R","k","E","q"], fact: "Ideal Gas Law: PV = nRT." }
];

// Shuffle helper
const shuffleArray = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export default function Physics() {
  const { translations } = useLanguage();
  const [screen, setScreen] = useState("start"); // start | game | end
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [hints, setHints] = useState(2);
  const [question, setQuestion] = useState(null);
  const [fact, setFact] = useState("");
  const [used, setUsed] = useState([]);
  const [topScore, setTopScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);
  const [running, setRunning] = useState(false);
  const startTime = useRef(null);
  const timerRef = useRef(null);
  const [showHowToPlay, setShowHowToPlay] = useState(false);


  useEffect(() => {
    loadTopScore();
  }, []);

  useEffect(() => {
    if (running) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current);
            endGame();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [running]);

  function startGame() {
    setScore(0);
    setStreak(0);
    setHearts(3);
    setTimeLeft(60);
    setHints(2);
    setUsed([]);
    setRunning(true);
    setScreen("game");
    startTime.current = Date.now();
    nextQuestion([]);
  }

  function endGame() {
    setRunning(false);
    setScreen("end");
    const survived = Math.round((Date.now() - startTime.current) / 1000);
    saveScore(score);
    renderLeaderboard();
    document.getElementById("survive-time").textContent = survived;
  }

  function nextQuestion(prevUsed = used) {
    if (prevUsed.length >= QUESTION_BANK.length) prevUsed = [];
    let idx;
    do {
      idx = Math.floor(Math.random() * QUESTION_BANK.length);
    } while (prevUsed.includes(idx));
    setUsed([...prevUsed, idx]);
    setQuestion({ ...QUESTION_BANK[idx], choices: shuffleArray(QUESTION_BANK[idx].choices) });
    setFact(translations.selectTerm);
  }

  function onChoice(choice) {
    if (!running) return;
    if (choice === question.blank) {
      const newStreak = streak + 1;
      const base = 10;
      const bonus = Math.max(0, (newStreak - 1) * 5);
      setScore(score + base + bonus);
      setTimeLeft(timeLeft + 3);
      setFact(question.fact);
      setStreak(newStreak);
    } else {
      setStreak(0);
      setHearts(hearts - 1);
      setTimeLeft(Math.max(0, timeLeft - 5));
      setFact(`Wrong — ${question.fact}`);
      if (hearts - 1 <= 0) {
        endGame();
        return;
      }
    }
    setTimeout(() => {
      nextQuestion(used);
    }, 800);
  }

  function useHint() {
    if (!running || hints <= 0) return;
    setHints(hints - 1);
    setScore(Math.max(0, score - 5));
  }

  function saveScore(s) {
    let arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
    arr.push({ score: s, date: new Date().toISOString() });
    arr.sort((a, b) => b.score - a.score);
    arr = arr.slice(0, 10);
    localStorage.setItem("pf_scores", JSON.stringify(arr));
    setTopScore(arr[0]?.score || 0);
  }

  function loadTopScore() {
    const arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
    setTopScore(arr[0]?.score || 0);
  }

  function renderLeaderboard() {
    const arr = JSON.parse(localStorage.getItem("pf_scores") || "[]");
    setLeaderboard(arr);
  }

  function share() {
    const text = `I scored ${score} pts in Physics Formula Fill! Try to beat me.`;
    navigator.clipboard?.writeText(text).then(
      () => alert("Score copied to clipboard — share it!"),
      () => alert("Copy failed — share manually.")
    );
  }

  const flames = ["","🔥","🔥🔥","🔥🔥🔥","🔥🔥🔥🔥","🔥🔥🔥🔥🔥"];
  const flame = flames[Math.min(5, streak)];

  return (
    <div className="w-8/12 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-8 animate-fadeIn mx-auto">
      {screen === "start" && (
        <section className="space-y-6 text-center">
          <h1 className="text-4xl font-extrabold text-white relative inline-block">
            {translations.title}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-300 rounded-full"></span>
          </h1>
          <p className="text-white/90">{translations.subtitle}</p>
          <div className="mt-6">
            <button className="px-6 py-2 text-lg font-semibold bg-yellow-400 text-black rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              ⚡ Physics
            </button>
          </div>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={startGame} className="px-6 py-3 text-lg font-semibold bg-white/80 text-gray-800 rounded-xl shadow-md hover:bg-white hover:shadow-lg transition duration-300">
              {translations.start}
            </button>
            <button 
              onClick={() => setShowHowToPlay(!showHowToPlay)} 
              className="px-6 py-3 text-lg font-semibold bg-white/80 text-gray-800 rounded-xl shadow-md hover:bg-white hover:shadow-lg transition duration-300"
            >
              {translations.howToPlay}
            </button>
          </div>
          {showHowToPlay && (
            <div id="how" className="mt-6 p-4 rounded-lg bg-white/80 text-gray-800 text-left">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                {translations.howToPlayContent.map((item, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>
          )}
          <div className="mt-4 text-sm text-white/90 animate-bounce">{translations.tip}</div>
        </section>
      )}

      {screen === "game" && question && (
        <section>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-4">
              <div className="text-sm text-white">{translations.score}</div>
              <div className="text-xl font-bold text-white">{score}</div>
              <div className="ml-4 text-sm text-white">{translations.streak}</div>
              <div className="text-lg font-medium text-white">{streak}</div>
              <div className="ml-1 text-xl text-yellow-300">{flame}</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-white">
                <span>{translations.hearts}</span>
                <div className="flex gap-1 ml-2">
                  {Array.from({ length: hearts }).map((_, i) => <span key={i}>❤️</span>)}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-sm text-white">{translations.time}</div>
                <div className="text-lg font-bold text-white">{timeLeft}</div>
              </div>
            </div>
          </div>
          <div className="w-full bg-white/30 rounded-full h-3 mb-4 overflow-hidden">
            <div className="progress-inner h-3 rounded-full bg-yellow-400" style={{ width: `${Math.min(100, score % 100)}%` }}></div>
          </div>
          <div className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-xl shadow-inner mb-4">
            <div className="text-2xl font-semibold text-center text-slate-900" dangerouslySetInnerHTML={{ __html: question.formula.replace("__","<span class='underline'>__</span>") }}></div>
            <div className="text-sm text-slate-600 text-center mt-2">{fact}</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {question.choices.map((ch,i) => (
              <button 
                key={i} 
                onClick={() => onChoice(ch)} 
                className="choice-anim text-left p-4 rounded-lg border hover:shadow-md bg-white font-medium text-slate-800"
              >
                {ch}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <button
                onClick={useHint}
                disabled={hints <= 0}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
                  hints > 0 
                    ? 'bg-gradient-to-r from-yellow-400 to-amber-400 text-gray-900 hover:scale-105' 
                    : 'bg-white/20 text-white/50 cursor-not-allowed'
                }`}
              >
                💡 {translations.hint} ({hints})
              </button>
              <button
                onClick={() => setRunning(!running)}
                className="px-4 py-2 rounded-lg border border-white/50 text-gray-900 bg-white/10 hover:bg-white/20 transition-all"
              >
                {running ? `⏸️ ${translations.pause}` : `▶️ ${translations.resume}`}
              </button>
            </div>
            <div className="text-sm text-white">{translations.topScore} <span>{topScore}</span></div>
          </div>
        </section>
      )}

      {screen === "end" && (
        <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-pink-600 p-6">
          <div className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-6 text-center space-y-6 animate-fade-in">
            <h2 className="text-4xl font-extrabold tracking-wide text-white drop-shadow-md animate-bounce">
              {score > topScore ? translations.newHighScore : translations.gameOver}
            </h2>
            <div className="bg-white/20 backdrop-blur-md rounded-xl py-4 px-6 text-white shadow-inner">
              <div className="text-xl font-medium">{translations.finalScore}</div>
              <div className="text-5xl font-extrabold mt-2 text-yellow-300 drop-shadow-lg">{score}</div>
              <div className="text-sm mt-1 text-gray-200">
                {translations.youSurvived(document.getElementById("survive-time")?.textContent || "0")}s
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button 
                onClick={startGame} 
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-md hover:scale-105 hover:shadow-xl transition-all"
              >
                🔄 {translations.playAgain}
              </button>
              <button 
                onClick={share} 
                className="px-6 py-3 rounded-xl bg-white/80 text-gray-900 font-semibold shadow-md hover:bg-white hover:scale-105 transition-all"
              >
                📤 {translations.shareScore}
              </button>
            </div>
            <div className="w-full mt-6">
              <h3 className="font-bold text-lg text-white mb-3 flex items-center gap-2">
                🏆 {translations.topScores}
              </h3>
              <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                <ol className="space-y-2 text-sm">
                  {leaderboard.map((a,i) => (
                    <li key={i} className="flex justify-between items-center bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md">
                      <span>{i+1}️⃣ {a.score} pts</span>
                      <span className="text-gray-300 text-xs">{new Date(a.date).toLocaleString()}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}