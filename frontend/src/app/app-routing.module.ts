import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UploadComponent } from "./components/upload/upload.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { SubmissionDetailComponent } from './components/submission-detail/submission-detail.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "upload",
    component: UploadComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "submission/:guid",
    component: SubmissionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
