import {Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Complain} from '../shared/complain';
import {ComplainsService} from '../complains.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-add-complains',
  templateUrl: './add-complains.component.html',
  styleUrls: ['./add-complains.component.css']
})
export class AddComplainsComponent implements OnInit, OnDestroy {
  @ViewChild('complainForm', { static: false}) complainForm: NgForm;
  @Output() newComplain = new EventEmitter<Complain>();
  subscription: Subscription;
  editMode = false;

  constructor(private http: HttpClient,
              private complainsService: ComplainsService) { }

  ngOnInit() {
    this.subscription = this.complainsService
      .startedEditing
      .subscribe(
        (complain: Complain) => {
          this.editMode = true;
          this.complainForm.setValue(complain);
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onAddComplain(complain: Complain) {
    // Send Http request
    this.http
      .post(
        this.complainsService.POST_URL_PROD,
        complain
      )
      .subscribe((response: Complain) => {
        this.newComplain.emit(response);
      });
    this.complainForm.reset();
    if (this.editMode) {
      this.editMode = !this.editMode;
    }
  }

  onCancel() {
    this.complainForm.reset();
    if (this.editMode) {
      this.editMode = !this.editMode;
    }
  }
}
