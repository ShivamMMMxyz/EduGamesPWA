import { useState, useEffect } from 'react';

const tips = [
  {
    subject: 'Physics',
    text: 'Did you know that gravity is not a force in Einstein\'s theory of relativity? It\'s a curvature of spacetime caused by mass and energy.',
    level: '10-12'
  },
  {
    subject: 'Biology',
    text: 'A group of flamingos is called a "flamboyance." 🦩',
    level: '6-9'
  },
  {
    subject: 'Mathematics',
    text: 'The number 10,000 is the first number that is not prime and has a prime number of divisors (5).',
    level: '10-12'
  },
  {
    subject: 'Chemistry',
    text: 'Water is the only substance on Earth that exists naturally in three states: solid (ice), liquid (water), and gas (steam).',
    level: '6-9'
  },
  {
    subject: 'Astronomy',
    text: 'A day on Venus is longer than a year on Venus. It takes Venus 243 Earth days to rotate, but only 225 Earth days to orbit the sun.',
    level: '8-12'
  },
  {
    subject: 'Computer Science',
    text: 'Binary code, the language of computers, uses only two digits: 0 and 1.',
    level: '6-9'
  }
];

const KnowledgeOfTheDay = () => {
  const [dailyTip, setDailyTip] = useState({});

  useEffect(() => {
    const today = new Date().toDateString();
    const storedTip = localStorage.getItem('dailyTip');
    const storedDate = localStorage.getItem('tipDate');

    // Check if a tip for today already exists
    if (storedDate === today && storedTip) {
      setDailyTip(JSON.parse(storedTip));
    } else {
      // Generate a new random tip
      const randomIndex = Math.floor(Math.random() * tips.length);
      const newTip = tips[randomIndex];
      setDailyTip(newTip);

      // Store the new tip and today's date
      localStorage.setItem('dailyTip', JSON.stringify(newTip));
      localStorage.setItem('tipDate', today);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-[#1e293b] rounded-2xl shadow-xl text-white max-w-sm mx-auto my-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-bold text-[#ff3ca6]">
          💡 Daily Spark
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          A new tip for your curious mind
        </p>
      </div>

      <div className="p-4 bg-[#0f172a] rounded-xl border border-[#334155] w-full">
        <span className="text-xs font-semibold uppercase text-gray-500">
          {dailyTip.subject} • Class {dailyTip.level}
        </span>
        <p className="mt-2 text-base leading-snug">
          {dailyTip.text}
        </p>
      </div>
    </div>
  );
};

export default KnowledgeOfTheDay;