"use client";

import { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { FaBrain } from "react-icons/fa";

const APPS_LIST = [
  {
    name: "EchoGPT",
    description: "Interact with EchoGPT, an AI that reflects your input for quick ideas, summaries, or feedback. Perfect for brainstorming or rapid dialogue.",
  },
  {
    name: "DeepSeek V4 Pro",
    description: "DeepSeek specializes in advanced data exploration, leveraging AI to deliver accurate, insightful, and efficient solutions for complex analysis.",
  },
  {
    name: "Nemotron 3 Ultra",
    description: "Llama 3.1 Nemotron 70B Instruct",
  },
  {
    name: "GLM-5.2",
    description: "GLM-5.2 offers strong multilingual reasoning and coding across a 1M token context at a low cost per token.",
  },
  {
    name: "DeepSeek V4 Flash",
    description: "DeepSeek V4 Flash answers quickly over a 1M token context, tuned for rapid iteration at very low cost.",
  },
  {
    name: "Tencent Hy3",
    description: "Tencent Hunyuan 3 provides fast, budget-friendly responses for everyday chat, drafting, and summarisation.",
  },
  {
    name: "MiMo V2.5 Pro",
    description: "MiMo V2.5 Pro adds stronger reasoning to the MiMo line while staying inexpensive over a 1M token context.",
  },
  {
    name: "Qwen 3.7 Plus",
    description: "Qwen 3.7 Plus gives near-flagship quality at a fraction of the cost for daily reasoning and drafting.",
  },
  {
    name: "GPT-5.6 Sol",
    description: "GPT-5.6 Sol delivers OpenAI's flagship reasoning with a 1M token context, ideal for long documents and demanding analysis.",
  },
  {
    name: "Kimi K2.7 Code",
    description: "Kimi K2.7 Code is built for software work — reading large repositories, writing code, and explaining changes.",
  },
  {
    name: "LongCat 2.0",
    description: "LongCat 2.0 from Meituan is free to use, with a 1M token context for long documents and extended chats.",
  },
  {
    name: "GLM-5.3 Flash",
    description: "GLM-5.3 Flash is the fastest GLM tier, made for high-volume chat where latency matters most.",
  },
  {
    name: "Qwen 3.8 27B",
    description: "Qwen 3.8 27B balances speed and quality for general assistance, coding help, and structured output.",
  },
  {
    name: "Qwen 3.7 Max",
    description: "Qwen 3.7 Max is the top Qwen tier for complex reasoning, long-form writing, and detailed technical work.",
  },
  {
    name: "Qwen 3.6 Plus",
    description: "Qwen 3.6 Plus is a dependable general-purpose model for conversation, summarisation, and analysis.",
  },
  {
    name: "Gemini 3.8 Flash",
    description: "Gemini 3.8 Flash combines Google's multimodal strengths with fast responses across a 1M token context.",
  },
  {
    name: "Kimi K3",
    description: "Kimi K3 is Moonshot's flagship, built for deep reasoning and agentic work across a 1M token context.",
  },
  {
    name: "MiniMax M3",
    description: "MiniMax M3 handles long-context conversation and reasoning with an efficient price-to-quality balance.",
  },
  {
    name: "GPT-5.5",
    description: "Preview GPT’s powerful abilities with GPT-5-5, offering precise yet expansive answers in an accessible, versatile format.",
  },
  {
    name: "GPT-5.6 Luna",
    description: "GPT-5.6 Luna is the lightweight GPT-5.6 tier — quick, inexpensive, and capable across everyday tasks.",
  },
  {
    name: "Grok 4.5",
    description: "Grok 4.5 brings xAI's conversational style and current-events awareness to a 500K token context.",
  },
  {
    name: "Grok 4.6",
    description: "Grok 4.6 is the latest xAI release, improving reasoning and instruction following over Grok 4.5.",
  },
  {
    name: "Gemini 3.7 Flash",
    description: "Gemini 3.7 Flash pairs fast multimodal responses with prompt caching for repeated long contexts.",
  },
  {
    name: "GPT-5.4",
    description: "Preview GPT’s powerful abilities with GPT-5.4, offering precise yet expansive answers in an accessible, versatile format.",
  },
  {
    name: "DeepSeek V4 Flash Vision",
    description: "DeepSeek V4 Flash Vision is an experimental multimodal tier that reads images alongside text.",
  },
  {
    name: "DeepSeek V4 Flash Fast",
    description: "DeepSeek V4 Flash Fast prioritises latency, returning answers sooner for interactive use.",
  },
  {
    name: "Qwen 3.8 Flash",
    description: "Qwen 3.8 Flash trades a little depth for speed, ideal for quick answers and high-volume chat.",
  },
  {
    name: "Qwen 3.8 Max",
    description: "Qwen 3.8 Max is the latest Qwen flagship, strong at multi-step reasoning over very long context.",
  },
  {
    name: "Qwen 3.8 Max 0902",
    description: "Qwen 3.8 Max 0902 is the dated flagship snapshot, pinned for reproducible results on long reasoning tasks.",
  },
  {
    name: "Muse Spark 1.2",
    description: "Muse Spark 1.2 offers dependable creative and conversational output over a 1M token context.",
  },
  {
    name: "Muse Spark 1.3",
    description: "Muse Spark 1.3 is Meta's newest Spark model, tuned for creative writing and open-ended conversation.",
  },
  {
    name: "Muse Spark 1.3 Contributor",
    description: "Muse Spark 1.3 Contributor is the low-cost community tier of Muse Spark 1.3 for everyday drafting.",
  },
  {
    name: "Kimi K2.7 Code HighSpeed",
    description: "Kimi K2.7 Code HighSpeed keeps the coding strengths of K2.7 while returning results faster.",
  },
  {
    name: "MiMo V2.5",
    description: "MiMo V2.5 from Xiaomi delivers efficient everyday assistance with one of the lowest costs per token.",
  },
  {
    name: "GLM-5.3",
    description: "GLM-5.3 is the latest full GLM tier, strong at multilingual reasoning and code over a 1M token context.",
  },
  {
    name: "GLM-5.2 Fast",
    description: "GLM-5.2 Fast is the low-latency GLM-5.2 variant for interactive sessions that cannot wait.",
  },
  {
    name: "Step 3.7 Flash",
    description: "Step 3.7 Flash from StepFun answers quickly and cheaply, suited to short interactive exchanges.",
  },
  {
    name: "Step 3.5 Flash",
    description: "Step 3.5 Flash offers a 1M token context at one of the lowest prices in the catalogue.",
  },
  {
    name: "Tencent Hy4 Preview",
    description: "Tencent Hunyuan 4 Preview is the newest Hunyuan generation, with a 1M token context for long documents.",
  },
  {
    name: "Inkling",
    description: "Inkling from Thinking Machines is tuned for careful, well-structured reasoning and clear explanations.",
  },
  {
    name: "Inkling Small",
    description: "Inkling Small is the lighter Inkling tier, keeping the same style at lower cost per token.",
  },
];

export default function EchoGPTStore() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = APPS_LIST.filter((app) =>
    app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            EchoGPT Store
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
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

        {/* Apps Grid (3 columns per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredApps.map((app, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
                    <FaBrain className="w-6 h-6" />
                  </div>
                  <button
                    type="button"
                    className="px-4 py-2 bg-stone-50 hover:bg-stone-100 text-stone-900 border border-stone-200 rounded-full text-xs font-semibold transition-colors"
                  >
                    Try App
                  </button>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-2">
                  {app.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {app.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredApps.length === 0 && (
          <div className="py-16 text-center text-stone-400 text-sm">
            No apps found matching your search.
          </div>
        )}

      </div>
    </div>
  );
}