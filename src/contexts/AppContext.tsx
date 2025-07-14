import React, { createContext, useContext, useState, useEffect } from 'react';

interface AppSettings {
  darkMode: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
  voiceNavigation: boolean;
}

interface AppContextType {
  settings: AppSettings;
  updateSettings: (newSettings: Partial<AppSettings>) => void;
  messages: ChatMessage[];
  addMessage: (message: ChatMessage) => void;
  suggestions: Suggestion[];
  addSuggestion: (suggestion: Omit<Suggestion, 'id' | 'date'>) => void;
}

interface ChatMessage {
  id: string;
  text: string;
  type: 'tip' | 'reminder' | 'encouragement';
  timestamp: Date;
}

interface Suggestion {
  id: string;
  text: string;
  category: string;
  date: Date;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('edusite-settings');
    return saved ? JSON.parse(saved) : {
      darkMode: false,
      highContrast: false,
      fontSize: 'medium',
      voiceNavigation: false
    };
  });

  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('edusite-messages');
    return saved ? JSON.parse(saved).map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    })) : [];
  });

  const [suggestions, setSuggestions] = useState<Suggestion[]>(() => {
    const saved = localStorage.getItem('edusite-suggestions');
    return saved ? JSON.parse(saved).map((sug: any) => ({
      ...sug,
      date: new Date(sug.date)
    })) : [];
  });

  useEffect(() => {
    localStorage.setItem('edusite-settings', JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem('edusite-messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem('edusite-suggestions', JSON.stringify(suggestions));
  }, [suggestions]);

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const addMessage = (message: ChatMessage) => {
    setMessages(prev => [message, ...prev].slice(0, 50)); // Keep last 50 messages
  };

  const addSuggestion = (suggestion: Omit<Suggestion, 'id' | 'date'>) => {
    const newSuggestion = {
      ...suggestion,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date()
    };
    setSuggestions(prev => [newSuggestion, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      settings,
      updateSettings,
      messages,
      addMessage,
      suggestions,
      addSuggestion
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};