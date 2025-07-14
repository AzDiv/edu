import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Star, Play, ChevronRight, Target, CheckCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { coursesData, getCourseById } from '../data/coursContent';

const Cours: React.FC = () => {
  const { settings } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedCourse, setSelectedCourse] = useState<number | null>(null);
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'Tous les cours' },
    { id: 'litterature', name: 'Littérature' },
    { id: 'langue', name: 'Langue' },
    { id: 'expression', name: 'Expression écrite' },
    { id: 'orale', name: 'Expression orale' }
  ];

  const levels = [
    { id: 'all', name: 'Tous niveaux' },
    { id: 'debutant', name: 'Débutant' },
    { id: 'intermediaire', name: 'Intermédiaire' },
    { id: 'avance', name: 'Avancé' }
  ];

  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const currentCourse = selectedCourse ? getCourseById(selectedCourse) : null;
  const currentChapter = currentCourse && selectedChapter 
    ? currentCourse.chapters.find(ch => ch.id === selectedChapter) 
    : null;

  if (selectedCourse && currentCourse) {
    return (
      <div className={`min-h-screen transition-colors duration-200 ${
        settings.darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'
      } ${settings.highContrast ? 'bg-black text-white' : ''}`}>
        {/* Course Header */}
        <div className={`bg-white shadow-sm ${
          settings.darkMode ? 'dark:bg-gray-800' : ''
        } ${settings.highContrast ? 'bg-gray-900 border-b border-white' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => setSelectedCourse(null)}
              className={`text-blue-600 hover:text-blue-700 mb-4 flex items-center space-x-2 ${
                settings.darkMode ? 'dark:text-blue-400' : ''
              } ${settings.highContrast ? 'text-white' : ''}`}
            >
              <ChevronRight className="h-4 w-4 rotate-180" />
              <span>Retour aux cours</span>
            </button>
            
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              <img
                src={currentCourse.image}
                alt={currentCourse.title}
                className="w-full lg:w-64 h-48 object-cover rounded-lg mb-4 lg:mb-0"
              />
              <div className="flex-1">
                <h1 className={`font-bold text-gray-900 mb-2 ${
                  settings.fontSize === 'large' ? 'text-3xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-2xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  {currentCourse.title}
                </h1>
                <p className={`text-gray-600 mb-4 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  {currentCourse.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className={`text-gray-600 ${
                      settings.darkMode ? 'dark:text-gray-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      {currentCourse.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className={`text-gray-600 ${
                      settings.darkMode ? 'dark:text-gray-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      {currentCourse.rating}
                    </span>
                  </div>
                  <span className={`text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    {currentCourse.students} étudiants
                  </span>
                </div>

                {/* Objectives */}
                <div className="mb-4">
                  <h3 className={`font-semibold text-gray-900 mb-2 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Objectifs du cours :
                  </h3>
                  <ul className="space-y-1">
                    {currentCourse.objectives.map((objective, index) => (
                      <li key={index} className={`flex items-center space-x-2 text-gray-600 ${
                        settings.darkMode ? 'dark:text-gray-300' : ''
                      } ${settings.highContrast ? 'text-white' : ''}`}>
                        <Target className="h-4 w-4 text-blue-500" />
                        <span className={settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'}>
                          {objective}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Chapters */}
            <div className="lg:col-span-1">
              <div className={`bg-white rounded-lg shadow-sm p-6 ${
                settings.darkMode ? 'dark:bg-gray-800' : ''
              } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
                <h3 className={`font-semibold text-gray-900 mb-4 ${
                  settings.darkMode ? 'dark:text-white' : ''
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  Chapitres du cours
                </h3>
                <div className="space-y-2">
                  {currentCourse.chapters.map((chapter, index) => (
                    <button
                      key={chapter.id}
                      onClick={() => setSelectedChapter(chapter.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedChapter === chapter.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                          : 'hover:bg-gray-50 text-gray-700'
                      } ${settings.darkMode ?
                        selectedChapter === chapter.id
                          ? 'dark:bg-blue-900 dark:text-blue-300'
                          : 'dark:hover:bg-gray-700 dark:text-gray-300'
                        : ''
                      } ${settings.highContrast ?
                        selectedChapter === chapter.id
                          ? 'bg-white text-black'
                          : 'text-white hover:bg-gray-800'
                        : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className={`font-medium ${
                            settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                          }`}>
                            {index + 1}. {chapter.title}
                          </div>
                          <div className={`text-xs text-gray-500 ${
                            settings.darkMode ? 'dark:text-gray-400' : ''
                          } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                            {chapter.duration}
                          </div>
                        </div>
                        {selectedChapter === chapter.id && (
                          <CheckCircle className="h-4 w-4 text-blue-500" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className={`bg-white rounded-lg shadow-sm p-8 ${
                settings.darkMode ? 'dark:bg-gray-800' : ''
              } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
                {currentChapter ? (
                  <div>
                    <h2 className={`font-bold text-gray-900 mb-6 ${
                      settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-xl'
                    } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                      {currentChapter.title}
                    </h2>
                    
                    <div className={`prose max-w-none ${
                      settings.darkMode ? 'prose-invert' : ''
                    } ${settings.highContrast ? 'text-white' : ''} ${
                      settings.fontSize === 'large' ? 'prose-lg' : settings.fontSize === 'small' ? 'prose-sm' : ''
                    }`}>
                      <div className="whitespace-pre-line mb-6">
                        {currentChapter.content}
                      </div>
                      
                      {currentChapter.examples.length > 0 && (
                        <div className="mb-6">
                          <h4 className={`font-semibold text-gray-900 mb-3 ${
                            settings.darkMode ? 'dark:text-white' : ''
                          } ${settings.highContrast ? 'text-white' : ''}`}>
                            Exemples :
                          </h4>
                          <div className={`bg-blue-50 p-4 rounded-lg ${
                            settings.darkMode ? 'dark:bg-blue-900' : ''
                          } ${settings.highContrast ? 'bg-blue-800' : ''}`}>
                            {currentChapter.examples.map((example, index) => (
                              <p key={index} className={`mb-2 last:mb-0 italic text-blue-800 ${
                                settings.darkMode ? 'dark:text-blue-200' : ''
                              } ${settings.highContrast ? 'text-white' : ''}`}>
                                • {example}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {currentChapter.exercises.length > 0 && (
                        <div>
                          <h4 className={`font-semibold text-gray-900 mb-3 ${
                            settings.darkMode ? 'dark:text-white' : ''
                          } ${settings.highContrast ? 'text-white' : ''}`}>
                            Exercices d'application :
                          </h4>
                          <div className={`bg-green-50 p-4 rounded-lg ${
                            settings.darkMode ? 'dark:bg-green-900' : ''
                          } ${settings.highContrast ? 'bg-green-800' : ''}`}>
                            {currentChapter.exercises.map((exercise, index) => (
                              <p key={index} className={`mb-2 last:mb-0 text-green-800 ${
                                settings.darkMode ? 'dark:text-green-200' : ''
                              } ${settings.highContrast ? 'text-white' : ''}`}>
                                {index + 1}. {exercise}
                              </p>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className={`h-16 w-16 mx-auto mb-4 text-gray-400 ${
                      settings.darkMode ? 'dark:text-gray-500' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`} />
                    <h3 className={`font-semibold text-gray-900 mb-2 ${
                      settings.darkMode ? 'dark:text-white' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Sélectionnez un chapitre
                    </h3>
                    <p className={`text-gray-600 ${
                      settings.darkMode ? 'dark:text-gray-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      Choisissez un chapitre dans la liste pour commencer votre apprentissage
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      settings.darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'
    } ${settings.highContrast ? 'bg-black text-white' : ''}`}>
      {/* Header */}
      <div className={`bg-white shadow-sm ${
        settings.darkMode ? 'dark:bg-gray-800' : ''
      } ${settings.highContrast ? 'bg-gray-900 border-b border-white' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className={`font-bold text-gray-900 mb-4 ${
            settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
          } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
            Cours de Français
          </h1>
          <p className={`text-gray-600 max-w-2xl ${
            settings.darkMode ? 'dark:text-gray-300' : ''
          } ${settings.highContrast ? 'text-white' : ''} ${
            settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
          }`}>
            Découvrez notre collection complète de cours adaptés au programme de 1ère année bac
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className={`bg-white rounded-lg shadow-sm p-6 mb-8 ${
          settings.darkMode ? 'dark:bg-gray-800' : ''
        } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Rechercher un cours..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                  } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  }`}
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-48">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div className="lg:w-48">
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group ${
                settings.darkMode ? 'dark:bg-gray-800' : ''
              } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.hasAudio && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    🎧 Audio
                  </div>
                )}
                <div className="absolute bottom-3 left-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  <Clock className="inline h-3 w-3 mr-1" />
                  {course.duration}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    course.category === 'litterature' ? 'bg-purple-100 text-purple-800' :
                    course.category === 'langue' ? 'bg-blue-100 text-blue-800' :
                    course.category === 'expression' ? 'bg-green-100 text-green-800' :
                    'bg-orange-100 text-orange-800'
                  } ${settings.highContrast ? 'bg-white text-black' : ''}`}>
                    {categories.find(c => c.id === course.category)?.name}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className={`text-sm text-gray-600 ${
                      settings.darkMode ? 'dark:text-gray-300' : ''
                    } ${settings.highContrast ? 'text-white' : ''}`}>
                      {course.rating}
                    </span>
                  </div>
                </div>

                <h3 className={`font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors ${
                  settings.darkMode ? 'dark:text-white' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                }`}>
                  {course.title}
                </h3>

                <p className={`text-gray-600 mb-4 line-clamp-2 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                }`}>
                  {course.description}
                </p>

                {/* Chapters Preview */}
                <div className="mb-4">
                  <h4 className={`text-sm font-medium text-gray-700 mb-2 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Chapitres:
                  </h4>
                  <ul className="space-y-1">
                    {course.chapters.slice(0, 3).map((chapter, index) => (
                      <li
                        key={index}
                        className={`text-xs text-gray-500 flex items-center ${
                          settings.darkMode ? 'dark:text-gray-400' : ''
                        } ${settings.highContrast ? 'text-gray-300' : ''}`}
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {chapter.title}
                      </li>
                    ))}
                    {course.chapters.length > 3 && (
                      <li className={`text-xs text-gray-500 ${
                        settings.darkMode ? 'dark:text-gray-400' : ''
                      } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                        +{course.chapters.length - 3} autres chapitres
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between">
                  <span className={`text-sm text-gray-500 ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    {course.students} étudiants
                  </span>
                  <button className={`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  } ${settings.highContrast ? 'bg-white text-black border border-black' : ''}`}>
                    <Play className="h-4 w-4" />
                    <span onClick={() => setSelectedCourse(course.id)}>Commencer</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className={`text-center py-12 ${
            settings.darkMode ? 'dark:text-gray-300' : 'text-gray-500'
          } ${settings.highContrast ? 'text-white' : ''}`}>
            <BookOpen className="h-16 w-16 mx-auto mb-4 opacity-50" />
            <h3 className={`font-semibold mb-2 ${
              settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-lg'
            }`}>
              Aucun cours trouvé
            </h3>
            <p className={settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'}>
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cours;