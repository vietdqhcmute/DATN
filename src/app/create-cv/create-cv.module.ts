import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateCvRoutingModule } from "./create-cv-routing.module";
import { PartialModule } from "../partial/partial.module";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material/material.module";
import { CreateCvComponent } from "./components/create-cv/create-cv.component";
import { GetInfoComponent } from "./components/create-cv/get-info/get-info.component";
import { PreviewCvComponent } from "./components/create-cv/preview-cv/preview-cv.component";
import { TemplateSelectionComponent } from "./components/create-cv/template-selection/template-selection.component";
import { ToolBarComponent } from "./components/create-cv/tool-bar/tool-bar.component";
import { ConvertToMonthPipe } from "../shared/convert-to-month.pipe";
import { DialogResumeEducationComponent } from "../partial/material-dialog/dialog-resume-education/dialog-resume-education.component";
import { DialogResumeExperienceComponent } from "../partial/material-dialog/dialog-resume-experience/dialog-resume-experience.component";
import { DialogResumeProjectComponent } from "../partial/material-dialog/dialog-resume-project/dialog-resume-project.component";

@NgModule({
  declarations: [
    CreateCvComponent,
    GetInfoComponent,
    PreviewCvComponent,
    TemplateSelectionComponent,
    ToolBarComponent,
    ConvertToMonthPipe
  ],
  imports: [
    CommonModule,
    CreateCvRoutingModule,
    PartialModule,
    RouterModule,
    FormsModule,
    MaterialModule
  ],
  providers: [{ provide: Window, useValue: window }],
  entryComponents: [
    DialogResumeEducationComponent,
    DialogResumeExperienceComponent,
    DialogResumeProjectComponent
  ]
})
export class CreateCvModule {}
