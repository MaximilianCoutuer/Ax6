import { Component, OnInit } from "@angular/core";
import { Submission } from "src/app/Models/submission";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";
import * as _ from "lodash";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  submissions: Submission[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Submission[]>("https://localhost:44306/api/submission/list")
      .subscribe((data: any) => {
        this.submissions = data;
      });
    console.log(this.submissions);
  }
}
