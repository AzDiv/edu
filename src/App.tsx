import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider, useApp } from './contexts/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import Accueil from './pages/Accueil';
import Cours from './pages/Cours';
import Exercices from './pages/Exercices';
import Forum from './pages/Forum';
import Accessibilite from './pages/Accessibilite';

const AppContent: React.FC = () => {
  const { settings } = useApp();

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-200 ${
      settings.darkMode ? 'dark' : ''
    } ${settings.highContrast ? 'high-contrast' : ''} ${
      settings.fontSize === 'large' ? 'text-lg' : 
      settings.fontSize === 'small' ? 'text-sm' : 'text-base'
    }`}>
      <Router>
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/cours" element={<Cours />} />
            <Route path="/exercices" element={<Exercices />} />
            <Route path="/forum" element={<Forum />} />
            <Route path="/accessibilite" element={<Accessibilite />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </Router>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;