"use client";

import { useState } from "react";
import { Search, Plus, MoreVertical, MessageSquare } from "lucide-react";

export default function EchoGPTChatHistory() {
  const [searchQuery, setSearchQuery] = useState("");

  const historyItems = [
    {
      title: "Make Waiting Exciting: Creative Loading Screen Ideas",
      snippet: "Add mini-games, trivia, dynamic indicators, and branded micro-animations to boost user engagement.",
    },
    {
      title: "How Can I Optimize My Mobile App Onboarding Experience?",
      snippet: "",
    },
    {
      title: "What's the Best Way to Design Empty States in UI?",
      snippet: "",
    },
    {
      title: "How Can Color Enhance UX Without Distracting Users?",
      snippet: "",
    },
     {
      title: "How to create project with React?",
      snippet: "",
    },
     {
      title: "How Can Color user overview ui?",
      snippet: "",
    }
  ];

  const filteredItems = historyItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.snippet.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto p-5 sm:p-6 font-sans text-stone-900 bg-stone-50/80 min-h-screen rounded-3xl border border-stone-200/60 shadow-xl my-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-lg sm:text-xl font-extrabold text-violet-600 tracking-tight">ConversationHistory</h1>
     
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-4">
        <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
          <Search className="w-4 h-4" />
        </span>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search..."
          className="w-full bg-white border border-stone-200/80 rounded-2xl pl-10 pr-4 py-3 text-xs sm:text-sm outline-none text-stone-800 shadow-2xs focus:border-stone-400 transition-colors placeholder:text-stone-400"
        />
      </div>

 

      {/* History Cards List */}
      <div className="space-y-3">
        {filteredItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-white border rounded-2xl p-4 transition-all cursor-pointer shadow-2xs hover:shadow-md ${
              index === 0 
                ? "border-stone-300 ring-1 ring-stone-900/5" 
                : "border-stone-200/80 hover:border-stone-300"
            }`}
          >
            <h3 className="font-bold text-xs sm:text-sm text-stone-900 leading-snug mb-1">
              {item.title}
            </h3>
            {item.snippet && (
              <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed mt-1">
                {item.snippet}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}