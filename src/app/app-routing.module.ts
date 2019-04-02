import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { MainComponent } from './main/main.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path: 'main', component: MainComponent },
  {path: 'progress', component: ProgressComponent },
  {path: 'vocabulary', component: VocabularyComponent },
  {path: 'settings', component: SettingsComponent },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
