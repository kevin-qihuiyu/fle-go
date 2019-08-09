import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './_shared/shared.module';
import { MainModule } from './main/main.moudule';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserManagementModule } from './user-management/user-management.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyCardComponent } from './vocabulary/vocabulary-card/vocabulary-card.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';

import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './_helpers';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VocabularyComponent,
    VocabularyCardComponent,
    ProgressComponent,
    SettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    WorkspaceModule,
    MainModule,
    UserManagementModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
