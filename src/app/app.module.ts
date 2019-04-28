import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyCardComponent } from './vocabulary-card/vocabulary-card.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { QcmTextComponent } from './workspace/qcm-text/qcm-text.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    MainComponent,
    VocabularyComponent,
    VocabularyCardComponent,
    ProgressComponent,
    SettingsComponent,
    HeaderComponent,
    CategoryCardComponent,
    WorkspaceComponent,
    QcmTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
