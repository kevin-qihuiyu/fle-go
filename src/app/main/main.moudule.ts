import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { SharedModule } from '../_shared/shared.module';
 
import { CategoryListComponent }    from './category-list/category-list.component';
import { CategoryCardComponent }  from './category-list/category-card/category-card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityCardComponent } from './activities/activity-list/activity-card/activity-card.component';
import { IntroductionComponent } from './category-list/introduction/introduction.component';
 
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
    ActivityCardComponent,
    IntroductionComponent,
  ]
})
export class MainModule {}