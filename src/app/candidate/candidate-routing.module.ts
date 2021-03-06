import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
  {path:"", component: CandidateComponent, children:[
    {path: ":email", component: CandidateProfileComponent},
    {path: ":email/create-cv", loadChildren:"../create-cv/create-cv.module#CreateCvModule"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule {}
