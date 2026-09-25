"use client";

import { useState } from "react";
import { Plus, ChevronDown } from "lucide-react";

export default function VideoStudioPage() {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [model, setModel] = useState("Veo 3.1 fast");
  const [creations, setCreations] = useState([]);

  const handleGenerate = () => {
    if (!prompt.trim()) return;
   
    console.log("Generating video:", { prompt, aspectRatio, model });
  };

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-10 font-sans overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            Video Studio
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base">
            Just type what you imagine, and the video makes itself.
          </p>
        </div>

        {/* Main Generator Box */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm p-4 sm:p-6">
          
          {/* Prompt Input */}
          <div className="mb-6">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe your video..."
              className="w-full bg-transparent text-stone-900 placeholder-stone-400 text-sm sm:text-base border-none outline-none focus:ring-0 px-0 py-2"
            />
          </div>

          {/* Controls Bar (Aspect Ratio, Model Selector, Generate Button) */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-100">
            
            <div className="flex flex-wrap items-center gap-3">
              {/* Upload / Plus Button */}
              <button
                type="button"
                className="w-9 h-9 rounded-full border border-stone-200 flex items-center justify-center text-stone-500 hover:bg-stone-50 transition-colors"
                title="Upload media"
              >
                <Plus className="w-4 h-4" />
              </button>

              {/* Aspect Ratio Selector */}
              <div className="flex items-center bg-stone-100 p-1 rounded-full border border-stone-200 text-xs font-medium text-stone-700">
                {["16:9", "9:16", "1:1"].map((ratio) => (
                  <button
                    key={ratio}
                    type="button"
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-3 py-1 rounded-full transition-all ${
                      aspectRatio === ratio
                        ? "bg-violet-600 text-white shadow-sm"
                        : "hover:text-stone-900"
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>

              {/* Model Dropdown */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-xs font-semibold text-stone-800 cursor-pointer hover:bg-stone-100 transition-colors">
                <span>{model}</span>
                <ChevronDown className="w-3.5 h-3.5 text-stone-400" />
              </div>
            </div>

            {/* Generate Button */}
            <button
              type="button"
              onClick={handleGenerate}
              className="px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-full shadow-md shadow-violet-600/20 transition-all ml-auto"
            >
              Generate
            </button>

          </div>

          {/* Upgrade notice banner inside card */}
          <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500">
            Video generation is a paid feature — upgrade to start creating videos.
          </div>

        </div>

        {/* Sub-note */}
        <p className="mt-3 text-center text-xs text-stone-400">
          Each video uses one message from your plan and takes a few minutes to render.
        </p>

        {/* Your Creations Section */}
        <div className="mt-12">
          <h2 className="text-lg font-bold text-stone-900 mb-6">
            Your creations
          </h2>

          {creations.length === 0 ? (
            <div className="py-16 text-center ">
              <p className="text-sm text-stone-500">
                Nothing here yet — describe a video above to get started.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
           
            </div>
          )}
        </div>

      </div>
    </div>
  );
}