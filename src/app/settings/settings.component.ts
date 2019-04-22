import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  studyMode: string = 'Learning';
  modes: string[] = ['Learning','Free'];

  constructor() { }

  ngOnInit() {
  }

}
