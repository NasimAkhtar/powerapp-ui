import { Component, OnInit } from '@angular/core';
import {Complain} from '../shared/complain';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newComplain: Complain;

  constructor() { }

  ngOnInit() {
  }

  addNewComplain(newAddedComplain: Complain) {
    this.newComplain = newAddedComplain;
  }

}
