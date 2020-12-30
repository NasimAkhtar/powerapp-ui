import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Complain} from '../shared/complain';
import {ComplainsService} from '../complains.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-fetch-complains',
  templateUrl: './fetch-complains.component.html',
  styleUrls: ['./fetch-complains.component.css']
})
export class FetchComplainsComponent implements OnInit, OnChanges {
  complains: Complain[];
  @Input() newComplain: Complain;
  private editIndex:number;

  constructor(private complainService: ComplainsService,
              private http: HttpClient,
              private router: Router) { }

  ngOnInit() {
    this.fetchComplains();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.newComplain.currentValue !== undefined) {
      if (this.editIndex !== undefined) {
        this.complains[this.editIndex] = changes.newComplain.currentValue;
        this.editIndex = undefined;
      } else {
        this.complains.unshift(changes.newComplain.currentValue);
      }
    }
  }

  fetchComplains() {
    // Send Http request
    return this
      .http
      .get(
        this.complainService.GET_URL_PROD
      )
      .subscribe((response: Complain[]) => {
        this.complains = response;
        console.log(this.complains);
      });
  }

  onEditItem(index: number) {
    this.editIndex = index;
    this.complainService.startedEditing.next(this.complains[index]);
    this.router.navigate(['']);
  }
}
