import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, BookOpen, Target, Heart } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const { settings, messages, addMessage } = useApp();

  const tips = [
    { text: "💡 Astuce: Lisez 15 minutes par jour pour améliorer votre vocabulaire!", type: 'tip' as const },
    { text: "📚 Rappel: N'oubliez pas de réviser les figures de style pour votre prochain cours", type: 'reminder' as const },
    { text: "🌟 Bravo! Vous progressez bien en expression écrite!", type: 'encouragement' as const },
    { text: "✍️ Conseil: Variez vos connecteurs logiques dans vos rédactions", type: 'tip' as const },
    { text: "📖 Lecture recommandée: Relisez le chapitre sur le romantisme", type: 'reminder' as const },
    { text: "🎯 Objectif du jour: Apprenez 5 nouveaux mots de vocabulaire", type: 'reminder' as const },
  ];

  useEffect(() => {
    // Send a daily tip
    const lastTipDate = localStorage.getItem('last-tip-date');
    const today = new Date().toDateString();
    
    if (lastTipDate !== today && messages.length < 3) {
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      const tipMessage = {
        id: Math.random().toString(36).substr(2, 9),
        text: randomTip.text,
        type: randomTip.type,
        timestamp: new Date()
      };
      
      setTimeout(() => {
        addMessage(tipMessage);
        localStorage.setItem('last-tip-date', today);
      }, 2000);
    }
  }, []);

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: Math.random().toString(36).substr(2, 9),
        text: `✨ Suggestion reçue: "${newMessage.trim()}" - Merci pour votre retour!`,
        type: 'encouragement' as const,
        timestamp: new Date()
      };
      addMessage(message);
      setNewMessage('');
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'tip': return <BookOpen className="h-4 w-4 text-blue-500" />;
      case 'reminder': return <Target className="h-4 w-4 text-orange-500" />;
      case 'encouragement': return <Heart className="h-4 w-4 text-green-500" />;
      default: return <MessageCircle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-105 ${
            settings.highContrast ? 'bg-white text-black border-2 border-black' : ''
          }`}
          title="Assistant pédagogique"
        >
          <MessageCircle className="h-6 w-6" />
          {messages.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center">
              {messages.length}
            </span>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl border border-gray-200 w-80 h-96 flex flex-col transition-all duration-300 ${
          settings.darkMode ? 'dark:bg-gray-800 dark:border-gray-600' : ''
        } ${settings.highContrast ? 'bg-black border-white' : ''}`}>
          {/* Header */}
          <div className={`bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center ${
            settings.highContrast ? 'bg-white text-black' : ''
          }`}>
            <div>
              <h3 className={`font-semibold ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                Assistant Pédagogique
              </h3>
              <p className={`text-xs opacity-75 ${
                settings.fontSize === 'large' ? 'text-sm' : 'text-xs'
              }`}>
                Conseils et astuces quotidiennes
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-blue-700 p-1 rounded transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.length === 0 ? (
              <div className={`text-center text-gray-500 py-8 ${
                settings.darkMode ? 'dark:text-gray-400' : ''
              } ${settings.highContrast ? 'text-white' : ''}`}>
                <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p className={`text-sm ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
                }`}>
                  Vous recevrez bientôt des conseils personnalisés!
                </p>
              </div>
            ) : (
              messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start space-x-2 p-3 rounded-lg bg-gray-50 ${
                    settings.darkMode ? 'dark:bg-gray-700' : ''
                  } ${settings.highContrast ? 'bg-gray-800 text-white' : ''}`}
                >
                  {getIcon(message.type)}
                  <div className="flex-1">
                    <p className={`text-sm text-gray-800 ${
                      settings.darkMode ? 'dark:text-gray-200' : ''
                    } ${settings.highContrast ? 'text-white' : ''} ${
                      settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
                    }`}>
                      {message.text}
                    </p>
                    <span className={`text-xs text-gray-500 mt-1 block ${
                      settings.darkMode ? 'dark:text-gray-400' : ''
                    } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                      {message.timestamp.toLocaleTimeString('fr-FR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className={`p-4 border-t border-gray-200 ${
            settings.darkMode ? 'dark:border-gray-600' : ''
          } ${settings.highContrast ? 'border-white' : ''}`}>
            <div className="flex space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Suggérer une amélioration..."
                className={`flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
                }`}
              />
              <button
                onClick={sendMessage}
                disabled={!newMessage.trim()}
                className={`px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                  settings.highContrast ? 'bg-white text-black border border-black' : ''
                }`}
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;