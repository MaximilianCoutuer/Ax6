import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UploadComponent } from "./components/upload/upload.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ElementOverviewComponent } from "./components/element-overview/element-overview.component";
import { ReviewComponent } from "./components/review/review.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmissionDetailComponent } from './components/submission-detail/submission-detail.component';
import { SafePipe } from './Pipes/safe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    HomeComponent,
    HeaderComponent,
    ElementOverviewComponent,
    ReviewComponent,
    LoginComponent,
    SubmissionDetailComponent,
    SafePipe
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
