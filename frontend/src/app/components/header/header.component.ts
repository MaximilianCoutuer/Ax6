import { Component, OnInit } from "@angular/core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  search: string = "";

  constructor() {}
  searchSubmit(e) {
    e.preventDefault();
    console.log(e.target);
  }

  ngOnInit() {}
}
