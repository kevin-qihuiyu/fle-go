import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { CategoryListComponent } from './category-list/category-list.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { WorkspaceComponent } from '../workspace/workspace.component';

const mainRoutes: Routes = [
  { path: 'categories', component: CategoryListComponent },
  { path: 'categories/:id', component: ActivityListComponent },
  { path: 'categories/:id/:qid',component: WorkspaceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
