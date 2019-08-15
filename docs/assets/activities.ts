import { QCMSelectText, 
    QCMSelectImage, 
    AssociateTextToImage, 
    QuestionType,
    Question} 
from '@/_models/question';

export const QSET: (Question | QCMSelectText | QCMSelectImage | AssociateTextToImage)[] = [
    // Cat1: Vie quotidienne
    {
        qid: 101,
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
                desc: "un pantalon",
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
      qid: 102,
      name: "Acheter des vêtements",
      questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
      imgDesc: "assets/qsets/qset1/q2_image.jpg",
      audioDesc: "assets/qsets/qset1/q2_audio.mp3",
      choices: [
        {
            id: 1,
            desc: '07 35 30 43 79'
        },
        {
            id: 2,
            desc:'42'
        },
        {
            id: 3,
            desc:'45C'
        },
        {
            id:4,
            desc:'Numéro 27'
        }
        ],
        correctChoiceId:2 
    },
    {
        qid: 103,
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
              imgSrc:'assets/qsets/qset1/q4_images/q4_pantalon.jpg'
          },
          {
              id: 4,
              imgSrc:'assets/qsets/qset1/q4_images/q4_chemise.jpg'
          }
         ],
         correctChoiceId:2 
    },  
    {
        qid: 104,
        name: "Identifier un moyen de paiement",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1/q10_audio.mp3",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset1/q10_images/carte.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset1/q10_images/cheque.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset1/q10_images/espece.jpg"
            },
            {
                id: 4,
                imgSrc: "assets/qsets/qset1/q10_images/wechat.jpg"
            },
        ],
        correctChoiceId:3 
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
                desc: "un jean",
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
                desc: "des salades",
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
    
    {
        qid: 108,
        name: "Identifier la cuisine française",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "la boeuf bouguignon",
                imgSrc: "assets/qsets/qset1/q11_images/boeuf-bourguignon.jpg"
            },
            {
                id: 2,
                desc: "les escargots",
                imgSrc: "assets/qsets/qset1/q11_images/escargots.jpg"
            },
            {
                id: 3,
                desc: "le confit de carnard",
                imgSrc: "assets/qsets/qset1/q11_images/canard.jpg"
            },
            {
                id: 4,
                desc: "le steak tartare",
                imgSrc: "assets/qsets/qset1/q11_images/tartare.jpg"
            }
        ]
      },
    {
        qid: 109,
        name: "Identifier la cuisine française",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "la souris d'agneau",
                imgSrc: "assets/qsets/qset1/q12_images/souris.jpg"
            },
            {
                id: 2,
                desc: "couscous royale",
                imgSrc: "assets/qsets/qset1/q12_images/couscous-royale.jpg"
            },
            {
                id: 3,
                desc: "la paella",
                imgSrc: "assets/qsets/qset1/q12_images/paella.jpg"
            },
            {
                id: 4,
                desc: "le cordon bleu",
                imgSrc: "assets/qsets/qset1/q12_images/cordon-bleu.jpg"
            }
        ]
      },
    {
        qid: 110,
        name: "Choisir la cuisson",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        audioDesc: "assets/qsets/qset1/q13_audio.mp3",
        choices: [
            {
                id: 1,
                desc: "bleu",
                imgSrc: "assets/qsets/qset1/q13_images/bleu.jpg"
            },
            {
                id: 2,
                desc: "saignant",
                imgSrc: "assets/qsets/qset1/q13_images/saignant.jpg"
            },
            {
                id: 3,
                desc: "à point",
                imgSrc: "assets/qsets/qset1/q13_images/a-point.jpg"
            },
            {
                id: 4,
                desc: "bien cuit",
                imgSrc: "assets/qsets/qset1/q13_images/bien-cuit.jpg"
            }
        ]
      },
      {
        qid: 111,
        name: "Comprendre le français familier",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "De quoi il parle?",
        audioDesc: "assets/qsets/qset1/audio_du_coup.mp3",
        choices: [
            {
                id: 1,
                imgSrc: 'assets/qsets/qset1/q8_images/chick.jpg'
            },
            {
                id: 2,
                imgSrc: 'assets/qsets/qset1/q8_images/and_so.jpg'
            },
            {
                id: 3,
                imgSrc: 'assets/qsets/qset1/q8_images/champignon.jpg'
            },
            {
                id:4,
                imgSrc: 'assets/qsets/qset1/q8_images/explosion.jpg'
            }
        ],
        correctChoiceId:2 
    },
      // Workaround for end of question contents
      {
        qid: 112,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
                desc: "Prendre un abonnement de téléphone",
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
            },
            {
                id: 4,
                imgSrc: "assets/qsets/qset2/q2_images/option_4.jpg"
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
        correctChoiceId:4
    },
    {
        qid: 204,
        name: "Identifier la date de fin de validité d'un document",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Quelle est la date de fin de validité de ce titre de séjour?",
        imgDesc: "assets/qsets/qset2/titre_de_sejour.png",
        choices: [
            {
                id: 1,
                desc: "le mai 06, 2022"
            },
            {
                id: 2,
                desc: "le juin 05, 2022"
            },
            {
                id: 3,
                desc: "le juillet 05, 2018"
            }
        ],
        correctChoiceId:1
    },
    {
        qid: 205,
        name: "Identifier un courrier administratif",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "De quoi il peut s'agir?",
        imgDesc: "assets/qsets/qset2/q6_image.jpg",
        choices: [
            {
                id: 1,
                desc: "C'est pour la CAF."
            },
            {
                id: 2,
                desc: "C'est pour la carte navigo."
            },
            {
                id: 3,
                desc: "C'est pour la carte vitale."
            },
            {
                id: 4,
                desc: "C'est pour les impôts."
            }
        ],
        correctChoiceId:3
    },
    {
        qid: 206,
        name: "Fournir un justicatif",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "De quoi il parle?",
        audioDesc: "assets/qsets/qset2/justicatif_audio.mp3",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset2/q6_images/carte_vitale.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset2/q6_images/facture_edf.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset2/q6_images/passeport.jpg"
            },
            {
                id: 4,
                imgSrc: "assets/qsets/qset2/q6_images/certificat_scolarite.jpg"
            }
        ],
        correctChoiceId:2
    },
    {
        qid: 207,
        name: "Envoyer une lettre",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Qu'est ce-qu'on trouve dans cette zone d'une enveloppe?",
        imgDesc: "assets/qsets/qset2/lettre_1.jpg",
        choices: [
            {
                id: 1,
                desc: "L'adresse de l'expéditeur."
            },
            {
                id: 2,
                desc: "L'adresse de la destinataire."
            }
        ],
        correctChoiceId:2
    },
    {
        qid: 208,
        name: "Envoyer une lettre",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Qu'est ce-qu'on trouve dans cette zone d'une enveloppe?",
        imgDesc: "assets/qsets/qset2/lettre_2.jpg",
        choices: [
            {
                id: 1,
                desc: "L'adresse de l'expéditeur."
            },
            {
                id: 2,
                desc: "L'adresse de la destinataire."
            }
        ],
        correctChoiceId:1
    },
    
    // Workaround for end of question contents
    {
        qid: 209,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
                desc: "le rer",
                imgSrc: "assets/qsets/qset3/q1_images/rer.jpg"
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
        correctChoiceId:2
    },
    {
        qid: 303,
        name: "Moyen de transport",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Qu'est-ce que c'est?",
        choices: [
            {
                id: 1,
                desc: "une trottinette",
                imgSrc: "assets/qsets/qset3/q3_images/trottinette.jpg"
            },
            {
                id: 2,
                desc: "un vélo",
                imgSrc: "assets/qsets/qset3/q3_images/velo.jpg"
            },
            {
                id: 3,
                desc: "une voiture",
                imgSrc: "assets/qsets/qset3/q3_images/voiture.jpg"
            },
            {
                id: 4,
                desc: "un skate",
                imgSrc: "assets/qsets/qset3/q3_images/skate.jpg"
            }
        ]
    },
    // Workaround for end of question contents
    {
        qid: 304,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
        name: "Identifier l'équipement d'un appartement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces équipment?",
        choices: [
            {
                id: 1,
                desc: "un canapé",
                imgSrc: "assets/qsets/qset4/q2_images/canape.jpg"
            },
            {
                id: 2,
                desc: "un lit double",
                imgSrc: "assets/qsets/qset4/q2_images/lit.jpg"
            },
            {
                id: 3,
                desc: "une bibliotèque",
                imgSrc: "assets/qsets/qset4/q2_images/biblioteque.jpg"
            },
            {
                id: 4,
                desc: "une armoire",
                imgSrc: "assets/qsets/qset4/q2_images/armoire.jpg"
            }
        ]
    },
    {
        qid: 403,
        name: "Comprendre l'information sur le logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/q3_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/q3_images/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/q3_images/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/q3_images/q2_sonner.jpg"
            }
        ]
    },
    {
        qid: 404,
        name: "Lire une annonce immobilière",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Parmi les énoncés suivants, lequel est FAUX?",
        imgDesc: "assets/qsets/qset4/annonce.jpg",
        choices: [
            {
                id: 1,
                desc: "Le logment peut contenir une chambre et un salon.",
            },
            {
                id: 2,
                desc: "Le loyer est 1180€ toute charges comprise.",
            },
            {
                id: 3,
                desc: "Le locataire ne peut pas demander la prestation de CAF.",
            },
            {
                id: 4,
                desc: "Le propriétaire n'accepte pas la colocation.",
            }
        ],
        correctChoiceId:2
    },
    {
        qid: 405,
        name: "Lire un contrat de location",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Parmi les énoncés suivants, lequel est VRAI?",
        imgDesc: "assets/qsets/qset4/etat_des_lieux.jpg",
        choices: [
            {
                id: 1,
                desc: "Il y a une téléviseur dans le logement.",
            },
            {
                id: 2,
                desc: "Les murs du séjour est en bon état.",
            },
            {
                id: 3,
                desc: "Le canapé est en bon état.",
            },
            {
                id: 4,
                desc: "Il y a des rayures sur le parquet du séjour.",
            }
        ],
        correctChoiceId:3
    },
    // Workaround for end of question contents
    {
        qid: 406,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
    },
    
    // Cat5: Activités et sortir
    {
        qid: 501,
        name: "Assister à une soirée",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
        audioDesc: "assets/qsets/qset5/danse.mp3",
        desc: "Quel type de danse on parle?",
        imgDesc: "assets/qsets/qset5/danse.png",
        choices: [
            {
                id: 1,
                desc: "la salsa",
            },
            {
                id: 2,
                desc: "la danse pour les enfants",
            },
            {
                id: 3,
                desc: "la samba",
            },
            {
                id: 4,
                desc: "le strip-tease",
            }
        ],
        correctChoiceId:4
    },
    {
        qid: 502,
        name: "Visiter un musée",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Les nocturnes des musée",
                imgSrc: "assets/qsets/qset5/q2_images/nocturne.jpg"
            },
            {
                id: 2,
                desc: "Gratuit pour les -26 ans ressortissants de l'UE.",
                imgSrc: "assets/qsets/qset5/q2_images/gratuite.jpg"
            },
            {
                id: 3,
                desc: "La Joconde est un chef d'œuvre!",
                imgSrc: "assets/qsets/qset5/q2_images/chef.jpg"
            },
            {
                id: 4,
                desc: "Laisse ton manteau au vestiaire.",
                imgSrc: "assets/qsets/qset5/q2_images/vestiaire.jpg"
            }
        ]
    },
    {
        qid: 503,
        name: "À la station de ski",
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
    {
        qid: 504,
        name: "Au poney club",
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
    {
        qid: 505,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
        name: "Aller chez un médecin",
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
    {
        qid: 602,
        name: "Aller chez un médecin",
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
    {
        qid: 603,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
    {
        qid: 703,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
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
    {
        qid: 803,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
    },
]
