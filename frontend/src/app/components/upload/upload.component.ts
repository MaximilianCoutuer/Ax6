import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  public uploads: any[];

  constructor() {
    this.uploads = [];
  }

  onUpload(e) {
    e.preventDefault();
    console.log(e);
  }

  ngOnInit() {}
}
