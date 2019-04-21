import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    MatProgressBarModule,
  ]
})
export class SharedModule { }
