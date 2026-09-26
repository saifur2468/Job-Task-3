"use client";

import {
  Zap,
  FileText,
  PenLine,
  Languages,
  MessageCircleQuestion,
  Code2,
  Mail,
} from "lucide-react";

type Action = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconBg: string;
  iconColor: string;
};

const ACTIONS: Action[] = [
  {
    id: "summarize",
    title: "Summarize",
    description: "Any text or web page",
    icon: FileText,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-500",
  },
  {
    id: "rewrite",
    title: "Rewrite",
    description: "Improve your writing",
    icon: PenLine,
    iconBg: "bg-sky-100",
    iconColor: "text-sky-500",
  },
  {
    id: "translate",
    title: "Translate",
    description: "Any language",
    icon: Languages,
    iconBg: "bg-teal-100",
    iconColor: "text-teal-500",
  },
  {
    id: "explain",
    title: "Explain",
    description: "Get simple answers",
    icon: MessageCircleQuestion,
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
  },
  {
    id: "fix-code",
    title: "Fix Code",
    description: "Debug & improve code",
    icon: Code2,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: "write-email",
    title: "Write Email",
    description: "Professional emails",
    icon: Mail,
    iconBg: "bg-fuchsia-100",
    iconColor: "text-fuchsia-500",
  },
];

export default function QuickActions() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
          <Zap className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Quick Actions</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        One click access to common tasks and productivity tools.
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-3">
        {ACTIONS.map((action) => {
          const Icon = action.icon;
          return (
            <button
              key={action.id}
              type="button"
              className="flex flex-col items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 text-left transition hover:border-indigo-200 hover:bg-indigo-50/50"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${action.iconBg}`}
              >
                <Icon className={`h-4 w-4 ${action.iconColor}`} />
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-800">{action.title}</div>
                <div className="text-xs text-slate-400">{action.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}