import React from 'react';
import { Bot } from 'lucide-react';
import { ChatMessage } from './types';

interface MessageListProps {
  messages: ChatMessage[];
  isTyping: boolean;
}

const MessageList = ({ messages, isTyping }: MessageListProps) => (
  <div className="h-96 overflow-y-auto p-4">
    {messages.map((message) => (
      <div
        key={message.id}
        className={`flex items-start mb-4 ${
          message.sender === 'user' ? 'justify-end' : 'justify-start'
        }`}
      >
        {message.sender === 'bot' && (
          <div className="flex-shrink-0 mr-2">
            <Bot className="h-6 w-6 text-[#2AD4AE]" />
          </div>
        )}
        <div
          className={`rounded-lg p-3 max-w-[80%] ${
            message.sender === 'user'
              ? 'bg-[#001E5D] text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {message.text}
        </div>
      </div>
    ))}
    {isTyping && (
      <div className="flex items-center">
        <Bot className="h-6 w-6 text-[#2AD4AE] mr-2" />
        <div className="bg-gray-100 rounded-lg p-3">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
          </div>
        </div>
      </div>
    )}
  </div>
);