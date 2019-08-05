import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AuthService } from '../_helpers';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  currentUser: User;
  studyMode: string = 'Free Browsing';
  modes: string[] = ['Free Browsing','Scheduled (Upcoming feature)'];

  constructor(
    private authenticationService: AuthService,
    ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
  }

}
