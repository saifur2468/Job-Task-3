"use client";

import { useState } from "react";
import { Key, Plus, Copy, Trash2, Check, ShieldCheck, Terminal, Activity } from "lucide-react";

export default function ApiPlatformPage() {
  const [apiKeys, setApiKeys] = useState([
    { id: 1, name: "Production Key", key: "egpt_live_9f83b...2a1b", created: "2026-06-01", requests: "1,240" },
    { id: 2, name: "Development Key", key: "egpt_test_4c21a...8e9d", created: "2026-06-03", requests: "310" },
  ]);
  
  const [copiedId, setCopiedId] = useState<number | null>(null);
  const [newKeyName, setNewKeyName] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleCopy = (keyString: string, id: number) => {
    navigator.clipboard.writeText(keyString);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCreateKey = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newKeyName.trim()) return;

    const newKey = {
      id: Date.now(),
      name: newKeyName,
      key: `egpt_live_${Math.random().toString(36).substring(2, 10)}...${Math.random().toString(36).substring(2, 6)}`,
      created: new Date().toISOString().split("T")[0],
      requests: "0",
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    setShowModal(false);
  };

  const handleDeleteKey = (id: number) => {
    setApiKeys(apiKeys.filter((k) => k.id !== id));
  };

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header Title & Subtitle */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-900">
              API Platform
            </h1>
            <p className="mt-2 text-stone-600 text-sm sm:text-base">
              Manage your API keys, monitor usage statistics, and integrate EchoGPT models into your applications.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowModal(true)}
            className="px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-sm rounded-full shadow-md shadow-violet-600/20 transition-all flex items-center gap-2 self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Create New Key</span>
          </button>
        </div>

        {/* Stats Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <Key className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Active Keys</p>
            <h3 className="text-2xl font-extrabold text-stone-900 mt-1">{apiKeys.length}</h3>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <Activity className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Total Requests (This Month)</p>
            <h3 className="text-2xl font-extrabold text-stone-900 mt-1">1,550</h3>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm">
            <div className="w-10 h-10 rounded-2xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">Rate Limit Status</p>
            <h3 className="text-2xl font-extrabold text-emerald-600 mt-1">Optimal</h3>
          </div>
        </div>

        {/* API Keys Table Section */}
        <div className="bg-white border border-stone-200 rounded-3xl shadow-sm overflow-hidden mb-12">
          <div className="p-6 border-b border-stone-100">
            <h2 className="text-lg font-bold text-stone-900">Your API Keys</h2>
            <p className="text-xs sm:text-sm text-stone-500 mt-0.5">Do not share your secret API keys with anyone.</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-stone-100 bg-stone-50/50 text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  <th className="py-4 px-6">Key Name</th>
                  <th className="py-4 px-6">API Key</th>
                  <th className="py-4 px-6">Created Date</th>
                  <th className="py-4 px-6">Requests</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 text-sm text-stone-700">
                {apiKeys.length > 0 ? (
                  apiKeys.map((item) => (
                    <tr key={item.id} className="hover:bg-stone-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-stone-900">{item.name}</td>
                      <td className="py-4 px-6 font-mono text-xs text-stone-500 bg-stone-50/80 rounded px-2 py-1 inline-block my-2">
                        {item.key}
                      </td>
                      <td className="py-4 px-6 text-stone-500">{item.created}</td>
                      <td className="py-4 px-6 text-stone-500">{item.requests}</td>
                      <td className="py-4 px-6 text-right space-x-1">
                        <button
                          type="button"
                          onClick={() => handleCopy(item.key, item.id)}
                          className="p-2 text-stone-400 hover:text-violet-600 transition-colors"
                          title="Copy Key"
                        >
                          {copiedId === item.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteKey(item.id)}
                          className="p-2 text-stone-400 hover:text-red-600 transition-colors"
                          title="Revoke Key"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="py-12 text-center text-stone-400 text-sm">
                      No active API keys found. Create one to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Documentation Snippet */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-5 h-5 text-violet-400" />
            <h3 className="text-base font-bold">Quick Integration Guide</h3>
          </div>
          <p className="text-xs sm:text-sm text-stone-400 mb-4">
            Use your active secret key to query EchoGPT endpoints via standard HTTP headers:
          </p>
          <pre className="bg-stone-950 text-violet-300 p-4 rounded-2xl text-xs font-mono overflow-x-auto border border-stone-800">
{`curl -X POST https://api.echogpt.dev/v1/chat \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"model": "EchoGPT", "prompt": "Hello world!"}'`}
          </pre>
        </div>

        {/* Simple Modal for Creating Key */}
        {showModal && (
          <div className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white border border-stone-200 rounded-3xl max-w-md w-full p-6 shadow-xl">
              <h3 className="text-lg font-bold text-stone-900 mb-2">Create New API Key</h3>
              <p className="text-xs sm:text-sm text-stone-500 mb-4">Give a recognizable name to track your usage easily.</p>
              
              <form onSubmit={handleCreateKey}>
                <input
                  type="text"
                  value={newKeyName}
                  onChange={(e) => setNewKeyName(e.target.value)}
                  placeholder="e.g., Mobile App Backend"
                  className="w-full px-4 py-3 bg-stone-50 border border-stone-200 rounded-2xl text-sm text-stone-900 focus:outline-none focus:ring-2 focus:ring-violet-600 mb-6"
                  autoFocus
                />
                
                <div className="flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 rounded-full text-sm font-semibold text-stone-600 hover:bg-stone-100 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-full shadow-md shadow-violet-600/20 transition-all"
                  >
                    Generate Key
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}