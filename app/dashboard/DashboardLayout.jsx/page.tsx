// components/layouts/DashboardLayout.jsx
'use client';

import React, { useState } from 'react';
import { 
  FiPlus, FiImage, FiVideo, FiGitCommit, FiShare2, FiClock, 
  FiShoppingBag, FiCheckSquare, FiFileText, FiCpu, 
  FiHelpCircle, FiMail, FiCreditCard, FiCode, FiMessageSquare,
  FiHome, FiGrid, FiSettings, FiSun
} from 'react-icons/fi';

export default function DashboardLayout({ children }) {
  const [activeMenu, setActiveMenu] = useState('New Chat');

  const menuItems = [
    { name: 'Image Studio', icon: <FiImage />, badge: 'PRO' },
    { name: 'Video Studio', icon: <FiVideo />, badge: 'PRO' },
    { name: 'Compare', icon: <FiGitCommit /> },
    { name: 'Connectors', icon: <FiShare2 /> },
    { name: 'History', icon: <FiClock /> },
    { name: 'Store', icon: <FiShoppingBag /> },
    { name: 'AI Tasks', icon: <FiCheckSquare /> },
    { name: 'AI Job Analysis', icon: <FiFileText /> },
    { name: 'AI SOP Builder', icon: <FiCpu /> },
  ];

  const helpItems = [
    { name: 'Support', icon: <FiHelpCircle /> },
    { name: 'Newsletter', icon: <FiMail /> },
    { name: 'Subscriptions', icon: <FiCreditCard /> },
    { name: 'API Platform', icon: <FiCode /> },
    { name: 'Discord', icon: <FiMessageSquare /> },
  ];

  return (
    <div className="flex h-screen bg-[#fafaff] text-gray-800 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-purple-100 flex flex-col bg-[#fafaff] select-none">
        {/* Logo */}
        <div className="p-6 flex items-center space-x-2">
          <div className="w-8 h-8 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold shadow-md shadow-purple-200">
            <span className="text-lg">E</span>
          </div>
          <span className="text-xl font-extrabold tracking-wide bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            EchoGPT
          </span>
        </div>

        {/* New Chat Button */}
        <div className="px-4 mb-6">
          <button className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-purple-200 hover:opacity-95 transition-all">
            <FiPlus className="text-lg" />
            <span>New Chat</span>
          </button>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto px-4 space-y-6 scrollbar-thin scrollbar-thumb-purple-200">
          {/* Engagement */}
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 px-3">
              Engagement
            </p>
            <nav className="space-y-1">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeMenu === item.name
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-bold bg-purple-200 text-purple-700 px-1.5 py-0.5 rounded-md">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Help & Support */}
          <div>
            <p className="text-[11px] font-semibold tracking-wider text-gray-400 uppercase mb-2 px-3">
              Help & Support
            </p>
            <nav className="space-y-1">
              {helpItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => setActiveMenu(item.name)}
                  className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeMenu === item.name
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom Icons Bar */}
        <div className="p-4 border-t border-purple-100 flex items-center justify-around text-gray-500">
          <button className="hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"><FiHome /></button>
          <button className="hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"><FiGrid /></button>
          <button className="hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"><FiSettings /></button>
          <button className="hover:text-purple-600 p-2 rounded-lg hover:bg-purple-50 transition-colors"><FiSun /></button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full bg-white relative overflow-hidden">
        {children}
      </main>
    </div>
  );
}