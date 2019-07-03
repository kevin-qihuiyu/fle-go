import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ActivityListComponent } from './main/activities/activity-list/activity-list.component';
import { CategoryListComponent } from './main/category-list/category-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'main', component: CategoryListComponent , data: {animation: 'categories'},},
  {path: 'progress', component: ProgressComponent,     data: {animation: 'activities'},},
  {path: 'vocabulary', component: VocabularyComponent,      },
  {path: 'settings', component: SettingsComponent },
  {path: 'login', component: LoginComponent },
  // {path: 'workspace', component: WorkspaceComponent },
  // {path: 'activities', component: ActivityListComponent },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  // Use paramsInheritanceStrategy to enable router params pass from parent to children
  imports: [RouterModule.forRoot(routes,
    {
      paramsInheritanceStrategy: 'always'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
