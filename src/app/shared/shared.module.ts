import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';

import {DragDropModule} from '@angular/cdk/drag-drop';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatDividerModule,
    DragDropModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
    MatRadioModule,
    MatDividerModule,
    DragDropModule
  ]
})
export class SharedModule { }