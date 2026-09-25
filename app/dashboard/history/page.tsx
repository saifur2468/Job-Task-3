"use client";

import { useState } from "react";
import { Search, ChevronDown, Trash2, Eye } from "lucide-react";

const INITIAL_HISTORY = [
  { id: 1, title: "MERN Stack Bug Fixing", model: "EchoGPT", date: "2026-06-01", messages: 12 },
  { id: 2, title: "Resume Writing Guide", model: "EchoGPT", date: "2026-06-02", messages: 8 },
  { id: 3, title: "Image Studio Generation", model: "Nano Banana", date: "2026-06-03", messages: 4 },
  { id: 4, title: "Image Studio Generation", model: "Nano Banana", date: "2026-06-03", messages: 4 },
   { id: 5, title: "Image Studio Generation", model: "GLM-5.2", date: "2026-06-03", messages: 4 },
];

export default function ChatHistoryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [history, setHistory] = useState(INITIAL_HISTORY);

  const filteredHistory = history.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === "All" || item.model === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-10 font-sans overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
            My Chat History
          </h1>
          <p className="mt-2 text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Access your complete chat history across diverse topics and interactions with different models or characters[cite: 8].
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-10">
          <div className="relative flex-1 w-full">
            <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search chat history..."
              className="w-full pl-11 pr-4 py-3 bg-white border border-stone-200 rounded-2xl text-stone-900 placeholder-stone-400 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-transparent transition-all"
            />
          </div>

          <div className="relative w-full sm:w-48">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full px-4 py-3 bg-white border border-stone-200 rounded-2xl text-stone-900 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 appearance-none cursor-pointer"
            >
              <option value="All">All</option>
              <option value="EchoGPT">EchoGPT</option>
              <option value="Nano Banana">Nano Banana</option>
              <option value="Nano Banana">ChatGpt</option>
              <option value="Nano Banana">DeepSeek Pro v4</option>
              <option value="Nano Banana">GLM-5.2</option>
            </select>
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-stone-400">
              <ChevronDown className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Table Design Section */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50/50 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Chat Title</th>
                  <th className="py-4 px-6">Model</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6">Messages</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm text-stone-700">
                {filteredHistory.length > 0 ? (
                  filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-stone-900">{item.title}</td>
                      <td className="py-4 px-6">
                        <span className="px-2.5 py-1 bg-violet-50 text-violet-700 rounded-full text-xs font-medium">
                          {item.model}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-stone-500">{item.date}</td>
                      <td className="py-4 px-6 text-stone-500">{item.messages} msgs</td>
                      <td className="py-4 px-6 text-right space-x-2">
                        <button className="p-2 text-stone-400 hover:text-violet-600 transition-colors" title="View">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-stone-400 hover:text-red-600 transition-colors" title="Delete">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-stone-400 text-sm">
                      No history found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}