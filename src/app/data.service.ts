import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable()
export class DataService {
  private idSource = new BehaviorSubject<string>('');
  id = this.idSource.asObservable()
  constructor() { }
  changeid(id: string) {
    this.idSource.next(id);
   
  }
}