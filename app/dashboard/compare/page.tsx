"use client";

import { SlidersHorizontal } from "lucide-react";

const MODELS_COMPARISON = [
  { name: "EchoGPT", speed: "Ultra Fast", context: "1M Tokens", cost: "Low", bestFor: "General & Brainstorming" },
  { name: "DeepSeek V4 Pro", speed: "Fast", context: "1M Tokens", cost: "Medium", bestFor: "Complex Data Analysis" },
  { name: "Gemini 3.8 Flash", speed: "Instant", context: "1M Tokens", cost: "Low", bestFor: "Multimodal & Speed" },
  { name: "GPT-5.6 Sol", speed: "Moderate", context: "1M Tokens", cost: "High", bestFor: "Flagship Reasoning" },
];

export default function ModelComparisonPage() {
  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            Model Comparison
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Evaluate model capabilities side-by-side regarding speed, context, and pricing.
          </p>
        </div>

        {/* Table Card */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900">AI Model Benchmarks</h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">Compare performance specs across different versions.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50/50 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Model Name</th>
                  <th className="py-4 px-6">Speed</th>
                  <th className="py-4 px-6">Context Window</th>
                  <th className="py-4 px-6">Cost Efficiency</th>
                  <th className="py-4 px-6">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm text-stone-700">
                {MODELS_COMPARISON.map((model, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-stone-900">{model.name}</td>
                    <td className="py-4 px-6">
                      <span className="px-2.5 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-medium">
                        {model.speed}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-stone-500">{model.context}</td>
                    <td className="py-4 px-6 text-stone-500">{model.cost}</td>
                    <td className="py-4 px-6 text-stone-600 font-medium">{model.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}