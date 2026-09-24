import React from 'react';

const features = [
  {
    icon: "🧠",
    title: "Multiple AI Models",
    subtitle: "One Workspace, Multiple AI Experiences",
    description: "Explore different AI models from a single, unified workspace without switching between multiple platforms."
  },
  {
    icon: "⚡",
    title: "Faster Workflow",
    subtitle: "Get More Done in Less Time",
    description: "Quickly move from asking questions to creating, analyzing, and completing tasks with smart AI workflows."
  },
  {
    icon: "💬",
    title: "Smart Conversations",
    subtitle: "Conversations That Stay Organized",
    description: "Keep your important AI conversations organized and easily return to previous discussions whenever you need them."
  },
  {
    icon: "🧩",
    title: "Chrome Extension",
    subtitle: "AI Wherever You Browse",
    description: "Bring your AI assistant directly into your browser and access useful AI tools without leaving the page."
  },
  {
    icon: "🎨",
    title: "Simple & Modern UI",
    subtitle: "Designed for a Better Experience",
    description: "A clean, intuitive interface makes it easier to discover features, start conversations, and focus on your work."
  },
  {
    icon: "🔒",
    title: "One Connected Workspace",
    subtitle: "Everything in One Place",
    description: "Bring conversations, tools, models, and productivity features together in one streamlined workspace."
  }
];

export default function WhyChooseEcho() {
  return (
    <section className="py-16 px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose EchoGPT?</h1>
        <p className="text-gray-600 text-lg">Everything you need to make AI a natural part of your everyday workflow.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div 
            key={index} 
            className="bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center text-center group"
          >
            {/* Icon Circle */}
            <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>

            {/* Text Content */}
            <h2 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h2>
            <h3 className="text-sm font-semibold text-purple-600 mb-3">{item.subtitle}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}