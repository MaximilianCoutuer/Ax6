import { Component, OnInit, Input } from "@angular/core";
import { Submission } from "src/app/Models/submission";

@Component({
  selector: "element-overview",
  templateUrl: "./element-overview.component.html",
  styleUrls: ["./element-overview.component.scss"]
})
export class ElementOverviewComponent implements OnInit {
  @Input() submission: Submission;
  constructor() {
    
  }
  ngOnInit() {
    
  }
}
