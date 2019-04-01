import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: 'main', component: MainComponent },
  {path: 'vocabulary', component: VocabularyComponent },
  {path: '', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
