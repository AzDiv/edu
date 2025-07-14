import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen, Settings, Moon, Sun, Volume2 } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const location = useLocation();
  const { settings, updateSettings } = useApp();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Cours', href: '/cours' },
    { name: 'Exercices', href: '/exercices' },
    { name: 'Forum', href: '/forum' },
    { name: 'Accessibilité', href: '/accessibilite' }
  ];

  const toggleVoiceNavigation = () => {
    updateSettings({ voiceNavigation: !settings.voiceNavigation });
    if (!settings.voiceNavigation) {
      // Simulate voice navigation activation
      if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance('Navigation vocale activée');
        utterance.lang = 'fr-FR';
        speechSynthesis.speak(utterance);
      }
    }
  };

  return (
    <header className={`sticky top-0 z-50 bg-white border-b border-gray-200 transition-colors duration-200 ${
      settings.darkMode ? 'dark:bg-gray-900 dark:border-gray-700' : ''
    } ${settings.highContrast ? 'bg-black text-white' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <BookOpen className={`h-8 w-8 text-blue-600 group-hover:text-blue-700 transition-colors ${
              settings.highContrast ? 'text-white' : ''
            }`} />
            <span className={`font-bold text-xl text-gray-900 group-hover:text-blue-700 transition-colors ${
              settings.darkMode ? 'dark:text-white' : ''
            } ${settings.highContrast ? 'text-white' : ''} ${
              settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
            }`}>
              EduFrançais
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-blue-50 ${
                  location.pathname === item.href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600'
                } ${settings.darkMode ? 'dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800' : ''} ${
                  settings.highContrast ? 'text-white hover:bg-gray-800' : ''
                } ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Settings & Controls */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleVoiceNavigation}
              className={`p-2 rounded-md transition-colors hover:bg-gray-100 ${
                settings.voiceNavigation ? 'text-blue-600 bg-blue-50' : 'text-gray-600'
              } ${settings.darkMode ? 'dark:hover:bg-gray-800 dark:text-gray-400' : ''} ${
                settings.highContrast ? 'text-white hover:bg-gray-800' : ''
              }`}
              title="Navigation vocale"
            >
              <Volume2 className="h-5 w-5" />
            </button>

            <button
              onClick={() => updateSettings({ darkMode: !settings.darkMode })}
              className={`p-2 rounded-md transition-colors hover:bg-gray-100 ${
                settings.darkMode ? 'dark:hover:bg-gray-800' : ''
              } ${settings.highContrast ? 'text-white hover:bg-gray-800' : ''}`}
              title="Mode sombre"
            >
              {settings.darkMode ? 
                <Sun className="h-5 w-5 text-yellow-500" /> : 
                <Moon className="h-5 w-5 text-gray-600" />
              }
            </button>

            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={`p-2 rounded-md transition-colors hover:bg-gray-100 text-gray-600 ${
                settings.darkMode ? 'dark:hover:bg-gray-800 dark:text-gray-400' : ''
              } ${settings.highContrast ? 'text-white hover:bg-gray-800' : ''}`}
              title="Paramètres d'accessibilité"
            >
              <Settings className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors hover:bg-gray-100 text-gray-600 ${
                settings.darkMode ? 'dark:hover:bg-gray-800 dark:text-gray-400' : ''
              } ${settings.highContrast ? 'text-white hover:bg-gray-800' : ''}`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Settings Dropdown */}
        {isSettingsOpen && (
          <div className={`absolute right-4 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50 ${
            settings.darkMode ? 'dark:bg-gray-800 dark:border-gray-600' : ''
          } ${settings.highContrast ? 'bg-black border-white' : ''}`}>
            <h3 className={`font-semibold mb-3 text-gray-900 ${
              settings.darkMode ? 'dark:text-white' : ''
            } ${settings.highContrast ? 'text-white' : ''}`}>
              Paramètres d'accessibilité
            </h3>
            
            <div className="space-y-3">
              <label className="flex items-center justify-between">
                <span className={`text-sm text-gray-700 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  Contraste élevé
                </span>
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
              </label>

              <div>
                <label className={`block text-sm font-medium text-gray-700 mb-2 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  Taille de police
                </label>
                <select
                  value={settings.fontSize}
                  onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
                  className={`w-full p-2 border border-gray-300 rounded-md text-sm ${
                    settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                  } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''}`}
                >
                  <option value="small">Petite</option>
                  <option value="medium">Moyenne</option>
                  <option value="large">Grande</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 border-t border-gray-200 ${
            settings.darkMode ? 'dark:border-gray-700' : ''
          } ${settings.highContrast ? 'border-white' : ''}`}>
            <nav className="flex flex-col space-y-2 mt-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  } ${settings.darkMode ? 'dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-gray-800' : ''} ${
                    settings.highContrast ? 'text-white hover:bg-gray-800' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;