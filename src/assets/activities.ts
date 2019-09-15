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
        name: "Acheter un kebab",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        audioDesc: "assets/qsets/qset1/restaurant/kebab.mp3",
        choices: [
            {
                id: 1,
                desc: "un oignon",
                imgSrc: "assets/qsets/qset1/restaurant/onion.jpg"
            },
            {
                id: 2,
                desc: "des salades",
                imgSrc: "assets/qsets/qset1/restaurant/salade.jpg"
            },
            {
                id: 3,
                desc: "une tomates",
                imgSrc: "assets/qsets/qset1/restaurant/tomate.jpg"
            },
            {
                id: 4,
                desc: "une tortilla",
                imgSrc: "assets/qsets/qset1/restaurant/tortillas.jpg"
            }
        ]
    },
    {
        qid: 102,
        name: "Identifier la cuisine française",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "la boeuf bouguignon",
                imgSrc: "assets/qsets/qset1/restaurant/boeuf-bourguignon.jpg"
            },
            {
                id: 2,
                desc: "les escargots",
                imgSrc: "assets/qsets/qset1/restaurant/escargots.jpg"
            },
            {
                id: 3,
                desc: "le confit de carnard",
                imgSrc: "assets/qsets/qset1/restaurant/canard.jpg"
            },
            {
                id: 4,
                desc: "le steak tartare",
                imgSrc: "assets/qsets/qset1/restaurant/tartare.jpg"
            }
        ]
    },
    {
        qid: 103,
        name: "Identifier la cuisine française",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "la souris d'agneau",
                imgSrc: "assets/qsets/qset1/restaurant/souris.jpg"
            },
            {
                id: 2,
                desc: "couscous royale",
                imgSrc: "assets/qsets/qset1/restaurant/couscous-royale.jpg"
            },
            {
                id: 3,
                desc: "la paella",
                imgSrc: "assets/qsets/qset1/restaurant/paella.jpg"
            },
            {
                id: 4,
                desc: "le cordon bleu",
                imgSrc: "assets/qsets/qset1/restaurant/cordon-bleu.jpg"
            }
        ]
      },
    {
        qid: 104,
        name: "Choisir la cuisson",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        audioDesc: "assets/qsets/qset1/restaurant/cuisson.mp3",
        choices: [
            {
                id: 1,
                desc: "bleu",
                imgSrc: "assets/qsets/qset1/restaurant/bleu.jpg"
            },
            {
                id: 2,
                desc: "saignant",
                imgSrc: "assets/qsets/qset1/restaurant/saignant.jpg"
            },
            {
                id: 3,
                desc: "à point",
                imgSrc: "assets/qsets/qset1/restaurant/a-point.jpg"
            },
            {
                id: 4,
                desc: "bien cuit",
                imgSrc: "assets/qsets/qset1/restaurant/bien-cuit.jpg"
            }
        ]
    },
    {
        qid: 105,
        name: "Choisir la garniture",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1/restaurant/garniture.mp3",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset1/restaurant/escargots.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset1/restaurant/frite.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset1/restaurant/cordon-bleu.jpg"
            },
            {
                id: 4,
                imgSrc: "assets/qsets/qset1/restaurant/pilon.jpg"
            }
        ],
        correctChoiceId:2 
    },
    {
        qid: 106,
        name: "Au restaurant, le serveur dit:",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
        imgDesc: "assets/qsets/qset1/restaurant/debarrasser.jpg",
        audioDesc: "assets/qsets/qset1/restaurant/debarrasser.mp3",
        desc: "Vous avez pas encore fini. Votre réponse?",
        choices: [
          {
              id: 1,
              desc: 'Oui'
          },
          {
              id: 2,
              desc: 'Non'
          }
        ],
        correctChoiceId:2 
    },
    {
        qid: 107,
        name: "Identifier un dessert",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "Le flan",
                imgSrc: "assets/qsets/qset1/dessert/flan.jpg"
            },
            {
                id: 2,
                desc: "La mousse au chocolat",
                imgSrc: "assets/qsets/qset1/dessert/mousse.jpg"
            },
            {
                id: 3,
                desc: "L'Île flottante",
                imgSrc: "assets/qsets/qset1/dessert/ile_flottante.jpg"
            },
            {
                id: 4,
                desc: "Le tiramisu",
                imgSrc: "assets/qsets/qset1/dessert/tiramisu.jpg"
            }
        ]
      },
    {
        qid: 108,
        name: "Identifier un dessert",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "La fôret-noire",
                imgSrc: "assets/qsets/qset1/dessert/foret_noire.jpg"
            },
            {
                id: 2,
                desc: "Le cheesecake",
                imgSrc: "assets/qsets/qset1/dessert/cheesecake.jpg"
            },
            {
                id: 3,
                desc: "La crème brûlée",
                imgSrc: "assets/qsets/qset1/dessert/creme_brule.jpg"
            },
            {
                id: 4,
                desc: "Le mille-feuille",
                imgSrc: "assets/qsets/qset1/dessert/mille_feuille.jpg"
            }
        ]
      },
    {
        qid: 109,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "un short",
                imgSrc: "assets/qsets/qset1/vetements/short.jpg"
            },
            {
                id: 2,
                desc: "un pantalon",
                imgSrc: "assets/qsets/qset1/vetements/pantalon.jpg"
            },
            {
                id: 3,
                desc: "un t-shirt",
                imgSrc: "assets/qsets/qset1/vetements/t.jpg"
            },
            {
                id: 4,
                desc: "une chemise",
                imgSrc: "assets/qsets/qset1/vetements/chemise.jpg"
            }
        ]
    },
    {
      qid: 110,
      name: "Acheter des vêtements",
      questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
      imgDesc: "assets/qsets/qset1/vetements/jean.jpg",
      audioDesc: "assets/qsets/qset1/vetements/taille.mp3",
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
        qid: 111,
        name: "Acheter des chaussures",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "De quoi elle parle?",
        audioDesc: "assets/qsets/qset1/vetements/pointure.mp3",
        choices:[
          {
              id: 1,
              imgSrc:'assets/qsets/qset1/vetements/blouson_1.jpg'
          },
          {
              id: 2,
              imgSrc:'assets/qsets/qset1/vetements/chaussure.jpg'
          },
          {
              id: 3,
              imgSrc:'assets/qsets/qset1/vetements/pantalon.jpg'
          },
          {
              id: 4,
              imgSrc:'assets/qsets/qset1/vetements/chemise.jpg'
          }
         ],
         correctChoiceId:2 
    },  
    {
        qid: 112,
        name: "Identifier un moyen de paiement",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1/paiement/paiement.mp3",
        choices: [
            {
                id: 1,
                imgSrc: "assets/qsets/qset1/paiement/carte.jpg"
            },
            {
                id: 2,
                imgSrc: "assets/qsets/qset1/paiement/cheque.jpg"
            },
            {
                id: 3,
                imgSrc: "assets/qsets/qset1/paiement/espece.jpg"
            },
            {
                id: 4,
                imgSrc: "assets/qsets/qset1/paiement/wechat.jpg"
            },
        ],
        correctChoiceId:3 
    },
    {
        qid: 113,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        choices: [
            {
                id: 1,
                desc: "un pull",
                imgSrc: "assets/qsets/qset1/vetements/pull.jpg"
            },
            {
                id: 2,
                desc: "un jean",
                imgSrc: "assets/qsets/qset1/vetements/jean.jpg"
            },
            {
                id: 3,
                desc: "un blouson",
                imgSrc: "assets/qsets/qset1/vetements/blouson.jpg"
            },
            {
                id: 4,
                desc: "un manteau",
                imgSrc: "assets/qsets/qset1/vetements/manteau.jpg"
            }
        ]
    },
    {
        qid: 114,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "assets/qsets/qset1/vetements/bonnet_echarpe.mp3",
        choices: [
            {
                id: 1,
                imgSrc: 'assets/qsets/qset1/vetements/q6_beret_echarpe.jpg'
            },
            {
                id: 2,
                imgSrc: 'assets/qsets/qset1/vetements/q6_beret_gants.jpg'
            },
            {
                id: 3,
                imgSrc: 'assets/qsets/qset1/vetements/q6_bonnet_echarpe.jpg'
            },
            {
                id:4,
                imgSrc: 'assets/qsets/qset1/vetements/q6_bonnet_foulard.jpg'
            }
        ],
        correctChoiceId:3 
    },
    {
        qid: 115,
        name: "Comprendre le français familier",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        desc: "De quoi il parle?",
        audioDesc: "assets/qsets/qset1/mot/du_coup.mp3",
        choices: [
            {
                id: 1,
                imgSrc: 'assets/qsets/qset1/mot/chick.jpg'
            },
            {
                id: 2,
                imgSrc: 'assets/qsets/qset1/mot/and_so.jpg'
            },
            {
                id: 3,
                imgSrc: 'assets/qsets/qset1/mot/champignon.jpg'
            },
            {
                id:4,
                imgSrc: 'assets/qsets/qset1/mot/explosion.jpg'
            }
        ],
        correctChoiceId:2 
    },
      // Workaround for end of question contents
      {
        qid: 116,
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
                imgSrc: "assets/qsets/qset2/la-poste/1-envoyer-un-colis.jpg"
            },
            {
                id: 2,
                desc: "Envoyer une lettre recommandée",
                imgSrc: "assets/qsets/qset2/la-poste/lettre-recommandee.jpg"
            },
            {
                id: 3,
                desc: "Retirer de l'argent",
                imgSrc: "assets/qsets/qset2/la-poste/3-retirer-l-argent.jpg"
            },
            {
                id: 4,
                desc: "Timbrer/Affranchir son courrier",
                imgSrc: "assets/qsets/qset2/la-poste/4-affranchir.jpg"
            }
        ]
    },
    {
        qid: 202,
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
        qid: 203,
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
        qid: 204,
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
        qid: 205,
        name: "Rédiger une lettre de résiliation",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Parmi les énoncés suivants, lequel est FAUX?",
        imgDesc: "assets/qsets/qset2/lettre_resiliation.jpg",
        choices: [
            {
                id: 1,
                desc: "C'est pour terminer un contrat/abonnement."
            },
            {
                id: 2,
                desc: "Il faut l'envoyer par lettre recommandée avec accusé de reception."
            },
            {
                id: 3,
                desc: "Elle a une valeur légale."
            },
            {
                id: 4,
                desc: "On ne peut pas le faire en ligne."
            }
        ],
        correctChoiceId:1
    },
    {
        qid: 206,
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
        qid: 207,
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
    {
        qid: 208,
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
        qid: 209,
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
    
    // Workaround for end of question contents
    {
        qid: 210,
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
                imgSrc: "assets/qsets/qset3/transport/rer.jpg"
            },
            {
                id: 2,
                desc: "le bus",
                imgSrc: "assets/qsets/qset3/transport/bus.jpg"
            },
            {
                id: 3,
                desc: "le tramway",
                imgSrc: "assets/qsets/qset3/transport/tramway.jpg"
            },
            {
                id: 4,
                desc: "le métro",
                imgSrc: "assets/qsets/qset3/transport/metro.jpg"
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
                imgSrc: "assets/qsets/qset3/transport/velo.jpg"
            },
            {
                id: 2,
                desc: "le bus",
                imgSrc: "assets/qsets/qset3/transport/bus.jpg"
            },
            {
                id: 3,
                desc: "le tramway",
                imgSrc: "assets/qsets/qset3/transport/tramway.jpg"
            },
            {
                id: 4,
                desc: "le métro",
                imgSrc: "assets/qsets/qset3/transport/metro.jpg"
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
                imgSrc: "assets/qsets/qset3/transport/trottinette.jpg"
            },
            {
                id: 2,
                desc: "un vélo",
                imgSrc: "assets/qsets/qset3/transport/velo.jpg"
            },
            {
                id: 3,
                desc: "une voiture",
                imgSrc: "assets/qsets/qset3/transport/voiture.jpg"
            },
            {
                id: 4,
                desc: "un skate",
                imgSrc: "assets/qsets/qset3/transport/skate.jpg"
            }
        ]
    },
    {
        qid: 304,
        name: "Incident au métro",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_TEXT,
        audioDesc: "assets/qsets/qset3/perturbe.mp3",
        desc: "Qu'est-ce qui se passe?",
        choices: [
          {
              id: 1,
              desc: 'Le traffic est interrompu.'
          },
          {
              id: 2,
              desc: 'Un accident grave de voyageur.'
          },
          {
              id: 3,
              desc: 'Les ralentissements sont prévus.'
          },
          {
              id: 4,
              desc: 'Panne de signalisation.'
          }
        ],
        correctChoiceId:3
    },
    {
        qid: 305,
        name: "Lire une information",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        imgDesc: "assets/qsets/qset3/gare_non_desservie.jpg",
        desc: "Qu'est-ce qui se passe?",
        choices: [
          {
              id: 1,
              desc: "Il n'y a pas de train dans cette gare."
          },
          {
              id: 2,
              desc: 'Les ralentissements sont prévus dans cette gare.'
          },
          {
              id: 3,
              desc: "Il n'y a pas de service voyager dans cette gare."
          },
          {
              id: 4,
              desc: 'Il y a un incident technique dans cette gare.'
          }
        ],
        correctChoiceId:1
    },
    {
        qid: 306,
        name: "À la gare",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Qu'est-ce que vous faites à la gare?",
        choices: [
          {
            id: 1,
            desc: "Je regarde les horaires.",
            imgSrc: "assets/qsets/qset3/gare/regarder-les-horaires.jpg"
          },
          {
            id: 2,
            desc: "J'achète un billet.",
            imgSrc: "assets/qsets/qset3/gare/acheter-billet.jpg"
          },
          {
            id: 3,
            desc: "Je composte mon billet.",
            imgSrc: "assets/qsets/qset3/gare/composter.jpg"
          },
          {
            id: 4,
            desc: "J'attends sur le quai.",
            imgSrc: "assets/qsets/qset3/gare/sur-le-quai.jpg"
          }
        ]
    },
    // Workaround for end of question contents
    {
        qid: 307,
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
                imgSrc: "assets/qsets/qset4/house/q1_salon.jpg"
            },
            {
                id: 2,
                desc: "la cuisine",
                imgSrc: "assets/qsets/qset4/house/q1_cuisine.jpg"
            },
            {
                id: 3,
                desc: "la chambre",
                imgSrc: "assets/qsets/qset4/house/q1_chambre.jpg"
            },
            {
                id: 4,
                desc: "la salle de bain",
                imgSrc: "assets/qsets/qset4/house/q1_salle_de_bain.jpg"
            }
        ]
    },
    {
        qid: 402,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "une mezzanine",
                imgSrc: "assets/qsets/qset4/house/mezzanine.jpg"
            },
            {
                id: 2,
                desc: "une véranda",
                imgSrc: "assets/qsets/qset4/house/veranda.jpg"
            },
            {
                id: 3,
                desc: "une cave",
                imgSrc: "assets/qsets/qset4/house/cave.jpg"
            },
            {
                id: 4,
                desc: "un garage",
                imgSrc: "assets/qsets/qset4/house/garage.jpg"
            }
        ]
    },
    {
        qid: 403,
        name: "Identifier les pièces d'un logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces pièces?",
        choices: [
            {
                id: 1,
                desc: "une terrasse",
                imgSrc: "assets/qsets/qset4/house/terrasse.jpg"
            },
            {
                id: 2,
                desc: "un balcon",
                imgSrc: "assets/qsets/qset4/house/balcon.jpg"
            },
            {
                id: 3,
                desc: "un parking",
                imgSrc: "assets/qsets/qset4/house/parking.jpg"
            },
            {
                id: 4,
                desc: "un ascenseur",
                imgSrc: "assets/qsets/qset4/house/ascenseur.jpg"
            }
        ]
    },
    {
        qid: 404,
        name: "Identifier l'équipement d'un appartement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces équipment?",
        choices: [
            {
                id: 1,
                desc: "un canapé",
                imgSrc: "assets/qsets/qset4/equipments/canape.jpg"
            },
            {
                id: 2,
                desc: "un lit double",
                imgSrc: "assets/qsets/qset4/equipments/lit.jpg"
            },
            {
                id: 3,
                desc: "une bibliotèque",
                imgSrc: "assets/qsets/qset4/equipments/biblioteque.jpg"
            },
            {
                id: 4,
                desc: "une armoire",
                imgSrc: "assets/qsets/qset4/equipments/armoire.jpg"
            }
        ]
    },
    {
        qid: 405,
        name: "Identifier l'équipement d'un appartement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces équipments?",
        choices: [
            {
                id: 1,
                desc: "une hotte aspirante",
                imgSrc: "assets/qsets/qset4/equipments/hotte.jpg"
            },
            {
                id: 2,
                desc: "une plaque de cuisson électrique",
                imgSrc: "assets/qsets/qset4/equipments/plaque.jpg"
            },
            {
                id: 3,
                desc: "un four",
                imgSrc: "assets/qsets/qset4/equipments/four.jpg"
            },
            {
                id: 4,
                desc: "un évier",
                imgSrc: "assets/qsets/qset4/equipments/evier.jpg"
            }
        ]
    },
    {
        qid: 406,
        name: "Identifier l'équipement d'un appartement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces équipments?",
        choices: [
            {
                id: 1,
                desc: "un lavabo",
                imgSrc: "assets/qsets/qset4/equipments/lavabo.jpg"
            },
            {
                id: 2,
                desc: "une douche",
                imgSrc: "assets/qsets/qset4/equipments/douche.jpg"
            },
            {
                id: 3,
                desc: "une baignoire",
                imgSrc: "assets/qsets/qset4/equipments/baignoire.jpg"
            },
            {
                id: 4,
                desc: "des toilettes",
                imgSrc: "assets/qsets/qset4/equipments/toilettes.jpg"
            }
        ]
    },
    {
        qid: 407,
        name: "Comprendre l'information sur le logement",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Mon code c'est 98A03.",
                imgSrc: "assets/qsets/qset4/house/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Ferme les volets.",
                imgSrc: "assets/qsets/qset4/house/q2_volets.jpg"
            },
            {
                id: 3,
                desc: "J'ai perdu mes clés.",
                imgSrc: "assets/qsets/qset4/house/q2_cles.jpg"
            },
            {
                id: 4,
                desc: "Il faut sonner à la porte avant d'entrer",
                imgSrc: "assets/qsets/qset4/house/q2_sonner.jpg"
            }
        ]
    },
    {
        qid: 408,
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
        qid: 409,
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
        qid: 410,
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
                desc: "Le chasse-neige",
                imgSrc: "assets/qsets/qset4/q2_images/q2_digicode.jpg"
            },
            {
                id: 2,
                desc: "Des virages",
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
                imgSrc: "assets/qsets/qset6/q1_images/sit.jpg"
            },
            {
                id: 2,
                desc: "Balance",
                imgSrc: "assets/qsets/qset6/q1_images/scale.jpg"
            },
            {
                id: 3,
                desc: "Allongez-vous",
                imgSrc: "assets/qsets/qset6/q1_images/long_chair.jpg"
            },
            {
                id: 4,
                desc: "Ouvrez la bouche",
                imgSrc: "assets/qsets/qset6/q1_images/mouth.jpg"
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
        qid: 800,
        name: "Chercher un stage",
        questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
        desc: "Où on trouve cette offre de stage?",
        imgDesc: "assets/qsets/qset8/images/recherche_emploi/offre_stage.jpg",
        choices: [
            {
                id: 1,
                desc: "Un site emploi spécialisé",
            },
            {
                id: 2,
                desc: "Le réseau alumni",
            },
            {
                id: 3,
                desc: "Les forums",
            },
            {
                id: 4,
                desc: "Le réseau personnel",
            }
        ],
        correctChoiceId: 2
    },
    {
        qid: 801,
        name: "Utiliser un ordinateur",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "De quoi ils parlent?",
        choices: [
            {
                id: 1,
                desc: "Il fait la mise à jour.",
                imgSrc: "assets/qsets/qset8/images/informatique/mise-a-jour.jpg"
            },
            {
                id: 2,
                desc: "J'éteins mon ordinateur.",
                imgSrc: "assets/qsets/qset8/images/informatique/eteins.jpg"
            },
            {
                id: 3,
                desc: "Je redémarre.",
                imgSrc: "assets/qsets/qset8/images/informatique/redemarrer.jpg"
            },
            {
                id: 4,
                desc: "Je n'arrive pas à déverrouiller l'écran.",
                imgSrc: "assets/qsets/qset8/images/informatique/deverrouiller.jpg"
            }
        ]
    },
    {
        qid: 802,
        name: "Les signes de ponctuation",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces signes?",
        choices: [
            {
                id: 1,
                desc: "le point",
                imgSrc: "assets/qsets/qset8/images/ponctuation/point.jpg"
            },
            {
                id: 2,
                desc: "la virgule",
                imgSrc: "assets/qsets/qset8/images/ponctuation/virgule.jpg"
            },
            {
                id: 3,
                desc: "le point d'interrogation",
                imgSrc: "assets/qsets/qset8/images/ponctuation/interrogation.jpg"
            },
            {
                id: 4,
                desc: "le point d’exclamation",
                imgSrc: "assets/qsets/qset8/images/ponctuation/exclamation.jpg"
            }
        ]
    },
    {
        qid: 803,
        name: "Les signes de ponctuation",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces signes?",
        choices: [
            {
                id: 1,
                desc: "le deux-points",
                imgSrc: "assets/qsets/qset8/images/ponctuation/deux-points.jpg"
            },
            {
                id: 2,
                desc: "le point-virgule",
                imgSrc: "assets/qsets/qset8/images/ponctuation/point-virgule.jpg"
            },
            {
                id: 3,
                desc: "les points de suspension",
                imgSrc: "assets/qsets/qset8/images/ponctuation/suspension.jpg"
            },
            {
                id: 4,
                desc: "le tiret",
                imgSrc: "assets/qsets/qset8/images/ponctuation/tiret.jpg"
            }
        ]
    },
    {
        qid: 804,
        name: "Les signes de ponctuation",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces signes?",
        choices: [
            {
                id: 1,
                desc: "les parenthèses",
                imgSrc: "assets/qsets/qset8/images/ponctuation/parentheses.jpg"
            },
            {
                id: 2,
                desc: "les crochets",
                imgSrc: "assets/qsets/qset8/images/ponctuation/crochets.jpg"
            },
            {
                id: 3,
                desc: "les accolades",
                imgSrc: "assets/qsets/qset8/images/ponctuation/accolades.jpg"
            },
            {
                id: 4,
                desc: "les guillemets",
                imgSrc: "assets/qsets/qset8/images/ponctuation/guillemets.jpg"
            }
        ]
    },
    {
        qid: 805,
        name: "Les symboles sur clavier informatique",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces symboles?",
        choices: [
            {
                id: 1,
                desc: "inférieur à",
                imgSrc: "assets/qsets/qset8/images/clavier/inferieur.jpg"
            },
            {
                id: 2,
                desc: "supérieur à",
                imgSrc: "assets/qsets/qset8/images/clavier/superieur.jpg"
            },
            {
                id: 3,
                desc: "arobase",
                imgSrc: "assets/qsets/qset8/images/clavier/arobase.jpg"
            },
            {
                id: 4,
                desc: "dièse",
                imgSrc: "assets/qsets/qset8/images/clavier/diese.jpg"
            }
        ]
    },
    {
        qid: 806,
        name: "Les symboles sur clavier informatique",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces symboles?",
        choices: [
            {
                id: 1,
                desc: "apostrophe",
                imgSrc: "assets/qsets/qset8/images/clavier/apostrophe.jpg"
            },
            {
                id: 2,
                desc: "tilde",
                imgSrc: "assets/qsets/qset8/images/clavier/tilde.jpg"
            },
            {
                id: 3,
                desc: "souligné",
                imgSrc: "assets/qsets/qset8/images/clavier/souligne.jpg"
            },
            {
                id: 4,
                desc: "tiret",
                imgSrc: "assets/qsets/qset8/images/clavier/tiret.jpg"
            }
        ]
    },
    {
        qid: 807,
        name: "Les symboles sur clavier informatique",
        questionType: QuestionType.ASSOCIEZ_TEXT_TO_IMAGE,
        desc: "Comment s'appellent ces symboles?",
        choices: [
            {
                id: 1,
                desc: "barre oblique (slash)",
                imgSrc: "assets/qsets/qset8/images/clavier/slash.jpg"
            },
            {
                id: 2,
                desc: "barre oblique inversé (backslash)",
                imgSrc: "assets/qsets/qset8/images/clavier/backslash.jpg"
            },
            {
                id: 3,
                desc: "retour arrière (backspace)",
                imgSrc: "assets/qsets/qset8/images/clavier/retour_arriere.jpg"
            },
            {
                id: 4,
                desc: "entrée",
                imgSrc: "assets/qsets/qset8/images/clavier/entree.jpg"
            }
        ]
    },
    {
        qid: 808,
        name: "You have reach the end of this category.",
        questionType: QuestionType.END_OF_CATEGORY,
        desc: "Please go back and try other activities.",
        imgDesc: "assets/qsets/cong.jpg"
    },
]
