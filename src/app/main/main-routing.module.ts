import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CategoryListComponent } from './category-list/category-list.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { WorkspaceComponent } from '../workspace/workspace.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AuthGuard } from '../_helpers';

const mainRoutes: Routes = [
  { path: 'categories', component: CategoryListComponent, data: {animation: 'categories'} ,canActivate: [AuthGuard]},
  { path: 'categories/:id', component: ActivitiesComponent, data: {animation: 'activities'},
    children:[
      { path: '', redirectTo: 'activities' , pathMatch: 'full'},
      { path: 'activities', component: ActivityListComponent },
      { path: 'activities/:qid', component: WorkspaceComponent }
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
