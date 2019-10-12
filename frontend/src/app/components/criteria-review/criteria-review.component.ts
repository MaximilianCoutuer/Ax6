import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CriteriaReview } from "src/app/Models/criteria-review";
import { HttpHeaders } from "@angular/common/http";

@Component({
  selector: "criteria-review",
  templateUrl: "./criteria-review.component.html",
  styleUrls: ["./criteria-review.component.scss"]
})
export class CriteriaReviewComponent implements OnInit {
  criteria: any[];
  criteriaReviews: CriteriaReview[];
  errorMessage: string;
  @Input() submissionId: number;

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "my-auth-token"
    })
  };

  constructor(private http: HttpClient) {
    this.criteria = [];
  }

  placeReview(e) {
    e.preventDefault();
    let valid = true;
    this.criteriaReviews.forEach(cr => {
      cr.criteriaId = cr.criteria.id;
    });
    if (valid) {
      this.errorMessage = null;
      this.http
        .post(
          `https://localhost:44306/api/review/submitreview/${this.submissionId}`,
          JSON.stringify(this.criteriaReviews),
          this.httpOptions
        )
        .subscribe((data: any) => {
          console.log(data);
        });
      this.criteriaReviews.map(cr => {
        cr.comment = "";
        cr.rating = 0;
      });
      // e.target.reset();
    } else {
      // showMessage
      this.errorMessage =
        "Form cannot be empty, if you give a score you must write a comment";
    }
  }

  ngOnInit() {
    this.http
      .get("https://localhost:44306/api/review/criteria")
      .subscribe((data: any) => {
        this.criteria = data;
        this.criteriaReviews = this.criteria.map(crit => {
          const x = new CriteriaReview();
          x.criteria = crit;
          return x;
        });
      });
  }
}
