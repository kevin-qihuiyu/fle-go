import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { SharedModule } from './shared/shared.module';
import { MainModule } from './main/main.moudule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { VocabularyComponent } from './vocabulary/vocabulary.component';
import { VocabularyCardComponent } from './vocabulary-card/vocabulary-card.component';
import { ProgressComponent } from './progress/progress.component';
import { SettingsComponent } from './settings/settings.component';
import { HeaderComponent } from './header/header.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { QcmSelectTextComponent } from './workspace/qcm-select-text/qcm-select-text.component';
import { QcmSelectImageComponent } from './workspace/qcm-select-image/qcm-select-image.component';
import { AssociateTextImageComponent } from './workspace/associate-text-image/associate-text-image.component';
import { ActivitiesComponent } from './main/activities/activities.component';
import { AssociateImageToGoalComponent } from './workspace/associate-image-to-goal/associate-image-to-goal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    VocabularyComponent,
    VocabularyCardComponent,
    ProgressComponent,
    SettingsComponent,
    HeaderComponent,
    WorkspaceComponent,
    QcmSelectTextComponent,
    QcmSelectImageComponent,
    AssociateTextImageComponent,
    ActivitiesComponent,
    AssociateImageToGoalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule,
    MainModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
