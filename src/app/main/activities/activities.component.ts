import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/domain/activity';
import { Category } from 'src/app/domain/category';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { ActivitiesService } from '../activities.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
