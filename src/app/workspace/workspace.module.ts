import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { WorkspaceComponent } from './workspace.component';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { QcmSelectImageComponent } from './qcm-select-image/qcm-select-image.component';
import { AssociateTextImageComponent } from './associate-text-image/associate-text-image.component';
import { AssociateImageToGoalComponent } from './associate-image-to-goal/associate-image-to-goal.component';
import { SelectCalendarComponent } from './select-calendar/select-calendar.component';
import { AudioDescComponent } from './audio-desc/audio-desc.component';
import { ImageDescComponent } from './image-desc/image-desc.component';

@NgModule({
  declarations: [
    WorkspaceComponent,
    QcmSelectTextComponent,
    QcmSelectImageComponent,
    AssociateTextImageComponent,
    AssociateImageToGoalComponent,
    SelectCalendarComponent,
    AudioDescComponent,
    ImageDescComponent
  ],
  imports: [
    FormsModule,
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [WorkspaceComponent]
})
export class WorkspaceModule { }