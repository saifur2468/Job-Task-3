'use client'
import React, { useState } from 'react';
import { 
  Sparkles, 
  Plus, 
  ImageIcon, 
  Video, 
  GitCompare, 
  Network, 
  History, 
  Store, 
  CheckSquare, 
  FileSearch, 
  BookOpen, 
  HelpCircle, 
  Mail, 
  CreditCard, 
  Cpu, 
  MessageSquare, 
  Home, 
  LayoutGrid, 
  Settings, 
  Sun, 
  Moon, 
  Menu, 
  X 
} from 'lucide-react';

export function DashboardLayout({ children, activeTab, setActiveTab, isDarkMode, setIsDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={`flex h-screen w-full font-sans overflow-hidden ${isDarkMode ? 'dark bg-gray-950 text-gray-100' : 'bg-white text-gray-800'}`}>
      
      {/* Mobile Backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)} 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Navigation */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#f8f9ff] dark:bg-gray-900 border-r border-indigo-50/80 dark:border-gray-800 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        
        {/* Top Logo and New Chat */}
        <div className="p-4 flex flex-col gap-6 overflow-y-auto flex-1 scrollbar-thin">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 px-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-violet-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">EchoGPT</span>
            </div>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 p-1 rounded-md"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-1">
            <button 
              onClick={() => { setActiveTab('new-chat'); }}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-xl shadow-md shadow-violet-500/25 transition-all duration-200 transform active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>New Chat</span>
            </button>
          </div>

          {/* ENGAGEMENT SECTION */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-1">ENGAGEMENT</span>
            
            <SidebarItem 
              icon={<ImageIcon className="w-4 h-4 text-violet-600 " />} 
              label="Image Studio" 
              badge="PRO" 
              active={activeTab === 'image-studio'} 
              onClick={() => setActiveTab('image-studio')} 
            />
            <SidebarItem 
              icon={<Video className="w-4 h-4 text-violet-600" />} 
              label="Video Studio" 
              badge="PRO" 
              active={activeTab === 'video-studio'} 
              onClick={() => setActiveTab('video-studio')} 
            />
            <SidebarItem icon={<GitCompare className="w-4 h-4 text-gray-500 text-4xl " />} label="Compare" active={activeTab === 'compare'} onClick={() => setActiveTab('compare')} />
            <SidebarItem icon={<Network className="w-4 h-4 text-gray-500" />} label="Connectors" active={activeTab === 'connectors'} onClick={() => setActiveTab('connectors')} />
            <SidebarItem icon={<History className="w-4 h-4 text-gray-500" />} label="History" active={activeTab === 'history'} onClick={() => setActiveTab('history')} />
            <SidebarItem icon={<Store className="w-4 h-4 text-gray-500" />} label="Store" active={activeTab === 'store'} onClick={() => setActiveTab('store')} />
            <SidebarItem icon={<CheckSquare className="w-4 h-4 text-gray-500" />} label="AI Tasks" active={activeTab === 'ai-tasks'} onClick={() => setActiveTab('ai-tasks')} />
            <SidebarItem icon={<FileSearch className="w-4 h-4 text-gray-500" />} label="AI Job Analysis" active={activeTab === 'job-analysis'} onClick={() => setActiveTab('job-analysis')} />
            <SidebarItem icon={<BookOpen className="w-4 h-4 text-gray-500" />} label="AI SOP Builder" active={activeTab === 'sop-builder'} onClick={() => setActiveTab('sop-builder')} />
          </div>

          {/* HELP & SUPPORT SECTION */}
          <div className="flex flex-col gap-1 pt-2">
            <span className="text-[10px] font-semibold tracking-wider text-gray-400 dark:text-gray-500 px-3 mb-1">HELP & SUPPORT</span>
            
            <SidebarItem icon={<HelpCircle className="w-4 h-4 text-gray-500" />} label="Support" active={activeTab === 'support'} onClick={() => setActiveTab('support')} />
            <SidebarItem icon={<Mail className="w-4 h-4 text-gray-500" />} label="Newsletter" active={activeTab === 'newsletter'} onClick={() => setActiveTab('newsletter')} />
            <SidebarItem icon={<CreditCard className="w-4 h-4 text-gray-500" />} label="Subscriptions" active={activeTab === 'subscriptions'} onClick={() => setActiveTab('subscriptions')} />
            <SidebarItem icon={<Cpu className="w-4 h-4 text-gray-500" />} label="API Platform" active={activeTab === 'api'} onClick={() => setActiveTab('api')} />
            <SidebarItem icon={<MessageSquare className="w-4 h-4 text-indigo-500" />} label="Discord" active={activeTab === 'discord'} onClick={() => setActiveTab('discord')} />
          </div>
        </div>

        {/* Sidebar Footer Icons */}
        <div className="p-3 border-t border-indigo-100/60 dark:border-gray-800 flex items-center justify-around text-gray-500 dark:text-gray-400">
          <button onClick={() => setActiveTab('home')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><Home className="w-4 h-4" /></button>
          <button onClick={() => setActiveTab('apps')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><LayoutGrid className="w-4 h-4" /></button>
          <button onClick={() => setActiveTab('settings')} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors"><Settings className="w-4 h-4" /></button>
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 hover:bg-indigo-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
            {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full bg-white dark:bg-gray-950 relative overflow-hidden">
        
        {/* Mobile Header Bar */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
          <button onClick={() => setSidebarOpen(true)} className="p-2 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
            <Menu className="w-5 h-5" />
          </button>
          <span className="font-bold bg-gradient-to-r from-violet-700 to-indigo-600 bg-clip-text text-transparent">EchoGPT</span>
          <div className="w-9" />
        </div>

        {children}
      </main>
    </div>
  );
}

function SidebarItem({ icon, label, badge, active, onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${active ? 'bg-indigo-100/70 dark:bg-gray-800 text-violet-700 dark:text-violet-400 font-semibold' : 'text-gray-600 dark:text-gray-400 hover:bg-indigo-50/50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-200'}`}
    >
      <div className="flex items-center gap-3">
        {icon}
        <span>{label}</span>
      </div>
      {badge && (
        <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300 tracking-wider">
          {badge}
        </span>
      )}
    </button>
  );
}

export default DashboardLayout;