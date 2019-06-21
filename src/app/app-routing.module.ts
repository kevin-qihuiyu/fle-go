import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { ActivityListComponent } from './main/activity-list/activity-list.component';

const routes: Routes = [
  {path: 'progress', component: ProgressComponent },
  {path: 'vocabulary', component: VocabularyComponent },
  {path: 'settings', component: SettingsComponent },
  {path: 'workspace', component: WorkspaceComponent },
  {path: 'activities', component: ActivityListComponent },
  {path: '', redirectTo: 'progress', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
