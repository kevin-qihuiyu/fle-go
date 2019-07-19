import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QCMSelectText, QuestionType, Question } from 'src/app/domain/question';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qcm-select-text',
  templateUrl: './qcm-select-text.component.html',
  styleUrls: ['./qcm-select-text.component.scss']
})
export class QcmSelectTextComponent implements OnInit {

  //@Input() question: Question;
  @Input() question: QCMSelectText;
  
  @Input() userChoice: string;
  @Output() userChoiceChange = new EventEmitter();

  sampleQuestion : QCMSelectText = {
    qid: 999,
    name: "Aller chercher un colis",
    questionType: QuestionType.LISEZ_ET_CHOISISSEZ_TEXT,
    desc: "Qu'est-ce qu'on doit faire?",
    imgDesc: "../../../assets/img/question/q1.jpg",
    audioDesc: "assets/audio/q1.mp3",
    choices: [
      {
        id: 1,
        desc: "Aller chercher un four micro-onde"
      },
      {
        id: 2,
        desc: "Aller chercher un colis à la poste"
      },
      {
        id: 3,
        desc: "Aller profiter d'une promotion au magasin"
      },
      {
        id: 4,
        desc: "Aller commander un four"
      }
    ],
    correctChoiceId: 1
  };

  hasAudio: boolean = false;


  // Image Description
  hasImage: boolean = false;


  //////////////////////////////////////////////////////////////////////////////
  constructor(private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit() {
    if (this.question.audioDesc) {
      this.hasAudio = true;
    }
    if (this.question.imgDesc) {
      this.hasImage = true;
    }
  }

  userSelect(newValue){
    this.userChoiceChange.emit(newValue);
  }

  validateSelect(): boolean {
    return (this.userChoice == this.question.correctChoiceId.toString())
  }

}
