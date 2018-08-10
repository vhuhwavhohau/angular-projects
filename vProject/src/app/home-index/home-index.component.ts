import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-index',
  templateUrl: './home-index.component.html',
  styleUrls: ['./home-index.component.css']
})
export class HomeIndexComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = "add an item";
  goalText: string = "my first life goal";

  constructor() { }

  ngOnInit() {
  }

}
