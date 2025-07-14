export interface Course {
  id: number;
  title: string;
  category: string;
  level: string;
  duration: string;
  rating: number;
  students: number;
  description: string;
  image: string;
  hasAudio: boolean;
  chapters: Chapter[];
  objectives: string[];
  prerequisites: string[];
  fullContent: string;
}

export interface Chapter {
  id: number;
  title: string;
  duration: string;
  content: string;
  examples: string[];
  exercises: string[];
}

export const coursesData: Course[] = [
  {
    id: 1,
    title: "L'Énonciation et le Discours",
    category: "langue",
    level: "intermediaire",
    duration: "50 min",
    rating: 4.7,
    students: 1800,
    description: "Maîtrisez les mécanismes de l'énonciation et les différents types de discours rapporté",
    image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Identifier les indices d'énonciation dans un texte",
      "Distinguer les différents types de discours rapporté",
      "Maîtriser la transformation du discours direct en indirect",
      "Analyser les effets stylistiques du discours rapporté"
    ],
    prerequisites: [
      "Notions de base en grammaire",
      "Connaissance des temps verbaux"
    ],
    fullContent: `L'énonciation est l'acte de production d'un énoncé par un locuteur dans une situation de communication donnée.`,
    chapters: [
      {
        id: 1,
        title: "Les indices d'énonciation",
        duration: "12 min",
        content: `**Définition :**
L'énonciation est l'acte par lequel un locuteur produit un énoncé dans une situation de communication précise.

**Les indices d'énonciation :**

1. **Les pronoms personnels :**
   - 1ère personne : je, nous (celui qui parle)
   - 2ème personne : tu, vous (celui à qui on parle)
   - 3ème personne : il, elle, ils, elles (celui dont on parle)

2. **Les déterminants possessifs :**
   - mon, ma, mes / ton, ta, tes / son, sa, ses
   - notre, nos / votre, vos / leur, leurs

3. **Les indices spatio-temporels :**
   - Lieu : ici, là, là-bas
   - Temps : maintenant, aujourd'hui, hier, demain

4. **Les temps verbaux :**
   - Présent d'énonciation
   - Passé composé, futur (liés au moment de l'énonciation)`,
        examples: [
          "\"Je vous parle maintenant dans cette salle\" (indices : je, vous, maintenant, cette)",
          "\"Hier, tu m'as dit que ton frère viendrait demain\" (indices temporels et personnels)"
        ],
        exercises: [
          "Relevez les indices d'énonciation dans ce dialogue",
          "Transformez ce récit à la 3ème personne en récit à la 1ère personne"
        ]
      },
      {
        id: 2,
        title: "Le discours rapporté direct",
        duration: "15 min",
        content: `**Le discours direct :**
Reproduction fidèle des paroles telles qu'elles ont été prononcées.

**Caractéristiques :**
- Guillemets ou tirets
- Verbe introducteur (dire, déclarer, s'écrier...)
- Conservation des temps, personnes et indices d'énonciation
- Ponctuation expressive

**Verbes introducteurs et leurs nuances :**
- **Dire** : neutre
- **Déclarer** : solennel, officiel
- **Murmurer** : voix basse
- **S'écrier** : avec force, émotion
- **Chuchoter** : très bas
- **Répliquer** : répondre vivement

**Effets stylistiques :**
- Vivacité du récit
- Authenticité des paroles
- Caractérisation des personnages par leur façon de parler`,
        examples: [
          "Il déclara : \"Je ne reviendrai jamais ici !\"",
          "\"Que fais-tu là ?\" demanda-t-elle avec surprise.",
          "- Où vas-tu ? - Je vais au marché, répondit-il."
        ],
        exercises: [
          "Transformez ces phrases en discours direct",
          "Variez les verbes introducteurs selon le contexte"
        ]
      },
      {
        id: 3,
        title: "Le discours rapporté indirect",
        duration: "15 min",
        content: `**Le discours indirect :**
Rapporte les paroles en les intégrant dans le récit par une proposition subordonnée.

**Transformations nécessaires :**

1. **Pronoms personnels :**
   - je → il/elle
   - tu → il/elle (selon le contexte)
   - nous → ils/elles

2. **Indices spatio-temporels :**
   - ici → là
   - maintenant → alors, à ce moment-là
   - aujourd'hui → ce jour-là
   - hier → la veille
   - demain → le lendemain

3. **Temps verbaux (concordance) :**
   - Présent → Imparfait
   - Passé composé → Plus-que-parfait
   - Futur → Conditionnel présent
   - Impératif → Subjonctif ou infinitif

4. **Conjonctions de subordination :**
   - que (pour les déclarations)
   - si (pour les questions fermées)
   - mots interrogatifs (qui, que, où, quand, comment, pourquoi)`,
        examples: [
          "\"Je viendrai demain\" → Il dit qu'il viendrait le lendemain",
          "\"Où vas-tu ?\" → Elle demanda où il allait",
          "\"Viens ici !\" → Il lui ordonna de venir là"
        ],
        exercises: [
          "Transformez ces phrases du discours direct au discours indirect",
          "Appliquez les règles de concordance des temps"
        ]
      },
      {
        id: 4,
        title: "Le discours indirect libre",
        duration: "8 min",
        content: `**Le discours indirect libre :**
Technique narrative qui mélange récit et discours rapporté sans marques explicites.

**Caractéristiques :**
- Pas de verbe introducteur
- Pas de subordination
- Conservation partielle des marques d'énonciation
- Mélange des temps du récit et du discours

**Effets stylistiques :**
- Fluidité narrative
- Proximité avec les pensées du personnage
- Ambiguïté entre narrateur et personnage
- Modernité de l'écriture

**Reconnaissance :**
- Présence d'interrogations, exclamations dans le récit
- Vocabulaire affectif du personnage
- Temps du discours dans un contexte de récit`,
        examples: [
          "Pierre regardait la lettre. Que contenait-elle donc ? Il n'osait l'ouvrir.",
          "Marie hésitait. Devait-elle accepter cette proposition ? C'était si tentant !"
        ],
        exercises: [
          "Identifiez les passages en discours indirect libre",
          "Réécrivez ce passage en discours indirect libre"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Les Figures de Style",
    category: "langue",
    level: "intermediaire",
    duration: "60 min",
    rating: 4.8,
    students: 2200,
    description: "Découvrez et maîtrisez toutes les figures de style du programme : analogie, opposition, amplification",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Identifier les différentes figures de style",
      "Analyser leurs effets dans un texte",
      "Utiliser les figures de style dans ses propres écrits",
      "Distinguer les familles de figures"
    ],
    prerequisites: [
      "Vocabulaire de base",
      "Notions de grammaire"
    ],
    fullContent: `Les figures de style sont des procédés d'expression qui s'écartent de l'usage ordinaire de la langue pour créer un effet particulier.`,
    chapters: [
      {
        id: 1,
        title: "Figures d'analogie",
        duration: "15 min",
        content: `**Les figures d'analogie établissent un rapport de ressemblance entre deux éléments.**

**1. La comparaison :**
- Rapprochement explicite entre deux éléments
- Présence d'un outil de comparaison (comme, tel que, ainsi que, semblable à...)
- Structure : comparé + outil + comparant

**2. La métaphore :**
- Comparaison implicite (sans outil de comparaison)
- Assimilation directe entre deux éléments
- Plus condensée et plus forte que la comparaison

**3. La personnification :**
- Attribution de caractères humains à des objets, animaux ou concepts abstraits
- Donne vie et expressivité au texte

**4. L'allégorie :**
- Représentation concrète d'une idée abstraite
- Développement d'une métaphore sur plusieurs phrases
- Souvent utilisée pour les concepts moraux ou philosophiques`,
        examples: [
          "Comparaison : \"Il est fort comme un lion\"",
          "Métaphore : \"Cet homme est un lion\" / \"Les perles de rosée\"",
          "Personnification : \"Le vent chante dans les arbres\"",
          "Allégorie : \"La Justice est représentée par une femme aux yeux bandés tenant une balance\""
        ],
        exercises: [
          "Identifiez les figures d'analogie dans ces vers de poésie",
          "Créez des métaphores pour exprimer la tristesse"
        ]
      },
      {
        id: 2,
        title: "Figures d'opposition",
        duration: "12 min",
        content: `**Les figures d'opposition créent un contraste saisissant.**

**1. L'antiphrase :**
- Expression du contraire de ce qu'on pense (ironie)
- Effet : critique, moquerie
- Reconnaissable au contexte et au ton

**2. L'oxymore :**
- Association de deux termes contradictoires
- Effet : paradoxe, surprise, poésie
- Souvent dans un groupe nominal

**3. L'antithèse :**
- Opposition de deux idées, deux expressions
- Structure parallèle et symétrique
- Effet : mise en relief du contraste`,
        examples: [
          "Antiphrase : \"Quel beau temps !\" (par temps de pluie)",
          "Oxymore : \"Cette obscure clarté\", \"un silence assourdissant\"",
          "Antithèse : \"Il faut rire avant que d'être heureux, de peur de mourir sans avoir ri\" (La Bruyère)"
        ],
        exercises: [
          "Relevez les figures d'opposition dans ce texte",
          "Créez des oxymores expressifs"
        ]
      },
      {
        id: 3,
        title: "Figures d'amplification et d'atténuation",
        duration: "15 min",
        content: `**FIGURES D'AMPLIFICATION :**

**1. L'hyperbole :**
- Exagération volontaire
- Effet : emphase, dramatisation
- Souvent avec des superlatifs ou des adverbes d'intensité

**2. La gradation :**
- Succession de termes d'intensité croissante ou décroissante
- Effet : progression dramatique
- Peut être ascendante ou descendante

**3. L'énumération :**
- Liste d'éléments de même nature
- Effet : accumulation, richesse, abondance

**FIGURES D'ATTÉNUATION :**

**1. L'euphémisme :**
- Expression adoucie d'une réalité brutale
- Effet : politesse, pudeur, diplomatie

**2. La litote :**
- Dire moins pour suggérer plus
- Souvent avec une négation
- Effet : élégance, force par la retenue`,
        examples: [
          "Hyperbole : \"Je meurs de soif\", \"Un géant de deux mètres\"",
          "Gradation : \"Va, cours, vole et nous venge\" (Corneille)",
          "Énumération : \"Que de fleurs, de fruits, de feuillages et de senteurs !\"",
          "Euphémisme : \"Il nous a quittés\" (pour \"il est mort\")",
          "Litote : \"Ce n'est pas mal\" (pour \"c'est très bien\")"
        ],
        exercises: [
          "Classez ces figures selon leur effet (amplification/atténuation)",
          "Réécrivez ces phrases en utilisant des euphémismes"
        ]
      },
      {
        id: 4,
        title: "Figures d'insistance et de substitution",
        duration: "18 min",
        content: `**FIGURES D'INSISTANCE :**

**1. La répétition :**
- Reprise d'un même mot ou groupe de mots
- Effet : insistance, martèlement, musicalité

**2. L'anaphore :**
- Répétition d'un mot en début de phrase ou de vers
- Effet : rythme, solennité, emphase
- Très utilisée en poésie et dans les discours

**FIGURES DE SUBSTITUTION :**

**1. La périphrase :**
- Remplacement d'un mot par une expression plus longue
- Effet : éviter la répétition, créer une image poétique
- Peut être explicative ou stylistique

**2. La métonymie :**
- Remplacement d'un terme par un autre lié logiquement
- Relations possibles :
  - Contenant/contenu : "boire un verre"
  - Cause/effet : "vivre de sa plume"
  - Partie/tout : "compter les têtes"
  - Auteur/œuvre : "lire du Molière"
  - Lieu/produit : "boire du champagne"`,
        examples: [
          "Répétition : \"Marcher à jeun, marcher vaincu, marcher malade\" (Hugo)",
          "Anaphore : \"Heureux qui, comme Ulysse... Heureux qui, comme lui...\" (Du Bellay)",
          "Périphrase : \"L'astre du jour\" (le soleil), \"La capitale de la France\" (Paris)",
          "Métonymie : \"Les voiles au loin\" (les bateaux), \"Respecter ses cheveux blancs\" (la vieillesse)"
        ],
        exercises: [
          "Identifiez le type de métonymie dans chaque exemple",
          "Créez des périphrases poétiques pour ces mots simples"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Le Romantisme en Littérature",
    category: "litterature",
    level: "intermediaire",
    duration: "45 min",
    rating: 4.8,
    students: 1250,
    description: "Découvrez les caractéristiques du mouvement romantique et ses auteurs majeurs",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Identifier les caractéristiques du mouvement romantique",
      "Analyser les thèmes récurrents de la littérature romantique",
      "Étudier les œuvres de Chateaubriand, Lamartine et Victor Hugo",
      "Comprendre le contexte historique et social du romantisme"
    ],
    prerequisites: [
      "Notions de base en analyse littéraire",
      "Connaissance du contexte historique du XIXe siècle"
    ],
    fullContent: `Le romantisme est un mouvement littéraire et artistique qui naît en Europe à la fin du XVIIIe siècle et se développe au XIXe siècle. Il se caractérise par une réaction contre le classicisme et les Lumières.

**Contexte historique :**
- Révolution française (1789)
- Guerres napoléoniennes
- Restauration monarchique
- Révolution industrielle

**Caractéristiques principales :**
1. **Le mal du siècle** : sentiment de mélancolie et de désenchantement
2. **L'individualisme** : expression des sentiments personnels
3. **La nature** : refuge et miroir de l'âme
4. **L'exotisme** : goût pour l'Orient et les voyages
5. **Le passé** : nostalgie du Moyen Âge`,
    chapters: [
      {
        id: 1,
        title: "Introduction au Romantisme",
        duration: "12 min",
        content: `Le romantisme naît d'une crise de la sensibilité à la fin du XVIIIe siècle. Les écrivains romantiques privilégient l'émotion sur la raison, l'individu sur la société.

**Origines du mouvement :**
- Influence de Rousseau et de sa philosophie du sentiment
- Réaction contre le rationalisme des Lumières
- Impact de la Révolution française sur les consciences

**Le "mal du siècle" :**
René de Chateaubriand incarne cette génération désabusée, née avec le siècle, qui ne trouve plus sa place dans le monde post-révolutionnaire.`,
        examples: [
          "\"Je me trouvais dans une espèce de délire. J'existais, mais je ne vivais pas.\" - Chateaubriand, René",
          "\"Un seul être vous manque, et tout est dépeuplé.\" - Lamartine, L'Isolement"
        ],
        exercises: [
          "Analysez l'expression du mal du siècle dans un extrait de René",
          "Comparez la vision de la nature chez Rousseau et Chateaubriand"
        ]
      },
      {
        id: 2,
        title: "Les thèmes romantiques",
        duration: "15 min",
        content: `Les romantiques développent des thèmes nouveaux qui expriment leur vision du monde et leurs préoccupations.

**La nature :**
- Refuge contre la société
- Miroir des états d'âme
- Source d'inspiration poétique

**L'amour :**
- Passion absolue et destructrice
- Amour impossible ou contrarié
- Idéalisation de la femme aimée

**La mort :**
- Fascination morbide
- Échappatoire au mal de vivre
- Thème de la mélancolie`,
        examples: [
          "\"Ô lac ! rochers muets ! grottes ! forêt obscure !\" - Lamartine, Le Lac",
          "\"Demain, dès l'aube, à l'heure où blanchit la campagne\" - Hugo, Les Contemplations"
        ],
        exercises: [
          "Étudiez la personnification de la nature dans Le Lac de Lamartine",
          "Analysez le thème de la mort dans un poème romantique"
        ]
      },
      {
        id: 3,
        title: "Auteurs célèbres",
        duration: "18 min",
        content: `**Chateaubriand (1768-1848) :**
- Précurseur du romantisme français
- Œuvres : René, Atala, Mémoires d'outre-tombe
- Thèmes : mal du siècle, exotisme, christianisme

**Lamartine (1790-1869) :**
- Premier grand poète romantique
- Œuvres : Méditations poétiques, Harmonies poétiques
- Innovation : vers libéré, lyrisme personnel

**Victor Hugo (1802-1885) :**
- Chef de file du romantisme
- Œuvres : Hernani, Les Misérables, Les Contemplations
- Génie universel : théâtre, roman, poésie`,
        examples: [
          "Préface de Cromwell (1827) - Manifeste du drame romantique",
          "\"Guerre aux rhéteurs et paix aux syntaxes !\" - Hugo"
        ],
        exercises: [
          "Comparez les styles de Lamartine et Hugo",
          "Analysez l'évolution de l'œuvre hugolienne"
        ]
      },
      {
        id: 4,
        title: "Analyse de textes",
        duration: "20 min",
        content: `**Méthode d'analyse d'un texte romantique :**

1. **Situation du texte :**
   - Auteur, œuvre, date
   - Contexte historique et biographique

2. **Étude thématique :**
   - Identification des thèmes romantiques
   - Analyse des sentiments exprimés

3. **Étude stylistique :**
   - Figures de style (métaphores, personnifications)
   - Rythme et sonorités
   - Registre lyrique

4. **Interprétation :**
   - Signification du texte
   - Portée universelle du message`,
        examples: [
          "Analyse complète du poème \"L'Isolement\" de Lamartine",
          "Étude comparative de deux extraits romantiques"
        ],
        exercises: [
          "Rédigez une analyse linéaire d'un extrait de René",
          "Commentez un poème des Méditations poétiques"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "La Boîte à merveilles - Ahmed Sefrioui",
    category: "litterature",
    level: "intermediaire",
    duration: "90 min",
    rating: 4.9,
    students: 2800,
    description: "Analyse complète de l'œuvre autobiographique d'Ahmed Sefrioui, récit d'enfance au Maroc",
    image: "https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Comprendre la structure narrative de l'œuvre",
      "Analyser les thèmes principaux (enfance, tradition, modernité)",
      "Étudier les personnages et leurs relations",
      "Identifier les caractéristiques du récit autobiographique"
    ],
    prerequisites: [
      "Notions de narratologie",
      "Connaissance du contexte marocain"
    ],
    fullContent: `"La Boîte à merveilles" (1954) est le premier roman de la littérature marocaine d'expression française. Récit autobiographique de l'enfance de l'auteur dans la médina de Fès.`,
    chapters: [
      {
        id: 1,
        title: "Présentation de l'œuvre et contexte",
        duration: "20 min",
        content: `**L'auteur : Ahmed Sefrioui (1915-2004)**
- Pionnier de la littérature marocaine d'expression française
- Né à Fès dans une famille traditionnelle
- Instituteur, puis inspecteur de l'enseignement

**Contexte historique :**
- Maroc sous protectorat français (1912-1956)
- Période de transition entre tradition et modernité
- Émergence d'une élite intellectuelle marocaine

**Genre et structure :**
- Récit autobiographique à la première personne
- Narration rétrospective (adulte qui se souvient)
- 12 chapitres correspondant aux mois de l'année
- Alternance entre récit et description

**Thèmes principaux :**
- L'enfance et l'apprentissage de la vie
- La tradition face à la modernité
- La condition féminine au Maroc
- La pauvreté et la solidarité sociale`,
        examples: [
          "Incipit : \"Six ans. J'avais six ans et j'étais seul...\"",
          "Description de la médina de Fès et de ses habitants"
        ],
        exercises: [
          "Analysez l'incipit du roman",
          "Situez l'œuvre dans son contexte historique"
        ]
      },
      {
        id: 2,
        title: "Les personnages principaux",
        duration: "25 min",
        content: `**Le narrateur-enfant (Sidi Mohammed) :**
- Âgé de 6 ans, sensible et observateur
- Regard naïf mais perspicace sur le monde des adultes
- Quête d'identité et d'affection
- Fascination pour les objets et les histoires

**Lalla Zoubida (la mère) :**
- Femme traditionnelle, pieuse et superstitieuse
- Amour maternel protecteur parfois excessif
- Représente les valeurs ancestrales
- Relation privilégiée avec son fils

**Le père :**
- Tisserand, artisan traditionnel en difficulté
- Personnage effacé, souvent absent
- Représente la crise de l'artisanat traditionnel
- Relation distante avec son fils

**Lalla Aicha (la voyante) :**
- Femme mystérieuse aux pouvoirs surnaturels
- Guide spirituel de Lalla Zoubida
- Représente la tradition magico-religieuse

**Les voisines (Rahma, Fatma Bziouya...) :**
- Solidarité féminine dans la médina
- Commérages et entraide
- Microcosme social traditionnel`,
        examples: [
          "Portrait de Lalla Zoubida : \"Ma mère était une femme de petite taille...\"",
          "Description de la boîte à merveilles et de son contenu symbolique"
        ],
        exercises: [
          "Analysez la relation mère-fils dans l'œuvre",
          "Étudiez le rôle des personnages féminins"
        ]
      },
      {
        id: 3,
        title: "L'espace et le temps dans l'œuvre",
        duration: "20 min",
        content: `**L'espace géographique :**

**La médina de Fès :**
- Espace clos, traditionnel et protecteur
- Dar Chouafa (maison du narrateur)
- Msid (école coranique)
- Souk (marché traditionnel)
- Hammam (bains publics)

**Symbolique de l'espace :**
- Maison = sécurité, intimité familiale
- Rue = découverte, apprentissage social
- École = confrontation avec l'autorité
- Souk = activité économique, vie sociale

**Le temps narratif :**
- Temps cyclique (12 mois de l'année)
- Rythme des saisons et des fêtes religieuses
- Temps de l'enfance (6 ans du narrateur)
- Temps de la mémoire (narration rétrospective)

**Les rituels temporels :**
- Prières quotidiennes
- Fêtes religieuses (Achoura, Aïd...)
- Saisons agricoles
- Cycles de la vie familiale`,
        examples: [
          "Description de Dar Chouafa : \"Notre maison était l'avant-dernière de l'impasse...\"",
          "Évocation du msid et de l'apprentissage coranique"
        ],
        exercises: [
          "Analysez la symbolique de la boîte à merveilles",
          "Étudiez l'organisation temporelle du récit"
        ]
      },
      {
        id: 4,
        title: "Thèmes et signification de l'œuvre",
        duration: "25 min",
        content: `**L'enfance et l'apprentissage :**
- Vision du monde à travers les yeux d'un enfant
- Découverte progressive de la réalité sociale
- Passage de l'innocence à la connaissance
- Rôle de l'imagination et du merveilleux

**Tradition et modernité :**
- Société traditionnelle en mutation
- Crise de l'artisanat face à l'industrialisation
- Tension entre valeurs ancestrales et influences modernes
- École française vs école coranique

**La condition féminine :**
- Femmes confinées dans l'espace domestique
- Solidarité féminine comme résistance
- Transmission des traditions par les femmes
- Superstitions et croyances populaires

**Pauvreté et dignité :**
- Difficultés économiques de la famille
- Maintien de la dignité malgré la pauvreté
- Entraide et solidarité sociale
- Contraste entre riches et pauvres

**Le merveilleux et le réel :**
- Mélange du quotidien et du fantastique
- Croyances populaires et superstitions
- Rôle de l'imagination enfantine
- Poésie du quotidien`,
        examples: [
          "La boîte à merveilles comme symbole de l'imaginaire enfantin",
          "Les séances chez Lalla Aicha et le monde du surnaturel",
          "La fête d'Achoura et ses traditions"
        ],
        exercises: [
          "Analysez le thème de la tradition face à la modernité",
          "Étudiez le rôle du merveilleux dans le récit",
          "Commentez la fin de l'œuvre et sa signification"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Antigone - Sophocle",
    category: "litterature",
    level: "avance",
    duration: "75 min",
    rating: 4.8,
    students: 2100,
    description: "Étude de la tragédie grecque de Sophocle : conflit entre loi divine et loi humaine",
    image: "https://images.pexels.com/photos/8111357/pexels-photo-8111357.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Comprendre la structure de la tragédie grecque",
      "Analyser le conflit tragique entre Antigone et Créon",
      "Étudier les thèmes universels de l'œuvre",
      "Identifier les caractéristiques du héros tragique"
    ],
    prerequisites: [
      "Notions sur le théâtre antique",
      "Connaissance de la mythologie grecque"
    ],
    fullContent: `Antigone (441 av. J.-C.) est une tragédie de Sophocle qui met en scène le conflit entre la loi divine et la loi humaine à travers l'opposition entre Antigone et Créon.`,
    chapters: [
      {
        id: 1,
        title: "Contexte et structure de la tragédie",
        duration: "18 min",
        content: `**Sophocle (496-406 av. J.-C.) :**
- L'un des trois grands tragiques grecs avec Eschyle et Euripide
- Auteur de plus de 120 pièces (7 conservées)
- Innovations : introduction du troisième acteur, réduction du rôle du chœur

**Le mythe des Labdacides :**
- Malédiction qui pèse sur la famille de Laïos
- Œdipe, père d'Antigone, a tué son père et épousé sa mère
- Étéocle et Polynice, frères d'Antigone, se sont entretués

**Structure de la tragédie grecque :**
- **Prologue** : exposition de la situation
- **Parodos** : entrée du chœur
- **Épisodes** : scènes dialoguées (5 épisodes)
- **Stasima** : chants du chœur entre les épisodes
- **Exodos** : dénouement et sortie du chœur

**Les règles de la tragédie :**
- Unité de temps : 24 heures
- Unité de lieu : Thèbes, devant le palais royal
- Unité d'action : le conflit autour de la sépulture de Polynice`,
        examples: [
          "Prologue : dialogue entre Antigone et Ismène",
          "Parodos : chant de victoire du chœur des vieillards thébains"
        ],
        exercises: [
          "Analysez la structure de la pièce",
          "Étudiez le rôle du chœur dans la tragédie"
        ]
      },
      {
        id: 2,
        title: "Les personnages et leurs motivations",
        duration: "20 min",
        content: `**Antigone :**
- Héroïne tragique, fille d'Œdipe
- Motivations : piété filiale, respect des lois divines
- Caractère : déterminée, intransigeante, courageuse
- Évolution : de la révolte à l'acceptation de la mort

**Créon :**
- Roi de Thèbes, oncle d'Antigone
- Motivations : maintien de l'ordre public, autorité royale
- Caractère : autoritaire, inflexible, puis repentant
- Évolution : de la certitude au doute et au remords

**Ismène :**
- Sœur d'Antigone, personnage de contraste
- Caractère : prudente, soumise, puis courageuse
- Rôle : révéler par opposition la détermination d'Antigone

**Hémon :**
- Fils de Créon, fiancé d'Antigone
- Conflit entre amour filial et amour pour Antigone
- Représente la jeunesse face à l'autorité

**Le garde et le messager :**
- Personnages du peuple
- Apportent les nouvelles tragiques
- Contraste avec les personnages nobles`,
        examples: [
          "Tirade d'Antigone : \"Ce n'est pas Zeus qui m'a dicté cette loi...\"",
          "Confrontation Créon-Hémon : conflit générationnel"
        ],
        exercises: [
          "Comparez les caractères d'Antigone et d'Ismène",
          "Analysez l'évolution du personnage de Créon"
        ]
      },
      {
        id: 3,
        title: "Les thèmes de la tragédie",
        duration: "20 min",
        content: `**Conflit entre loi divine et loi humaine :**
- Antigone défend les lois non écrites des dieux
- Créon impose les lois de la cité
- Impossibilité de concilier les deux ordres
- Question de la légitimité du pouvoir

**Le pouvoir et la tyrannie :**
- Créon, roi légitime qui devient tyran
- Abus de pouvoir et isolement du dirigeant
- Critique de l'autoritarisme
- Nécessité de l'écoute et du dialogue

**La famille et la cité :**
- Tension entre devoirs familiaux et civiques
- Antigone privilégie les liens du sang
- Créon place l'État au-dessus de tout
- Destruction de la famille royale

**La condition féminine :**
- Antigone transgresse son rôle social
- Affirmation de la femme face au pouvoir masculin
- Courage et détermination féminines
- Remise en question de l'ordre patriarcal

**La mort et l'honneur :**
- Préférer la mort au déshonneur
- Fidélité aux valeurs jusqu'au sacrifice
- Mort comme affirmation de soi
- Héroïsme tragique`,
        examples: [
          "\"Il y a des lois non écrites, inébranlables, des dieux\" (Antigone)",
          "\"L'État, c'est moi\" (conception de Créon)",
          "Le suicide d'Hémon par fidélité à Antigone"
        ],
        exercises: [
          "Analysez le conflit central de la pièce",
          "Étudiez la dimension politique de l'œuvre"
        ]
      },
      {
        id: 4,
        title: "La portée universelle de l'œuvre",
        duration: "17 min",
        content: `**Actualité du mythe :**
- Résistance à l'oppression et à l'injustice
- Désobéissance civile et conscience morale
- Conflit entre individu et société
- Question des droits de l'homme

**Interprétations modernes :**
- Antigone résistante (Seconde Guerre mondiale)
- Féminisme et émancipation féminine
- Critique des régimes totalitaires
- Défense des libertés individuelles

**Adaptations contemporaines :**
- Jean Anouilh (1944) : Antigone moderne
- Bertolt Brecht : théâtre épique
- Adaptations cinématographiques
- Mises en scène contemporaines

**Leçons de la tragédie :**
- Nécessité du dialogue et de la modération
- Dangers de l'intransigeance
- Respect de la dignité humaine
- Équilibre entre ordre et liberté

**Le tragique sophocléen :**
- Fatalité et libre arbitre
- Grandeur et chute du héros
- Catharsis : purification par la pitié et la terreur
- Sagesse par la souffrance`,
        examples: [
          "Antigone d'Anouilh : adaptation sous l'Occupation",
          "Références à Antigone dans les mouvements de résistance",
          "Créon comme figure du pouvoir autoritaire"
        ],
        exercises: [
          "Comparez l'Antigone de Sophocle à celle d'Anouilh",
          "Analysez l'actualité du message de la pièce",
          "Rédigez une dissertation sur le héros tragique"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Le Dernier jour d'un condamné - Victor Hugo",
    category: "litterature",
    level: "avance",
    duration: "80 min",
    rating: 4.7,
    students: 1900,
    description: "Analyse du plaidoyer de Victor Hugo contre la peine de mort à travers ce récit poignant",
    image: "https://images.pexels.com/photos/159832/justice-law-case-hearing-159832.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Comprendre l'engagement de Victor Hugo contre la peine de mort",
      "Analyser les techniques narratives du monologue intérieur",
      "Étudier la dimension sociale et humanitaire de l'œuvre",
      "Identifier les caractéristiques du romantisme social"
    ],
    prerequisites: [
      "Connaissance du contexte historique du XIXe siècle",
      "Notions sur le romantisme français"
    ],
    fullContent: `"Le Dernier jour d'un condamné" (1829) est un plaidoyer de Victor Hugo contre la peine de mort, présenté sous forme de journal intime d'un condamné dans ses dernières heures.`,
    chapters: [
      {
        id: 1,
        title: "Contexte et genèse de l'œuvre",
        duration: "20 min",
        content: `**Victor Hugo et l'engagement social :**
- Chef de file du romantisme français
- Évolution vers un engagement social et politique
- Défenseur des opprimés et des déshérités
- Combat pour l'abolition de la peine de mort

**Contexte historique :**
- Restauration monarchique (1815-1830)
- Débats sur la peine de mort en France
- Exécutions publiques et leur spectacle
- Mouvement abolitionniste naissant

**Genèse de l'œuvre :**
- Publication anonyme en 1829
- Préface de 1832 : manifeste abolitionniste
- Influence des exécutions auxquelles Hugo a assisté
- Volonté de sensibiliser l'opinion publique

**Innovation littéraire :**
- Récit à la première personne
- Monologue intérieur avant la lettre
- Temps réel de la narration
- Anonymat du condamné (universalité)

**Structure de l'œuvre :**
- 49 chapitres de longueur inégale
- Progression temporelle vers l'exécution
- Alternance entre présent et souvenirs
- Crescendo dramatique`,
        examples: [
          "Incipit : \"Condamné à mort ! Voilà cinq semaines que j'habite avec cette pensée...\"",
          "Préface de 1832 : \"Cette tête, la voilà qui tombe !\"",
          "Description de Bicêtre et de la Conciergerie"
        ],
        exercises: [
          "Analysez l'incipit et son effet sur le lecteur",
          "Étudiez la structure temporelle de l'œuvre"
        ]
      },
      {
        id: 2,
        title: "Le narrateur et la technique du monologue",
        duration: "20 min",
        content: `**Le narrateur-condamné :**
- Personnage anonyme (pas de nom, pas de crime précisé)
- Effet d'universalité : tout homme peut être concerné
- Évolution psychologique face à la mort
- Lucidité et analyse de sa propre situation

**Le monologue intérieur :**
- Technique narrative innovante pour l'époque
- Accès direct aux pensées du personnage
- Flux de conscience et associations d'idées
- Alternance entre rationnel et émotionnel

**Les registres d'expression :**
- **Pathétique** : émotion, souffrance
- **Lyrique** : expression des sentiments
- **Dramatique** : tension, suspense
- **Ironique** : critique sociale
- **Réaliste** : description crue de la prison

**Techniques d'écriture :**
- Présent de narration (immédiateté)
- Phrases courtes (émotion, urgence)
- Exclamations et interrogations
- Répétitions obsessionnelles
- Images et métaphores de la mort`,
        examples: [
          "Obsession du temps : \"Encore trois heures, et je serai mort !\"",
          "Monologue sur la guillotine : \"Cette machine hideuse...\"",
          "Évocation de sa fille : \"Ma pauvre petite Marie !\""
        ],
        exercises: [
          "Analysez l'évolution psychologique du narrateur",
          "Étudiez les procédés du monologue intérieur"
        ]
      },
      {
        id: 3,
        title: "La critique sociale et judiciaire",
        duration: "20 min",
        content: `**Critique du système judiciaire :**
- Inégalité devant la justice
- Arbitraire des décisions
- Absence de recours efficace
- Déshumanisation de la procédure

**Dénonciation des conditions carcérales :**
- Description de Bicêtre : insalubrité, promiscuité
- Traitement inhumain des détenus
- Hiérarchie entre prisonniers
- Violence et corruption

**Critique sociale :**
- Inégalités sociales face à la justice
- Pauvreté et criminalité
- Indifférence de la bourgeoisie
- Spectacle morbide des exécutions

**La peine de mort en question :**
- Inefficacité dissuasive
- Irréversibilité et erreurs judiciaires
- Dimension barbare et primitive
- Alternative : emprisonnement et réhabilitation

**Portraits sociaux :**
- Le geôlier : indifférence professionnelle
- L'aumônier : consolation insuffisante
- Les bourgeois : curiosité malsaine
- Le peuple : fascination pour le spectacle`,
        examples: [
          "Description de Bicêtre : \"Bicêtre ! ce mot lugubre...\"",
          "Le ferrage des forçats : scène d'une violence inouïe",
          "La foule venue assister à l'exécution"
        ],
        exercises: [
          "Analysez la critique du système pénitentiaire",
          "Étudiez la dimension sociale de l'œuvre"
        ]
      },
      {
        id: 4,
        title: "Portée et postérité de l'œuvre",
        duration: "20 min",
        content: `**Impact de l'œuvre :**
- Sensibilisation de l'opinion publique
- Contribution au débat abolitionniste
- Influence sur la législation
- Modèle pour la littérature engagée

**Thèmes universels :**
- Dignité humaine et droit à la vie
- Angoisse face à la mort
- Solitude et abandon
- Injustice et révolte
- Rédemption et pardon

**Techniques narratives modernes :**
- Monologue intérieur (précurseur de Joyce, Proust)
- Temps psychologique
- Fragmentation du récit
- Subjectivité narrative

**Postérité littéraire :**
- Influence sur Dostoïevski, Camus
- Développement du roman psychologique
- Littérature carcérale contemporaine
- Témoignages de condamnés à mort

**Actualité du message :**
- Débat sur la peine de mort dans le monde
- Droits de l'homme et justice
- Conditions carcérales
- Réinsertion et récidive

**Adaptations et réécritures :**
- Adaptations théâtrales et cinématographiques
- Opéras et œuvres musicales
- Réécritures contemporaines
- Témoignages de condamnés réels`,
        examples: [
          "Abolition de la peine de mort en France (1981)",
          "Influence sur \"L'Étranger\" de Camus",
          "Témoignages contemporains de couloirs de la mort"
        ],
        exercises: [
          "Analysez l'actualité du message hugolien",
          "Comparez avec d'autres œuvres sur la peine de mort",
          "Rédigez un essai sur l'engagement littéraire"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Grammaire: Les Temps Verbaux",
    category: "langue",
    level: "debutant",
    duration: "30 min",
    rating: 4.6,
    students: 2100,
    description: "Maîtrisez l'usage des temps verbaux en français",
    image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: true,
    objectives: [
      "Maîtriser la conjugaison des temps de l'indicatif",
      "Comprendre les valeurs temporelles et aspectuelles",
      "Savoir employer correctement chaque temps",
      "Éviter les erreurs de concordance des temps"
    ],
    prerequisites: [
      "Connaissance des groupes verbaux",
      "Notions de base sur les auxiliaires"
    ],
    fullContent: `Les temps verbaux permettent de situer l'action dans le temps et d'exprimer l'aspect de cette action (accomplie, en cours, habituelle...).`,
    chapters: [
      {
        id: 1,
        title: "Le Présent de l'indicatif",
        duration: "8 min",
        content: `**Formation :**
- 1er groupe (-er) : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent
- 2e groupe (-ir) : je finis, tu finis, il finit, nous finissons, vous finissez, ils finissent
- 3e groupe : conjugaisons irrégulières

**Valeurs du présent :**
1. **Présent d'énonciation** : action au moment où l'on parle
   "Je vous parle en ce moment."

2. **Présent de vérité générale** : faits toujours vrais
   "La terre tourne autour du soleil."

3. **Présent d'habitude** : actions répétées
   "Je me lève tous les jours à 7h."

4. **Présent de narration** : récit vivant
   "En 1789, le peuple prend la Bastille."`,
        examples: [
          "Je mange une pomme (présent d'énonciation)",
          "L'eau bout à 100°C (vérité générale)",
          "Il lit le journal chaque matin (habitude)"
        ],
        exercises: [
          "Conjuguez les verbes suivants au présent : aller, faire, dire",
          "Identifiez la valeur du présent dans chaque phrase"
        ]
      },
      {
        id: 2,
        title: "Le Passé composé",
        duration: "8 min",
        content: `**Formation :**
Auxiliaire ÊTRE ou AVOIR au présent + participe passé

**Choix de l'auxiliaire :**
- ÊTRE : verbes de mouvement (aller, venir, partir...) et verbes pronominaux
- AVOIR : tous les autres verbes

**Accord du participe passé :**
- Avec ÊTRE : accord avec le sujet
- Avec AVOIR : accord avec le COD placé avant

**Valeurs :**
1. **Antériorité** par rapport au présent
2. **Action accomplie** avec des conséquences dans le présent
3. **Action ponctuelle** dans le passé`,
        examples: [
          "Elle est partie ce matin (auxiliaire être)",
          "J'ai mangé une pomme (auxiliaire avoir)",
          "Les lettres qu'il a écrites (accord avec COD antéposé)"
        ],
        exercises: [
          "Conjuguez au passé composé : sortir, prendre, se lever",
          "Accordez correctement les participes passés"
        ]
      },
      {
        id: 3,
        title: "L'Imparfait",
        duration: "7 min",
        content: `**Formation :**
Radical de la 1ère personne du pluriel du présent + terminaisons :
-ais, -ais, -ait, -ions, -iez, -aient

**Valeurs :**
1. **Action habituelle** dans le passé
   "Quand j'étais enfant, je jouais dans le jardin."

2. **Description** dans le passé
   "Il faisait beau, les oiseaux chantaient."

3. **Action en cours** dans le passé
   "Je lisais quand tu es arrivé."

4. **Imparfait de politesse**
   "Je voulais vous demander un service."`,
        examples: [
          "Nous allions souvent à la plage (habitude)",
          "Le soleil brillait (description)",
          "Il pleuvait quand je suis sorti (simultanéité)"
        ],
        exercises: [
          "Transformez ces phrases du présent à l'imparfait",
          "Distinguez imparfait et passé composé dans un texte"
        ]
      },
      {
        id: 4,
        title: "Le Futur simple",
        duration: "7 min",
        content: `**Formation :**
- Verbes en -er et -ir : infinitif + terminaisons
- Verbes irréguliers : radical spécial + terminaisons
Terminaisons : -ai, -as, -a, -ons, -ez, -ont

**Principaux verbes irréguliers :**
- être → ser- (je serai)
- avoir → aur- (j'aurai)
- aller → ir- (j'irai)
- faire → fer- (je ferai)
- voir → verr- (je verrai)

**Valeurs :**
1. **Action future** certaine
2. **Ordre atténué**
3. **Vérité générale** dans l'avenir`,
        examples: [
          "Demain, je partirai en voyage (futur certain)",
          "Tu rangeras ta chambre ! (ordre)",
          "Un jour, les hommes iront sur Mars (futur hypothétique)"
        ],
        exercises: [
          "Conjuguez au futur : pouvoir, vouloir, savoir",
          "Réécrivez ce texte au futur"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Rédiger une Dissertation",
    category: "expression",
    level: "avance",
    duration: "60 min",
    rating: 4.9,
    students: 890,
    description: "Techniques et méthodes pour réussir vos dissertations",
    image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=400",
    hasAudio: false,
    objectives: [
      "Maîtriser la structure de la dissertation",
      "Développer une argumentation cohérente",
      "Utiliser les connecteurs logiques appropriés",
      "Rédiger une introduction et une conclusion efficaces"
    ],
    prerequisites: [
      "Bonne maîtrise de l'expression écrite",
      "Capacité d'analyse et de synthèse",
      "Culture littéraire de base"
    ],
    fullContent: `La dissertation est un exercice d'argumentation qui consiste à traiter un sujet de manière organisée et personnelle.`,
    chapters: [
      {
        id: 1,
        title: "Structure de la dissertation",
        duration: "15 min",
        content: `**Plan type de la dissertation :**

**I. INTRODUCTION (10% du devoir)**
1. **Accroche** : citation, fait d'actualité, question
2. **Présentation du sujet** : reformulation, définition des termes
3. **Problématique** : question centrale à résoudre
4. **Annonce du plan** : présentation des grandes parties

**II. DÉVELOPPEMENT (80% du devoir)**
- **2 ou 3 parties** équilibrées
- Chaque partie = **thèse + arguments + exemples**
- **Transitions** entre les parties

**III. CONCLUSION (10% du devoir)**
1. **Bilan** : réponse à la problématique
2. **Ouverture** : élargissement du sujet

**Règles de présentation :**
- Alinéas pour chaque partie
- Saut de ligne entre introduction, développement et conclusion
- Paragraphes bien structurés`,
        examples: [
          "Sujet : 'Le roman doit-il faire rêver ou instruire ?'",
          "Problématique : Comment concilier plaisir de lecture et fonction didactique ?"
        ],
        exercises: [
          "Rédigez une introduction sur un sujet donné",
          "Identifiez les défauts dans une introduction mal construite"
        ]
      },
      {
        id: 2,
        title: "L'argumentation",
        duration: "20 min",
        content: `**Types d'arguments :**

1. **Argument logique** : raisonnement déductif ou inductif
2. **Argument d'autorité** : citation d'expert, d'auteur reconnu
3. **Argument d'expérience** : fait vécu, observation
4. **Argument par l'exemple** : cas particulier illustrant une idée générale
5. **Argument par analogie** : comparaison, métaphore

**Structure d'un paragraphe argumentatif :**
1. **Idée directrice** (phrase d'ouverture)
2. **Argument** (explication, développement)
3. **Exemple** (illustration concrète)
4. **Commentaire** (analyse, lien avec le sujet)

**Les connecteurs logiques :**
- **Addition** : de plus, en outre, par ailleurs
- **Opposition** : cependant, néanmoins, en revanche
- **Cause** : car, en effet, parce que
- **Conséquence** : donc, ainsi, par conséquent
- **Concession** : certes, il est vrai que, bien que`,
        examples: [
          "Certes, la lecture divertit (concession), cependant elle instruit aussi (opposition)",
          "Balzac peint la société de son époque (exemple) ; ainsi, le roman devient miroir social (conséquence)"
        ],
        exercises: [
          "Rédigez un paragraphe argumentatif complet",
          "Classez ces connecteurs selon leur fonction logique"
        ]
      },
      {
        id: 3,
        title: "Le style et l'expression",
        duration: "15 min",
        content: `**Qualités du style :**

1. **Clarté** : idées exprimées simplement
2. **Précision** : mots justes, vocabulaire varié
3. **Élégance** : phrases bien construites, rythme
4. **Personnalité** : style propre à l'auteur

**Techniques d'expression :**

**Variété des phrases :**
- Phrases simples, complexes
- Interrogations rhétoriques
- Exclamations pour l'emphase

**Figures de style :**
- **Métaphore** : "La lecture est un voyage"
- **Antithèse** : "Ce héros si grand et si petit"
- **Gradation** : "Il aime, il adore, il vénère la littérature"

**Vocabulaire :**
- Synonymes pour éviter les répétitions
- Champs lexicaux cohérents
- Registre de langue soutenu

**Erreurs à éviter :**
- Répétitions
- Phrases trop longues
- Familiarités
- Généralités vagues`,
        examples: [
          "Au lieu de 'très beau' → 'magnifique, splendide, remarquable'",
          "Éviter : 'De nos jours...' → Préférer une formulation plus précise"
        ],
        exercises: [
          "Améliorez le style de ces phrases",
          "Trouvez des synonymes pour enrichir ce paragraphe"
        ]
      },
      {
        id: 4,
        title: "Révision et correction",
        duration: "10 min",
        content: `**Étapes de la révision :**

**1. Relecture du fond :**
- Cohérence de l'argumentation
- Respect du sujet et de la problématique
- Équilibre des parties
- Qualité des exemples

**2. Relecture de la forme :**
- Orthographe et grammaire
- Ponctuation
- Syntaxe des phrases
- Présentation

**Grille d'auto-évaluation :**
- L'introduction pose-t-elle clairement la problématique ?
- Chaque partie répond-elle à un aspect du sujet ?
- Les transitions sont-elles logiques ?
- La conclusion répond-elle à la problématique ?
- Le style est-il correct et élégant ?

**Conseils pratiques :**
- Prévoir 10 minutes pour la relecture
- Lire à voix basse pour repérer les maladresses
- Vérifier l'accord des participes passés
- Contrôler la ponctuation des citations`,
        examples: [
          "Erreur fréquente : 'Balzac à écrit' → 'Balzac a écrit'",
          "Amélioration : 'Il y a beaucoup d'auteurs' → 'De nombreux auteurs'"
        ],
        exercises: [
          "Corrigez les erreurs dans ce paragraphe",
          "Évaluez cette dissertation selon la grille proposée"
        ]
      }
    ]
  }
];

export const getCourseByCategoryAndLevel = (category: string, level: string) => {
  return coursesData.filter(course => 
    (category === 'all' || course.category === category) &&
    (level === 'all' || course.level === level)
  );
};

export const getCourseById = (id: number) => {
  return coursesData.find(course => course.id === id);
};