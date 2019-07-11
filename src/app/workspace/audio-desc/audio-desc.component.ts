import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-audio-desc',
  templateUrl: './audio-desc.component.html',
  styleUrls: ['./audio-desc.component.scss']
})
export class AudioDescComponent implements OnInit {
  
  audio;
  @Input() audioDesc: string;

  constructor() { }

  ngOnInit() {
    this.loadAudio(this.audioDesc);
  }

  loadAudio(audioDesc: string){
    this.audio = new Audio();
    this.audio.src = audioDesc;
    this.audio.load();
  }

  togglePlayAudio(){
    return this.audio.paused ? this.audio.play() : this.audio.pause();
  }
}
