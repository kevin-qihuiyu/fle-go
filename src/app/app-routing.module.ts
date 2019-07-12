import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryListComponent } from './main/category-list/category-list.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'categories', component: CategoryListComponent },
  {path: 'progress', component: ProgressComponent},
  {path: 'vocabulary', component: VocabularyComponent,      },
  {path: 'settings', component: SettingsComponent },
  // {path: 'login', component: LoginComponent },
  {path: '', redirectTo: 'categories', pathMatch: 'full'}
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
