import React from 'react';
import { Mail, Phone, MapPin, BookOpen } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { settings } = useApp();

  return (
    <footer className={`mt-auto bg-gray-900 text-white transition-colors duration-200 ${
      settings.darkMode ? 'dark:bg-black' : ''
    } ${settings.highContrast ? 'bg-black border-t border-white' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6 text-blue-400" />
              <span className={`font-bold text-lg ${
                settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-base' : 'text-lg'
              }`}>
                EduFrançais
              </span>
            </div>
            <p className={`text-gray-300 leading-relaxed ${
              settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
            } ${settings.highContrast ? 'text-white' : ''}`}>
              Plateforme éducative dédiée aux lycéens marocains de 1ère année bac. 
              Ressources complètes pour réussir en français : littérature, langue et expression.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className={`font-semibold mb-4 text-white ${
              settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
            }`}>
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className={`text-gray-300 ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  aiichamaazouz@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className={`text-gray-300 ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  +212 66 960 87 14
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className={`text-gray-300 ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  Taroudant, Maroc
                </span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className={`font-semibold mb-4 text-white ${
              settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
            }`}>
              Liens utiles
            </h3>
            <div className="space-y-2">
              <a 
                href="/accessibilite" 
                className={`block text-gray-300 hover:text-white transition-colors ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}
              >
                Accessibilité
              </a>
              <a 
                href="/mentions-legales" 
                className={`block text-gray-300 hover:text-white transition-colors ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}
              >
                Mentions légales
              </a>
              <a 
                href="/politique-confidentialite" 
                className={`block text-gray-300 hover:text-white transition-colors ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                } ${settings.highContrast ? 'text-white' : ''}`}
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t border-gray-700 text-center ${
          settings.highContrast ? 'border-white' : ''
        }`}>
          <p className={`text-gray-400 ${
            settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
          } ${settings.highContrast ? 'text-white' : ''}`}>
            © 2024 EduFrançais. Tous droits réservés. Développé pour l'éducation au Maroc par Azeddine Bourchouk.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;