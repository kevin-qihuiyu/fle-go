import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppTitleService } from '../app-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: String;

  constructor(public router: Router,
    private appTitleService: AppTitleService) { }

  ngOnInit() {
    this.appTitleService.getTitle().subscribe(appTitle => this.title = appTitle);
  }

  goBack() {
    let url = this.router.url;
    // To go back to the upper level, we actually need to go up 2 levels in url address (../../) to match the router design for main feature area
    url = url.substr(0, url.lastIndexOf('/'));
    url = url.substr(0, url.lastIndexOf('/'));
    this.router.navigate([ url ]);
  }
  

}
