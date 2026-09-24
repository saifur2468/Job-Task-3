'use client'
import React, { useState } from 'react';
import { DashboardLayout } from './dashboardlayout';
import { ChatPageView } from './Chatpageview';

export default function App() {
  const [activeTab, setActiveTab] = useState('new-chat');
  const [promptInput, setPromptInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState('EchoGPT');

  return (
    <DashboardLayout 
      activeTab={activeTab} 
      setActiveTab={setActiveTab} 
      isDarkMode={isDarkMode} 
      setIsDarkMode={setIsDarkMode}
    >
      <ChatPageView 
        activeTab={activeTab} 
        promptInput={promptInput} 
        setPromptInput={setPromptInput} 
        chatHistory={chatHistory} 
        setChatHistory={setChatHistory} 
        selectedModel={selectedModel} 
        setSelectedModel={setSelectedModel} 
      />
    </DashboardLayout>
  );
}