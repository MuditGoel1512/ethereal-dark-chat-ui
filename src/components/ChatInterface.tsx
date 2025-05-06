
import React from 'react';
import { MessageSquare, Minimize, MoreHorizontal, Plus, Send, Image, FileText, Code, Mic } from "lucide-react";

const ChatInterface = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 animate-fade-in bg-gradient-to-b from-chat-darker to-black">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 animate-fade-in-up bg-gradient-to-r from-chat-blue via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Professional AI Assistant
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Empowering businesses with data-driven insights and intelligent solutions. Experience
          enterprise-grade AI assistance with our secure and responsive platform.
        </p>
      </header>
      
      <div className="chat-window w-full max-w-xl rounded-2xl overflow-hidden animate-fade-in-up backdrop-blur-md" 
           style={{ 
             animationDelay: '0.4s',
             background: 'linear-gradient(180deg, rgba(15,22,36,0.95) 0%, rgba(5,10,20,0.98) 100%)',
             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(44, 116, 224, 0.1)' 
           }}>
        {/* Chat Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center bg-gradient-to-br from-chat-blue to-blue-600 rounded-full p-2 shadow-lg shadow-blue-500/20">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium text-white">Professional AI Assistant</span>
          </div>
          <button className="flex items-center justify-center h-8 w-20 rounded-md bg-gray-800 text-sm text-gray-300 hover:bg-gray-700 transition-all hover:shadow-md hover:shadow-blue-900/20">
            <Minimize className="h-4 w-4 mr-1" />
            Minimize
          </button>
        </div>
        
        {/* Chat Body - New Conversation */}
        <div className="h-96 overflow-y-auto p-4">
          <div className="flex items-center gap-2 mb-6">
            <Plus className="h-4 w-4 text-white" />
            <span className="font-medium text-white">New Conversation</span>
            <div className="flex-grow"></div>
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </div>
          
          {/* Empty Chat State */}
          <div className="h-64 flex flex-col items-center justify-center text-center">
            <div className="bg-gradient-to-br from-chat-blue to-blue-600 rounded-full p-4 mb-6 shadow-lg shadow-blue-500/20">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-medium text-white mb-3 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">Professional AI Assistant</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Get insights, recommendations, and answers to your business inquiries
            </p>
          </div>
        </div>
        
        {/* Chat Footer */}
        <div className="border-t border-gray-800 p-4 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
          <div className="flex gap-3 mb-4">
            <button className="text-gray-400 hover:text-chat-blue transition-colors">
              <Image className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors">
              <FileText className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors">
              <Code className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors">
              <Mic className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex-grow bg-chat-input-bg rounded-lg border border-gray-800 flex items-center shadow-inner shadow-black/20 focus-within:ring-1 focus-within:ring-chat-blue/50">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="bg-transparent text-white px-4 py-3 w-full focus:outline-none"
              />
            </div>
            <button className="bg-gradient-to-br from-chat-blue to-blue-600 text-white p-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <footer className="mt-12 text-gray-500 text-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        © 2025 Professional AI - Enterprise Solutions
      </footer>
    </div>
  );
};

export default ChatInterface;
