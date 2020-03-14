import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@/_helpers';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
  returnUrl: string
  loading: boolean
  screenshotImagePaths = [
    'assets/img/landing/screenshots/1.PNG',
    'assets/img/landing/screenshots/2.PNG',
    'assets/img/landing/screenshots/3.PNG',
    'assets/img/landing/screenshots/4.PNG',
    'assets/img/landing/screenshots/5.PNG',
    'assets/img/landing/screenshots/6.PNG',
    'assets/img/landing/screenshots/7.jpg',
    'assets/img/landing/screenshots/8.PNG'
  ];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthService) {
    
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.router.navigate(['/login'], { queryParams: { returnUrl: this.returnUrl }});
  }

  register() {
    this.router.navigate(['/register'], { queryParams: { returnUrl: this.returnUrl }});
  }

  try() {
    const TRIAL_ACCOUNT = {
      username : 'kevinyu',
      password : 'password'
    }
    this.loading = true;
    this.authenticationService.login(TRIAL_ACCOUNT.username, TRIAL_ACCOUNT.password)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['/']);
          },
          error => {
              console.log("error using trial account for login")
          });
  }
}
