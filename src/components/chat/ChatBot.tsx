import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { ChatMessage } from './types';
import MessageList from './MessageList';
import { getAIResponse } from './chatService';

const ChatBot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await getAIResponse(input);
      const botMessage: ChatMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error getting AI response:', error);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-96 bg-white rounded-lg shadow-xl">
      <div className="p-4 bg-[#001E5D] rounded-t-lg flex items-center">
        <Bot className="h-6 w-6 text-[#2AD4AE]" />
        <span className="ml-2 text-white font-semibold">Asistente Virtual</span>
      </div>
      
      <MessageList messages={messages} isTyping={isTyping} />

      <div className="p-4 border-t">
        <div className="flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu pregunta..."
            className="flex-1 p-2 border rounded-l-md focus:outline-none focus:border-[#2AD4AE]"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-[#2AD4AE] text-white rounded-r-md hover:bg-[#001E5D] transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};