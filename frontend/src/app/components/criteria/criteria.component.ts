import { Component, OnInit, Input } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Criteria } from "src/app/Models/criteria";
import { CriteriaReview } from "src/app/Models/criteria-review";

@Component({
  selector: "criteria",
  templateUrl: "./criteria.component.html",
  styleUrls: ["./criteria.component.scss"]
})
export class CriteriaComponent implements OnInit {
  rating: number;
  faStar = faStar;
  farStar = farStar;
  criteria: Criteria;
  @Input() criteriaReview: CriteriaReview;

  constructor() {}

  range(i) {
    return new Array(i);
  }

  ngOnInit() {
    this.criteria = this.criteriaReview.criteria;
    this.criteriaReview.rating = 0;
  }
}
