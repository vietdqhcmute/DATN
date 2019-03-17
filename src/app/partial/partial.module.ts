import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CompanyFrameComponent } from './company-frame/company-frame.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TopBarComponent, CompanyFrameComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CompanyFrameComponent,TopBarComponent]
})
export class PartialModule { }
