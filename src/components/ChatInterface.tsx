
import React from 'react';
import { MessageSquare, Minimize, MoreHorizontal, Plus, Send, Image, FileText, Code, Mic } from "lucide-react";

const ChatInterface = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-10 px-4 bg-gradient-to-b from-black to-gray-900/70 animate-fade-in">
      <header className="text-center mb-12 relative">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse-subtle z-0"></div>
        <h1 className="text-5xl font-bold mb-4 animate-float text-gradient relative z-10">
          Professional AI Assistant
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto animate-fade-in-up relative z-10" style={{ animationDelay: '0.2s' }}>
          Empowering businesses with data-driven insights and intelligent solutions. Experience
          enterprise-grade AI assistance with our secure and responsive platform.
        </p>
      </header>
      
      <div className="chat-window w-full max-w-xl rounded-2xl overflow-hidden animate-fade-in-up relative glass-panel animate-glow" 
           style={{ animationDelay: '0.4s' }}>
        {/* Chat Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-gradient-to-r from-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-transparent animate-shimmer"></div>
          <div className="flex items-center gap-3 relative z-10">
            <div className="flex items-center justify-center bg-gradient-blue rounded-full p-2 shadow-lg shadow-blue-500/20 animate-bounce-slow">
              <MessageSquare className="h-4 w-4 text-white" />
            </div>
            <span className="font-medium text-white">Professional AI Assistant</span>
          </div>
          <button className="flex items-center justify-center h-8 w-20 rounded-md bg-black/50 text-sm text-gray-300 hover:bg-blue-900/20 transition-all hover:shadow-md hover:shadow-blue-900/20 relative z-10">
            <Minimize className="h-4 w-4 mr-1" />
            Minimize
          </button>
        </div>
        
        {/* Chat Body - New Conversation */}
        <div className="h-96 overflow-y-auto p-4 bg-gradient-to-b from-black to-gray-900/50 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/5 to-transparent pointer-events-none"></div>
          <div className="flex items-center gap-2 mb-6 relative z-10">
            <Plus className="h-4 w-4 text-white" />
            <span className="font-medium text-white">New Conversation</span>
            <div className="flex-grow"></div>
            <MoreHorizontal className="h-5 w-5 text-gray-500" />
          </div>
          
          {/* Empty Chat State */}
          <div className="h-64 flex flex-col items-center justify-center text-center relative z-10">
            <div className="button-gradient rounded-full p-4 mb-6 shadow-lg shadow-blue-500/20 animate-wave" style={{ animationDelay: '0.6s' }}>
              <MessageSquare className="h-6 w-6 text-white animate-glow-pulse" />
            </div>
            <h3 className="text-xl font-medium mb-3 text-gradient animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              Professional AI Assistant
            </h3>
            <p className="text-sm text-gray-400 max-w-xs animate-fade-in-up" style={{ animationDelay: '1s' }}>
              Get insights, recommendations, and answers to your business inquiries
            </p>
          </div>
        </div>
        
        {/* Chat Footer */}
        <div className="border-t border-white/5 p-4 bg-gradient-to-r from-black to-gray-900 relative">
          <div className="absolute inset-0 bg-blue-900/5 animate-shimmer"></div>
          <div className="flex gap-3 mb-4 relative z-10">
            <button className="text-gray-400 hover:text-chat-blue transition-colors hover:scale-110 transform duration-200">
              <Image className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors hover:scale-110 transform duration-200">
              <FileText className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors hover:scale-110 transform duration-200">
              <Code className="h-5 w-5" />
            </button>
            <button className="text-gray-400 hover:text-chat-blue transition-colors hover:scale-110 transform duration-200">
              <Mic className="h-5 w-5" />
            </button>
          </div>
          
          <div className="flex items-center gap-2 relative z-10">
            <div className="flex-grow bg-gradient-to-r from-gray-900 to-black rounded-lg border border-white/5 flex items-center shadow-inner shadow-black/20 focus-within:ring-1 focus-within:ring-chat-blue/50 transition-all duration-300 hover:border-blue-700/30">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="bg-transparent text-white px-4 py-3 w-full focus:outline-none"
              />
            </div>
            <button className="button-gradient text-white p-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/20 transition-all hover:scale-105 transform duration-200">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      <footer className="mt-12 text-gray-500 text-sm animate-fade-in-up relative z-10" style={{ animationDelay: '1.2s' }}>
        © 2025 Professional AI - Enterprise Solutions
      </footer>
    </div>
  );
};

export default ChatInterface;
