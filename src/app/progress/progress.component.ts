import { Component, OnInit } from '@angular/core';
import { ProgressService } from './progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  progressData = []
  globalTotalValue;

  constructor(private progressService: ProgressService) { }

  ngOnInit() {
    this.progressData = this.progressService.getAllProgress();
    this.globalTotalValue = this.progressService.getGlobalProgressValue();
  }

}
