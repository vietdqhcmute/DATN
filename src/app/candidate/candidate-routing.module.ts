import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateProfileComponent } from './components/candidate-profile/candidate-profile.component';
import { CandidateComponent } from './candidate.component';

const routes: Routes = [
  {path:"", component: CandidateComponent, children:[
    {path: ":email", component: CandidateProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule {}
