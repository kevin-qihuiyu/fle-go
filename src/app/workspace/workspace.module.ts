import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../_shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { WorkspaceComponent } from './workspace.component';
import { AudioDescComponent } from './audio-desc/audio-desc.component';
import { ImageDescComponent } from './image-desc/image-desc.component';
import { QcmSelectTextComponent } from './qcm-select-text/qcm-select-text.component';
import { QcmSelectImage2x2Component } from './qcm-select-image2x2/qcm-select-image2x2.component';
import { AssociateTextImageSelectComponent } from './associate-text-image-select/associate-text-image-select.component';
import { DescContainerComponent } from './desc-container/desc-container.component';


@NgModule({
  declarations: [
    WorkspaceComponent,
    AudioDescComponent,
    ImageDescComponent,
    QcmSelectTextComponent,    
    QcmSelectImage2x2Component,
    AssociateTextImageSelectComponent,
    DescContainerComponent,
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
