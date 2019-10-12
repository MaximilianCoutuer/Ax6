import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  public uploads: any[];
  public newUpload: any;
  constructor() {
    this.newUpload = {
      title: "",
      description: "",
      zip: null
    };
    this.uploads = [];
  }

  uploadZip(e) {
    e.preventDefault();
    console.log(this.newUpload);
  }

  ngOnInit() {}
}
