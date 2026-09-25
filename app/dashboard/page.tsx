"use client";

import { useState } from "react";
import {
  Paperclip,
  ChevronDown,
  Rocket,
  Plus,
  Clock,
  Mic,
  Send,
  Sparkles,
} from "lucide-react";

const SUGGESTION_CARDS = [
  {
    title: "Unlock Your Creative Flow",
    desc: "Receive custom prompts that reflect your writing style, helping you push past creative blocks and spark new ideas for your projects.",
  },
  {
    title: "Build a Resume That Shines",
    desc: "Craft a resume tailored to highlight your experience and match the job you want, designed to grab the attention of potential employers.",
  },
  {
    title: "Set a Challenge That Transforms You",
    desc: "Create a personalized challenge based on your goals and habits, designed to push you out of your comfort zone and help you grow.",
  },
  {
    title: "Write Irresistible Social Content",
    desc: "Generate catchy, clever captions for your photos or videos, perfect for increasing engagement and sparking conversations.",
  },
];

export default function DashboardHomePage() {
  const [message, setMessage] = useState("");
  const [selectedModel, setSelectedModel] = useState("EchoGPT");

  const handleSend = () => {
    if (!message.trim()) return;
    // TODO: wire this up to your chat/task pipeline
    console.log("send:", message);
    setMessage("");
  };

  return (
    <div className="flex h-full flex-col">
      {/* Center greeting + suggestion cards */}
      <div className="flex flex-1 flex-col items-center justify-center overflow-y-auto px-6 py-10">
        <h1 className="text-center text-[32px] font-bold leading-tight text-[#1A1823] dark:text-white">
          Hello There! 👋 How can I assist you today?
        </h1>
        <p className="mt-3 text-center text-[14.5px] text-[#8B8898]">
          Your personal AI assistant is ready to help—ask me anything, anytime.
        </p>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
          {SUGGESTION_CARDS.map((card) => (
            <button
              key={card.title}
              type="button"
              onClick={() => setMessage(card.title)}
              className="rounded-2xl border border-[#ECEAF5] bg-white p-5 text-left transition-colors hover:border-[#D8D2FA] hover:bg-[#FAF9FE] dark:bg-gray-900 dark:border-gray-800 dark:hover:bg-gray-800"
            >
              <p className="text-[14px] font-semibold text-[#1A1823] dark:text-gray-100">
                {card.title}
              </p>
              <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#9C99A8]">
                {card.desc}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Composer */}
      <div className="w-full max-w-4xl mx-auto pb-4 px-4 sm:px-0">
        <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 rounded-2xl shadow-xl shadow-indigo-500/5 p-3 flex flex-col gap-3">
          
          {/* Top Toolbar (Model Selector & Extra Icons) */}
          <div className="flex items-center justify-between px-1">
            <div className="flex items-center gap-3">
              
              {/* Model Selector dropdown */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs font-semibold text-gray-700 dark:text-gray-200 cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="w-5 h-5 rounded-full bg-violet-600 flex items-center justify-center text-white text-[10px]">
                  <Sparkles className="w-3 h-3" />
                </div>
                <span>{selectedModel}</span>
                <ChevronDown className="w-3 h-3 text-gray-400 ml-1" />
              </div>

              <div className="h-4 w-[1px] bg-gray-200 dark:bg-gray-700" />

              {/* Extra Tool Icons */}
              <div className="flex items-center gap-2 text-gray-400">
                <button type="button" className="hover:text-violet-600 transition-colors p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </button>
                <button type="button" className="hover:text-violet-600 transition-colors p-1">
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Right Action Icons (+ and Clock) */}
            <div className="flex items-center gap-2 text-gray-400">
              <button type="button" className="hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Plus className="w-4 h-4" />
              </button>
              <button type="button" className="hover:text-gray-600 dark:hover:text-gray-200 p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                <Clock className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Input Field & Bottom Actions */}
          <div className="flex items-center gap-2 px-1">
            <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <Paperclip className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 px-2 py-1"
            />

            <div className="flex items-center gap-1.5">
              <button type="button" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <Mic className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleSend}
                disabled={!message.trim()}
                className={`p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 shadow-md ${
                  message.trim()
                    ? 'bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/25 scale-100'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed shadow-none'
                }`}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}