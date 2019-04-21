import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,

  ]
})
export class SharedModule { }
