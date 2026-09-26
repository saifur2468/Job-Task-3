"use client";

import { useState } from "react";
import {
  Sparkles,
  History,
  Settings,
  ChevronDown,
  Globe,
  Paperclip,
  Image as ImageIcon,
  Mic,
  Send,
  FileText,
  PenLine,
  Languages,
  Lightbulb,
  Code2,
  Mail,
  Check,
  X,
} from "lucide-react";

const quickActions = [
  {
    label: "Summarize",
    icon: FileText,
  },
  {
    label: "Rewrite",
    icon: PenLine,
  },
  {
    label: "Translate",
    icon: Languages,
  },
  {
    label: "Explain",
    icon: Lightbulb,
  },
  {
    label: "Fix Code",
    icon: Code2,
  },
  {
    label: "Write Email",
    icon: Mail,
  },
];

const models = [
  {
    name: "GPT-5.6 Luna",
    description: "Fast · Smart · Balanced",
  },
  {
    name: "GPT-5.6 Sol",
    description: "Advanced reasoning",
  },
  {
    name: "Fast Model",
    description: "Quick responses",
  },
];

export default function PopupUI() {
  const [prompt, setPrompt] = useState("");
  const [selectedModel, setSelectedModel] = useState("GPT-5.6 Luna");
  const [showModels, setShowModels] = useState(false);
  const [useContext, setUseContext] = useState(true);

  const handleQuickAction = (action: string) => {
    const prompts: Record<string, string> = {
      Summarize: "Summarize this page",
      Rewrite: "Rewrite this text professionally",
      Translate: "Translate this text",
      Explain: "Explain this in simple words",
      "Fix Code": "Find and fix the issue in this code",
      "Write Email": "Write a professional email",
    };

    setPrompt(prompts[action] || "");
  };

  return (
    <div className="rounded-[28px] border border-stone-200 bg-white p-5 shadow-sm">

      {/* Section Header */}
      <div className="mb-5">
       

        <h3 className="mt-1 text-lg text-center font-black text-violet-600">
          Popup UI
        </h3>

        <p className="mt-1 text-xs leading-5 text-stone-500">
          A compact AI workspace that opens directly from the Chrome toolbar.
        </p>
      </div>

   

      <div className="mx-auto overflow-hidden rounded-[22px] border border-stone-200 bg-white shadow-xl shadow-stone-200/50">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 px-4 py-3">

          <div className="flex items-center gap-2.5">

            <div className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-violet-600 text-white shadow-sm">
              <Sparkles className="h-4 w-4" />
            </div>

            <div>
              <p className="text-[11px] font-bold text-stone-900">
                EchoGPT
              </p>

              <p className="text-[8px] text-stone-400">
                AI Assistant
              </p>
            </div>

          </div>

          <div className="flex items-center gap-1">

            <button
              className="flex h-7 w-7 items-center justify-center rounded-lg text-stone-400 transition hover:bg-stone-50 hover:text-stone-700"
              aria-label="History"
            >
              <History className="h-4 w-4" />
            </button>

            <button
              className="flex h-7 w-7 items-center justify-center rounded-lg text-stone-400 transition hover:bg-stone-50 hover:text-stone-700"
              aria-label="Settings"
            >
              <Settings className="h-4 w-4" />
            </button>

          </div>

        </div>

        {/* Main Content */}
        <div className="p-4">

          {/* Greeting */}
          <div className="mb-4">

            <h4 className="text-[15px] font-bold text-stone-900">
              Good evening 👋
            </h4>

            <p className="mt-1 text-[10px] leading-4 text-stone-400">
              What would you like to work on today?
            </p>

          </div>

          {/* Quick Actions */}
          <div>

            <div className="mb-2 flex items-center justify-between">

              <span className="text-[9px] font-bold uppercase tracking-wider text-stone-400">
                Quick Actions
              </span>

              <span className="text-[9px] text-violet-500">
                More
              </span>

            </div>

            <div className="grid grid-cols-3 gap-1.5">

              {quickActions.map((action) => {
                const Icon = action.icon;

                return (
                  <button
                    key={action.label}
                    onClick={() => handleQuickAction(action.label)}
                    className="group flex flex-col items-center justify-center rounded-xl border border-stone-100 bg-stone-50 px-1.5 py-2.5 transition hover:border-violet-200 hover:bg-violet-50"
                  >

                    <Icon className="h-3.5 w-3.5 text-stone-500 transition group-hover:text-violet-600" />

                    <span className="mt-1.5 text-[8px] font-semibold text-stone-600 group-hover:text-violet-700">
                      {action.label}
                    </span>

                  </button>
                );
              })}

            </div>

          </div>

          {/* Current Page Context */}
          <div className="mt-4 rounded-xl border border-stone-100 bg-stone-50 p-2.5">

            <div className="flex items-center gap-2">

              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white">
                <Globe className="h-3.5 w-3.5 text-violet-600" />
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[9px] font-bold text-stone-700">
                  Current page
                </p>

                <p className="truncate text-[8px] text-stone-400">
                  developer.mozilla.org
                </p>

              </div>

              <button
                onClick={() => setUseContext(!useContext)}
                className={`flex h-5 w-5 items-center justify-center rounded-full transition ${
                  useContext
                    ? "bg-violet-600 text-white"
                    : "bg-stone-200 text-stone-400"
                }`}
              >
                {useContext ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <X className="h-3 w-3" />
                )}
              </button>

            </div>

          </div>

          {/* Model Selector */}
          <div className="relative mt-3">

            <button
              onClick={() => setShowModels(!showModels)}
              className="flex w-full items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2.5 text-left transition hover:border-violet-200"
            >

              <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-50">
                <Sparkles className="h-3 w-3 text-violet-600" />
              </div>

              <div className="min-w-0 flex-1">

                <p className="text-[9px] text-stone-400">
                  AI Model
                </p>

                <p className="truncate text-[10px] font-bold text-stone-700">
                  {selectedModel}
                </p>

              </div>

              <ChevronDown
                className={`h-3.5 w-3.5 text-stone-400 transition ${
                  showModels ? "rotate-180" : ""
                }`}
              />

            </button>

            {/* Model Dropdown */}
            {showModels && (
              <div className="absolute left-0 right-0 top-[calc(100%+6px)] z-20 rounded-xl border border-stone-200 bg-white p-1.5 shadow-xl">

                {models.map((model) => {
                  const selected = selectedModel === model.name;

                  return (
                    <button
                      key={model.name}
                      onClick={() => {
                        setSelectedModel(model.name);
                        setShowModels(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-2 text-left transition ${
                        selected
                          ? "bg-violet-50"
                          : "hover:bg-stone-50"
                      }`}
                    >

                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-stone-100">
                        <Sparkles className="h-3 w-3 text-violet-600" />
                      </div>

                      <div className="min-w-0 flex-1">

                        <p className="text-[9px] font-bold text-stone-700">
                          {model.name}
                        </p>

                        <p className="text-[8px] text-stone-400">
                          {model.description}
                        </p>

                      </div>

                      {selected && (
                        <Check className="h-3.5 w-3.5 text-violet-600" />
                      )}

                    </button>
                  );
                })}

              </div>
            )}

          </div>

          {/* Prompt Input */}
          <div className="mt-3 rounded-xl border border-stone-200 bg-stone-50 p-2">

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={2}
              placeholder='Ask anything or type "/" for commands...'
              className="w-full resize-none bg-transparent px-1 py-1 text-[10px] leading-4 text-stone-700 outline-none placeholder:text-stone-400"
            />

            <div className="mt-1 flex items-center justify-between">

              <div className="flex items-center gap-0.5">

                <button className="flex h-6 w-6 items-center justify-center rounded-md text-stone-400 hover:bg-white hover:text-stone-700">
                  <Paperclip className="h-3.5 w-3.5" />
                </button>

                <button className="flex h-6 w-6 items-center justify-center rounded-md text-stone-400 hover:bg-white hover:text-stone-700">
                  <ImageIcon className="h-3.5 w-3.5" />
                </button>

                <button className="flex h-6 w-6 items-center justify-center rounded-md text-stone-400 hover:bg-white hover:text-stone-700">
                  <Mic className="h-3.5 w-3.5" />
                </button>

              </div>

              <button
                className={`flex h-7 w-7 items-center justify-center rounded-lg transition ${
                  prompt.trim()
                    ? "bg-violet-600 text-white shadow-sm hover:bg-violet-700"
                    : "bg-stone-200 text-stone-400"
                }`}
              >
                <Send className="h-3.5 w-3.5" />
              </button>

            </div>

          </div>

          {/* Footer */}
          <div className="mt-3 flex items-center justify-between">

            <span className="text-[8px] text-stone-400">
              Powered by EchoGPT
            </span>

            <span className="rounded-full bg-violet-50 px-2 py-1 text-[8px] font-semibold text-violet-600">
              Pro
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}