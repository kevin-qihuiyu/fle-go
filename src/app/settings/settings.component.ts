import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AuthService } from '../_helpers';
import { Router } from '@angular/router';

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
    public router: Router,
    private authenticationService: AuthService,
    ) {
    this.currentUser = this.authenticationService.currentUserValue;
   }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
