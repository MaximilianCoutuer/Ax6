import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'element-overview',
  templateUrl: './element-overview.component.html',
  styleUrls: ['./element-overview.component.scss']
})
export class ElementOverviewComponent implements OnInit { 
@Input() title: string;
  constructor() { }
  ngOnInit() {
  }

}
