export interface Exercise {
  id: number;
  question: string;
  type: 'multiple-choice' | 'text-input' | 'drag-drop' | 'true-false';
  options?: string[];
  correct: number | string;
  explanation: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
  points: number;
}

export interface ExerciseCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  exercises: Exercise[];
}

export const exerciseCategories: ExerciseCategory[] = [
  {
    id: 'grammaire',
    name: 'Grammaire',
    icon: '📝',
    description: 'Maîtrisez les règles grammaticales françaises',
    exercises: [
      {
        id: 1,
        question: "Quelle est la fonction du mot souligné dans la phrase : 'Le chat <u>noir</u> dort sur le canapé' ?",
        type: 'multiple-choice',
        options: ["Sujet", "Épithète", "Attribut du sujet", "Complément d'objet direct"],
        correct: 1,
        explanation: "'Noir' est un adjectif qualificatif épithète qui qualifie directement le nom 'chat'.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Complétez avec le bon accord : 'Les fleurs que j'ai _____ sont magnifiques.'",
        type: 'multiple-choice',
        options: ["cueilli", "cueillie", "cueillies", "cueillis"],
        correct: 2,
        explanation: "Le participe passé 'cueillies' s'accorde avec le COD 'que' (= les fleurs) placé avant l'auxiliaire avoir.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 3,
        question: "Identifiez la proposition subordonnée dans : 'Je pense qu'il viendra demain.'",
        type: 'multiple-choice',
        options: ["Je pense", "qu'il viendra demain", "il viendra", "demain"],
        correct: 1,
        explanation: "'Qu'il viendra demain' est une proposition subordonnée conjonctive complétive, COD du verbe 'penser'.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Quel est le mode du verbe dans : 'Il faut que tu viennes' ?",
        type: 'multiple-choice',
        options: ["Indicatif", "Subjonctif", "Conditionnel", "Impératif"],
        correct: 1,
        explanation: "Après 'il faut que', on utilise obligatoirement le subjonctif : 'que tu viennes'.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 5,
        question: "Transformez au discours indirect : Pierre dit : 'Je viendrai demain.'",
        type: 'multiple-choice',
        options: [
          "Pierre dit qu'il viendra demain",
          "Pierre dit qu'il viendrait demain", 
          "Pierre dit qu'il viendrait le lendemain",
          "Pierre dit qu'il viendra le lendemain"
        ],
        correct: 3,
        explanation: "Au discours indirect : 'je' → 'il', 'viendrai' reste au futur, 'demain' → 'le lendemain'.",
        difficulty: 'difficile',
        points: 4
      }
    ]
  },
  {
    id: 'vocabulaire',
    name: 'Vocabulaire',
    icon: '📚',
    description: 'Enrichissez votre lexique et votre expression',
    exercises: [
      {
        id: 1,
        question: "Quel est le synonyme de 'perspicace' ?",
        type: 'multiple-choice',
        options: ["Naïf", "Clairvoyant", "Distrait", "Confus"],
        correct: 1,
        explanation: "'Perspicace' signifie qui a une intelligence vive et pénétrante, synonyme de 'clairvoyant'.",
        difficulty: 'moyen',
        points: 2
      },
      {
        id: 2,
        question: "Que signifie l'expression 'avoir un cœur d'artichaut' ?",
        type: 'multiple-choice',
        options: [
          "Être généreux",
          "Tomber amoureux facilement",
          "Être végétarien",
          "Avoir bon cœur"
        ],
        correct: 1,
        explanation: "Cette expression signifie tomber amoureux facilement et souvent, par référence aux feuilles de l'artichaut qui se détachent une à une.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 3,
        question: "Quel est l'antonyme de 'prolixe' ?",
        type: 'multiple-choice',
        options: ["Bavard", "Concis", "Éloquent", "Verbeux"],
        correct: 1,
        explanation: "'Prolixe' signifie qui parle ou écrit beaucoup, de manière excessive. Son antonyme est 'concis' (bref, précis).",
        difficulty: 'difficile',
        points: 3
      },
      {
        id: 4,
        question: "Complétez : 'Il a fait preuve d'une grande _____ dans cette épreuve.'",
        type: 'multiple-choice',
        options: ["ténacité", "ténassité", "ténaciter", "ténacisme"],
        correct: 0,
        explanation: "'Ténacité' (persévérance, obstination) est la seule orthographe correcte parmi les propositions.",
        difficulty: 'moyen',
        points: 2
      },
      {
        id: 5,
        question: "Quel est le niveau de langue de : 'Cette demeure est fort spacieuse' ?",
        type: 'multiple-choice',
        options: ["Familier", "Courant", "Soutenu", "Vulgaire"],
        correct: 2,
        explanation: "L'utilisation de 'demeure' (au lieu de 'maison') et 'fort' (au lieu de 'très') caractérise un registre soutenu.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 6,
        question: "Identifiez la figure de style dans : 'Cet homme est un lion'",
        type: 'multiple-choice',
        options: ["Comparaison", "Métaphore", "Personnification", "Hyperbole"],
        correct: 1,
        explanation: "C'est une métaphore : comparaison implicite sans outil de comparaison. L'homme est directement assimilé à un lion (courage, force).",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 7,
        question: "Dans 'La Boîte à merveilles', qui est le narrateur ?",
        type: 'multiple-choice',
        options: ["Ahmed Sefrioui adulte", "Sidi Mohammed enfant", "Lalla Zoubida", "Un narrateur omniscient"],
        correct: 0,
        explanation: "Le narrateur est Ahmed Sefrioui adulte qui se remémore son enfance à travers le personnage de Sidi Mohammed.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 8,
        question: "Quel est le thème principal d'Antigone de Sophocle ?",
        type: 'multiple-choice',
        options: ["L'amour impossible", "Le conflit entre loi divine et loi humaine", "La guerre de Troie", "La vengeance familiale"],
        correct: 1,
        explanation: "Le thème central est le conflit entre les lois non écrites des dieux (défendues par Antigone) et les lois de la cité (imposées par Créon).",
        difficulty: 'difficile',
        points: 4
      }
    ]
  },
  {
    id: 'figures-style',
    name: 'Figures de Style',
    icon: '🎭',
    description: 'Maîtrisez les figures de style du programme',
    exercises: [
      {
        id: 1,
        question: "Identifiez la figure de style : 'Il pleut des cordes'",
        type: 'multiple-choice',
        options: ["Métaphore", "Hyperbole", "Comparaison", "Personnification"],
        correct: 1,
        explanation: "'Il pleut des cordes' est une hyperbole (exagération) pour dire qu'il pleut très fort.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Quelle figure de style dans : 'Cette obscure clarté qui tombe des étoiles' ?",
        type: 'multiple-choice',
        options: ["Antithèse", "Oxymore", "Métaphore", "Périphrase"],
        correct: 1,
        explanation: "L'oxymore associe deux termes contradictoires ('obscure clarté') pour créer un effet poétique.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 3,
        question: "Dans 'boire un verre', quelle figure de style est utilisée ?",
        type: 'multiple-choice',
        options: ["Métaphore", "Métonymie", "Synecdoque", "Périphrase"],
        correct: 1,
        explanation: "C'est une métonymie : on remplace le contenu (la boisson) par le contenant (le verre).",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Identifiez l'anaphore dans ces vers de Du Bellay :",
        type: 'multiple-choice',
        options: [
          "La répétition de 'Heureux'",
          "La répétition de 'qui'", 
          "La répétition de 'comme'",
          "Toutes les réponses"
        ],
        correct: 0,
        explanation: "L'anaphore est la répétition de 'Heureux' en début de vers dans 'Heureux qui, comme Ulysse...'",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 5,
        question: "Quelle est la différence entre métaphore et comparaison ?",
        type: 'multiple-choice',
        options: [
          "Il n'y en a pas",
          "La métaphore utilise un outil de comparaison",
          "La comparaison utilise un outil de comparaison",
          "La métaphore est plus longue"
        ],
        correct: 2,
        explanation: "La comparaison utilise un outil de comparaison (comme, tel que...) contrairement à la métaphore qui est implicite.",
        difficulty: 'facile',
        points: 2
      }
    ]
  },
  {
    id: 'oeuvres-programme',
    name: 'Œuvres au Programme',
    icon: '📚',
    description: 'Testez vos connaissances sur les œuvres étudiées',
    exercises: [
      {
        id: 1,
        question: "Dans quelle ville se déroule 'La Boîte à merveilles' ?",
        type: 'multiple-choice',
        options: ["Casablanca", "Rabat", "Fès", "Marrakech"],
        correct: 2,
        explanation: "L'action se déroule dans la médina de Fès, ville natale d'Ahmed Sefrioui.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Qui est Lalla Zoubida dans 'La Boîte à merveilles' ?",
        type: 'multiple-choice',
        options: ["La grand-mère", "La mère du narrateur", "Une voisine", "La voyante"],
        correct: 1,
        explanation: "Lalla Zoubida est la mère du narrateur, personnage central de l'œuvre.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 3,
        question: "Pourquoi Antigone veut-elle enterrer Polynice ?",
        type: 'multiple-choice',
        options: [
          "Par amour fraternel",
          "Pour respecter les lois divines",
          "Pour défier Créon",
          "Toutes ces raisons"
        ],
        correct: 3,
        explanation: "Antigone agit par amour fraternel, respect des lois divines et aussi par opposition à l'autorité tyrannique de Créon.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Dans 'Le Dernier jour d'un condamné', pourquoi Hugo ne précise-t-il pas le crime ?",
        type: 'multiple-choice',
        options: [
          "Il l'a oublié",
          "Pour créer du mystère",
          "Pour universaliser le message",
          "C'est un crime trop horrible"
        ],
        correct: 2,
        explanation: "Hugo ne précise pas le crime pour universaliser son message contre la peine de mort, quel que soit le délit commis.",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 5,
        question: "Quel est le genre littéraire de 'La Boîte à merveilles' ?",
        type: 'multiple-choice',
        options: ["Roman historique", "Récit autobiographique", "Conte merveilleux", "Roman d'aventures"],
        correct: 1,
        explanation: "'La Boîte à merveilles' est un récit autobiographique où Sefrioui raconte son enfance à Fès.",
        difficulty: 'moyen',
        points: 3
      }
    ]
  },
  {
    id: 'enonciation-discours',
    name: 'Énonciation et Discours',
    icon: '💬',
    description: 'Maîtrisez l\'énonciation et le discours rapporté',
    exercises: [
      {
        id: 1,
        question: "Quels sont les indices d'énonciation dans : 'Je vous parle maintenant' ?",
        type: 'multiple-choice',
        options: ["Je, vous", "Je, vous, maintenant", "Vous, maintenant", "Je, maintenant"],
        correct: 1,
        explanation: "'Je' (1ère personne), 'vous' (2ème personne) et 'maintenant' (indice temporel) sont tous des indices d'énonciation.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Transformez en discours indirect : 'Il dit : \"Je viendrai demain\"'",
        type: 'multiple-choice',
        options: [
          "Il dit qu'il viendra demain",
          "Il dit qu'il viendrait le lendemain",
          "Il dit qu'il viendrait demain",
          "Il dit qu'il viendra le lendemain"
        ],
        correct: 1,
        explanation: "Transformations : 'je' → 'il', futur → conditionnel, 'demain' → 'le lendemain'.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 3,
        question: "Identifiez le discours indirect libre :",
        type: 'multiple-choice',
        options: [
          "Il dit qu'il viendra",
          "Pierre hésitait. Devait-il partir ?",
          "\"Que faire ?\" se demanda-t-il",
          "Il se demandait que faire"
        ],
        correct: 1,
        explanation: "Le discours indirect libre mélange récit et pensées sans verbe introducteur ni subordination.",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 4,
        question: "Dans 'Hier, tu m'as dit...', quel est l'indice temporel ?",
        type: 'multiple-choice',
        options: ["Tu", "M'", "Hier", "As dit"],
        correct: 2,
        explanation: "'Hier' est un indice temporel qui situe l'action par rapport au moment de l'énonciation.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 5,
        question: "Quel registre de langue utilise le mot 'bouquin' pour désigner un livre ?",
        type: 'multiple-choice',
        options: ["Soutenu", "Courant", "Familier", "Vulgaire"],
        correct: 2,
        explanation: "'Bouquin' est un terme familier pour désigner un livre. Le terme courant est 'livre', le terme soutenu serait 'ouvrage'.",
        difficulty: 'facile',
        points: 2
      }
    ]
  },
  {
    id: 'conjugaison',
    name: 'Conjugaison',
    icon: '⚡',
    description: 'Perfectionnez vos conjugaisons françaises',
    exercises: [
      {
        id: 1,
        question: "Conjuguez 'aller' à la 1ère personne du singulier du futur simple :",
        type: 'multiple-choice',
        options: ["j'allerai", "j'irai", "je vais aller", "j'irais"],
        correct: 1,
        explanation: "Le verbe 'aller' est irrégulier au futur : j'irai, tu iras, il ira...",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Quel est le participe passé du verbe 'résoudre' ?",
        type: 'multiple-choice',
        options: ["résolu", "résout", "résolvé", "résous"],
        correct: 0,
        explanation: "Le participe passé de 'résoudre' est 'résolu' (j'ai résolu ce problème).",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 3,
        question: "Conjuguez 'que je _____ (savoir)' au subjonctif présent :",
        type: 'multiple-choice',
        options: ["sais", "sache", "saurai", "saurais"],
        correct: 1,
        explanation: "Au subjonctif présent : que je sache, que tu saches, qu'il sache...",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Quelle est la 2ème personne du pluriel de 'faire' au passé simple ?",
        type: 'multiple-choice',
        options: ["vous faisiez", "vous fîtes", "vous ferez", "vous feriez"],
        correct: 1,
        explanation: "Au passé simple : je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent.",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 5,
        question: "Conjuguez 'venir' au conditionnel présent, 3ème personne du singulier :",
        type: 'multiple-choice',
        options: ["il vient", "il venait", "il viendrait", "il viendra"],
        correct: 2,
        explanation: "Au conditionnel présent : je viendrais, tu viendrais, il viendrait...",
        difficulty: 'moyen',
        points: 3
      }
    ]
  },
  {
    id: 'orthographe',
    name: 'Orthographe',
    icon: '✍️',
    description: 'Améliorez votre orthographe française',
    exercises: [
      {
        id: 1,
        question: "Quelle est la bonne orthographe ?",
        type: 'multiple-choice',
        options: ["dévelopement", "développement", "développemment", "dévellopement"],
        correct: 1,
        explanation: "'Développement' s'écrit avec deux 'p' et deux 'm'. Attention à ne pas confondre avec 'enveloppe' qui ne prend qu'un 'p'.",
        difficulty: 'moyen',
        points: 2
      },
      {
        id: 2,
        question: "Complétez : 'Elle s'est _____ les mains.'",
        type: 'multiple-choice',
        options: ["lavé", "lavée", "lavés", "lavées"],
        correct: 0,
        explanation: "Avec un verbe pronominal, quand le COD est placé après le verbe, le participe passé ne s'accorde pas : 'elle s'est lavé les mains' (COD = les mains).",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 3,
        question: "Accordez correctement : 'Ci-_____ les documents demandés.'",
        type: 'multiple-choice',
        options: ["joint", "joints", "jointe", "jointes"],
        correct: 1,
        explanation: "'Ci-joint' s'accorde quand il est placé après le nom : 'ci-joints les documents'. Il reste invariable en début de phrase.",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 4,
        question: "Choisissez la bonne orthographe :",
        type: 'multiple-choice',
        options: ["quelque soit", "quelques soit", "quel que soit", "quels que soit"],
        correct: 2,
        explanation: "'Quel que soit' s'écrit en deux mots. 'Quel' s'accorde avec le sujet qui suit le verbe être : 'quel que soit le problème', 'quels que soient les problèmes'.",
        difficulty: 'difficile',
        points: 4
      },
      {
        id: 5,
        question: "Complétez : 'Ils se sont _____ au travail.'",
        type: 'multiple-choice',
        options: ["mis", "mit", "mise", "mises"],
        correct: 0,
        explanation: "Le verbe 'se mettre' est pronominal réfléchi. Le participe passé s'accorde avec le sujet : 'ils se sont mis' (masculin pluriel).",
        difficulty: 'moyen',
        points: 3
      }
    ]
  },
  {
    id: 'comprehension',
    name: 'Compréhension',
    icon: '🧠',
    description: 'Développez votre compréhension de texte',
    exercises: [
      {
        id: 1,
        question: "Dans la phrase 'Il pleut des cordes', que signifie cette expression ?",
        type: 'multiple-choice',
        options: ["Il y a du vent", "Il pleut très fort", "Il fait beau", "Il neige"],
        correct: 1,
        explanation: "'Il pleut des cordes' est une expression imagée qui signifie qu'il pleut très fort, abondamment.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "Quel est le sens de 'avoir le cafard' ?",
        type: 'multiple-choice',
        options: ["Être malade", "Être triste", "Avoir faim", "Être en colère"],
        correct: 1,
        explanation: "'Avoir le cafard' est une expression familière qui signifie être triste, mélancolique, déprimé.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 3,
        question: "Dans un texte argumentatif, que signifie 'en revanche' ?",
        type: 'multiple-choice',
        options: ["Addition", "Opposition", "Cause", "Conséquence"],
        correct: 1,
        explanation: "'En revanche' est un connecteur logique d'opposition, synonyme de 'par contre', 'cependant'.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Quel registre de langue caractérise : 'Cette demeure est fort spacieuse' ?",
        type: 'multiple-choice',
        options: ["Familier", "Courant", "Soutenu", "Vulgaire"],
        correct: 2,
        explanation: "L'utilisation de 'demeure' (au lieu de 'maison') et 'fort' (au lieu de 'très') caractérise un registre soutenu.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 5,
        question: "Dans 'Cet homme est un lion', quelle figure de style est utilisée ?",
        type: 'multiple-choice',
        options: ["Comparaison", "Métaphore", "Personnification", "Hyperbole"],
        correct: 1,
        explanation: "C'est une métaphore : comparaison implicite sans outil de comparaison. L'homme est directement assimilé à un lion (courage, force).",
        difficulty: 'moyen',
        points: 3
      }
    ]
  },
  {
    id: 'litterature',
    name: 'Littérature',
    icon: '📖',
    description: 'Explorez les œuvres et mouvements littéraires',
    exercises: [
      {
        id: 1,
        question: "Qui a écrit 'Les Misérables' ?",
        type: 'multiple-choice',
        options: ["Émile Zola", "Victor Hugo", "Gustave Flaubert", "Honoré de Balzac"],
        correct: 1,
        explanation: "'Les Misérables' (1862) est un roman de Victor Hugo, figure majeure du romantisme français.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 2,
        question: "À quel mouvement littéraire appartient Chateaubriand ?",
        type: 'multiple-choice',
        options: ["Classicisme", "Romantisme", "Réalisme", "Symbolisme"],
        correct: 1,
        explanation: "Chateaubriand (1768-1848) est considéré comme le précurseur du romantisme français avec 'René' et 'Atala'.",
        difficulty: 'facile',
        points: 2
      },
      {
        id: 3,
        question: "Quel thème n'est PAS caractéristique du romantisme ?",
        type: 'multiple-choice',
        options: ["Le mal du siècle", "L'amour de la nature", "La raison et la mesure", "L'exotisme"],
        correct: 2,
        explanation: "'La raison et la mesure' caractérisent le classicisme. Le romantisme privilégie l'émotion, la passion et l'individualisme.",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 4,
        question: "Dans quel recueil trouve-t-on le poème 'Le Lac' ?",
        type: 'multiple-choice',
        options: ["Les Fleurs du mal", "Méditations poétiques", "Les Contemplations", "Harmonies poétiques"],
        correct: 1,
        explanation: "'Le Lac' est un poème célèbre de Lamartine, publié dans les 'Méditations poétiques' (1820).",
        difficulty: 'moyen',
        points: 3
      },
      {
        id: 5,
        question: "Qu'est-ce qui caractérise le 'mal du siècle' romantique ?",
        type: 'multiple-choice',
        options: [
          "L'optimisme et la joie de vivre",
          "La mélancolie et le désenchantement",
          "L'amour de la société",
          "La confiance en l'avenir"
        ],
        correct: 1,
        explanation: "Le 'mal du siècle' désigne le sentiment de mélancolie, de désenchantement et de vague à l'âme qui caractérise la génération romantique.",
        difficulty: 'moyen',
        points: 3
      }
    ]
  }
];

export const getExercisesByCategory = (categoryId: string) => {
  const category = exerciseCategories.find(cat => cat.id === categoryId);
  return category ? category.exercises : [];
};

export const getAllExercises = () => {
  return exerciseCategories.flatMap(category => category.exercises);
};