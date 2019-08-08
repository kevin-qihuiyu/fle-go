import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Vocabulary } from '@/_models';

@Component({
  selector: 'app-vocabulary-card',
  templateUrl: './vocabulary-card.component.html',
  styleUrls: ['./vocabulary-card.component.css']
})
export class VocabularyCardComponent implements OnInit, OnDestroy {

  @Input() vocabulary: Vocabulary;
  audio;

  constructor() { }

  ngOnInit() {
    if(this.vocabulary.audioSrc)
       this.loadAudio(this.vocabulary.audioSrc);
  }

  loadAudio(audioDesc: string){
    this.audio = new Audio();
    this.audio.src = audioDesc;
    this.audio.load();
  }

  togglePlayAudio(){
    return this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  ngOnDestroy() {
    // destroy audio here
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }

}
