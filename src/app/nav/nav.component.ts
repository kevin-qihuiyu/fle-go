import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  navItems = [
    {
      name: 'Main',
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

  activeNavItem = this.navItems[0];

  constructor() { }

  ngOnInit() {
  }

  onClick(item) {
    this.activeNavItem = item;
  }

}
