import React, { useState } from 'react';
import { Plus, MessageSquare, Heart, Reply, Search, Filter, Clock, User } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Forum: React.FC = () => {
  const { settings } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', category: 'general' });

  const categories = [
    { id: 'all', name: 'Toutes les discussions', color: 'gray' },
    { id: 'general', name: 'Général', color: 'blue' },
    { id: 'devoirs', name: 'Aide aux devoirs', color: 'green' },
    { id: 'examens', name: 'Préparation examens', color: 'purple' },
    { id: 'methodes', name: 'Méthodes d\'étude', color: 'orange' },
    { id: 'ressources', name: 'Partage de ressources', color: 'teal' }
  ];

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Comment analyser un poème romantique ?",
      content: "Bonjour, j'ai du mal à analyser les poèmes romantiques. Quelqu'un pourrait m'expliquer la méthode ?",
      author: "Sarah",
      category: "devoirs",
      replies: 8,
      likes: 12,
      timestamp: "Il y a 2 heures",
      isLiked: false
    },
    {
      id: 2,
      title: "Partage : Fiches de révision sur Molière",
      content: "Salut tout le monde ! J'ai créé des fiches de révision complètes sur Molière et ses œuvres. N'hésitez pas à les utiliser !",
      author: "Ahmed",
      category: "ressources",
      replies: 15,
      likes: 28,
      timestamp: "Il y a 5 heures",
      isLiked: true
    },
    {
      id: 3,
      title: "Conseils pour l'expression écrite au bac",
      content: "Quelles sont vos meilleures astuces pour réussir l'épreuve d'expression écrite ? Je stress un peu...",
      author: "Fatima",
      category: "examens",
      replies: 22,
      likes: 35,
      timestamp: "Il y a 1 jour",
      isLiked: false
    },
    {
      id: 4,
      title: "Question sur les figures de style",
      content: "Quelqu'un peut m'expliquer la différence entre métaphore et allégorie ? Je confonds toujours...",
      author: "Youssef",
      category: "devoirs",
      replies: 6,
      likes: 9,
      timestamp: "Il y a 1 jour",
      isLiked: false
    },
    {
      id: 5,
      title: "Technique de mémorisation du vocabulaire",
      content: "Comment faites-vous pour retenir tout le vocabulaire littéraire ? J'ai essayé plusieurs méthodes mais rien ne marche vraiment.",
      author: "Amina",
      category: "methodes",
      replies: 11,
      likes: 18,
      timestamp: "Il y a 2 jours",
      isLiked: true
    }
  ]);

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1
          }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPost.title.trim() && newPost.content.trim()) {
      const post = {
        id: posts.length + 1,
        title: newPost.title,
        content: newPost.content,
        author: "Vous",
        category: newPost.category,
        replies: 0,
        likes: 0,
        timestamp: "À l'instant",
        isLiked: false
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '', category: 'general' });
      setShowNewPost(false);
    }
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category?.color || 'gray';
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className={`font-bold text-gray-900 mb-4 ${
                settings.fontSize === 'large' ? 'text-4xl' : settings.fontSize === 'small' ? 'text-2xl' : 'text-3xl'
              } ${settings.darkMode ? 'dark:text-white' : ''} ${settings.highContrast ? 'text-white' : ''}`}>
                Forum Étudiant
              </h1>
              <p className={`text-gray-600 max-w-2xl ${
                settings.darkMode ? 'dark:text-gray-300' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
              }`}>
                Échangez avec d'autres lycéens, posez vos questions et partagez vos connaissances
              </p>
            </div>
            <button
              onClick={() => setShowNewPost(true)}
              className={`mt-4 lg:mt-0 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
              } ${settings.highContrast ? 'bg-white text-black border border-black' : ''}`}
            >
              <Plus className="h-5 w-5" />
              <span>Nouvelle discussion</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Search */}
            <div className={`bg-white rounded-lg shadow-sm p-4 ${
              settings.darkMode ? 'dark:bg-gray-800' : ''
            } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Rechercher..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                  } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-sm' : 'text-base'
                  }`}
                />
              </div>
            </div>

            {/* Categories */}
            <div className={`bg-white rounded-lg shadow-sm p-4 ${
              settings.darkMode ? 'dark:bg-gray-800' : ''
            } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
              <h3 className={`font-semibold text-gray-900 mb-3 ${
                settings.darkMode ? 'dark:text-white' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
              }`}>
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    } ${settings.darkMode ?
                      selectedCategory === category.id
                        ? 'dark:bg-blue-900 dark:text-blue-300'
                        : 'dark:text-gray-300 dark:hover:bg-gray-700'
                      : ''
                    } ${settings.highContrast ?
                      selectedCategory === category.id
                        ? 'bg-white text-black'
                        : 'text-white hover:bg-gray-800'
                      : ''
                    } ${
                      settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className={`bg-white rounded-lg shadow-sm p-4 ${
              settings.darkMode ? 'dark:bg-gray-800' : ''
            } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
              <h3 className={`font-semibold text-gray-900 mb-3 ${
                settings.darkMode ? 'dark:text-white' : ''
              } ${settings.highContrast ? 'text-white' : ''} ${
                settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
              }`}>
                Statistiques
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={`text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    Discussions:
                  </span>
                  <span className={`font-medium text-gray-900 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    {posts.length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-gray-600 ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    Membres actifs:
                  </span>
                  <span className={`font-medium text-gray-900 ${
                    settings.darkMode ? 'dark:text-white' : ''
                  } ${settings.highContrast ? 'text-white' : ''}`}>
                    142
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* New Post Modal */}
            {showNewPost && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div className={`bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
                  settings.darkMode ? 'dark:bg-gray-800' : ''
                } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}>
                  <div className="p-6">
                    <h3 className={`font-semibold text-gray-900 mb-4 ${
                      settings.darkMode ? 'dark:text-white' : ''
                    } ${settings.highContrast ? 'text-white' : ''} ${
                      settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-lg'
                    }`}>
                      Nouvelle discussion
                    </h3>
                    
                    <div className="space-y-4">
                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${
                          settings.darkMode ? 'dark:text-gray-300' : ''
                        } ${settings.highContrast ? 'text-white' : ''}`}>
                          Catégorie
                        </label>
                        <select
                          value={newPost.category}
                          onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                          } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''}`}
                        >
                          {categories.filter(c => c.id !== 'all').map(category => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${
                          settings.darkMode ? 'dark:text-gray-300' : ''
                        } ${settings.highContrast ? 'text-white' : ''}`}>
                          Titre
                        </label>
                        <input
                          type="text"
                          value={newPost.title}
                          onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                          placeholder="Titre de votre discussion..."
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                          } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''}`}
                        />
                      </div>

                      <div>
                        <label className={`block text-sm font-medium text-gray-700 mb-2 ${
                          settings.darkMode ? 'dark:text-gray-300' : ''
                        } ${settings.highContrast ? 'text-white' : ''}`}>
                          Message
                        </label>
                        <textarea
                          value={newPost.content}
                          onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                          placeholder="Écrivez votre message..."
                          rows={6}
                          className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none ${
                            settings.darkMode ? 'dark:bg-gray-700 dark:border-gray-600 dark:text-white' : ''
                          } ${settings.highContrast ? 'bg-gray-800 border-white text-white' : ''}`}
                        />
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 mt-6">
                      <button
                        onClick={() => setShowNewPost(false)}
                        className={`px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors ${
                          settings.darkMode ? 'dark:text-gray-400 dark:hover:text-gray-200' : ''
                        } ${settings.highContrast ? 'text-white hover:text-gray-300' : ''}`}
                      >
                        Annuler
                      </button>
                      <button
                        onClick={handleNewPost}
                        className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
                          settings.highContrast ? 'bg-white text-black border border-black' : ''
                        }`}
                      >
                        Publier
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Posts */}
            <div className="space-y-4">
              {filteredPosts.map((post) => (
                <div
                  key={post.id}
                  className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${
                    settings.darkMode ? 'dark:bg-gray-800' : ''
                  } ${settings.highContrast ? 'bg-gray-900 border border-white' : ''}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center ${
                        settings.highContrast ? 'bg-white text-black' : ''
                      }`}>
                        <User className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className={`font-semibold text-gray-900 hover:text-blue-600 cursor-pointer ${
                          settings.darkMode ? 'dark:text-white dark:hover:text-blue-400' : ''
                        } ${settings.highContrast ? 'text-white hover:text-gray-300' : ''} ${
                          settings.fontSize === 'large' ? 'text-lg' : settings.fontSize === 'small' ? 'text-base' : 'text-base'
                        }`}>
                          {post.title}
                        </h3>
                        <div className={`text-sm text-gray-500 flex items-center space-x-2 ${
                          settings.darkMode ? 'dark:text-gray-400' : ''
                        } ${settings.highContrast ? 'text-gray-300' : ''}`}>
                          <span>Par {post.author}</span>
                          <span>•</span>
                          <Clock className="h-3 w-3" />
                          <span>{post.timestamp}</span>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        getCategoryColor(post.category) === 'blue' ? 'bg-blue-100 text-blue-800' :
                        getCategoryColor(post.category) === 'green' ? 'bg-green-100 text-green-800' :
                        getCategoryColor(post.category) === 'purple' ? 'bg-purple-100 text-purple-800' :
                        getCategoryColor(post.category) === 'orange' ? 'bg-orange-100 text-orange-800' :
                        getCategoryColor(post.category) === 'teal' ? 'bg-teal-100 text-teal-800' :
                        'bg-gray-100 text-gray-800'
                      } ${settings.highContrast ? 'bg-white text-black' : ''}`}
                    >
                      {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>

                  <p className={`text-gray-600 mb-4 leading-relaxed ${
                    settings.darkMode ? 'dark:text-gray-300' : ''
                  } ${settings.highContrast ? 'text-white' : ''} ${
                    settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                  }`}>
                    {post.content}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className={`flex items-center space-x-1 transition-colors ${
                          post.isLiked 
                            ? 'text-red-500 hover:text-red-600' 
                            : 'text-gray-500 hover:text-red-500'
                        } ${settings.darkMode ? 'dark:text-gray-400' : ''} ${
                          settings.highContrast ? 'text-white hover:text-gray-300' : ''
                        }`}
                      >
                        <Heart className={`h-4 w-4 ${post.isLiked ? 'fill-current' : ''}`} />
                        <span className={settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'}>
                          {post.likes}
                        </span>
                      </button>

                      <button className={`flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors ${
                        settings.darkMode ? 'dark:text-gray-400' : ''
                      } ${settings.highContrast ? 'text-white hover:text-gray-300' : ''}`}>
                        <Reply className="h-4 w-4" />
                        <span className={settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-xs' : 'text-sm'}>
                          {post.replies} réponses
                        </span>
                      </button>
                    </div>

                    <button className={`text-blue-600 hover:text-blue-700 font-medium transition-colors ${
                      settings.darkMode ? 'dark:text-blue-400 dark:hover:text-blue-300' : ''
                    } ${settings.highContrast ? 'text-white hover:text-gray-300' : ''} ${
                      settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'
                    }`}>
                      Voir la discussion
                    </button>
                  </div>
                </div>
              ))}

              {filteredPosts.length === 0 && (
                <div className={`text-center py-12 ${
                  settings.darkMode ? 'dark:text-gray-300' : 'text-gray-500'
                } ${settings.highContrast ? 'text-white' : ''}`}>
                  <MessageSquare className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className={`font-semibold mb-2 ${
                    settings.fontSize === 'large' ? 'text-xl' : settings.fontSize === 'small' ? 'text-lg' : 'text-lg'
                  }`}>
                    Aucune discussion trouvée
                  </h3>
                  <p className={settings.fontSize === 'large' ? 'text-base' : settings.fontSize === 'small' ? 'text-sm' : 'text-sm'}>
                    Soyez le premier à lancer une discussion !
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forum;