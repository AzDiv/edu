import React, { useState } from 'react';
import { Target, CheckCircle, XCircle, RotateCcw, Award, Clock, TrendingUp } from 'lucide-react';
import { useApp } from '../contexts/AppContext';
import { exerciseCategories, getExercisesByCategory } from '../data/exerciseContent';

const Exercices: React.FC = () => {
  const { settings } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('grammaire');
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [earnedPoints, setEarnedPoints] = useState(0);

  const currentCategory = exerciseCategories.find(cat => cat.id === selectedCategory);
  const currentExercises = currentCategory ? currentCategory.exercises : [];

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentExercise] = answerIndex.toString();
    setUserAnswers(newAnswers);
  };

  const nextExercise = () => {
    if (currentExercise < currentExercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    let points = 0;
    let maxPoints = 0;
    
    userAnswers.forEach((answer, index) => {
      const exercise = currentExercises[index];
      maxPoints += exercise.points;
      
      if ((typeof exercise.correct === 'number' && parseInt(answer) === exercise.correct) ||
          (typeof exercise.correct === 'string' && answer === exercise.correct)) {
        correct++;
        points += exercise.points;
      }
    });
    
    setScore(Math.round((correct / currentExercises.length) * 100));
    setEarnedPoints(points);
    setTotalPoints(maxPoints);
  };

  const resetExercise = () => {
    setCurrentExercise(0);
    setUserAnswers([]);
    setShowResults(false);
    setScore(0);
  };

  const changeCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    resetExercise();
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
          <h1 className={`font-bold text-gray-900 mb-4 ${
            settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
          } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
            Exercices Interactifs
          </h1>
          <p className={`text-gray-600 max-w-2xl ${
            settings.darkMode ? 'dark:text-gray-300' : ''
          } ${settings.highContrast ? 'text-white' : ''} ${
            settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
          }`}>
            Testez vos connaissances avec nos exercices adaptés au programme de 1ère année bac
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Categories */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {exerciseCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => changeCategory(category.id)}
              className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
                selectedCategory === category.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              } ${settings.darkMode ? 
                selectedCategory === category.id 
                  ? 'dark:bg-blue-900 dark:border-blue-400 dark:text-blue-300'
                  : 'dark:bg-gray-800 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white'
                : ''
              } ${settings.highContrast ? 
                selectedCategory === category.id
                  ? 'bg-white text-black border-white'
                  : 'bg-gray-800 border-white text-white'
                : ''
              }`}
            >
              <div className={`text-2xl mb-2 ${
                settings.fontSize === 'large' ? 'text-3xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-2xl'
              }`}>
                {category.icon}
              </div>
              <div className={`font-medium ${
                settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
              }`}>
                {category.name}
              </div>
              <div className={`text-xs text-gray-500 mt-1 ${
                settings.darkMode ? 'dark:text-gray-400' : ''
              } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                {category.exercises.length} exercices
              </div>
            </button>
          ))}
        </div>

        {/* Exercise Container */}
        <div className={`bg-white rounded-lg shadow-lg p-8 ${
          settings.darkMode ? 'dark:bg-gray-800' : ''
        } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
          {!showResults ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className={`text-sm font-medium text-gray-700 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    Question {currentExercise + 1} sur {currentExercises.length}
                  </span>
                  <span className={`text-sm text-gray-500 flex items-center ${
                    settings.darkMode ? 'dark:text-gray-400' : ''
                  } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                    <Clock className="h-4 w-4 mr-1" />
                    ~2 min
                  </span>
                </div>
                <div className={`w-full bg-gray-200 rounded-full h-2 ${
                  settings.darkMode ? 'dark:bg-gray-700' : ''
                } ${settings.highContrast ? 'bg-gray-700' : ''}`}>
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentExercise + 1) / currentExercises.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h2 className={`font-semibold text-gray-900 mb-6 ${
                  settings.fontSize === 'large' ? 'text-2xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  {currentExercises[currentExercise].question}
                </h2>

                {/* Difficulty and Points */}
                <div className="flex items-center space-x-4 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentExercises[currentExercise].difficulty === 'facile' ? 'bg-green-100 text-green-800' :
                    currentExercises[currentExercise].difficulty === 'moyen' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  } ${settings.highContrast ? 'bg-white text-black' : ''}`}>
                    {currentExercises[currentExercise].difficulty}
                  </span>
                  <span className={`flex items-center space-x-1 text-sm text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    <TrendingUp className="h-4 w-4" />
                    <span>{currentExercises[currentExercise].points} points</span>
                  </span>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {currentExercises[currentExercise].options?.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-102 ${
                        userAnswers[currentExercise] === index.toString()
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 bg-gray-50 hover:border-blue-300 hover:bg-blue-50'
                      } ${settings.darkMode ?
                        userAnswers[currentExercise] === index.toString()
                          ? 'dark:bg-blue-900 dark:border-blue-400 dark:text-blue-300'
                          : 'dark:bg-gray-700 dark:border-gray-600 dark:hover:border-blue-400 dark:text-white'
                        : ''
                      } ${settings.highContrast ?
                        userAnswers[currentExercise] === index.toString()
                          ? 'bg-white text-black border-white'
                          : 'bg-gray-800 border-gray-600 text-white hover:border-white'
                        : ''
                      } ${
                        settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                      }`}
                    >
                      <span className="font-medium mr-3">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={resetExercise}
                  className={`flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors ${
                    settings.darkMode ? 'dark:text-gray-400 dark:hover:text-gray-200' : ''
                  } ${settings.highContrast ? 'text-white hover:text-gray-300' : ''}`}
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Recommencer</span>
                </button>

                <button
                  onClick={nextExercise}
                  disabled={!userAnswers[currentExercise]}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  } ${settings.highContrast ? 'bg-white text-black border border-black disabled:bg-gray-500' : ''}`}
                >
                  {currentExercise === currentExercises.length - 1 ? 'Terminer' : 'Suivant'}
                </button>
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div className="mb-6">
                <Award className={`h-16 w-16 mx-auto mb-4 ${
                  score >= 80 ? 'text-green-500' : score >= 60 ? 'text-yellow-500' : 'text-red-500'
                }`} />
                <h2 className={`font-bold text-gray-900 mb-2 ${
                  settings.fontSize === 'large' ? 'text-3xl' : settings.fontSize === 'small' ? 'text-xl' : 'text-2xl'
                } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                  Exercice Terminé !
                </h2>
                <p className={`text-gray-600 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''} ${
                  settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                }`}>
                  Voici vos résultats pour la catégorie{' '}
                  <span className="font-semibold">
                    {currentCategory?.name}
                  </span>
                </p>
              </div>

              <div className={`bg-gray-50 rounded-lg p-6 mb-6 ${
                settings.darkMode ? 'dark:bg-gray-700' : ''
              } ${settings.highContrast ? 'bg-gray-800' : ''}`}>
                <div className={`text-4xl font-bold mb-4 ${
                  score >= 80 ? 'text-green-600' : score >= 60 ? 'text-yellow-600' : 'text-red-600'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  {score}%
                </div>
                <div className={`text-gray-600 mb-2 ${
                  settings.darkMode ? 'dark:text-gray-300' : ''
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  {userAnswers.filter((answer, index) => 
                    (typeof currentExercises[index].correct === 'number' && parseInt(answer) === currentExercises[index].correct) ||
                    (typeof currentExercises[index].correct === 'string' && answer === currentExercises[index].correct)
                  ).length} / {currentExercises.length} bonnes réponses
                </div>
                <div className={`text-blue-600 font-semibold ${
                  settings.darkMode ? 'dark:text-blue-400' : ''
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  {earnedPoints} / {totalPoints} points obtenus
                </div>
              </div>

              {/* Detailed Results */}
              <div className="space-y-4 mb-6">
                {currentExercises.map((exercise, index) => {
                  const isCorrect = (typeof exercise.correct === 'number' && parseInt(userAnswers[index]) === exercise.correct) ||
                                  (typeof exercise.correct === 'string' && userAnswers[index] === exercise.correct);
                  return (
                    <div
                      key={index}
                      className={`p-4 rounded-lg border-l-4 text-left ${
                        isCorrect 
                          ? 'border-green-500 bg-green-50' 
                          : 'border-red-500 bg-red-50'
                      } ${settings.darkMode ?
                        isCorrect
                          ? 'dark:bg-green-900 dark:border-green-400'
                          : 'dark:bg-red-900 dark:border-red-400'
                        : ''
                      } ${settings.highContrast ?
                        isCorrect
                          ? 'bg-green-800 border-green-400'
                          : 'bg-red-800 border-red-400'
                        : ''
                      }`}
                    >
                      <div className="flex items-center mb-2">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600 mr-2" />
                        )}
                        <span className={`font-medium ${
                          isCorrect ? 'text-green-800' : 'text-red-800'
                        } ${settings.darkMode ?
                          isCorrect ? 'dark:text-green-200' : 'dark:text-red-200'
                          : ''
                        } ${settings.highContrast ? 'text-white' : ''} ${
                          settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                        }`}>
                          Question {index + 1}
                        </span>
                      </div>
                      <p className={`text-gray-700 mb-2 ${
                        settings.darkMode ? 'dark:text-gray-300' : ''
                      } ${settings.highContrast ? 'text-white' : ''} ${
                        settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                      }`}>
                        {exercise.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetExercise}
                  className={`px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  } ${settings.highContrast ? 'bg-white text-black border border-black' : ''}`}
                >
                  Refaire l'exercice
                </button>
                <button
                  onClick={() => {
                    const nextCategoryIndex = exerciseCategories.findIndex(c => c.id === selectedCategory) + 1;
                    if (nextCategoryIndex < exerciseCategories.length) {
                      changeCategory(exerciseCategories[nextCategoryIndex].id);
                    }
                  }}
                  className={`px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors ${
                    settings.darkMode ? 'dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900' : ''
                  } ${settings.highContrast ? 'border-white text-white hover:bg-gray-800' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  }`}
                >
                  Exercice suivant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercices;