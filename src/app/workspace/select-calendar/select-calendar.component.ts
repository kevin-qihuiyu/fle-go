import { Component, OnInit, Input } from '@angular/core';
import { Question, SelectOnCalendar } from 'src/app/domain/question';

@Component({
  selector: 'app-select-calendar',
  templateUrl: './select-calendar.component.html',
  styleUrls: ['./select-calendar.component.scss']
})
export class SelectCalendarComponent implements OnInit {

  @Input() question: SelectOnCalendar;
  
  // Date 
  selectedDate: Date;
  correctDate: Date;

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

  constructor() { }

  ngOnInit() {
    if (this.question.audioDesc) {
      this.loadAudio(this.question.audioDesc);
      this.hasAudio = true;
    }
    if (this.question.imgDesc) {
      this.hasImage = true;
    }

    this.selectedDate = this.question.selectedDate;
    this.correctDate = this.correctDate;
  }

}
