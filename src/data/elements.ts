export type ElementCategory =
  | "alkali" | "alkaline" | "transition" | "poor" | "metalloid"
  | "nonmetal" | "halogen" | "noble" | "lanthanide" | "actinide";

export interface ChemElement {
  z: number;
  symbol: string;
  name: string;
  category: ElementCategory;
  categoryLabel: string;
  period: number;
  group: number;
  description: string;
}

export const ELEMENTS: ChemElement[] = [
  {
    "z": 1,
    "symbol": "H",
    "name": "Hydrogène",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 1,
    "group": 1,
    "description": "Le plus léger et le plus abondant élément de l'univers, moteur des étoiles."
  },
  {
    "z": 2,
    "symbol": "He",
    "name": "Hélium",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 1,
    "group": 18,
    "description": "Gaz noble ultra-léger qui fait flotter les ballons et refroidit les IRM."
  },
  {
    "z": 3,
    "symbol": "Li",
    "name": "Lithium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 2,
    "group": 1,
    "description": "Métal le plus léger, cœur des batteries qui alimentent nos téléphones."
  },
  {
    "z": 4,
    "symbol": "Be",
    "name": "Béryllium",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 2,
    "group": 2,
    "description": "Métal rare et rigide utilisé dans l'aérospatiale et les rayons X."
  },
  {
    "z": 5,
    "symbol": "B",
    "name": "Bore",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 2,
    "group": 13,
    "description": "Élément clé du verre Pyrex et des détergents."
  },
  {
    "z": 6,
    "symbol": "C",
    "name": "Carbone",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 2,
    "group": 14,
    "description": "Base de toute vie connue, du diamant au graphite en passant par vous."
  },
  {
    "z": 7,
    "symbol": "N",
    "name": "Azote",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 2,
    "group": 15,
    "description": "Constitue 78% de l'air que nous respirons."
  },
  {
    "z": 8,
    "symbol": "O",
    "name": "Oxygène",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 2,
    "group": 16,
    "description": "Indispensable à la respiration, il forme aussi l'eau avec l'hydrogène."
  },
  {
    "z": 9,
    "symbol": "F",
    "name": "Fluor",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 2,
    "group": 17,
    "description": "Halogène très réactif présent dans le dentifrice."
  },
  {
    "z": 10,
    "symbol": "Ne",
    "name": "Néon",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 2,
    "group": 18,
    "description": "Gaz noble qui illumine les célèbres enseignes lumineuses."
  },
  {
    "z": 11,
    "symbol": "Na",
    "name": "Sodium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 3,
    "group": 1,
    "description": "Métal mou qui, combiné au chlore, donne le sel de table."
  },
  {
    "z": 12,
    "symbol": "Mg",
    "name": "Magnésium",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 3,
    "group": 2,
    "description": "Léger et résistant, il brûle avec une flamme blanche éblouissante."
  },
  {
    "z": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 3,
    "group": 13,
    "description": "Métal léger et recyclable à l'infini, présent dans les canettes."
  },
  {
    "z": 14,
    "symbol": "Si",
    "name": "Silicium",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 3,
    "group": 14,
    "description": "Deuxième élément le plus abondant de la croûte terrestre, cœur des puces électroniques."
  },
  {
    "z": 15,
    "symbol": "P",
    "name": "Phosphore",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 3,
    "group": 15,
    "description": "Essentiel à l'ADN et aux os, découvert dans l'urine par un alchimiste."
  },
  {
    "z": 16,
    "symbol": "S",
    "name": "Soufre",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 3,
    "group": 16,
    "description": "Élément jaune caractéristique des volcans et de l'odeur des œufs pourris."
  },
  {
    "z": 17,
    "symbol": "Cl",
    "name": "Chlore",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 3,
    "group": 17,
    "description": "Halogène utilisé pour désinfecter l'eau des piscines."
  },
  {
    "z": 18,
    "symbol": "Ar",
    "name": "Argon",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 3,
    "group": 18,
    "description": "Gaz noble qui remplit les ampoules pour éviter qu'elles ne brûlent."
  },
  {
    "z": 19,
    "symbol": "K",
    "name": "Potassium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 4,
    "group": 1,
    "description": "Métal alcalin essentiel au fonctionnement des cellules nerveuses."
  },
  {
    "z": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 4,
    "group": 2,
    "description": "Bâtisseur des os et des dents, très réactif à l'état pur."
  },
  {
    "z": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 3,
    "description": "Métal de transition rare utilisé dans les cadres de vélos haut de gamme."
  },
  {
    "z": 22,
    "symbol": "Ti",
    "name": "Titane",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 4,
    "description": "Métal résistant et léger, prisé en aérospatiale et en bijouterie."
  },
  {
    "z": 23,
    "symbol": "V",
    "name": "Vanadium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 5,
    "description": "Renforce l'acier utilisé dans les outils et les moteurs."
  },
  {
    "z": 24,
    "symbol": "Cr",
    "name": "Chrome",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 6,
    "description": "Donne son éclat brillant à l'acier inoxydable."
  },
  {
    "z": 25,
    "symbol": "Mn",
    "name": "Manganèse",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 7,
    "description": "Indispensable à la fabrication de l'acier et des piles."
  },
  {
    "z": 26,
    "symbol": "Fe",
    "name": "Fer",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 8,
    "description": "Métal le plus utilisé au monde, cœur de notre planète."
  },
  {
    "z": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 9,
    "description": "Donne sa couleur bleue intense au verre et aux céramiques."
  },
  {
    "z": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 10,
    "description": "Résistant à la corrosion, présent dans les pièces de monnaie."
  },
  {
    "z": 29,
    "symbol": "Cu",
    "name": "Cuivre",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 11,
    "description": "Excellent conducteur d'électricité, utilisé dans les câbles électriques."
  },
  {
    "z": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 4,
    "group": 12,
    "description": "Protège le fer de la rouille par galvanisation."
  },
  {
    "z": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 4,
    "group": 13,
    "description": "Métal qui fond littéralement dans la main."
  },
  {
    "z": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 4,
    "group": 14,
    "description": "Semi-métal essentiel aux débuts de l'électronique moderne."
  },
  {
    "z": 33,
    "symbol": "As",
    "name": "Arsenic",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 4,
    "group": 15,
    "description": "Élément tristement célèbre comme poison, mais utile en électronique."
  },
  {
    "z": 34,
    "symbol": "Se",
    "name": "Sélénium",
    "category": "nonmetal",
    "categoryLabel": "Non-métal",
    "period": 4,
    "group": 16,
    "description": "Antioxydant essentiel présent en petites quantités dans l'organisme."
  },
  {
    "z": 35,
    "symbol": "Br",
    "name": "Brome",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 4,
    "group": 17,
    "description": "Seul élément non métallique liquide à température ambiante."
  },
  {
    "z": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 4,
    "group": 18,
    "description": "Gaz noble utilisé dans les lampes flash photographiques."
  },
  {
    "z": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 5,
    "group": 1,
    "description": "Métal alcalin très réactif utilisé dans les horloges atomiques."
  },
  {
    "z": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 5,
    "group": 2,
    "description": "Donne leur couleur rouge éclatante aux feux d'artifice."
  },
  {
    "z": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 3,
    "description": "Utilisé dans les écrans et les lasers de haute précision."
  },
  {
    "z": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 4,
    "description": "Résistant à la corrosion, utilisé dans les réacteurs nucléaires."
  },
  {
    "z": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 5,
    "description": "Métal supraconducteur utilisé dans les aimants d'IRM."
  },
  {
    "z": 42,
    "symbol": "Mo",
    "name": "Molybdène",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 6,
    "description": "Renforce l'acier pour les outils à haute température."
  },
  {
    "z": 43,
    "symbol": "Tc",
    "name": "Technétium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 7,
    "description": "Premier élément fabriqué artificiellement par l'homme."
  },
  {
    "z": 44,
    "symbol": "Ru",
    "name": "Ruthénium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 8,
    "description": "Métal rare utilisé comme catalyseur en chimie industrielle."
  },
  {
    "z": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 9,
    "description": "L'un des métaux les plus chers, utilisé dans les pots catalytiques."
  },
  {
    "z": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 10,
    "description": "Catalyseur essentiel dans l'industrie automobile."
  },
  {
    "z": 47,
    "symbol": "Ag",
    "name": "Argent",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 11,
    "description": "Métal précieux au meilleur conducteur électrique connu."
  },
  {
    "z": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 5,
    "group": 12,
    "description": "Utilisé autrefois dans les batteries rechargeables."
  },
  {
    "z": 49,
    "symbol": "In",
    "name": "Indium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 5,
    "group": 13,
    "description": "Composant clé des écrans tactiles modernes."
  },
  {
    "z": 50,
    "symbol": "Sn",
    "name": "Étain",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 5,
    "group": 14,
    "description": "Métal utilisé depuis l'Antiquité pour fabriquer le bronze."
  },
  {
    "z": 51,
    "symbol": "Sb",
    "name": "Antimoine",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 5,
    "group": 15,
    "description": "Utilisé depuis l'Antiquité égyptienne comme fard à paupières."
  },
  {
    "z": 52,
    "symbol": "Te",
    "name": "Tellure",
    "category": "metalloid",
    "categoryLabel": "Métalloïde",
    "period": 5,
    "group": 16,
    "description": "Métalloïde rare utilisé dans les panneaux solaires."
  },
  {
    "z": 53,
    "symbol": "I",
    "name": "Iode",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 5,
    "group": 17,
    "description": "Essentiel à la thyroïde, présent dans le sel iodé."
  },
  {
    "z": 54,
    "symbol": "Xe",
    "name": "Xénon",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 5,
    "group": 18,
    "description": "Gaz noble utilisé dans les phares de voiture puissants."
  },
  {
    "z": 55,
    "symbol": "Cs",
    "name": "Césium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 6,
    "group": 1,
    "description": "Base de la définition officielle de la seconde."
  },
  {
    "z": 56,
    "symbol": "Ba",
    "name": "Baryum",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 6,
    "group": 2,
    "description": "Utilisé en imagerie médicale pour les radiographies digestives."
  },
  {
    "z": 57,
    "symbol": "La",
    "name": "Lanthane",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 6,
    "group": 3,
    "description": "Ouvre la famille des terres rares aux propriétés fascinantes."
  },
  {
    "z": 58,
    "symbol": "Ce",
    "name": "Cérium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 4,
    "description": "Terre rare la plus abondante, utilisée dans les pierres à briquet."
  },
  {
    "z": 59,
    "symbol": "Pr",
    "name": "Praséodyme",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 5,
    "description": "Colore le verre en jaune-vert intense."
  },
  {
    "z": 60,
    "symbol": "Nd",
    "name": "Néodyme",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 6,
    "description": "Cœur des aimants les plus puissants au monde."
  },
  {
    "z": 61,
    "symbol": "Pm",
    "name": "Prométhium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 7,
    "description": "Élément radioactif rare utilisé dans les montres lumineuses."
  },
  {
    "z": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 8,
    "description": "Utilisé dans des aimants puissants résistant à la chaleur."
  },
  {
    "z": 63,
    "symbol": "Eu",
    "name": "Europium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 9,
    "description": "Rend les billets de banque impossibles à contrefaire sous UV."
  },
  {
    "z": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 10,
    "description": "Utilisé comme agent de contraste en IRM."
  },
  {
    "z": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 11,
    "description": "Terre rare utilisée dans les écrans et lasers verts."
  },
  {
    "z": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 12,
    "description": "Renforce les aimants permanents à haute température."
  },
  {
    "z": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 13,
    "description": "Possède les propriétés magnétiques parmi les plus fortes."
  },
  {
    "z": 68,
    "symbol": "Er",
    "name": "Erbium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 14,
    "description": "Amplifie les signaux dans les câbles à fibre optique."
  },
  {
    "z": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 15,
    "description": "L'une des terres rares les plus rares et coûteuses."
  },
  {
    "z": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 16,
    "description": "Utilisé dans les horloges atomiques de nouvelle génération."
  },
  {
    "z": 71,
    "symbol": "Lu",
    "name": "Lutécium",
    "category": "lanthanide",
    "categoryLabel": "Lanthanide",
    "period": 9,
    "group": 17,
    "description": "Terre rare la plus dense, utilisée en imagerie médicale."
  },
  {
    "z": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 4,
    "description": "Résiste à des températures extrêmes dans les réacteurs."
  },
  {
    "z": 73,
    "symbol": "Ta",
    "name": "Tantale",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 5,
    "description": "Résistant à la corrosion, essentiel dans les condensateurs électroniques."
  },
  {
    "z": 74,
    "symbol": "W",
    "name": "Tungstène",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 6,
    "description": "Métal au point de fusion le plus élevé, filament des ampoules."
  },
  {
    "z": 75,
    "symbol": "Re",
    "name": "Rhénium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 7,
    "description": "Extrêmement rare, utilisé dans les moteurs d'avion à réaction."
  },
  {
    "z": 76,
    "symbol": "Os",
    "name": "Osmium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 8,
    "description": "Le métal naturel le plus dense connu sur Terre."
  },
  {
    "z": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 9,
    "description": "Métal extrêmement dense, marqueur de l'extinction des dinosaures."
  },
  {
    "z": 78,
    "symbol": "Pt",
    "name": "Platine",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 10,
    "description": "Métal précieux utilisé en joaillerie et en catalyse."
  },
  {
    "z": 79,
    "symbol": "Au",
    "name": "Or",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 11,
    "description": "Métal précieux inaltérable convoité depuis l'aube de l'humanité."
  },
  {
    "z": 80,
    "symbol": "Hg",
    "name": "Mercure",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 6,
    "group": 12,
    "description": "Seul métal liquide à température ambiante."
  },
  {
    "z": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 6,
    "group": 13,
    "description": "Métal toxique autrefois utilisé comme raticide."
  },
  {
    "z": 82,
    "symbol": "Pb",
    "name": "Plomb",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 6,
    "group": 14,
    "description": "Métal dense utilisé historiquement dans les tuyauteries romaines."
  },
  {
    "z": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 6,
    "group": 15,
    "description": "Métal aux cristaux irisés spectaculaires."
  },
  {
    "z": 84,
    "symbol": "Po",
    "name": "Polonium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 6,
    "group": 16,
    "description": "Élément hautement radioactif découvert par Marie Curie."
  },
  {
    "z": 85,
    "symbol": "At",
    "name": "Astate",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 6,
    "group": 17,
    "description": "L'un des éléments les plus rares sur Terre."
  },
  {
    "z": 86,
    "symbol": "Rn",
    "name": "Radon",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 6,
    "group": 18,
    "description": "Gaz radioactif naturel pouvant s'accumuler dans les sous-sols."
  },
  {
    "z": 87,
    "symbol": "Fr",
    "name": "Francium",
    "category": "alkali",
    "categoryLabel": "Métal alcalin",
    "period": 7,
    "group": 1,
    "description": "L'un des éléments les plus instables et rares au monde."
  },
  {
    "z": 88,
    "symbol": "Ra",
    "name": "Radium",
    "category": "alkaline",
    "categoryLabel": "Métal alcalino-terreux",
    "period": 7,
    "group": 2,
    "description": "Élément radioactif découvert par Marie et Pierre Curie."
  },
  {
    "z": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 3,
    "description": "Donne son nom à toute la famille des actinides."
  },
  {
    "z": 90,
    "symbol": "Th",
    "name": "Thorium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 4,
    "description": "Combustible potentiel pour les réacteurs nucléaires du futur."
  },
  {
    "z": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 5,
    "description": "Élément rare et hautement radioactif."
  },
  {
    "z": 92,
    "symbol": "U",
    "name": "Uranium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 6,
    "description": "Combustible des centrales nucléaires et des premières bombes atomiques."
  },
  {
    "z": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 7,
    "description": "Premier élément transuranien découvert."
  },
  {
    "z": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 8,
    "description": "Élément clé de l'énergie et de l'armement nucléaire."
  },
  {
    "z": 95,
    "symbol": "Am",
    "name": "Américium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 9,
    "description": "Utilisé dans les détecteurs de fumée domestiques."
  },
  {
    "z": 96,
    "symbol": "Cm",
    "name": "Curium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 10,
    "description": "Élément radioactif nommé en l'honneur de Marie Curie."
  },
  {
    "z": 97,
    "symbol": "Bk",
    "name": "Berkélium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 11,
    "description": "Élément synthétique nommé d'après Berkeley, où il fut créé."
  },
  {
    "z": 98,
    "symbol": "Cf",
    "name": "Californium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 12,
    "description": "Utilisé pour démarrer certains réacteurs nucléaires."
  },
  {
    "z": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 13,
    "description": "Découvert dans les débris du premier essai de bombe H."
  },
  {
    "z": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 14,
    "description": "Élément synthétique nommé en l'honneur d'Enrico Fermi."
  },
  {
    "z": 101,
    "symbol": "Md",
    "name": "Mendélévium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 15,
    "description": "Nommé en hommage à Dmitri Mendeleïev, père du tableau périodique."
  },
  {
    "z": 102,
    "symbol": "No",
    "name": "Nobélium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 16,
    "description": "Élément synthétique extrêmement instable."
  },
  {
    "z": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "category": "actinide",
    "categoryLabel": "Actinide",
    "period": 10,
    "group": 17,
    "description": "Dernier élément de la famille des actinides."
  },
  {
    "z": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 4,
    "description": "Élément superlourd synthétique à durée de vie très courte."
  },
  {
    "z": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 5,
    "description": "Élément superlourd nommé d'après Dubna, en Russie."
  },
  {
    "z": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 6,
    "description": "Nommé en l'honneur du physicien Glenn Seaborg."
  },
  {
    "z": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 7,
    "description": "Élément superlourd nommé d'après Niels Bohr."
  },
  {
    "z": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 8,
    "description": "Nommé d'après l'état allemand de Hesse."
  },
  {
    "z": 109,
    "symbol": "Mt",
    "name": "Meitnérium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 9,
    "description": "Nommé en l'honneur de Lise Meitner, pionnière de la physique nucléaire."
  },
  {
    "z": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 10,
    "description": "Découvert au centre de recherche de Darmstadt en Allemagne."
  },
  {
    "z": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 11,
    "description": "Nommé en l'honneur de Wilhelm Röntgen, découvreur des rayons X."
  },
  {
    "z": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "category": "transition",
    "categoryLabel": "Métal de transition",
    "period": 7,
    "group": 12,
    "description": "Nommé en hommage à Nicolas Copernic."
  },
  {
    "z": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 7,
    "group": 13,
    "description": "Premier élément nommé d'après un pays asiatique, le Japon."
  },
  {
    "z": 114,
    "symbol": "Fl",
    "name": "Flérovium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 7,
    "group": 14,
    "description": "Nommé en l'honneur du laboratoire Flerov en Russie."
  },
  {
    "z": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 7,
    "group": 15,
    "description": "Nommé d'après la région de Moscou."
  },
  {
    "z": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "category": "poor",
    "categoryLabel": "Métal pauvre",
    "period": 7,
    "group": 16,
    "description": "Nommé d'après le Laboratoire national de Livermore."
  },
  {
    "z": 117,
    "symbol": "Ts",
    "name": "Tennesse",
    "category": "halogen",
    "categoryLabel": "Halogène",
    "period": 7,
    "group": 17,
    "description": "Nommé d'après l'État américain du Tennessee."
  },
  {
    "z": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "category": "noble",
    "categoryLabel": "Gaz noble",
    "period": 7,
    "group": 18,
    "description": "Élément le plus lourd connu, nommé en l'honneur de Youri Oganessian."
  }
];
