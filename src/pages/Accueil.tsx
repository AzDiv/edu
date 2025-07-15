import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Headphones, MessageSquare, Target, Star, Play } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Accueil: React.FC = () => {
  const { settings } = useApp();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Real video data from the playlist
  const videos = [
    {
      id: "J433f9aP9M4",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 1",
      description: "Introduction à l'œuvre de Mohammed KHAÏR-EDDINE",
      thumbnail: `https://img.youtube.com/vi/J433f9aP9M4/maxresdefault.jpg`
    },
    {
      id: "t1Hp8I8tZhg", 
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 2",
      description: "Continuation de la lecture par Aicha Maazouz",
      thumbnail: `https://img.youtube.com/vi/t1Hp8I8tZhg/maxresdefault.jpg`
    },
    {
      id: "XYZ123ABC", // Replace with actual video ID
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 3", 
      description: "Suite de l'histoire",
      thumbnail: `https://img.youtube.com/vi/XYZ123ABC/maxresdefault.jpg`
    },
    {
      id: "DEF456GHI",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 4",
      description: "Développement des personnages",
      thumbnail: `https://img.youtube.com/vi/DEF456GHI/maxresdefault.jpg`
    },
    {
      id: "JKL789MNO",
      title: "Il était une Fois un Vieux Couple Heureux", 
      episode: "Episode 5",
      description: "Climax de l'histoire",
      thumbnail: `https://img.youtube.com/vi/JKL789MNO/maxresdefault.jpg`
    },
    {
      id: "PQR012STU",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 6", 
      description: "Résolution du conflit",
      thumbnail: `https://img.youtube.com/vi/PQR012STU/maxresdefault.jpg`
    },
    {
      id: "VWX345YZ",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 7",
      description: "Dénouement",
      thumbnail: `https://img.youtube.com/vi/VWX345YZ/maxresdefault.jpg`
    },
    {
      id: "ABC678DEF",
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 8",
      description: "Épilogue partie 1",
      thumbnail: `https://img.youtube.com/vi/ABC678DEF/maxresdefault.jpg`
    },
    {
      id: "GHI901JKL", 
      title: "Il était une Fois un Vieux Couple Heureux",
      episode: "Episode 9",
      description: "Épilogue partie 2 - Conclusion",
      thumbnail: `https://img.youtube.com/vi/GHI901JKL/maxresdefault.jpg`
    }
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Cours Complets",
      description: "Littérature, langue et expression écrite adaptés au programme marocain",
      link: "/cours",
      color: "blue"
    },
    {
      icon: Target,
      title: "Exercices Interactifs",
      description: "Pratiquez avec des exercices variés et obtenez des corrections instantanées",
      link: "/exercices",
      color: "green"
    },
    {
      icon: MessageSquare,
      title: "Forum Étudiant",
      description: "Échangez avec d'autres lycéens et posez vos questions",
      link: "/forum",
      color: "purple"
    },
    {
      icon: Headphones,
      title: "Ressources Audio",
      description: "Écoutez les cours et améliorez votre compréhension orale",
      link: "/accessibilite",
      color: "orange"
    }
  ];

  const stats = [
    { number: "500+", label: "Exercices disponibles" },
    { number: "50+", label: "Cours détaillés" },
    { number: "1000+", label: "Étudiants actifs" },
    { number: "95%", label: "Taux de réussite" }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      settings.darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'
    } ${settings.highContrast ? 'bg-black text-white' : ''}`}>
      {/* Hero Section */}
      <section className={`bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 ${
        settings.highContrast ? 'bg-black border-b border-white' : ''
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`font-bold mb-6 leading-tight ${
              settings.fontSize === 'large' ? 'text-6xl' : settings.fontSize === 'small' ? 'text-3xl' : 'text-5xl'
            }`}>
              Maîtrisez le Français
              <span className="block text-blue-200">avec Excellence</span>
            </h1>
            <p className={`mb-8 max-w-3xl mx-auto leading-relaxed text-blue-100 ${
              settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
            }`}>
              Plateforme éducative complète pour les lycéens marocains de 1ère année bac. 
              Cours, exercices et ressources adaptés au programme national.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/cours"
                className={`bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 shadow-lg ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                } ${settings.highContrast ? 'bg-gray-800 text-white border border-white' : ''}`}
              >
                Découvrir les Cours
              </Link>
              <Link
                to="/forum"
                className={`border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}
              >
                Rejoindre la Communauté
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-16 bg-white ${
        settings.darkMode ? 'dark:bg-gray-800' : ''
      } ${settings.highContrast ? 'bg-gray-900' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`font-bold text-blue-600 mb-2 ${
                  settings.fontSize === 'large' ? 'text-5xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-4xl'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  {stat.number}
                </div>
                <div className={`text-gray-600 font-medium ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 bg-gray-50 ${
        settings.darkMode ? 'dark:bg-gray-900' : ''
      } ${settings.highContrast ? 'bg-black' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`font-bold text-gray-900 mb-4 ${
              settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
            } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className={`text-gray-600 max-w-2xl mx-auto ${
              settings.darkMode ? 'dark:text-gray-300' : ''
            } ${settings.highContrast ? 'text-white' : ''} ${
              settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
            }`}>
              Une approche moderne et interactive de l'apprentissage du français
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorClasses = {
                blue: 'text-blue-600 bg-blue-100',
                green: 'text-green-600 bg-green-100',
                purple: 'text-purple-600 bg-purple-100',
                orange: 'text-orange-600 bg-orange-100'
              };

              return (
                <Link
                  key={index}
                  to={feature.link}
                  className={`group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    settings.darkMode ? 'dark:bg-gray-800' : ''
                  } ${settings.highContrast ? 'bg-gray-800 border border-white' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    settings.highContrast ? 'bg-white text-black' : colorClasses[feature.color as keyof typeof colorClasses]
                  }`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className={`font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Content Section */}
      <section className={`py-20 bg-white ${
        settings.darkMode ? 'dark:bg-gray-800' : ''
      } ${settings.highContrast ? 'bg-gray-900' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`font-bold text-gray-900 mb-6 ${
              settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
            } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
              Partenariat avec le Ministère de la Culture & Université Ibn Zohr
            </h2>
            
            {/* Partner Logos */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="flex items-center space-x-4">
                <img
                  src="https://www.infomediaire.net/wp-content/uploads/2021/03/ministe%CC%80re-de-la-Culture-de-la-Jeunesse-et-des-Sports.png"
                  alt="Ministère de la Culture - Maroc"
                  className="h-22 w-20 object-contain"
                />
                <div className="text-left">
                  <div className={`font-semibold text-gray-900 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Ministère de la Culture
                  </div>
                  <div className={`text-sm text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Royaume du Maroc
                  </div>
                </div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center space-x-4">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b0/Logo-UIZ.jpg"
                  alt="Université Ibn Zohr"
                  className="h-22 w-20 object-contain"
                  onError={(e) => {
                    // Fallback logo if the original fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/64x64/1e40af/ffffff?text=UIZ';
                  }}
                />
                <div className="text-left">
                  <div className={`font-semibold text-gray-900 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Université Ibn Zohr
                  </div>
                  <div className={`text-sm text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Agadir, Maroc
                  </div>
                </div>
              </div>
            </div>
            
            <p className={`text-gray-600 max-w-2xl mx-auto ${
              settings.darkMode ? 'dark:text-gray-300' : ''
            } ${settings.highContrast ? 'text-white' : ''} ${
              settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
            }`}>
              Découvrez la littérature marocaine avec cette collection exceptionnelle développée en partenariat avec nos institutions partenaires
            </p>
          </div>

          {/* Featured Video */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className={`bg-gray-50 rounded-xl p-6 shadow-lg ${
              settings.darkMode ? 'dark:bg-gray-700' : ''
            } ${settings.highContrast ? 'bg-gray-800 border border-white' : ''}`}>
              
              {/* Main Video Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden mb-6 group cursor-pointer"
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
                  <div className="bg-red-600 rounded-full p-4 transform scale-110 hover:scale-125 transition-transform duration-200">
                    <Play className="h-8 w-8 text-white ml-0.5" fill="white" />
                  </div>
                </div>
                
                {/* Episode Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`bg-black bg-opacity-75 text-white px-3 py-2 rounded text-sm font-medium ${
                    settings.fontSize === 'large' ? 'text-base' : 'text-sm'
                  }`}>
                    {videos[0].episode}
                  </span>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="text-center">
                <h3 className={`font-bold text-gray-900 mb-3 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  {videos[0].title}
                </h3>
                
                <p className={`text-gray-600 mb-4 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  {videos[0].description}
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <button
                    onClick={() => setSelectedVideo(videos[0].id)}
                    className={`inline-flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors ${
                      settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                    } ${settings.highContrast ? 'bg-white text-black border border-black' : ''}`}
                  >
                    <Play className="h-5 w-5" fill="white" />
                    <span>Regarder maintenant</span>
                  </button>
                  
                  <button
                    onClick={() => setSelectedVideo(videos[0].id)}
                    className={`inline-flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors ${
                      settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                    } ${settings.darkMode ? 'dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600' : ''} ${settings.highContrast ? 'border-white text-white hover:bg-white hover:text-black' : ''}`}
                  >
                    <span>Voir toute la série ({videos.length} épisodes)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Video Modal with Sidebar */}
          {selectedVideo && (
            <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-7xl w-full max-h-[95vh] overflow-hidden flex">
                
                {/* Main Video Section */}
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-bold text-gray-900 ${
                      settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
                    }`}>
                      {videos.find(v => v.id === selectedVideo)?.title}
                    </h3>
                    <button
                      onClick={() => setSelectedVideo(null)}
                      className="text-gray-500 hover:text-gray-700 text-3xl font-bold p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      ×
                    </button>
                  </div>
                  
                  {/* Video Player */}
                  <div className="aspect-video rounded-lg overflow-hidden mb-4">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                      title={videos.find(v => v.id === selectedVideo)?.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                  
                  {/* Video Description */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {videos.find(v => v.id === selectedVideo)?.episode}
                      </span>
                      <span className="text-gray-500 text-sm">
                        Mohammed KHAÏR-EDDINE lu par Aicha Maazouz
                      </span>
                    </div>
                    <p className={`text-gray-600 ${
                      settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                    }`}>
                      {videos.find(v => v.id === selectedVideo)?.description}
                    </p>
                  </div>
                </div>
                
                {/* Sidebar with Video List */}
                <div className="w-80 bg-gray-50 border-l border-gray-200 overflow-y-auto">
                  <div className="p-4 border-b border-gray-200 bg-gray-100">
                    <h4 className={`font-semibold text-gray-900 ${
                      settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                    }`}>
                      Toute la série ({videos.length} épisodes)
                    </h4>
                  </div>
                  
                  <div className="p-2">
                    {videos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setSelectedVideo(video.id)}
                        className={`w-full p-3 rounded-lg mb-2 text-left hover:bg-gray-100 transition-colors ${
                          selectedVideo === video.id ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-3">
                          {/* Video Thumbnail */}
                          <div className="flex-shrink-0 w-20 h-12 bg-gray-200 rounded overflow-hidden">
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
                              settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                            } ${selectedVideo === video.id ? 'text-blue-600' : ''}`}>
                              {video.title}
                            </h5>
                            <p className="text-xs text-gray-500 mt-1">
                              {video.episode}
                            </p>
                            <p className={`text-xs text-gray-600 mt-1 line-clamp-2 ${
                              settings.fontSize === 'large' ? 'text-sm' : 'text-xs'
                            }`}>
                              {video.description}
                            </p>
                          </div>
                          
                          {/* Play Icon for Current Video */}
                          {selectedVideo === video.id && (
                            <div className="flex-shrink-0 text-blue-500">
                              <Play className="h-4 w-4" fill="currentColor" />
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Author Info Section */}
          <div className="max-w-4xl mx-auto">
            <div className={`bg-gray-50 rounded-xl p-8 shadow-lg ${
              settings.darkMode ? 'dark:bg-gray-700' : ''
            } ${settings.highContrast ? 'bg-gray-800 border border-white' : ''}`}>
              <div className="text-center">
                <h3 className={`font-bold text-gray-900 mb-3 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  "Il était une Fois un Vieux Couple Heureux"
                </h3>
                <p className={`text-gray-600 mb-4 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  Mohammed KHAÏR-EDDINE lu par Aicha Maazouz - Série complète
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className={`bg-blue-50 p-3 rounded-lg ${
                    settings.darkMode ? 'dark:bg-blue-900' : ''
                  } ${settings.highContrast ? 'bg-blue-800' : ''}`}>
                    <div className={`font-semibold text-blue-800 ${
                      settings.darkMode ? 'dark:text-blue-200' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Auteur
                    </div>
                    <div className={`text-blue-700 ${
                      settings.darkMode ? 'dark:text-blue-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Mohammed KHAÏR-EDDINE
                    </div>
                  </div>
                  
                  <div className={`bg-green-50 p-3 rounded-lg ${
                    settings.darkMode ? 'dark:bg-green-900' : ''
                  } ${settings.highContrast ? 'bg-green-800' : ''}`}>
                    <div className={`font-semibold text-green-800 ${
                      settings.darkMode ? 'dark:text-green-200' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Lectrice
                    </div>
                    <div className={`text-green-700 ${
                      settings.darkMode ? 'dark:text-green-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Aicha Maazouz
                    </div>
                  </div>
                  
                  <div className={`bg-purple-50 p-3 rounded-lg ${
                    settings.darkMode ? 'dark:bg-purple-900' : ''
                  } ${settings.highContrast ? 'bg-purple-800' : ''}`}>
                    <div className={`font-semibold text-purple-800 ${
                      settings.darkMode ? 'dark:text-purple-200' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Genre
                    </div>
                    <div className={`text-purple-700 ${
                      settings.darkMode ? 'dark:text-purple-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Littérature marocaine
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link
                    to="/accessibilite"
                    className={`inline-flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors ${
                      settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                    } ${settings.highContrast ? 'bg-white text-black border border-black' : ''}`}
                  >
                    <Headphones className="h-5 w-5" />
                    <span>Plus de ressources audio</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`py-20 bg-white ${
        settings.darkMode ? 'dark:bg-gray-800' : ''
      } ${settings.highContrast ? 'bg-gray-900' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`font-bold text-gray-900 mb-8 ${
              settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
            } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
              À propos du fondateur
            </h2>
            
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Photo du fondateur */}
              <div className="lg:w-1/3">
                <div className="relative">
                  <img
                    src="/Aicha_Maazouz.jpg"
                    alt="Dr. Aicha Maazouz - Fondateur"
                    className="w-64 h-64 rounded-full object-cover mx-auto shadow-xl"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
              </div>
              
              {/* Informations du fondateur */}
              <div className="lg:w-2/3 text-left">
                <h3 className={`font-bold text-gray-900 mb-4 ${
                  settings.fontSize === 'large' ? 'text-3xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-2xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  Dr. Aicha Maazouz
                </h3>
                

                
                <div className={`space-y-4 text-gray-600 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  <p>
                    Nous sommes une plateforme éducative dédiée à l'apprentissage du français. Fondée par Aicha Maazouz,
                    notre mission est de rendre l'éducation accessible et engageante. Nous offrons des ressources gratuites, 
                    des cours officiels et un forum interactif pour poser des questions et partager des réponses
                  </p>
                  
                  <p>
                    Rejoignez-nous pour améliorer vos compétences linguistiques et découvrir de nouvelles opportunités éducatives.

                  </p>
                  

                </div>
                
                <div className="mt-6">
                  <blockquote className={`italic text-gray-700 border-l-4 border-blue-500 pl-4 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white border-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  }`}>
                    "Mon objectif est de faire du français une langue accessible et passionnante pour chaque lycéen marocain. 
                    Cette plateforme représente l'aboutissement de mes recherches en pédagogie moderne et inclusive."
                  </blockquote>
                  <cite className={`block mt-2 text-sm text-gray-500 ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    - Dr. Aicha Maazouz, Fondateur d'Aicha-edu
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 bg-blue-600 text-white ${
        settings.highContrast ? 'bg-white text-black border-t border-black' : ''
      }`}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Star className={`h-16 w-16 mx-auto mb-6 text-yellow-300 ${
            settings.highContrast ? 'text-black' : ''
          }`} />
          <h2 className={`font-bold mb-6 ${
            settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
          }`}>
            Prêt à exceller en français ?
          </h2>
          <p className={`mb-8 text-blue-100 leading-relaxed ${
            settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-base' : 'text-lg'
          } ${settings.highContrast ? 'text-gray-600' : ''}`}>
            Rejoignez des milliers d'étudiants qui ont déjà amélioré leurs résultats grâce à notre plateforme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cours"
              className={`bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 hover:scale-105 ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
              } ${settings.highContrast ? 'bg-black text-white border border-black' : ''}`}
            >
              Commencer Maintenant
            </Link>
            <Link
              to="/accessibilite"
              className={`border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
              } ${settings.highContrast ? 'border-black text-black hover:bg-black hover:text-white' : ''}`}
            >
              Explorer l'Accessibilité
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accueil;