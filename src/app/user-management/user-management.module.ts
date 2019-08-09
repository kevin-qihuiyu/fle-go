import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register';
import { AlertComponent } from './alert';
import { LoginComponent } from './login';
import { SharedModule } from '@/_shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class UserManagementModule { }
