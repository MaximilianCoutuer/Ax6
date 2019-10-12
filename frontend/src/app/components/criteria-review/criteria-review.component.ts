import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CriteriaReview } from "src/app/Models/criteria-review";

@Component({
  selector: "criteria-review",
  templateUrl: "./criteria-review.component.html",
  styleUrls: ["./criteria-review.component.scss"]
})
export class CriteriaReviewComponent implements OnInit {
  criteria: any[];
  criteriaReviews: CriteriaReview[];
  errorMessage: string;

  constructor(private http: HttpClient) {
    this.criteria = [];
  }

  placeReview(e) {
    e.preventDefault();
    let valid = true;
    this.criteriaReviews.forEach(cr => {
      valid =
        (cr.rating > 0 && cr.comment && cr.comment.length > 10) ||
        (cr.rating == 0 && cr.comment == "");
    });
    if (valid) {
      this.errorMessage = null;
      this.http.post(
        "https://localhost:44306/api/review/submitReview",
        this.criteriaReviews
      );
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
    console.log(`valid: ${valid}`);
    console.log(this.criteriaReviews);
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
