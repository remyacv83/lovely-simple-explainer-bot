
import React from 'react';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <div className="flex gap-3 max-w-[85%] animate-in slide-in-from-bottom-2 duration-300">
      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
        <Bot size={16} />
      </div>
      
      <div className="bg-white border border-blue-200 rounded-2xl px-4 py-3 shadow-sm">
        <div className="flex items-center gap-1">
          <span className="text-sm text-gray-600">Thinking</span>
          <div className="flex gap-1 ml-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
