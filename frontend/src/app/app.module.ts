import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UploadComponent } from "./components/upload/upload.component";
import { HomeComponent } from "./components/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { ElementOverviewComponent } from './components/element-overview/element-overview.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [AppComponent, UploadComponent, HomeComponent, HeaderComponent, ElementOverviewComponent, ReviewComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
