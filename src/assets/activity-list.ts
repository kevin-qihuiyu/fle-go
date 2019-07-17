import { Activity } from 'src/app/domain/activity';
import { Difficulty } from 'src/app/domain/activity';

// Cat1: Vie quotidienne
export const ACTIVITIES_1: Activity[] = [
    {
      name: "Acheter des chaussures",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 101
    },
    {
      name: "Acheter des vêtements",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 102
    },
    {
      name: "Connaître les noms de vêtements",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 104
    },
    {
      name: "Connaître les noms de vêtements",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 105
    },
    {
      name: "Connaître les noms de vêtements",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    {
      name: "Acheter un kebab",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 107
    },
    {
      name: "Identifier un moyen de paiement",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 110
    },
    {
      name: "Retirer un colis",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 110
    },
    {
      name: "Identifier la cuisine française",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    {
      name: "Identifier la cuisine française",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    {
      name: "Choisir la cuisson",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    {
      name: "Choisir la garniture",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    {
      name: "Choisir les parfums de glace",
      categoryId: 1,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 106
    },
    // {
    //   name: "À la boulangerie",
    //   categoryId: 1,
    //   difficulty: Difficulty.DÉBUTANT,
    //   questionId: 108
    // },
    // {
    //   name: "Identifier les catégories de produits",
    //   categoryId: 1,
    //   difficulty: Difficulty.DÉBUTANT,
    //   questionId: 109
    // },
    // {
    //   name: "Acheter un billet de train",
    //   categoryId: 1,
    //   difficulty: Difficulty.DÉBUTANT,
    //   questionId: 103
    // },

  ]


// Cat2: Administration
export const ACTIVITIES_2: Activity[] = [
    {
      name: "Aller à la Poste",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 201
    },
    {
      name: "Apporter ses documents",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 202
    },
    {
      name: "Comprendre un message d'annulation",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 203
    },
    {
      name: "Identifier la date de fin de validité d'un document",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 205
    },
    {
      name: "Identifier un courrier administratif",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 206
    },
    {
      name: "Se repérer à la préfecture",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 206
    },
    {
      name: "Remplir un formulaire de CAF",
      categoryId: 2,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 206
    },
    // {
    //     name: "Lire un texto",
    //     categoryId: 2,
    //     difficulty: Difficulty.DÉBUTANT,
    //     questionId: 207
    // },
    // {
    //     name: "Noter une date",
    //     categoryId: 2,
    //     difficulty: Difficulty.DÉBUTANT,
    //     questionId: 208
    // },
    // {
    //     name: "SMS Administratif",
    //     categoryId: 2,
    //     difficulty: Difficulty.DÉBUTANT,
    //     questionId: 209
    // },
    // {
    //     name: "Utiliser un calendrier",
    //     categoryId: 2,
    //     difficulty: Difficulty.DÉBUTANT,
    //     questionId: 210
    // },
    // {
    //     name: "Envoyer un courrier",
    //     categoryId: 2,
    //     difficulty: Difficulty.DÉBUTANT,
    //     questionId: 204
    // },
]

// Cat3: Voyager
export const ACTIVITIES_3: Activity[] = [
  {
    name: "Moyen de transport",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 301
  },
  {
    name: "Moyen de transport",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  {
    name: "Prendre le bus",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 301
  },
  {
    name: "Prendre le métro",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  // train avec station non desservi; 
  // plusieur directions
  // Incident voyageur; Colis suspect; malaise voyageur
  // Station fermer suite à manifestation
  {
    name: "Prendre le métro",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  {
    name: "Comprendre des indications sur les transports",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  {
    name: "Prendre le train",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  {
    name: "Prendre l'avion",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
  // Côntroleur
  {
    name: "Montrer son titre de transport",
    categoryId: 3,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 302
  },
]


// Cat4: Se loger
export const ACTIVITIES_4: Activity[] = [
  {
      name: "Identifier les pièces d'un logement",
      categoryId: 4,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 401
  },
  {
      name: "Identifier l'équipement d'un appartement",
      categoryId: 4,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 402
  },
  {
      name: "Comprendre l'information sur le logement",
      categoryId: 4,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 402
  },
  {
      name: "Lire une annonce immobilière",
      categoryId: 4,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 402
  },
  {
      name: "Lire un contrat de location",
      categoryId: 4,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 402
  },
]

// Cat5: Activités et sortir
export const ACTIVITIES_5: Activity[] = [
  {
    name: "Assister à une soirée",
    categoryId: 5,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 502
  },
  {
    name: "Aller au cinéma",
    categoryId: 5,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 501
  },
  {
    name: "Visiter un musée",
    categoryId: 5,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 501
  },
  {
    name: "Aller à la piscine",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "À la station de ski",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Au poney club",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
]

// Cat6: Santé & Bien-être
export const ACTIVITIES_6: Activity[] = [
  {
    name: "Aller chez le médecin",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 601
  },
  {
    name: "Communiquer avec un médécin",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Comprendre les consignes du médecin",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 601
  },
  {
    name: "Dire un symptôme",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Identifier le tarif d'une consultation",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Identifier une feuille de soins",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Lire une ordonnance",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "À la pharmacie",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Présentater la carte Vitale",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Visite chez l'ophtalmologue",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Visite chez le dentiste",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Visite chez une laboratoire médicale",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
  {
    name: "Aller à la gym",
    categoryId: 6,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 602
  },
]

// Cat7: Vie amoureuse
export const ACTIVITIES_7: Activity[] = [
  {
      name: "Moyen de transport",
      categoryId: 7,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 701
  },
  {
      name: "Moyen de transport",
      categoryId: 7,
      difficulty: Difficulty.DÉBUTANT,
      questionId: 702
  },
]

// Cat8: Vie professionnelle
export const ACTIVITIES_8: Activity[] = [
  {
    name: "Préparer son CV",
    categoryId: 8,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 801
  },
  {
    name: "Entretien téléphonique",
    categoryId: 8,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 802
  },
  {
    name: "Entretien",
    categoryId: 8,
    difficulty: Difficulty.DÉBUTANT,
    questionId: 802
  },
]