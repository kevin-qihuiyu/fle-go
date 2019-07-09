import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  studyMode: string = 'Free Browsing';
  modes: string[] = ['Free Browsing','Scheduled(upcoming feature)'];

  constructor() { }

  ngOnInit() {
  }

}
