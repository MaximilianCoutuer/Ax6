import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "criteria-review",
  templateUrl: "./criteria-review.component.html",
  styleUrls: ["./criteria-review.component.scss"]
})
export class CriteriaReviewComponent implements OnInit {
  criteria: any[];

  constructor(private http: HttpClient) {
    this.criteria = [];
  }

  ngOnInit() {
    this.http
      .get("https://localhost:44306/api/review/criteria")
      .subscribe((data: any) => {
        this.criteria = data;
      });
  }
}
