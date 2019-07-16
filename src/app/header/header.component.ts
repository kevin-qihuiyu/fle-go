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

  // Go back Left Arrow button 
  goBack() {
    let url = this.router.url;
    // Go up 2 levels 
    url = url.substr(0, url.lastIndexOf('/'));
    url = url.substr(0, url.lastIndexOf('/'));
    this.router.navigate([ url ]);
  }
  

}
