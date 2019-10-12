import { Component, OnInit, Sanitizer, SecurityContext } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { Submission } from "src/app/Models/submission";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-submission-detail",
  templateUrl: "./submission-detail.component.html",
  styleUrls: ["./submission-detail.component.scss"]
})
export class SubmissionDetailComponent implements OnInit {
  guid: string;
  submission: Submission;
  submissionUrl: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private sanitizer: Sanitizer,
    private domSanitizer: DomSanitizer
  ) {}

  getSafeUrl() {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(this.submissionUrl);
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
        });
    });
  }
}
