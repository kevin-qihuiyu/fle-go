import { QCMSelectText, 
    QCMSelectImage, 
    AssociateTextToImage, 
    AssociateImageToGoal, 
    CardsortingTextTo2Goals,
    QuestionType,
    SelectOnCalendar} 
from 'src/app/domain/question';

export const QSET: (QCMSelectText | QCMSelectImage | AssociateTextToImage | AssociateImageToGoal | SelectOnCalendar)[] = [
    // Cat1: Vie quotidienne
    {
      qid: 101,
      name: "Acheter des chaussures",
      questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
      desc: "De quoi elle parle?",
      audioDesc: "assets/qsets/qset1/q1_audio.mp3",
      choices:[
        {
            id: 1,
            imgSrc:'assets/qsets/qset1/q1_images/q1_blouson.jpg'
        },
        {
            id: 2,
            imgSrc:'assets/qsets/qset1/q1_images/q1_chaussure.jpg'
        },
        {
            id: 3,
            imgSrc:'assets/qsets/qset1/q1_images/q1_pantalon.jpg'
        }
       ],
       correctChoiceId:2 
    },
    {
      qid: 102,
      name: "Acheter des vêtements",
      questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
      imgDesc: "assets/qsets/qset1/q2_image.jpg",
      audioDesc: "assets/qsets/qset1/q2_audio.mp3",
      choices: [
        {
            id: 1,
            desc: '07 05 30 45 06 30 79'
        },
        {
            id: 2,
            desc:'42'
        },
        {
            id: 3,
            desc:'Z'
        },
        {
            id:4,
            desc:'Numéro 2'
        }
        ],
        correctChoiceId:2 
    },
    // {
    //   qid: 103,
    //   name: "Acheter un billet de train",
    //   questionType: QuestionType.ASSOCIEZ_IMAGE_TO_GOAL,
    //   imgDesc: "assets/qsets/qset1/q3_images/q3_billet_de_train.jpg",
    //   desc: "Payez vos achats.",
    //   choices:[
    //     {
    //         id: 1,
    //         value: 1,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_1_euro.jpg'
    //     },
    //     {
    //         id: 2,
    //         value: 2,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_2_euro.jpg'
    //     },
    //     {
    //         id: 3,
    //         value: 5,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_5_euros.jpg'
    //     },
    //     {
    //         id: 4,
    //         value: 10,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_10_euros.jpg'
    //     },
    //     {
    //         id: 5,
    //         value: 0.05,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_5_centimes.jpg'
    //     },
    //     {
    //         id: 6,
    //         value: 0.1,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_10_centimes.jpg'
    //     },
    //     {
    //         id: 7,
    //         value: 0.2,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_20_centimes.jpg'
    //     },
    //     {
    //         id: 8,
    //         value: 0.5,
    //         imgSrc:'assets/qsets/qset1/q3_images/q3_50_centimes.jpg'
    //     }
    //    ],
    //   goal: "5.2"
    // },
    {
        qid: 104,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "un short",
                imgSrc: "assets/qsets/qset1/q4_images/q4_short.jpg"
            },
            {
                id: 2,
                desc: "'un pantalon",
                imgSrc: "assets/qsets/qset1/q4_images/q4_pantalon.jpg"
            },
            {
                id: 3,
                desc: "un t-shirt",
                imgSrc: "assets/qsets/qset1/q4_images/q4_t.jpg"
            },
            {
                id: 4,
                desc: "une chemise",
                imgSrc: "assets/qsets/qset1/q4_images/q4_chemise.jpg"
            }
        ]
    },
    {
        qid: 105,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "un pull",
                imgSrc: "assets/qsets/qset1/q5_images/q5_pull.jpg"
            },
            {
                id: 2,
                desc: "'un jean",
                imgSrc: "assets/qsets/qset1/q5_images/q5_jean.jpg"
            },
            {
                id: 3,
                desc: "un blouson",
                imgSrc: "assets/qsets/qset1/q5_images/q5_blouson.jpg"
            },
            {
                id: 4,
                desc: "un manteau",
                imgSrc: "assets/qsets/qset1/q5_images/q5_manteau.jpg"
            }
        ]
    },
    {
        qid: 106,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1//q6_audio.mp3",
        choices: [
            {
                id: 1,
                imgSrc: 'assets/qsets/qset1/q6_images/q6_beret_echarpe.jpg'
            },
            {
                id: 2,
                imgSrc: 'assets/qsets/qset1/q6_images/q6_beret_gants.jpg'
            },
            {
                id: 3,
                imgSrc: 'assets/qsets/qset1/q6_images/q6_bonnet_echarpe.jpg'
            },
            {
                id:4,
                imgSrc: 'assets/qsets/qset1/q6_images/q6_bonnet_foulard.jpg'
            }
        ],
        correctChoiceId:3 
    },
    {
        qid: 107,
        name: "Acheter un kebab",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        audioDesc: "assets/qsets/qset1/q7_audio.mp3",
        choices: [
            {
                id: 1,
                desc: "un oignon",
                imgSrc: "assets/qsets/qset1/q7_images/q7_onion.jpg"
            },
            {
                id: 2,
                desc: "'des salades",
                imgSrc: "assets/qsets/qset1/q7_images/q7_salade.jpg"
            },
            {
                id: 3,
                desc: "des tomates",
                imgSrc: "assets/qsets/qset1/q7_images/q7_tomate.jpg"
            },
            {
                id: 4,
                desc: "une tortilla",
                imgSrc: "assets/qsets/qset1/q7_images/q7_tortillas.jpg"
            }
        ]
    },
    // {
    //     qid: 108,
    //     name: "À la boulangerie",
    //     questionType: QuestionType.ASSOCIEZ_IMAGE_TO_GOAL,
    //     audioDesc: "assets/qsets/qset1/q8_audio.mp3",
    //     choices:[
    //         {
    //             id: 1,
    //             value: 1,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_1_euro.jpg'
    //         },
    //         {
    //             id: 2,
    //             value: 2,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_2_euro.jpg'
    //         },
    //         {
    //             id: 3,
    //             value: 5,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_5_euros.jpg'
    //         },
    //         {
    //             id: 4,
    //             value: 10,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_10_euros.jpg'
    //         },
    //         {
    //             id: 5,
    //             value: 0.05,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_5_centimes.jpg'
    //         },
    //         {
    //             id: 6,
    //             value: 0.1,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_10_centimes.jpg'
    //         },
    //         {
    //             id: 7,
    //             value: 0.2,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_20_centimes.jpg'
    //         },
    //         {
    //             id: 8,
    //             value: 0.5,
    //             imgSrc:'assets/qsets/qset1/q3_images/q3_50_centimes.jpg'
    //         }
    //     ],
    //     goal: "2.2"
    // },
    // {
    //     qid: 109,
    //     name: "Identifier les catégories de produits",
    //     questionType: QuestionType.CARDSORTING_TEXT_TO_2_GOALS,
    //     imgDesc: "assets/qsets/qset1/q9_image.jpg",
    //     choices: [
    //         {
    //             id:1,
    //             desc:'Courgettes'
    //         }, 
    //         {
    //             id:2,
    //             desc:'Beurre'
    //         },
    //         {
    //             id:3,
    //             desc:'Carottes'
    //         }     
    //     ],
    //     goals: ['Légumes', 'Produits laitiers']
    // },
    {
        qid: 110,
        name: "Identifier un moyen de paiement",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1/q10_audio.mp3",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset1/q10_images/q10_carte.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset1/q10_images/q10_cheque.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset1/q10_images/q10_espece.jpg"
            }
        ],
        correctChoiceId:3 
    },

    // Cat2: Administration
    {
        qid: 201,
        name: "Aller à la Poste",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Qu'est qu'on peut faire à la Poste?",
        choices: [
            {
                id: 1,
                desc: "Venir chercher un colis",
                imgSrc: "assets/qsets/qset2/q1_images/1-envoyer-un-colis.jpg"
            },
            {
                id: 2,
                desc: "'Prendre un abonnement de téléphone",
                imgSrc: "assets/qsets/qset2/q1_images/2-prendre-un-abonnement-mobile.jpg"
            },
            {
                id: 3,
                desc: "Retirer de l'argent",
                imgSrc: "assets/qsets/qset2/q1_images/3-retirer-l-argent.jpg"
            },
            {
                id: 4,
                desc: "Timbrer/Affranchir son courrier",
                imgSrc: "assets/qsets/qset2/q1_images/4-affranchir.jpg"
            }
        ]
    },
    {
        qid: 202,
        name: "Apporter ses documents",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_IMAGE,
        desc: "Qu'est-ce qu'il faut apporter au rendez-vous?",
        imgDesc: "assets/qsets/qset2/q2_images/img_desc.jpg",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset2/q2_images/option_1.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset2/q2_images/option_2.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset2/q2_images/option_3.jpg"
            }
        ],
        correctChoiceId:2 
    },
    {
        qid: 203,
        name: "Comprendre un message d'annulation",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
        desc: "Qu'est-ce qui se passe pour le rendrez-vous?",
        audioDesc: "assets/qsets/qset2/q3_audio.mp3",
        choices: [
            {
                id: 1,
                desc: "C'était hier."
            },
            {
                id: 2,
                desc:"Il faut y aller aujourd'hui à 15h."
            },
            {
                id: 3,
                desc: "Il est reporté le 15."
            },
            {
                id:4,
                desc: "Il est annulé."
            }
        ],
        correctChoiceId:3
    },
    {
        qid: 205,
        name: "Identifier la date de fin de validité d'un document",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Quelle est la date de fin de validité de ce titre de séjour?",
        imgDesc: "assets/qsets/qset2/q5_image.png",
        choices: [
            {
                id: 1,
                desc: "le mai 06, 2022"
            },
            {
                id: 2,
                desc: "le mai 06, 2022"
            },
            {
                id: 3,
                desc: "le mai 06, 2022"
            }
        ],
        correctChoiceId:2
    },
    {
        qid: 206,
        name: "Identifier un courrier administratif",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Quel organisme vous écrit?",
        imgDesc: "assets/qsets/qset2/q6_image.jpg",
        choices: [
            {
                id: 1,
                desc: "C'est l'Assurance Maladie."
            },
            {
                id: 2,
                desc: "C'est la banque."
            },
            {
                id: 3,
                desc: "C'est la CAF."
            },
            {
                id: 4,
                desc: "C'est Pôle Emploi."
            }
        ],
        correctChoiceId:1
    },
    {
        qid: 208,
        name: "Noter une date",
        questionType: QuestionType.SELECT_ON_CALENDAR,
        audioDesc: "assets/qsets/qset2/q8_audio.mp3",
        selectedDate: new Date("2019/04/01"),
        correctDate: new Date("2019/04/12"),
    },

    // Cat3: Voyager
    {
        qid: 301,
        name: "Moyen de transport",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Qu'est-ce que c'est?",
        choices: [
            {
                id: 1,
                desc: "un vélo",
                imgSrc: "assets/qsets/qset3/q1_images/q1_velo.jpg"
            },
            {
                id: 2,
                desc: "le bus",
                imgSrc: "assets/qsets/qset3/q1_images/q1_bus.jpg"
            },
            {
                id: 3,
                desc: "le tramway",
                imgSrc: "assets/qsets/qset3/q1_images/q1_tramway.jpg"
            },
            {
                id: 4,
                desc: "le métro",
                imgSrc: "assets/qsets/qset3/q1_images/q1_metro.jpg"
            }
        ]
    },
    {
        qid: 302,
        name: "Moyen de transport",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "Il faut prendre quel moyen de transport?",        
        audioDesc: "assets/qsets/qset3/q2_audio.mp3",       
        choices: [
            {
                id: 1,
                desc: "un vélo",
                imgSrc: "assets/qsets/qset3/q1_images/q1_velo.jpg"
            },
            {
                id: 2,
                desc: "le bus",
                imgSrc: "assets/qsets/qset3/q1_images/q1_bus.jpg"
            },
            {
                id: 3,
                desc: "le tramway",
                imgSrc: "assets/qsets/qset3/q1_images/q1_tramway.jpg"
            },
            {
                id: 4,
                desc: "le métro",
                imgSrc: "assets/qsets/qset3/q1_images/q1_metro.jpg"
            }
        ],
        correctChoiceId:1
    },

    // Cat4: Se loger
    {
        qid: 401,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "le salon",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salon.jpg"
            },
            {
                id: 2,
                desc: "la cuisine",
                imgSrc: "assets/qsets/qset4/q1_images/q1_cuisine.jpg"
            },
            {
                id: 3,
                desc: "la chambre",
                imgSrc: "assets/qsets/qset4/q1_images/q1_chambre.jpg"
            },
            {
                id: 4,
                desc: "la salle de bain",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salle_de_bain.jpg"
            }
        ]
    },
    {
        qid: 402,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q2_images/q2_sonner.jpg"
            }
        ]
    },
    
    // Cat5: Activités et sortir
    {
        qid: 501,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "le salon",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salon.jpg"
            },
            {
                id: 2,
                desc: "la cuisine",
                imgSrc: "assets/qsets/qset4/q1_images/q1_cuisine.jpg"
            },
            {
                id: 3,
                desc: "la chambre",
                imgSrc: "assets/qsets/qset4/q1_images/q1_chambre.jpg"
            },
            {
                id: 4,
                desc: "la salle de bain",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salle_de_bain.jpg"
            }
        ]
    },
    {
        qid: 502,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q2_images/q2_sonner.jpg"
            }
        ]
    },

    // Cat6: Santé & Bien-être
    {
        qid: 601,
        name: "Comprendre les consignes du médecin",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "Qu'est-ce que le médecin ne demande pas?",
        audioDesc: "assets/qsets/qset6/q1_audio.mp3",       
        choices: [
            {
                id: 1,
                desc: "Asseyez-vous",
                imgSrc: "assets/qsets/qset6/q1_images/q1_sit.jpg"
            },
            {
                id: 2,
                desc: "Balance",
                imgSrc: "assets/qsets/qset6/q1_images/q1_scale.jpg"
            },
            {
                id: 3,
                desc: "Allongez-vous",
                imgSrc: "assets/qsets/qset6/q1_images/q1_long_chair.jpg"
            },
            {
                id: 4,
                desc: "Ouvrez la bouche",
                imgSrc: "assets/qsets/qset6/q1_images/q1_mouth.jpg"
            }
        ],
        correctChoiceId: 4
    },
    {
        qid: 602,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q2_images/q2_sonner.jpg"
            }
        ]
    },

    // Cat7: Vie amoureuse
    {
        qid: 701,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "le salon",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salon.jpg"
            },
            {
                id: 2,
                desc: "la cuisine",
                imgSrc: "assets/qsets/qset4/q1_images/q1_cuisine.jpg"
            },
            {
                id: 3,
                desc: "la chambre",
                imgSrc: "assets/qsets/qset4/q1_images/q1_chambre.jpg"
            },
            {
                id: 4,
                desc: "la salle de bain",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salle_de_bain.jpg"
            }
        ]
    },
    {
        qid: 702,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q2_images/q2_sonner.jpg"
            }
        ]
    },

    // Cat8: Vie professionnelle
    {
        qid: 801,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "le salon",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salon.jpg"
            },
            {
                id: 2,
                desc: "la cuisine",
                imgSrc: "assets/qsets/qset4/q1_images/q1_cuisine.jpg"
            },
            {
                id: 3,
                desc: "la chambre",
                imgSrc: "assets/qsets/qset4/q1_images/q1_chambre.jpg"
            },
            {
                id: 4,
                desc: "la salle de bain",
                imgSrc: "assets/qsets/qset4/q1_images/q1_salle_de_bain.jpg"
            }
        ]
    },
    {
        qid: 802,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q2_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q2_images/q2_sonner.jpg"
            }
        ]
    },
]
