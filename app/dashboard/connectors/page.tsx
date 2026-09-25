"use client";

import { useState } from "react";
import { Plug } from "lucide-react";
import { FaGithub, FaNotdef, FaTruckFast } from "react-icons/fa6";
import { FaFile, FaGamepad, FaSlack } from "react-icons/fa";

const INITIAL_CONNECTORS = [
  { id: 1, name: "GitHub", description: "Sync repositories, review code, and manage pull requests.", connected: true, icon:<FaGithub></FaGithub>  },
  { id: 2, name: "Slack", description: "Receive notifications and chat with EchoGPT directly in channels.", connected: true, icon: <FaSlack></FaSlack> },
  { id: 3, name: "Notion", description: "Import notes, documentation, and organize knowledge bases.", connected: false, icon: <FaNotdef></FaNotdef> },
  { id: 4, name: "Google Drive", description: "Read files, spreadsheets, and process documents securely.", connected: false, icon:<FaFile></FaFile> },
  { id: 5, name: "Discord", description: "Deploy AI community bots and automated workflow alerts.", connected: false, icon: <FaGamepad></FaGamepad> },
  { id: 6, name: "Zapier", description: "Connect EchoGPT with over 5,000+ external web services.", connected: false, icon:<FaTruckFast></FaTruckFast>  },
];

export default function ConnectorsPage() {
  const [connectors, setConnectors] = useState(INITIAL_CONNECTORS);

  const toggleConnection = (id: number) => {
    setConnectors(
      connectors.map((item) => (item.id === id ? { ...item, connected: !item.connected } : item))
    );
  };

  return (
    <div className="flex h-full flex-col bg-white text-stone-950 px-4 py-12 font-sans overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900">
            Integrations & Connectors
          </h1>
          <p className="mt-4 text-stone-600 text-sm sm:text-base max-w-xl mx-auto">
            Connect your favorite productivity tools and third-party apps seamlessly.
          </p>
        </div>

        {/* Connectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectors.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-stone-200 rounded-3xl p-6 shadow-sm hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="text-3xl p-2.5 bg-stone-50 border border-stone-100 rounded-2xl">
                    {item.icon}
                  </span>
                  <button
                    type="button"
                    onClick={() => toggleConnection(item.id)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                      item.connected
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100"
                        : "bg-violet-600 text-white hover:bg-violet-700 shadow-md shadow-violet-600/20"
                    }`}
                  >
                    {item.connected ? "Connected" : "Connect"}
                  </button>
                </div>

                <h3 className="text-lg font-bold text-stone-900 mb-1">
                  {item.name}
                </h3>
                
                <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}