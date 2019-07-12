import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems = [
    {
      name: 'Learn',
      link: '/main',
      icon: 'face'
    },
    {
      name: 'Progress',
      link: '/progress',
      icon: 'trending_up'
    },    
    {
      name: 'Vocabulary',
      link: '/vocabulary',
      icon: 'ballot'
    },    
    {
      name: 'Settings',
      link: '/settings',
      icon: 'settings'
    },
  ]

  constructor(private route: Router) { }

  ngOnInit() {
    console.log(this.route.url);
  }

}
