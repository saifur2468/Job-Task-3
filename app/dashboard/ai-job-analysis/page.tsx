"use client";

import { useState } from "react";
import { Plus, Clock, Lightbulb, Send, FileText, CheckCircle, HelpCircle, BarChart2 } from "lucide-react";

export default function JobInsightAssistant() {
  const [jobInput, setJobInput] = useState("");

  const handleAnalyze = () => {
    if (!jobInput.trim()) return;
    console.log("Analyzing job description:", jobInput);
  };

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 flex flex-wrap items-center justify-center gap-2">
            <span>EchoGPT – AI Job Insight</span>
            <span className="bg-violet-600 text-white px-4 py-1 rounded-2xl shadow-md shadow-violet-600/20">
              Assistant
            </span>
          </h1>
        </div>

        {/* 4 Feature Cards (2x2 Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          
          {/* Card 1 */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col items-center text-center">
            <h3 className="text-base font-bold text-violet-600 mb-2">
              Analyze Job Description
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Instantly get AI-powered insights for any job posting.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col items-center text-center">
            <h3 className="text-base font-bold text-violet-600 mb-2">
              Tailor Your Resume
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Get suggestions to match your CV to the job requirements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col items-center text-center">
            <h3 className="text-base font-bold text-violet-600 mb-2">
              Prepare for Interviews
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Practice with AI-generated interview questions and tips.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col items-center text-center">
            <h3 className="text-base font-bold text-violet-600 mb-2">
              Skill Gap Analysis
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Discover key skills to focus on for your target role.
            </p>
          </div>

        </div>

        {/* Input Card Container */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm p-4 sm:p-6">
          
          {/* Text Area */}
          <div className="mb-6">
            <textarea
              rows={4}
              value={jobInput}
              onChange={(e) => setJobInput(e.target.value)}
              placeholder="Paste job title & description here..."
              className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-sm sm:text-base border-none outline-none focus:ring-0 resize-none px-0 py-1"
            />
          </div>

          {/* Bottom Action Bar inside Card */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100">
            
            <div className="flex items-center gap-2">
              {/* Job Insights Pill Button */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-violet-50 text-violet-700 border border-violet-100 rounded-full text-xs font-semibold">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>Job Insights</span>
              </div>

              {/* Plus Button */}
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors"
                title="Attach"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* History / Clock Button */}
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors"
                title="History"
              >
                <Clock className="w-4 h-4" />
              </button>
            </div>

            {/* Analyze Job Button */}
            <button
              type="button"
              onClick={handleAnalyze}
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-full shadow-md shadow-violet-600/20 transition-all flex items-center gap-2 ml-auto"
            >
              <span>Analyze Job</span>
              <Send className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}