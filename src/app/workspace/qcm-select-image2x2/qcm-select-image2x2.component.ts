import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { QCMSelectImage } from '@/_models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qcm-select-image2x2',
  templateUrl: './qcm-select-image2x2.component.html',
  styleUrls: ['./qcm-select-image2x2.component.scss']
})
export class QcmSelectImage2x2Component implements OnInit {

  @Input() question: QCMSelectImage;
  @Input() userChoice;
  @Output() userChoiceChange = new EventEmitter();

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

  onUserChoiceChange(newValue){
    this.userChoiceChange.emit(newValue);
  }

  validateSelect(): boolean {
    return (this.userChoice == this.question.correctChoiceId.toString())
  }

}
