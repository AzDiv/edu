import React, { useState, useRef, useEffect } from 'react';
import { Headphones, Download, Mic, VolumeX, Volume2, FileText, MessageSquare, Eye, Settings, Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Accessibilite: React.FC = () => {
  const { settings, updateSettings, addSuggestion } = useApp();
  const [suggestion, setSuggestion] = useState('');
  const [isPlaying, setIsPlaying] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioIsPlaying, setAudioIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Video data from the playlist
  const videos = [
    {
      id: "t1Hp8I8tZhg",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 1",
      description: "Introduction à l'œuvre de Mohammed KHAÏR-EDDINE",
      thumbnail: `https://img.youtube.com/vi/t1Hp8I8tZhg/maxresdefault.jpg`
    },
    {
      id: "AuljdnbV9Q0", 
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 2",
      description: "Continuation de la lecture par Aicha Maazouz",
      thumbnail: `https://img.youtube.com/vi/AuljdnbV9Q0/maxresdefault.jpg`
    },
    {
      id: "01_Plo2mG5k",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 3", 
      description: "Suite de l'histoire",
      thumbnail: `https://img.youtube.com/vi/01_Plo2mG5k/maxresdefault.jpg`
    },
    {
      id: "U-ukytPojhs",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 4",
      description: "Développement des personnages",
      thumbnail: `https://img.youtube.com/vi/U-ukytPojhs/maxresdefault.jpg`
    },
    {
      id: "TQVw1EfffTs",
      title: "Il était une Fois un Vieux Couple Heureux", 
      episode: "Episode 5",
      description: "Climax de l'histoire",
      thumbnail: `https://img.youtube.com/vi/TQVw1EfffTs/maxresdefault.jpg`
    },
    {
      id: "3S1CUWKKsbU",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 6", 
      description: "Résolution du conflit",
      thumbnail: `https://img.youtube.com/vi/3S1CUWKKsbU/maxresdefault.jpg`
    },
    {
      id: "KMBjt4dEQK0",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 7",
      description: "Dénouement",
      thumbnail: `https://img.youtube.com/vi/KMBjt4dEQK0/maxresdefault.jpg`
    },
    {
      id: "OpX6ZnPY4GA",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 8",
      description: "Épilogue partie 1",
      thumbnail: `https://img.youtube.com/vi/OpX6ZnPY4GA/maxresdefault.jpg`
    },
    {
      id: "J433f9aP9M4", 
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 9",
      description: "Épilogue partie 2 - Conclusion",
      thumbnail: `https://img.youtube.com/vi/J433f9aP9M4/maxresdefault.jpg`
    }
  ];

  const audioResources = [
    {
      id: 1,
      title: "Le Romantisme - Cours audio complet",
      duration: "45 min",
      category: "Littérature",
      description: "Découverte complète du mouvement romantique avec exemples audio",
      audioUrl: "#",
      pdfUrl: "#"
    },
    {
      id: 2,
      title: "Conjugaison française - Guide audio",
      duration: "30 min",
      category: "Grammaire",
      description: "Apprentissage des temps verbaux avec prononciation",
      audioUrl: "#",
      pdfUrl: "#"
    },
    {
      id: 3,
      title: "Analyse de texte - Méthode vocale",
      duration: "25 min",
      category: "Méthode",
      description: "Techniques d'analyse expliquées étape par étape",
      audioUrl: "#",
      pdfUrl: "#"
    },
    {
      id: 4,
      title: "Molière - Biographie et œuvres",
      duration: "35 min",
      category: "Littérature",
      description: "Vie et œuvres de Molière racontées",
      audioUrl: "#",
      pdfUrl: "#"
    }
  ];

  const podcasts = [
    {
      id: 1,
      title: "Français Facile - Episode 1",
      duration: "20 min",
      description: "Introduction à la littérature française",
      date: "15 Jan 2024"
    },
    {
      id: 2,
      title: "Les secrets de l'écriture",
      duration: "18 min",
      description: "Améliorer son style d'écriture",
      date: "10 Jan 2024"
    },
    {
      id: 3,
      title: "Poésie moderne expliquée",
      duration: "22 min",
      description: "Comprendre la poésie contemporaine",
      date: "5 Jan 2024"
    }
  ];

  // Figures de style audio data
  const figuresDeStyle = [
    {
      id: 1,
      title: "La Métaphore",
      duration: "00:12",
      file: "/La_métaphore.mp3",
      description: "Comprendre la métaphore à travers des exemples concrets"
    },
    {
      id: 2,
      title: "La Comparaison",
      duration: "00:15",
      file: "/La_comparaison.mp3",
      description: "Distinction entre comparaison et métaphore"
    },
    {
      id: 3,
      title: "La Personnification",
      duration: "00:10",
      file: "/La_personnification.mp3",
      description: "Donner vie aux objets inanimés"
    },
    {
      id: 4,
      title: "L'Hyperbole",
      duration: "00:13",
      file: "/L'hyperbole.mp3",
      description: "L'art de l'exagération littéraire"
    },
    {
      id: 5,
      title: "L'Euphémisme",
      duration: "00:11",
      file: "/L'euphémisme.mp3",
      description: "Adoucir une réalité par les mots"
    },
    {
      id: 6,
      title: "L'Antithèse",
      duration: "00:14",
      file: "/L'antithèse.mp3",
      description: "Le contraste des idées opposées"
    },
    {
      id: 7,
      title: "L'Oxymore",
      duration: "00:09",
      file: "/L'oxymore.mp3",
      description: "L'alliance des contraires"
    },
    {
      id: 8,
      title: "La Périphrase",
      duration: "00:12",
      file: "/La_périphrase.mp3",
      description: "Exprimer une idée par un détour"
    },
    {
      id: 9,
      title: "La Métonymie",
      duration: "00:11",
      file: "/La_métonymie.mp3",
      description: "Substituer un terme par un autre"
    },
    {
      id: 10,
      title: "La Répétition",
      duration: "00:08",
      file: "/La_répétition.mp3",
      description: "Insister par la répétition"
    },
    {
      id: 11,
      title: "L'Énumération",
      duration: "00:10",
      file: "/L'énumération.mp3",
      description: "Lister pour renforcer l'idée"
    },
    {
      id: 12,
      title: "L'Anaphore",
      duration: "00:13",
      file: "/L'anaphore.mp3",
      description: "La répétition en début de phrase"
    },
    {
      id: 13,
      title: "La Gradation",
      duration: "00:12",
      file: "/La_gradation.mp3",
      description: "L'intensité progressive"
    },
    {
      id: 14,
      title: "L'Antiphrase",
      duration: "00:14",
      file: "/L'antiphrase.mp3",
      description: "Dire le contraire de ce que l'on pense"
    },
    {
      id: 15,
      title: "La Litote",
      duration: "00:09",
      file: "/La_litote.mp3",
      description: "Dire moins pour suggérer plus"
    },
    {
      id: 16,
      title: "L'Allégorie",
      duration: "00:15",
      file: "/L'allégorie.mp3",
      description: "Représenter une idée abstraite par une image"
    }
  ];

  // Audio player functions for figures de style
  const playFigureAudio = (trackIndex: number) => {
    if (audioRef.current) {
      if (currentTrack === trackIndex && audioIsPlaying) {
        audioRef.current.pause();
        setAudioIsPlaying(false);
      } else {
        if (currentTrack !== trackIndex) {
          setCurrentTrack(trackIndex);
          audioRef.current.src = figuresDeStyle[trackIndex].file;
        }
        audioRef.current.play();
        setAudioIsPlaying(true);
      }
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrack + 1) % figuresDeStyle.length;
    setCurrentTrack(nextIndex);
    if (audioRef.current) {
      audioRef.current.src = figuresDeStyle[nextIndex].file;
      if (audioIsPlaying) {
        audioRef.current.play();
      }
    }
  };

  const previousTrack = () => {
    const prevIndex = currentTrack === 0 ? figuresDeStyle.length - 1 : currentTrack - 1;
    setCurrentTrack(prevIndex);
    if (audioRef.current) {
      audioRef.current.src = figuresDeStyle[prevIndex].file;
      if (audioIsPlaying) {
        audioRef.current.play();
      }
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setAudioProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const progress = (clickX / rect.width) * 100;
      const newTime = (progress / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setAudioProgress(progress);
    }
  };

  // Initialize audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = figuresDeStyle[currentTrack].file;
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', nextTrack);
      
      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', nextTrack);
        }
      };
    }
  }, [currentTrack]);

  const playAudioResource = (resourceId: string) => {
    // Simulation de lecture audio
    if (isPlaying === resourceId) {
      setIsPlaying(null);
    } else {
      setIsPlaying(resourceId);
      // Arrêter après 3 secondes pour la démo
      setTimeout(() => setIsPlaying(null), 3000);
    }
  };

  const handleSuggestion = () => {
    if (suggestion.trim()) {
      addSuggestion({
        text: suggestion,
        category: 'Accessibilité'
      });
      setSuggestion('');
      alert('Merci pour votre suggestion ! Nous l\'étudierons avec attention.');
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      utterance.rate = 0.8;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      settings.darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'
    } ${settings.highContrast ? 'bg-black text-white' : ''}`}>
      {/* Header */}
      <div className={`bg-white shadow-sm ${
        settings.darkMode ? 'dark:bg-gray-800' : ''
      } ${settings.highContrast ? 'bg-gray-900 border-b border-white' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className={`h-8 w-8 text-blue-600 ${
              settings.highContrast ? 'text-white' : ''
            }`} />
            <h1 className={`font-bold text-gray-900 ${
              settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
            } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
              Espace Accessibilité
            </h1>
          </div>
          <p className={`text-gray-600 max-w-3xl ${
            settings.darkMode ? 'dark:text-gray-300' : ''
          } ${settings.highContrast ? 'text-white' : ''} ${
            settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
          }`}>
            Ressources adaptées pour tous les apprenants. Cours audio, transcriptions et outils d'assistance pour une expérience d'apprentissage inclusive.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Accessibility Controls */}
        <div className={`bg-white rounded-lg shadow-sm p-6 mb-8 ${
          settings.darkMode ? 'dark:bg-gray-800' : ''
        } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
          <div className="flex items-center space-x-3 mb-4">
            <Settings className={`h-6 w-6 text-blue-600 ${
              settings.highContrast ? 'text-white' : ''
            }`} />
            <h2 className={`font-semibold text-gray-900 ${
              settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-lg'
            } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
              Paramètres d'Accessibilité
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-3">
              <h3 className={`font-medium text-gray-700 ${
                settings.darkMode ? 'dark:text-gray-300' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                Contraste
              </h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.highContrast}
                  onChange={(e) => updateSettings({ highContrast: e.target.checked })}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`text-gray-600 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                }`}>
                  Mode contraste élevé
                </span>
              </label>
            </div>

            <div className="space-y-3">
              <h3 className={`font-medium text-gray-700 ${
                settings.darkMode ? 'dark:text-gray-300' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                Taille de police
              </h3>
              <select
                value={settings.fontSize}
                onChange={(e) => updateSettings({ fontSize: e.target.value as any })}
                className={`w-full p-2 border border-gray-300 rounded-md ${
                  settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''}`}
              >
                <option value="small">Petite</option>
                <option value="medium">Moyenne</option>
                <option value="large">Grande</option>
              </select>
            </div>

            <div className="space-y-3">
              <h3 className={`font-medium text-gray-700 ${
                settings.darkMode ? 'dark:text-gray-300' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                Navigation vocale
              </h3>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={settings.voiceNavigation}
                  onChange={(e) => updateSettings({ voiceNavigation: e.target.checked })}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className={`text-gray-600 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                }`}>
                  Activer la navigation vocale
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Audio Resources */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Headphones className={`h-6 w-6 text-green-600 ${
                  settings.highContrast ? 'text-white' : ''
                }`} />
                <h2 className={`font-semibold text-gray-900 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  Cours Audio
                </h2>
              </div>

              <div className="space-y-4">
                {/* Featured Video */}
                <div className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-200 border-l-4 border-purple-500 ${
                  settings.darkMode ? 'dark:bg-gray-800' : ''
                } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
                  <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <h3 className={`font-semibold text-gray-900 ${
                        settings.darkMode ? 'dark:text-white' : ''
                      } ${settings.highContrast ? 'text-white' : ''} ${
                        settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                      }`}>
                        📺 Vidéo Vedette - Littérature Marocaine
                      </h3>
                      {settings.voiceNavigation && (
                        <button
                          onClick={() => speakText("Il était une Fois un Vieux Couple Heureux par Mohammed KHAÏR-EDDINE")}
                          className="text-blue-600 hover:text-blue-700 p-1"
                          title="Écouter le titre"
                        >
                          <Volume2 className="h-4 w-4" />
                        </button>
                      )}
                    </div>
                    
                    {/* Featured Video Thumbnail */}
                    <div className="relative aspect-video rounded-lg overflow-hidden mb-4 group cursor-pointer"
                         onClick={() => setSelectedVideo(videos[0].id)}>
                      <img
                        src={videos[0].thumbnail}
                        alt={videos[0].title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = 'https://img.youtube.com/vi/J433f9aP9M4/maxresdefault.jpg';
                        }}
                      />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-red-600 rounded-full p-3 transform scale-110 hover:scale-125 transition-transform duration-200">
                          <Play className="h-6 w-6 text-white ml-0.5" fill="white" />
                        </div>
                      </div>
                      
                      {/* Episode Badge */}
                      <div className="absolute top-2 right-2">
                        <span className={`bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium ${
                          settings.fontSize === 'large' ? 'text-sm' : 'text-xs'
                        }`}>
                          {videos[0].episode}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <h4 className={`font-medium text-gray-900 mb-2 ${
                        settings.darkMode ? 'dark:text-white' : ''
                      } ${settings.highContrast ? 'text-white' : ''}`}>
                        {videos[0].title}
                      </h4>
                      <p className={`text-gray-600 mb-2 ${
                        settings.darkMode ? 'dark:text-gray-300' : ''
                      } ${settings.highContrast ? 'text-white' : ''} ${
                        settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                      }`}>
                        {videos[0].description}. 
                        Une immersion dans la littérature marocaine contemporaine avec une narration captivante.
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            Littérature Marocaine
                          </span>
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {videos[0].episode}
                          </span>
                          <span className={`px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium ${
                            settings.highContrast ? 'bg-white text-black' : ''
                          }`}>
                            🎬 Vidéo
                          </span>
                        </div>
                        <button
                          onClick={() => setSelectedVideo(videos[0].id)}
                          className={`inline-flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm ${
                            settings.highContrast ? 'bg-white text-black border border-black' : ''
                          }`}
                        >
                          <Play className="h-4 w-4" fill="white" />
                          <span>Voir la série ({videos.length} épisodes)</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {audioResources.map((resource) => (
                  <div
                    key={resource.id}
                    className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-all duration-200 ${
                      settings.darkMode ? 'dark:bg-gray-800' : ''
                    } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className={`font-semibold text-gray-900 ${
                            settings.darkMode ? 'dark:text-white' : ''
                          } ${settings.highContrast ? 'text-white' : ''} ${
                            settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                          }`}>
                            {resource.title}
                          </h3>
                          {settings.voiceNavigation && (
                            <button
                              onClick={() => speakText(resource.title)}
                              className="text-blue-600 hover:text-blue-700 p-1"
                              title="Écouter le titre"
                            >
                              <Volume2 className="h-4 w-4" />
                            </button>
                          )}
                        </div>
                        <p className={`text-gray-600 mb-2 ${
                          settings.darkMode ? 'dark:text-gray-300' : ''
                        } ${settings.highContrast ? 'text-white' : ''} ${
                          settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                        }`}>
                          {resource.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {resource.category}
                          </span>
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {resource.duration}
                          </span>
                        </div>
                      </div>
                      <span className={`px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium ${
                        settings.highContrast ? 'bg-white text-black' : ''
                      }`}>
                        🎧 Audio
                      </span>
                    </div>

                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => playAudioResource(resource.id.toString())}
                        className={`flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors ${
                          settings.highContrast ? 'bg-white text-black border border-black' : ''
                        }`}
                      >
                        {isPlaying === resource.id.toString() ? (
                          <>
                            <VolumeX className="h-4 w-4" />
                            <span>Arrêter</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="h-4 w-4" />
                            <span>Écouter</span>
                          </>
                        )}
                      </button>

                      <button className={`flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                        settings.darkMode ? 'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700' : ''
                      } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''}`}>
                        <Download className="h-4 w-4" />
                        <span>Télécharger MP3</span>
                      </button>

                      <button className={`flex items-center space-x-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors ${
                        settings.darkMode ? 'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700' : ''
                      } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''}`}>
                        <FileText className="h-4 w-4" />
                        <span>PDF</span>
                      </button>
                    </div>

                    {isPlaying === resource.id.toString() && (
                      <div className={`mt-4 p-3 bg-blue-50 rounded-lg ${
                        settings.darkMode ? 'dark:bg-blue-900' : ''
                      } ${settings.highContrast ? 'bg-blue-800' : ''}`}>
                        <div className="flex items-center space-x-2">
                          <div className="flex space-x-1">
                            <div className="w-1 h-4 bg-blue-500 rounded animate-pulse"></div>
                            <div className="w-1 h-4 bg-blue-500 rounded animate-pulse delay-100"></div>
                            <div className="w-1 h-4 bg-blue-500 rounded animate-pulse delay-200"></div>
                          </div>
                          <span className={`text-blue-700 text-sm ${
                            settings.darkMode ? 'dark:text-blue-300' : ''
                          } ${settings.highContrast ? 'text-white' : ''}`}>
                            Lecture en cours...
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Figures de Style Audio Player */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Headphones className={`h-6 w-6 text-green-600 ${
                  settings.highContrast ? 'text-white' : ''
                }`} />
                <h2 className={`font-semibold text-gray-900 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  Figures de Style - Audio
                </h2>
              </div>

              <div className={`bg-white rounded-lg shadow-lg p-6 ${
                settings.darkMode ? 'dark:bg-gray-800' : ''
              } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
                {/* Audio Player */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h3 className={`font-semibold text-gray-900 ${
                        settings.darkMode ? 'dark:text-white' : ''
                      } ${settings.highContrast ? 'text-white' : ''} ${
                        settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                      }`}>
                        {figuresDeStyle[currentTrack].title}
                      </h3>
                      <p className={`text-gray-600 ${
                        settings.darkMode ? 'dark:text-gray-300' : ''
                      } ${settings.highContrast ? 'text-gray-300' : ''} ${
                        settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                      }`}>
                        {figuresDeStyle[currentTrack].description}
                      </p>
                    </div>
                    <div className={`px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium ${
                      settings.highContrast ? 'bg-white text-black' : ''
                    }`}>
                      {figuresDeStyle[currentTrack].duration}
                    </div>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center space-x-4 mb-4">
                    <button
                      onClick={previousTrack}
                      className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
                        settings.darkMode ? 'dark:bg-gray-700 dark:hover:bg-gray-600' : ''
                      } ${settings.highContrast ? 'bg-white text-black' : ''}`}
                    >
                      <SkipBack className="h-5 w-5" />
                    </button>
                    
                    <button
                      onClick={() => playFigureAudio(currentTrack)}
                      className={`p-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition-colors ${
                        settings.highContrast ? 'bg-white text-black border border-black' : ''
                      }`}
                    >
                      {audioIsPlaying ? (
                        <Pause className="h-6 w-6" />
                      ) : (
                        <Play className="h-6 w-6" />
                      )}
                    </button>
                    
                    <button
                      onClick={nextTrack}
                      className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors ${
                        settings.darkMode ? 'dark:bg-gray-700 dark:hover:bg-gray-600' : ''
                      } ${settings.highContrast ? 'bg-white text-black' : ''}`}
                    >
                      <SkipForward className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div
                      className={`w-full h-2 bg-gray-200 rounded-full cursor-pointer ${
                        settings.darkMode ? 'dark:bg-gray-600' : ''
                      } ${settings.highContrast ? 'bg-gray-700' : ''}`}
                      onClick={handleProgressClick}
                    >
                      <div
                        className="h-2 bg-green-600 rounded-full transition-all duration-300"
                        style={{ width: `${audioProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Current Track Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className={`${
                      settings.darkMode ? 'dark:text-gray-400' : ''
                    } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                      Piste {currentTrack + 1} sur {figuresDeStyle.length}
                    </span>
                    <span className={`${
                      settings.darkMode ? 'dark:text-gray-400' : ''
                    } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                      {figuresDeStyle[currentTrack].duration}
                    </span>
                  </div>
                </div>

                {/* Playlist */}
                <div>
                  <h4 className={`font-semibold text-gray-900 mb-3 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                  }`}>
                    Liste des Figures de Style
                  </h4>
                  
                  <div className="max-h-64 overflow-y-auto space-y-2">
                    {figuresDeStyle.map((figure, index) => (
                      <div
                        key={figure.id}
                        className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                          currentTrack === index
                            ? `bg-green-100 ${settings.darkMode ? 'dark:bg-green-900' : ''} ${settings.highContrast ? 'bg-green-800' : ''}`
                            : `hover:bg-gray-100 ${settings.darkMode ? 'dark:hover:bg-gray-700' : ''} ${settings.highContrast ? 'hover:bg-gray-800' : ''}`
                        }`}
                        onClick={() => playFigureAudio(index)}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          currentTrack === index
                            ? `bg-green-600 text-white`
                            : `bg-gray-200 text-gray-600 ${settings.darkMode ? 'dark:bg-gray-600 dark:text-gray-300' : ''} ${settings.highContrast ? 'bg-gray-600 text-white' : ''}`
                        }`}>
                          {currentTrack === index && audioIsPlaying ? (
                            <Pause className="h-4 w-4" />
                          ) : (
                            <Play className="h-4 w-4" />
                          )}
                        </div>
                        
                        <div className="flex-1">
                          <div className={`font-medium ${
                            currentTrack === index
                              ? `text-green-800 ${settings.darkMode ? 'dark:text-green-200' : ''} ${settings.highContrast ? 'text-white' : ''}`
                              : `text-gray-900 ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`
                          } ${settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'}`}>
                            {figure.title}
                          </div>
                          <div className={`text-xs ${
                            currentTrack === index
                              ? `text-green-600 ${settings.darkMode ? 'dark:text-green-300' : ''} ${settings.highContrast ? 'text-gray-300' : ''}`
                              : `text-gray-500 ${settings.darkMode ? 'dark:text-gray-400' : ''} ${settings.highContrast ? 'text-gray-300' : ''}`
                          }`}>
                            {figure.description}
                          </div>
                        </div>
                        
                        <div className={`text-xs font-medium ${
                          currentTrack === index
                            ? `text-green-600 ${settings.darkMode ? 'dark:text-green-300' : ''} ${settings.highContrast ? 'text-white' : ''}`
                            : `text-gray-500 ${settings.darkMode ? 'dark:text-gray-400' : ''} ${settings.highContrast ? 'text-gray-300' : ''}`
                        }`}>
                          {figure.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hidden Audio Element */}
                <audio
                  ref={audioRef}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={nextTrack}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {/* Podcasts Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Mic className={`h-6 w-6 text-purple-600 ${
                  settings.highContrast ? 'text-white' : ''
                }`} />
                <h2 className={`font-semibold text-gray-900 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  Podcasts Éducatifs
                </h2>
              </div>

              <div className="space-y-4">
                {podcasts.map((podcast) => (
                  <div
                    key={podcast.id}
                    className={`bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow ${
                      settings.darkMode ? 'dark:bg-gray-800' : ''
                    } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className={`font-medium text-gray-900 mb-1 ${
                          settings.darkMode ? 'dark:text-white' : ''
                        } ${settings.highContrast ? 'text-white' : ''} ${
                          settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                        }`}>
                          {podcast.title}
                        </h3>
                        <p className={`text-gray-600 text-sm mb-2 ${
                          settings.darkMode ? 'dark:text-gray-300' : ''
                        } ${settings.highContrast ? 'text-white' : ''} ${
                          settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'
                        }`}>
                          {podcast.description}
                        </p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {podcast.duration}
                          </span>
                          <span className={`${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {podcast.date}
                          </span>
                        </div>
                      </div>
                      <button
                        onClick={() => playAudioResource(`podcast-${podcast.id}`)}
                        className={`ml-4 p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors ${
                          settings.highContrast ? 'bg-white text-black border border-black' : ''
                        }`}
                      >
                        {isPlaying === `podcast-${podcast.id}` ? (
                          <VolumeX className="h-4 w-4" />
                        ) : (
                          <Volume2 className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Suggestion Box */}
            <div className={`bg-white rounded-lg shadow-sm p-6 ${
              settings.darkMode ? 'dark:bg-gray-800' : ''
            } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
              <div className="flex items-center space-x-3 mb-4">
                <MessageSquare className={`h-6 w-6 text-orange-600 ${
                  settings.highContrast ? 'text-white' : ''
                }`} />
                <h3 className={`font-semibold text-gray-900 ${
                  settings.darkMode ? 'dark:text-white' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                }`}>
                  Suggestions
                </h3>
              </div>
              <p className={`text-gray-600 mb-4 ${
                settings.darkMode ? 'dark:text-gray-300' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                Proposez des améliorations pour l'accessibilité
              </p>
              <textarea
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                placeholder="Ex: Je voudrais une version audio de ce cours..."
                rows={4}
                className={`w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                  settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                }`}
              />
              <button
                onClick={handleSuggestion}
                disabled={!suggestion.trim()}
                className={`w-full mt-3 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                  settings.highContrast ? 'bg-white text-black border border-black disabled:bg-gray-500' : ''
                }`}
              >
                Envoyer la suggestion
              </button>
            </div>

            {/* Quick Access */}
            <div className={`bg-white rounded-lg shadow-sm p-6 ${
              settings.darkMode ? 'dark:bg-gray-800' : ''
            } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
              <h3 className={`font-semibold text-gray-900 mb-4 ${
                settings.darkMode ? 'dark:text-white' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
              }`}>
                Accès Rapide
              </h3>
              <div className="space-y-3">
                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${
                  settings.darkMode ? 'dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white' : ''
                } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''}`}>
                  <div className={`font-medium ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    📖 Guide d'utilisation
                  </div>
                  <div className={`text-gray-500 text-xs ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    Apprenez à utiliser les outils
                  </div>
                </button>

                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${
                  settings.darkMode ? 'dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white' : ''
                } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''}`}>
                  <div className={`font-medium ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    🎯 Raccourcis clavier
                  </div>
                  <div className={`text-gray-500 text-xs ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    Navigation plus rapide
                  </div>
                </button>

                <button className={`w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors ${
                  settings.darkMode ? 'dark:border-gray-600 dark:hover:bg-gray-700 dark:text-white' : ''
                } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''}`}>
                  <div className={`font-medium ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    🆘 Support technique
                  </div>
                  <div className={`text-gray-500 text-xs ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    Besoin d'aide ?
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Video Modal with Responsive Design */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex flex-col lg:flex-row">
              
              {/* Main Video Section */}
              <div className="flex-1 p-3 sm:p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`font-bold text-gray-900 ${
                    settings.fontSize === 'large' ? 'text-xl sm:text-2xl' : settings.fontSize === 'small' ? 'text-base sm:text-lg' : 'text-lg sm:text-xl'
                  } line-clamp-2 pr-2`}>
                    {videos.find(v => v.id === selectedVideo)?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="text-gray-500 hover:text-gray-700 text-2xl sm:text-3xl font-bold p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  >
                    ×
                  </button>
                </div>
                
                {/* Video Player */}
                <div className="aspect-video rounded-md sm:rounded-lg overflow-hidden mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title={videos.find(v => v.id === selectedVideo)?.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="rounded-md sm:rounded-lg"
                  ></iframe>
                </div>
                
                {/* Video Description */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-purple-100 text-purple-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                      {videos.find(v => v.id === selectedVideo)?.episode}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm">
                      Mohammed KHAÏR-EDDINE lu par Aicha Maazouz
                    </span>
                  </div>
                  <p className={`text-gray-600 ${
                    settings.fontSize === 'large' ? 'text-base sm:text-lg' : settings.fontSize === 'small' ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'
                  }`}>
                    {videos.find(v => v.id === selectedVideo)?.description}
                  </p>
                </div>
              </div>
              
              {/* Video List - Responsive Layout */}
              <div className="w-full lg:w-80 bg-gray-50 border-t lg:border-t-0 lg:border-l border-gray-200 max-h-80 lg:max-h-full overflow-y-auto">
                <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-100">
                  <h4 className={`font-semibold text-gray-900 ${
                    settings.fontSize === 'large' ? 'text-base sm:text-lg' : settings.fontSize === 'small' ? 'text-sm sm:text-base' : 'text-sm sm:text-base'
                  }`}>
                    Série complète ({videos.length} épisodes)
                  </h4>
                </div>
                
                {/* Mobile: Horizontal scroll, Desktop: Vertical scroll */}
                <div className="lg:p-2">
                  <div className="flex lg:flex-col gap-2 p-2 lg:p-0 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                    <div className="flex lg:flex-col gap-2 lg:gap-0">
                      {videos.map((video) => (
                        <button
                          key={video.id}
                          onClick={() => setSelectedVideo(video.id)}
                          className={`flex-shrink-0 lg:flex-shrink w-64 lg:w-full p-2 sm:p-3 rounded-lg text-left hover:bg-gray-100 transition-colors lg:mb-2 ${
                            selectedVideo === video.id ? 'bg-purple-50 border-l-4 border-purple-500' : ''
                          }`}
                        >
                          <div className="flex items-start space-x-2 sm:space-x-3">
                            {/* Video Thumbnail */}
                            <div className="flex-shrink-0 w-16 h-10 sm:w-20 sm:h-12 bg-gray-200 rounded overflow-hidden">
                              <img
                                src={video.thumbnail}
                                alt={video.title}
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.src = 'https://img.youtube.com/vi/J433f9aP9M4/maxresdefault.jpg';
                                }}
                              />
                            </div>
                            
                            {/* Video Info */}
                            <div className="flex-1 min-w-0">
                              <h5 className={`font-medium text-gray-900 line-clamp-2 ${
                                settings.fontSize === 'large' ? 'text-sm sm:text-base' : settings.fontSize === 'small' ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'
                              } ${selectedVideo === video.id ? 'text-purple-600' : ''}`}>
                                {video.title}
                              </h5>
                              <p className="text-xs text-gray-500 mt-1">
                                {video.episode}
                              </p>
                              <p className={`text-xs text-gray-600 mt-1 line-clamp-2 lg:line-clamp-1 ${
                                settings.fontSize === 'large' ? 'sm:text-sm' : 'text-xs'
                              }`}>
                                {video.description}
                              </p>
                            </div>
                            
                            {/* Play Icon for Current Video */}
                            {selectedVideo === video.id && (
                              <div className="flex-shrink-0 text-purple-500">
                                <Play className="h-3 w-3 sm:h-4 sm:w-4" fill="currentColor" />
                              </div>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accessibilite;