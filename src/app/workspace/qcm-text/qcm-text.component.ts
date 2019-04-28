import { Component, OnInit } from '@angular/core';
import { Question, QCMText, QuestionType } from 'src/app/domain/question';

@Component({
  selector: 'app-qcm-text',
  templateUrl: './qcm-text.component.html',
  styleUrls: ['./qcm-text.component.css']
})
export class QcmTextComponent implements OnInit {

  choice: string;

  sampleQuestion : QCMText = {
    name: "Aller chercher un colis",
    questionType: QuestionType.LISEZ_ET_CHOISISSEZ,
    desc: "Qu'est-ce qu'on doit faire?",
    imgSrc: "../../../assets/img/question/q1.jpg",
    numOfChoices: 4,
    choices: [
      {
        desc: "Aller chercher un four micro-onde"
      },
      {
        desc: "Aller chercher un colis à la poste"
      },
      {
        desc: "Aller profiter d'une promotion au magasin"
      },
      {
        desc: "Aller commander un four"
      }
    ],
    correctChoiceId: 0
  };

  constructor() { }

  ngOnInit() {
  }

}
