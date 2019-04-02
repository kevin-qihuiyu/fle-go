import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,

  ]
})
export class SharedModule { }
