
import React from 'react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
  icon: React.ReactNode;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message, icon }) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={cn(
      "flex gap-3 max-w-[85%] animate-in slide-in-from-bottom-2 duration-300",
      message.isBot ? "justify-start" : "justify-end ml-auto"
    )}>
      {message.isBot && (
        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
      )}
      
      <div className={cn(
        "rounded-2xl px-4 py-3 shadow-sm",
        message.isBot 
          ? "bg-white border border-blue-200 text-gray-800" 
          : "bg-blue-600 text-white"
      )}>
        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
        <p className={cn(
          "text-xs mt-2 opacity-70",
          message.isBot ? "text-gray-500" : "text-blue-100"
        )}>
          {formatTime(message.timestamp)}
        </p>
      </div>

      {!message.isBot && (
        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
          {icon}
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
