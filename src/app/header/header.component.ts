import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // Go back Left Arrow button only appears on /categories/{id} page
  goBack() {
    this.router.navigate([ '../' ], { relativeTo: this.route });
  }
  

}
