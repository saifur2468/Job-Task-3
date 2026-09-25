"use client";

import { useState } from "react";
import { Sparkles, Send, Settings, History, MessageSquare, ChevronDown, Plus } from "lucide-react";

export default function ExtensionPreviewPage() {
  const [selectedModel, setSelectedModel] = useState("EchoGPT Core");
  const [prompt, setPrompt] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const models = ["EchoGPT Core", "DeepSeek V4 Pro", "Gemini Flash", "GPT-5.6 Sol"];

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-4">
      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold text-stone-800">Chrome Extension Preview</h1>
        <p className="text-xs text-stone-500">This is how your extension popup looks and feels.</p>
      </div>

      {/* Extension Popup Container Simulator */}
      <div className="w-[380px] h-[600px] bg-white rounded-2xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden relative">
        
        {/* Extension Header */}
        <div className="px-4 py-3 border-b border-stone-100 flex items-center justify-between bg-white z-10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-violet-600 flex items-center justify-center text-white">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm text-stone-800">EchoGPT Assistant</span>
          </div>
          <div className="flex items-center gap-2 text-stone-500">
            <button className="p-1.5 hover:bg-stone-100 rounded-lg transition-colors" title="History">
              <History className="w-4 h-4" />
            </button>
            <button className="p-1.5 hover:bg-stone-100 rounded-lg transition-colors" title="Settings">
              <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Model Selector Bar */}
        <div className="px-4 py-2 bg-stone-50 border-b border-stone-100 relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-full flex items-center justify-between bg-white border border-stone-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-stone-700 shadow-xs"
          >
            <span>Model: {selectedModel}</span>
            <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
          </button>

          {dropdownOpen && (
            <div className="absolute inset-x-4 top-12 bg-white border border-stone-200 rounded-xl shadow-lg z-20 overflow-hidden">
              {models.map((m) => (
                <button
                  key={m}
                  onClick={() => {
                    setSelectedModel(m);
                    setDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-xs hover:bg-violet-50 hover:text-violet-700 font-medium transition-colors"
                >
                  {m}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Chat / Content Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-stone-50/50 text-xs">
          <div className="flex items-start gap-2">
            <div className="w-6 h-6 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold text-[10px]">AI</div>
            <div className="bg-white p-3 rounded-xl border border-stone-200 text-stone-700 shadow-xs">
              Hello! How can I assist you with your code or text analysis today?
            </div>
          </div>
        </div>

        {/* Prompt Input Footer */}
        <div className="p-3 border-t border-stone-100 bg-white">
          <div className="flex items-center gap-2 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2">
            <input
              type="text"
              placeholder="Ask anything or type '/' for commands..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-transparent text-xs outline-none text-stone-800 placeholder:text-stone-400"
            />
            <button className="w-7 h-7 rounded-lg bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition-colors shrink-0">
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}