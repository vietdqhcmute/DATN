import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateCvRoutingModule } from "./create-cv-routing.module";
import { PartialModule } from "../partial/partial.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { CreateCvComponent } from './components/create-cv/create-cv.component';
import { GetInfoComponent } from './components/create-cv/get-info/get-info.component';
import { PreviewCvComponent } from './components/create-cv/preview-cv/preview-cv.component';
import { TemplateSelectionComponent } from './components/create-cv/template-selection/template-selection.component';
import { ToolBarComponent } from './components/create-cv/tool-bar/tool-bar.component';


@NgModule({
  declarations: [
    CreateCvComponent,
    GetInfoComponent,
    PreviewCvComponent,
    TemplateSelectionComponent,
    ToolBarComponent
  ],
  imports: [
    CommonModule,
    CreateCvRoutingModule,
    PartialModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ]
})
export class CreateCvModule {}
