"use client";

import { useState } from "react";
import { MessageSquare, Paperclip, Image as ImageIcon, Mic, Send, Sparkles } from "lucide-react";

export default function PromptInputCard() {
  const [value, setValue] = useState("");

  const handleSend = () => {
    if (!value.trim()) return;
    console.log("Sending:", value);
    setValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
          <MessageSquare className="h-5 w-5 text-indigo-500" strokeWidth={2} />
        </div>
        <h2 className="text-lg font-semibold text-slate-900">Prompt Input</h2>
      </div>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-slate-500">
        Type your question or request with rich input options.
      </p>

      {/* Input box */}
      <div className="rounded-xl border border-slate-200 focus-within:border-indigo-300 focus-within:ring-2 focus-within:ring-indigo-100">
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask EchoGPT anything..."
          rows={3}
          className="w-full resize-none bg-transparent px-4 pt-3 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
        />

        <div className="flex items-center justify-between px-3 pb-3 pt-1">
          <div className="flex items-center gap-1">
            <button
              type="button"
              aria-label="Attach file"
              className="rounded-lg p-2 text-indigo-400 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Paperclip className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Attach image"
              className="rounded-lg p-2 text-indigo-400 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              <ImageIcon className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Voice input"
              className="rounded-lg p-2 text-indigo-400 transition hover:bg-indigo-50 hover:text-indigo-600"
            >
              <Mic className="h-4 w-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={handleSend}
            aria-label="Send"
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500 text-white shadow-sm transition hover:bg-indigo-600 active:scale-95"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Quick action pills */}
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100"
        >
          <Paperclip className="h-3.5 w-3.5" />
          Attach file
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100"
        >
          <Mic className="h-3.5 w-3.5" />
          Voice input
        </button>
        <button
          type="button"
          className="flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3.5 py-1.5 text-xs font-medium text-indigo-600 transition hover:bg-indigo-100"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Improve
        </button>
      </div>

      {/* Hint */}
      <p className="mt-3 flex items-center gap-1 text-xs text-center text-slate-400">
        <span className="text-[11px]">⌘</span>
        Press Ctrl + Enter to send
      </p>
    </div>
  );
}