"use client";

import { useState } from "react";
import { Search, Sparkles, Rocket, Lightbulb, Brain, Compass } from "lucide-react";

const CATEGORIES = ["Ideas", "Work", "Fun", "Online Content"];

const TASKS_DATA = {
  Ideas: [
    {
      title: "Think Outside the Box",
      description: "Breakthrough ideas await your discovery",
      icon: Brain,
    },
    {
      title: "Startup",
      description: "Get a list of ambitious startup ideas based on your area of interest",
      icon: Rocket,
    },
    {
      title: "Innovate and Elevate",
      description: "Your guide to unique and fresh ideas",
      icon: Sparkles,
    },
    {
      title: "Unleashing Creativity",
      description: "Explore a world of brilliant ideas",
      icon: Compass,
    },
    {
      title: "Idea Sparks",
      description: "Ignite your creativity for innovative solutions",
      icon: Lightbulb,
    },
  ],
  Work: [
    {
      title: "Professional Resume Boost",
      description: "Optimize your resume to land high-paying tech jobs.",
      icon: Sparkles,
    },
    {
      title: "Code Review Assistant",
      description: "Analyze your codebase for security flaws and performance bottlenecks.",
      icon: Rocket,
    },
  ],
  Fun: [
    {
      title: "Interactive Storyteller",
      description: "Generate branching narrative adventures based on your prompts.",
      icon: Lightbulb,
    },
  ],
  "Online Content": [
    {
      title: "Viral Social Captions",
      description: "Craft engaging copy designed to maximize reader engagement.",
      icon: Compass,
    },
  ],
};

export default function EchoGPTTasksPage() {
  const [activeTab, setActiveTab] = useState("Ideas");
  const [searchQuery, setSearchQuery] = useState("");

  const currentTasks = TASKS_DATA[activeTab as keyof typeof TASKS_DATA] || [];
  
  const filteredTasks = currentTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            EchoGPT AI Tasks
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills[cite: 10].
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative flex items-center">
            <span className="absolute left-4 text-stone-400">
              <Search className="w-5 h-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for the Apps"
              className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-2xl text-stone-900 placeholder-stone-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Category Navigation Tabs */}
        <div className="max-w-3xl mx-auto mb-10 border-b border-stone-200">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveTab(cat);
                  setSearchQuery("");
                }}
                className={`pb-4 text-sm font-semibold transition-colors relative whitespace-nowrap ${
                  activeTab === cat
                    ? "text-stone-900 border-b-2 border-violet-600"
                    : "text-stone-500 hover:text-stone-900"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tasks Grid (3 columns per row) */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTasks.map((task, idx) => {
            const IconComponent = task.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-100 flex items-center justify-center text-violet-600 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-stone-900 mb-2">
                    {task.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    {task.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {filteredTasks.length === 0 && (
          <div className="py-16 text-center text-stone-400 text-sm">
            No tasks found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}