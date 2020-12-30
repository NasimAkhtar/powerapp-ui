import {EventEmitter, Injectable, Output} from '@angular/core';
import {Complain} from './shared/complain';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplainsService {
  newComplain = new Subject<Complain>();
  startedEditing = new Subject<Complain>();
  GET_URL_DEV = 'http://localhost:5000/complains';
  GET_URL_PROD = 'http://powerapp-env-1.eba-pi2nsc23.ap-south-1.elasticbeanstalk.com/complains';
  POST_URL_DEV = 'http://localhost:5000/complain';
  POST_URL_PROD = 'http://powerapp-env-1.eba-pi2nsc23.ap-south-1.elasticbeanstalk.com/complain';

  constructor() { }

}
