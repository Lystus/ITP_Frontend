import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'moviereco-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  collapsed = true;
  viewedPanel = 0;
  constructor() {}

  ngOnInit(): void {}
  changeView(panelNum: number) {
    this.viewedPanel = panelNum;
  }
}
