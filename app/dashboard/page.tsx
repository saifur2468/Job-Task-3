'use client'
import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  Image as ImageIcon, 
  Video, 
  GitCompare, 
  Network, 
  History, 
  Store, 
  CheckSquare, 
  FileSearch, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  CreditCard, 
  Cpu, 
  MessageSquare, 
  Home, 
  LayoutGrid, 
  Settings, 
  Sun, 
  Moon, 
  Paperclip, 
  Mic, 
  Send, 
  ChevronDown, 
  Rocket, 
  Clock, 
  Menu, 
  X 
} from 'lucide-react';

export default function EchoGPTDashboard() {
  const [activeTab, setActiveTab] = useState('new-chat');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [promptInput, setPromptInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState('EchoGPT');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!promptInput.trim()) return;
    
    setChatHistory([...chatHistory, { role: 'user', content: promptInput }]);
    const currentInput = promptInput;
    setPromptInput('');

    // Simulate AI response
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

  return (
    <div className={`flex h-screen w-full font-sans overflow-hidden ${isDarkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-white text-gray-800'}`}>
      
      {}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}

      {}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#f8f9ff] dark:bg-gray-900 border-r border-indigo-50/80 dark:border-gray-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Top Logo and New Chat */}
        <div className="p-4 flex flex-col gap-6 overflow-y-auto flex-1 scrollbar-thin">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">EchoGPT</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-1">
            <button 
              onClick={() => { setActiveTab('new-chat'); setChatHistory([]); }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-md shadow-violet-500/25 transition-all duration-200 transform active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>New Chat</span>
            </button>
          </div>

          {/* ENGAGEMENT SECTION */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-1">ENGAGEMENT</span>
            
            <SidebarItem 
              icon={<ImageIcon className="w-4 h-4 text-violet-600" />} 
              label="Image Studio" 
              badge="PRO" 
              active={activeTab === 'image-studio'} 
              onClick={() => setActiveTab('image-studio')} 
            />
            <SidebarItem 
              icon={<Video className="w-4 h-4 text-violet-600" />} 
              label="Video Studio" 
              badge="PRO" 
              active={activeTab === 'video-studio'} 
              onClick={() => setActiveTab('video-studio')} 
            />
            <SidebarItem icon={<GitCompare className="w-4 h-4 text-gray-500" />} label="Compare" active={activeTab === 'compare'} onClick={() => setActiveTab('compare')} />
            <SidebarItem icon={<Network className="w-4 h-4 text-gray-500" />} label="Connectors" active={activeTab === 'connectors'} onClick={() => setActiveTab('connectors')} />
            <SidebarItem icon={<History className="w-4 h-4 text-gray-500" />} label="History" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
            <SidebarItem icon={<Store className="w-4 h-4 text-gray-500" />} label="Store" active={activeTab === 'store'} onClick={() => setActiveTab('store')} />
            <SidebarItem icon={<CheckSquare className="w-4 h-4 text-gray-500" />} label="AI Tasks" active={activeTab === 'ai-tasks'} onClick={() => setActiveTab('ai-tasks')} />
            <SidebarItem icon={<FileSearch className="w-4 h-4 text-gray-500" />} label="AI Job Analysis" active={activeTab === 'job-analysis'} onClick={() => setActiveTab('job-analysis')} />
            <SidebarItem icon={<BookOpen className="w-4 h-4 text-gray-500" />} label="AI SOP Builder" active={activeTab === 'sop-builder'} onClick={() => setActiveTab('sop-builder')} />
          </div>

          {/* HELP & SUPPORT SECTION */}
          <div className="flex flex-col gap-1 pt-2">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-1">HELP & SUPPORT</span>
            
            <SidebarItem icon={<HelpCircle className="w-4 h-4 text-gray-500" />} label="Support" active={activeTab === 'support'} onClick={() => setActiveTab('support')} />
            <SidebarItem icon={<Mail className="w-4 h-4 text-gray-500" />} label="Newsletter" active={activeTab === 'newsletter'} onClick={() => setActiveTab('newsletter')} />
            <SidebarItem icon={<CreditCard className="w-4 h-4 text-gray-500" />} label="Subscriptions" active={activeTab === 'subscriptions'} onClick={() => setActiveTab('subscriptions')} />
            <SidebarItem icon={<Cpu className="w-4 h-4 text-gray-500" />} label="API Platform" active={activeTab === 'api'} onClick={() => setActiveTab('api')} />
            <SidebarItem icon={<MessageSquare className="w-4 h-4 text-indigo-500" />} label="Discord" active={activeTab === 'discord'} onClick={() => setActiveTab('discord')} />
          </div>
        </div>

        {/* Sidebar Footer Icons */}
        <div className="p-3 border-t border-indigo-100/60 dark:border-gray-800 flex items-center justify-around text-gray-500 dark:text-gray-400">
          <button onClick={() => setActiveTab('home')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><Home className="w-4 h-4" /></button>
          <button onClick={() => setActiveTab('apps')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><LayoutGrid className="w-4 h-4" /></button>
          <button onClick={() => setActiveTab('settings')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><Settings className="w-4 h-4" /></button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

      </aside>

      {}
      <main className="flex-1 flex flex-col h-full bg-white dark:bg-gray-950 relative overflow-hidden">
        
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">EchoGPT</span>
          <div className="w-9" />
        </div>

        {/* Scrollable Content Container */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 flex flex-col items-center justify-between">
          
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center flex-1 justify-center py-6">
            
            {chatHistory.length === 0 ? (
              <>
                {/* Greeting Header */}
                <div className="text-center mb-10 space-y-2 animate-fade-in">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                    Hello There! <span className="inline-block animate-bounce">👋</span> How can I assist you today?
                  </h1>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium">
                    Your personal AI assistant is ready to help—ask me anything, anytime.
                  </p>
                </div>

                {/* 2x2 Grid of Suggestion Cards */}
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
              /* Chat Conversation Stream */
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

          {}
          <div className="w-full max-w-4xl mx-auto pb-4">
            <form onSubmit={handleSendMessage} className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-xl shadow-indigo-500/5 p-3 flex flex-col gap-3">
              
              {/* Input Top Bar (Model selector & tools) */}
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

              {/* Text Input Row */}
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

      </main>

    </div>
  );
}

function SidebarItem({ icon, label, badge, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${active ? 'bg-indigo-100/70 dark:bg-gray-800 text-violet-700 dark:text-violet-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-indigo-50/50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 tracking-wider">
          {badge}
        </span>
      )}
    </button>
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