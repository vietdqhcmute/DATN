import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCvRoutingModule } from './create-cv-routing.module';
import { PartialModule } from '../partial/partial.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateCvRoutingModule,
    PartialModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ]
})
export class CreateCvModule { }
