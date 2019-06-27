import { Component, OnInit, Input } from '@angular/core';
import { QCMSelectText, QuestionType, Question } from 'src/app/domain/question';

@Component({
  selector: 'app-qcm-select-text',
  templateUrl: './qcm-select-text.component.html',
  styleUrls: ['./qcm-select-text.component.css']
})
export class QcmSelectTextComponent implements OnInit {

  @Input() question: Question;

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

  // Audio Description Management
  audio;
  hasAudio: boolean = false;

  loadAudio(audioDesc: string){
    this.audio = new Audio();
    this.audio.src = audioDesc;
    this.audio.load();
  }

  togglePlayAudio(){
    return this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  // Image Description
  hasImage: boolean = false;


  //////////////////////////////////////////////////////////////////////////////
  constructor() { }

  ngOnInit() {
    if (this.question.audioDesc) {
      this.loadAudio(this.question.audioDesc);
      this.hasAudio = true;
    }
    if (this.question.imgDesc) {
      this.hasImage = true;
    }
  }

}
