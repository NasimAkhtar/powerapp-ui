import {Component, Input, OnInit} from '@angular/core';
import {Complain} from '../../shared/complain';

@Component({
  selector: 'app-complain',
  templateUrl: './complain.component.html',
  styleUrls: ['./complain.component.css']
})
export class ComplainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() complain: Complain;

}
