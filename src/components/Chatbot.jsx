import { useState, useRef, useEffect } from 'react';

const ENDPOINT = "https://openrouter.ai/api/v1/chat/completions";

const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

const MODEL = "qwen/qwen2.5-vl-72b-instruct:free";

const Chatbot = () => {
  const [messages, setMessages] = useState([{
    sender: 'assistant',
    text: 'Hello! I am your assistant. Type your question and press Enter.'
  }]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState('short');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!');
    });
  };

  const callOpenRouter = async (userText) => {
    let instruction = "";
    if (mode === "short") {
      instruction = "Answer briefly in 2-3 sentences only. Do not use markdown symbols like ## or ###.";
    } else {
      instruction = "Give a detailed explanation in well-structured paragraphs with clear headings (without ## or ###). Use bullet points (-) or numbers for lists.";
    }

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MODEL,
          messages: [
            { role: 'system', content: instruction },
            { role: 'user', content: [{ type: 'text', text: userText }] }
          ]
        })
      });

      const data = await response.json();
      let output = "I couldn’t generate a response.";
      if (data?.choices?.[0]?.message?.content) {
        if (Array.isArray(data.choices[0].message.content)) {
          output = data.choices[0].message.content.map(c => c.text || "").join("\n");
        } else {
          output = data.choices[0].message.content;
        }
      }
      return output;
    } catch (error) {
      console.error("API Call failed:", error);
      return `Error: ${error.message}`;
    }
  };

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { sender: 'user', text: userInput };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setUserInput('');
    setIsLoading(true);

    const reply = await callOpenRouter(userInput);
    setMessages(prevMessages => [...prevMessages, { sender: 'assistant', text: reply }]);
    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <style>{`
        .spinner {
          width: 40px;
          height: 40px;
          border: 5px solid rgba(255,255,255,0.1);
          border-top: 5px solid #ff3ca6;
          border-radius: 50%
          animation: spin2 1s linear infinite;
        }
        @keyframes spin2 {
          to { transform: rotate(360deg); }
        }

        /* Custom scrollbar for WebKit browsers */
        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background-color: #3b82f6;
          border-radius: 20px;
          border: 2px solid transparent;
        }
      `}</style>
      <div className="min-h-screen bg-[#0d1117] text-white flex justify-center items-center p-5">
        <div className="flex flex-col w-full max-w-7xl">
          {/* Title at the top */}
          <div className="text-center p-4">
  
          <h3 className="text-3xl font-bold mb-1">Ask Your Doubts Here</h3>
            <p className="text-xs text-gray-400 mb-8">Powered by OpenRouter</p>
          </div>

          {/* Chat Screen */}
          <div className="flex flex-col bg-white/2 rounded-2xl p-4 shadow-inner shadow-white/5 relative h-[calc(100vh-140px)] w-full">
            <label htmlFor="mode" className="text-gray-300 text-sm mb-2">Answer Mode:</label>
            <select
              id="mode"
              className="rounded-lg p-2 bg-[#1e293b] text-white border border-[#334155] mb-4"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="short">Short</option>
              <option value="detailed">Detailed</option>
            </select>

            <div className="flex-1 overflow-y-auto pr-2 flex flex-col gap-3 scrollbar-custom">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[75%] p-4 rounded-xl leading-snug relative ${
                    msg.sender === 'user'
                      ? 'self-end bg-gradient-to-b from-[#0b93ff] to-[#0369a1] text-white rounded-br-md'
                      : 'self-start bg-gradient-to-b from-[#1e293b] to-[#0f1724] text-gray-200 rounded-bl-md pr-12'
                  }`}
                >
                  <small className="block text-gray-400 text-xs mb-1">
                    {msg.sender === 'user' ? 'You' : 'Assistant'}
                  </small>
                  <div style={{ whiteSpace: 'pre-line' }}>{msg.text}</div>
                  {msg.sender === 'assistant' && (
//                     <button
//                       className="absolute top-1.0 right-2 bg-white/8 hover:bg-white/20 text-gray-400 hover:text-white rounded-md text-xs px-0.5 py-0.5"
//                       onClick={() => copyText(msg.text)}
//                     >
//                       Copy
//                     </button>

// Change background and text color classes
<button
  className="absolute top-0.7 right-2 bg-white/5 hover:bg-teal-600 hover:text-white text-gray-300 rounded-sm text-[10px] px-1 py-0.5"
  onClick={() => copyText(msg.text)}
>
  Copy
</button>

                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 pt-4 mt-auto">
              <textarea
                id="userInput"
                className="flex-1 min-h-[48px] max-h-52 p-2 rounded-xl border border-white/5 resize-none bg-[#030712]/40 text-white"
                placeholder="Type a message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                className="w-[70px] rounded-xl bg-gradient-to-b from-[#ff3ca6] to-[#ff7abf] text-white font-bold"
                onClick={sendMessage}
                disabled={isLoading}
              >
                Send
              </button>
            </div>

            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="spinner"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;