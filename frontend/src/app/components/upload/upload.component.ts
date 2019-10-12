import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  public uploads: any[];
  public newUpload: any;
  constructor(private http: HttpClient) {
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

  ngOnInit() {
    this.http
      .get("https://localhost:44306/api/submission/list")
      .subscribe((data: any[]) => {
        console.log(data);
        this.uploads = data.map(d => {
          const date = new Date(d.timestamp);
          return {
            title: d.title,
            timestamp: `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`
          };
        });
      });
  }
}
