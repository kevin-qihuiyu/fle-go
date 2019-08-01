import { Component } from '@angular/core';
import { slideInFromLeftAnimation, slideInFromRightAnimation } from './animation';
import { RouterOutlet, Router } from '@angular/router';
import { AuthService } from './_helpers';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInFromLeftAnimation, slideInFromRightAnimation ]
})
export class AppComponent {
  title = 'fle-go';
  currentUser: User;

  constructor(public router: Router,
    private authenticationService: AuthService
    ){
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

}
