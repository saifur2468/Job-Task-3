"use client";

import { useState } from "react";
import {
  Brain,
  Sparkles,
  Globe,
  Shield,
  Zap,
  Flame,
  Feather,
  Compass,
  Layers,
  Wind,
  ChevronDown,
  Check,
} from "lucide-react";

type Model = {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
  recommended?: boolean;
};

const MODELS: Model[] = [
  {
    id: "gpt-5.6-luna",
    name: "GPT-5.6 Luna",
    description: "Best for most tasks",
    icon: Sparkles,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
    recommended: true,
  },
  {
    id: "gpt-5.0-pro",
    name: "GPT-5.0 Pro",
    description: "High quality · Complex reasoning",
    icon: Brain,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-500",
  },
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "Fast & Efficient · Great for everyday use",
    icon: Globe,
    iconBg: "bg-slate-200",
    iconColor: "text-slate-600",
  },
  {
    id: "claude-3.5-sonnet",
    name: "Claude 3.5 Sonnet",
    description: "Creative & Analytical · Great for writing",
    icon: Flame,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    id: "claude-3-opus",
    name: "Claude 3 Opus",
    description: "Deep reasoning · Long context",
    icon: Layers,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: "gemini-1.5-pro",
    name: "Gemini 1.5 Pro",
    description: "Multimodal · Massive context window",
    icon: Compass,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    id: "gemini-flash",
    name: "Gemini Flash",
    description: "Ultra fast · Lightweight tasks",
    icon: Zap,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    id: "mistral-large",
    name: "Mistral Large",
    description: "Efficient · Strong at code",
    icon: Wind,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
  },
  {
    id: "llama-3-70b",
    name: "Llama 3 70B",
    description: "Open source · Balanced performance",
    icon: Shield,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: "command-r-plus",
    name: "Command R+",
    description: "Great for retrieval & research",
    icon: Feather,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
];

export default function AIModelSelection() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState(MODELS[0].id);

  const selectedModel = MODELS.find((m) => m.id === selected) ?? MODELS[0];
  const SelectedIcon = selectedModel.icon;

  return (
    <div className="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
          <Brain className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">AI Model Selection</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        Choose the best model for your needs and get better results.
      </p>

      {/* Selector */}
      <div className="rounded-xl border border-slate-200">
        {/* Trigger row */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between rounded-t-xl px-4 py-3 text-left"
        >
          <div className="flex items-center gap-3">
            <SelectedIcon className={`h-4 w-4 ${selectedModel.iconColor}`} />
            <div>
              <div className="text-sm font-medium text-slate-800">{selectedModel.name}</div>
              <div className="text-xs text-slate-400">{selectedModel.description}</div>
            </div>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Options list */}
        {open && (
          <div className="max-h-72 overflow-y-auto border-t border-slate-100">
            {MODELS.map((model) => {
              const Icon = model.icon;
              const isSelected = model.id === selected;
              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => setSelected(model.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left transition ${
                    isSelected ? "bg-indigo-50/70" : "hover:bg-slate-50"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${model.iconBg}`}
                  >
                    <Icon className={`h-4 w-4 ${model.iconColor}`} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium text-slate-800">
                        {model.name}
                      </span>
                      {model.recommended && (
                        <span className="shrink-0 rounded-full bg-indigo-100 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="truncate text-xs text-slate-400">{model.description}</div>
                  </div>

                  {isSelected && <Check className="h-4 w-4 shrink-0 text-indigo-500" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}