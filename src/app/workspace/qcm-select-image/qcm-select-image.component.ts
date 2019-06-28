import { Component, OnInit, Input } from '@angular/core';
import { QCMSelectImage, QuestionType, Question } from 'src/app/domain/question';

@Component({
  selector: 'app-qcm-select-image',
  templateUrl: './qcm-select-image.component.html',
  styleUrls: ['./qcm-select-image.component.css']
})
export class QcmSelectImageComponent implements OnInit {

  @Input() question: Question;

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
