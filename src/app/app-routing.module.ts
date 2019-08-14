import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { CategoryListComponent } from './main/category-list/category-list.component';
import { LoginComponent } from './user-management/login/login.component';
import { RegisterComponent } from './user-management/register/register.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LandingPageCnComponent } from './landing-page/landing-page-cn/landing-page-cn.component';

const routes: Routes = [
  {path: 'categories', component: CategoryListComponent, canActivate: [AuthGuard]},
  {path: 'progress', component: ProgressComponent, canActivate: [AuthGuard]},
  {path: 'vocabulary', component: VocabularyComponent,  canActivate: [AuthGuard]},
  {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'landing', component: LandingPageCnComponent },
  {path: 'landing/en', component: LandingPageComponent },
  {path: '', redirectTo: 'categories', pathMatch: 'full'},
  {path: '**', redirectTo: 'categories'} // for page not found
];

@NgModule({
  // Use paramsInheritanceStrategy to enable router params pass from parent to children
  imports: [RouterModule.forRoot(routes,
    {
      paramsInheritanceStrategy: 'always',
      scrollPositionRestoration: 'enabled' 
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
