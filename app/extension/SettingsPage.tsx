"use client";

import {
  Settings as SettingsIcon,
  Palette,
  Brain,
  Keyboard,
  ShieldCheck,
  Bell,
  Globe2,
  UserCircle2,
  Database,
  CreditCard,
  Info,
  ChevronRight,
} from "lucide-react";

type SettingItem = {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
};

const SETTINGS: SettingItem[] = [
  {
    id: "appearance",
    title: "Appearance",
    description: "Light / Dark / System",
    icon: Palette,
  },
  {
    id: "ai-model",
    title: "AI Model",
    description: "Default model & response length",
    icon: Brain,
  },
  {
    id: "keyboard-shortcuts",
    title: "Keyboard Shortcuts",
    description: "Open extension, quick actions",
    icon: Keyboard,
  },
  {
    id: "privacy",
    title: "Privacy",
    description: "Data & conversation settings",
    icon: ShieldCheck,
  },
  {
    id: "notifications",
    title: "Notifications",
    description: "Alerts, sounds & badges",
    icon: Bell,
  },
  {
    id: "language",
    title: "Language",
    description: "Interface & response language",
    icon: Globe2,
  },
  {
    id: "account",
    title: "Account",
    description: "Profile, email & password",
    icon: UserCircle2,
  },
  {
    id: "data-storage",
    title: "Data & Storage",
    description: "Export or delete your data",
    icon: Database,
  },
  {
    id: "billing",
    title: "Billing & Plan",
    description: "Subscription & payment methods",
    icon: CreditCard,
  },
  {
    id: "about",
    title: "About",
    description: "Version, help & feedback",
    icon: Info,
  },
];

export default function Settings() {
  return (
    <div className="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50">
          <SettingsIcon className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Settings</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        Customize your experience and make it work your way.
      </p>

      {/* List */}
      <div className="rounded-xl border border-slate-100 bg-slate-50/40">
        {SETTINGS.map((item, index) => {
          const Icon = item.icon;
          const isLast = index === SETTINGS.length - 1;
          return (
            <button
              key={item.id}
              type="button"
              className={`flex w-full items-center gap-3 px-4 py-3.5 text-left transition hover:bg-indigo-50/40 ${
                !isLast ? "border-b border-slate-100" : ""
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                <Icon className="h-4 w-4 text-indigo-500" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-slate-800">{item.title}</div>
                <div className="truncate text-xs text-slate-400">{item.description}</div>
              </div>

              <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" />
            </button>
          );
        })}
      </div>
    </div>
  );
}