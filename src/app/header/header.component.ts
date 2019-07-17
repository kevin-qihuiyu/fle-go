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

  goBack() {
    let url = this.router.url;
    // To go back to the upper level, we actually need to go up 2 levels in url address (../../) to match the router design for main feature area
    url = url.substr(0, url.lastIndexOf('/'));
    url = url.substr(0, url.lastIndexOf('/'));
    this.router.navigate([ url ]);
  }
  

}
