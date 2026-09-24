'use client'
import React from 'react';
import { 
  Sparkles, 
  Network, 
  Paperclip, 
  Mic, 
  Send, 
  ChevronDown, 
  Rocket, 
  Clock, 
  Plus 
} from 'lucide-react';

export function ChatPageView({ activeTab, promptInput, setPromptInput, chatHistory, setChatHistory, selectedModel, setSelectedModel }) {
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    
    setChatHistory([...chatHistory, { role: 'user', content: promptInput }]);
    const currentInput = promptInput;
    setPromptInput('');

    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'assistant', 
        content: `I'm your AI assistant! You asked: "${currentInput}". How else can I help you achieve your goals today?` 
      }]);
    }, 1000);
  };

  const handleCardClick = (title, desc) => {
    setPromptInput(title + ": " + desc);
  };

  // Render specific views based on active route
  if (activeTab !== 'new-chat' && activeTab !== 'home') {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-16 h-16 rounded-2xl bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400 flex items-center justify-center mb-4">
          <Sparkles className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold capitalize mb-2">{activeTab.replace('-', ' ')}</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md text-sm">
          This is the dedicated route view for <span className="font-semibold text-violet-600">{activeTab}</span>. Fully integrated into your EchoGPT workspace.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-between">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center flex-1 justify-center py-6">
        
        {chatHistory.length === 0 ? (
          <>
            <div className="text-center mb-10 space-y-2 animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                Hello There! <span className="inline-block animate-bounce">👋</span> How can I assist you today?
              </h1>
              <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
                Your personal AI assistant is ready to help—ask me anything, anytime.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-3xl mb-8">
              <SuggestionCard 
                title="Unlock Your Creative Flow" 
                description="Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects."
                onClick={() => handleCardClick("Unlock Your Creative Flow", "Receive custom prompts that reflect your writing style...")}
              />
              <SuggestionCard 
                title="Build a Resume That Shines" 
                description="Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers."
                onClick={() => handleCardClick("Build a Resume That Shines", "Craft a resume tailored to highlight your experience...")}
              />
              <SuggestionCard 
                title="Set a Challenge That Transforms You" 
                description="Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow."
                onClick={() => handleCardClick("Set a Challenge That Transforms You", "Create a personalized challenge based on your goals...")}
              />
              <SuggestionCard 
                title="Write Irresistible Social Content" 
                description="Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations."
                onClick={() => handleCardClick("Write Irresistible Social Content", "Generate catchy, clever captions for your photos...")}
              />
            </div>
          </>
        ) : (
          <div className="w-full max-w-3xl space-y-6 mb-8">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex gap-4 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
                <div className={`p-4 rounded-2xl max-w-[80%] text-sm ${msg.role === 'user' ? 'bg-violet-600 text-white rounded-br-none shadow-md shadow-violet-500/10' : 'bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                  {msg.content}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Input Bar */}
      <div className="w-full max-w-4xl mx-auto pb-4">
        <form onSubmit={handleSendMessage} className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-xl shadow-indigo-500/5 p-3 flex flex-col gap-3">
          
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                <span className="w-2 h-2 rounded-full bg-violet-600"></span>
                <span>{selectedModel}</span>
                <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />
              </div>
              <button type="button" className="p-1.5 text-gray-400 hover:text-violet-600 transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <Network className="w-4 h-4" />
              </button>
              <button type="button" className="p-1.5 text-gray-400 hover:text-violet-600 transition-colors rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                <Rocket className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1 text-gray-400">
              <button type="button" className="p-1.5 hover:text-gray-600 dark:hover:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button type="button" className="p-1.5 hover:text-gray-600 dark:hover:text-gray-200 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Clock className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 px-1">
            <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>
            <input 
              type="text" 
              value={promptInput}
              onChange={(e) => setPromptInput(e.target.value)}
              placeholder="Ask a question..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 px-2 py-1"
            />
            <div className="flex items-center gap-1.5">
              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Mic className="w-4 h-4" />
              </button>
              <button 
                type="submit" 
                disabled={!promptInput.trim()}
                className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md ${promptInput.trim() ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25 scale-100' : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed shadow-none'}`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}

function SuggestionCard({ title, description, onClick }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-violet-200 dark:hover:border-violet-900/50 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer flex flex-col justify-between group"
    >
      <div>
        <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ChatPageView;