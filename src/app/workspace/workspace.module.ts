import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { WorkspaceComponent } from './workspace.component';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { QcmSelectImageComponent } from './qcm-select-image/qcm-select-image.component';
import { AssociateTextImageComponent } from './associate-text-image/associate-text-image.component';
import { AssociateImageToGoalComponent } from './associate-image-to-goal/associate-image-to-goal.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    QcmSelectTextComponent,
    QcmSelectImageComponent,
    AssociateTextImageComponent,
    AssociateImageToGoalComponent
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
