import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
 
import { CategoryListComponent }    from './category-list/category-list.component';
import { CategoryCardComponent }  from './category-list/category-card/category-card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityCardComponent } from './activities/activity-list/activity-card/activity-card.component';
 
import { MainRoutingModule } from './main-routing.module';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryCardComponent,
    ActivitiesComponent,
    ActivityListComponent,
    ActivityCardComponent
  ]
})
export class MainModule {}