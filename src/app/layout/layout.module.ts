import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AllJobComponent } from './all-job/all-job.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { PartialModule } from '../partial/partial.module';

@NgModule({
  declarations: [LayoutComponent, AllJobComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PartialModule
  ]
})
export class LayoutModule { }
