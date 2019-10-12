import { Component, OnInit, Sanitizer, SecurityContext } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Submission } from "src/app/Models/submission";
import { DomSanitizer } from "@angular/platform-browser";
import { CriteriaReview } from "src/app/Models/criteria-review";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-submission-detail",
  templateUrl: "./submission-detail.component.html",
  styleUrls: ["./submission-detail.component.scss"]
})
export class SubmissionDetailComponent implements OnInit {
  guid: string;
  submission: Submission;
  submissionUrl: string;
  reviews: CriteriaReview[];
  faStar = faStar;
  farStar = farStar;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: Sanitizer,
    private domSanitizer: DomSanitizer
  ) {}

  avgReviews() {
    var total = this.reviews.reduce((acc, curr) => {
      return (acc += curr.rating);
    }, 0);
    return Math.round(total / this.reviews.length);
  }

  range(i) {
    return new Array(i);
  }

  getSafeUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.submissionUrl);
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.guid = params["guid"];
      this.http
        .get(`https://localhost:44306/api/submission/${this.guid}`)
        .subscribe((data: any) => {
          this.submission = data;
          const url = `https://localhost:44306/submissions/${this.submission.folderGuid}/src/index.html`;
          this.submissionUrl = url;
          this.http
            .get(
              `https://localhost:44306/api/review/getreviewsforsubmission/${this.submission.id}`
            )
            .subscribe((data: any) => {
              this.reviews = data;
            });
        });
    });
  }
}
