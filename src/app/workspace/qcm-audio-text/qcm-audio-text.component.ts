import { Component, OnInit } from '@angular/core';
import { QuestionType, QCMAudioText } from 'src/app/domain/question';

@Component({
  selector: 'app-qcm-audio-text',
  templateUrl: './qcm-audio-text.component.html',
  styleUrls: ['./qcm-audio-text.component.css']
})
export class QcmAudioTextComponent implements OnInit {

  choice;

  sampleQuestion : QCMAudioText = {
    name: "Comprendre un message d'annulation",
    questionType: QuestionType.LISEZ_ET_CHOISISSEZ,
    desc: "Qu'est-ce qui se passe pour le rendez-vous?",
    audioSrc: "assets/audio/q1.mp3",
    numOfChoices: 4,
    choices: [
      {
        desc: "Il est annulé."
      },
      {
        desc: "Il est reporté le 15."
      },
      {
        desc: "C'était hier."
      },
      {
        desc: "Il faut y aller aujourd'hui à 15h."
      }
    ],
    correctChoiceId: 0
  };

  audio;

  constructor() { }

  ngOnInit() {
    this.loadAudio();
  }

  loadAudio(){
    this.audio = new Audio();
    this.audio.src = this.sampleQuestion.audioSrc;
    this.audio.load();
  }

  togglePlayAudio(){
    return this.audio.paused ? this.audio.play() : this.audio.pause();
  }

}
