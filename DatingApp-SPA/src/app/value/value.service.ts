import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  rootUrl = 'https://localhost:5001/api/';
  private values = new BehaviorSubject<any>(null);

  constructor( private http: HttpClient ) {
  }

  getValuesFromServer(): void {
    this.http.get(`${ this.rootUrl }values`).subscribe(res => {
      this.values.next(res);
    }, error => {
      console.log(error);
    });
  }

  getValues(): BehaviorSubject<any> {
    this.getValuesFromServer();
    return this.values;
  }
}
