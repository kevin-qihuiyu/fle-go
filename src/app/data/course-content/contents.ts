import { QCMSelectText, 
    QCMSelectImage, 
    AssociateTextToImage, 
    AssociateImageToGoal, 
    CardsortingTextTo2Goals } 
from '../../domain/question';
import { QuestionType } from '../../domain/question';

export const QSET_1: (QCMSelectText | QCMSelectImage | AssociateTextToImage | AssociateImageToGoal | CardsortingTextTo2Goals)[] = [
    {
      qid: 101,
      name: "Acheter des chaussures",
      questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
      desc: "De quoi elle parle?",
      audioDesc: "q1set/q1_audio.mp3",
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
    {
      qid: 103,
      name: "Acheter un billet de train",
      questionType: QuestionType.ASSOCIEZ_IMAGE_TO_GOAL,
      imgDesc: "assets/qsets/qset1/q3_billet_de_train.jpg",
      choices:[
        {
            id: 1,
            value: 1,
            imgSrc:'assets/qsets/qset1/q3_images/q3_1_euro.jpg'
        },
        {
            id: 2,
            value: 2,
            imgSrc:'assets/qsets/qset1/q3_images/q3_2_euro.jpg'
        },
        {
            id: 3,
            value: 5,
            imgSrc:'assets/qsets/qset1/q3_images/q3_5_euros.jpg'
        },
        {
            id: 4,
            value: 10,
            imgSrc:'assets/qsets/qset1/q3_images/q3_10_euros.jpg'
        },
        {
            id: 5,
            value: 0.05,
            imgSrc:'assets/qsets/qset1/q3_images/q3_5_centimes.jpg'
        },
        {
            id: 6,
            value: 0.1,
            imgSrc:'assets/qsets/qset1/q3_images/q3_10_centimes.jpg'
        },
        {
            id: 7,
            value: 0.2,
            imgSrc:'assets/qsets/qset1/q3_images/q3_20_centimes.jpg'
        },
        {
            id: 8,
            value: 0.5,
            imgSrc:'assets/qsets/qset1/q3_images/q3_50_centimes.jpg'
        }
       ],
      goal: "5.2"
    },
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
                imgSrc: "assets/qsets/qset1/q5_images/q4_manteau.jpg"
            }
        ]
    },
    {
        qid: 106,
        name: "Connaître les noms de vêtements",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "q1set/q6_audio.mp3",
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
        audioDesc: "q1set/q7_audio.mp3",
        choices: [
            {
                id: 1,
                desc: "un oignon",
                imgSrc: "assets/qsets/qset1/q5_images/q7_onion.jpg"
            },
            {
                id: 2,
                desc: "'des salades",
                imgSrc: "assets/qsets/qset1/q5_images/q7_salade.jpg"
            },
            {
                id: 3,
                desc: "des tomates",
                imgSrc: "assets/qsets/qset1/q5_images/q7_tomate.jpg"
            },
            {
                id: 4,
                desc: "une tortilla",
                imgSrc: "assets/qsets/qset1/q5_images/q7_tortillas.jpg"
            }
        ]
    },
    {
        qid: 108,
        name: "À la boulangerie",
        questionType: QuestionType.ASSOCIEZ_IMAGE_TO_GOAL,
        audioDesc: "assets/qsets/qset1/q8_audio.mp3",
        choices:[
            {
                id: 1,
                value: 1,
                imgSrc:'assets/qsets/qset1/q3_images/q3_1_euro.jpg'
            },
            {
                id: 2,
                value: 2,
                imgSrc:'assets/qsets/qset1/q3_images/q3_2_euro.jpg'
            },
            {
                id: 3,
                value: 5,
                imgSrc:'assets/qsets/qset1/q3_images/q3_5_euros.jpg'
            },
            {
                id: 4,
                value: 10,
                imgSrc:'assets/qsets/qset1/q3_images/q3_10_euros.jpg'
            },
            {
                id: 5,
                value: 0.05,
                imgSrc:'assets/qsets/qset1/q3_images/q3_5_centimes.jpg'
            },
            {
                id: 6,
                value: 0.1,
                imgSrc:'assets/qsets/qset1/q3_images/q3_10_centimes.jpg'
            },
            {
                id: 7,
                value: 0.2,
                imgSrc:'assets/qsets/qset1/q3_images/q3_20_centimes.jpg'
            },
            {
                id: 8,
                value: 0.5,
                imgSrc:'assets/qsets/qset1/q3_images/q3_50_centimes.jpg'
            }
        ],
        goal: "2.2"
    },
    {
        qid: 109,
        name: "Identifier les catégories de produits",
        questionType: QuestionType.CARDSORTING_TEXT_TO_2_GOALS,
        imgDesc: "assets/qsets/qset1/q9_image.jpg",
        choices: [
            {
                id:1,
                desc:'Courgettes'
            }, 
            {
                id:2,
                desc:'Beurre'
            },
            {
                id:3,
                desc:'Carottes'
            }     
        ],
        goals: ['Légumes', 'Produits laitiers']
    },
    {
        qid: 110,
        name: "Identifier un moyen de paiement",
        questionType: QuestionType.ECOUTEZ_ET_CHOISISSEZ_IMAGE,
        audioDesc: "q1set/q10_audio.mp3",
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
    }
]