import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import {review} from '../review';


@Injectable()
export class ReviewService {

  constructor(private http:HttpClient) { }

  getReviews():Observable<Object>
  {
    return this.http.get("http://139.59.9.236:8898/rest-api/reviews");
  }

}
