import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  __loading = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  srsUrl = 'https://jsonplaceholder.typicode.com/photos';

  getData(){
    return this.http.get(this.srsUrl);
  }

  show() {
    this.__loading.next(true);
  }

  hide() {
    this.__loading.next(false);
  }

}