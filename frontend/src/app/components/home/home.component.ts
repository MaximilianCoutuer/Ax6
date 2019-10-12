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
  filteredSubmissions: Submission[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Submission[]>("https://localhost:44306/api/submission/list")
      .subscribe((data: any) => {
        this.submissions = data;
        this.filteredSubmissions = data;
      });
    document.querySelector("#searchInput").addEventListener("input", e => {
      const val = (<HTMLInputElement>e.srcElement).value;
      this.filteredSubmissions = this.submissions.filter(
        s => s.title.toLowerCase().indexOf(val ? val.toLowerCase() : "", 0) >= 0
      );
      console.log(this.filteredSubmissions);
    });
  }
}
