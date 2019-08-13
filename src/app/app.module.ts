import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './_shared/shared.module';
import { MainModule } from './main/main.moudule';
import { WorkspaceModule } from './workspace/workspace.module';
import { UserManagementModule } from './user-management/user-management.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyCardComponent } from './vocabulary/vocabulary-card/vocabulary-card.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent, DialogConfirmResetComponent } from './settings/settings.component';

import { fakeBackendProvider, ErrorInterceptor, JwtInterceptor } from './_helpers';

import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/zh-Hans';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VocabularyComponent,
    VocabularyCardComponent,
    ProgressComponent,
    SettingsComponent,
    DialogConfirmResetComponent,
    HeaderComponent,
    LandingPageComponent
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
    { provide: LOCALE_ID, useValue: 'zh' }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  //dynamically loaded component
  entryComponents: [DialogConfirmResetComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
