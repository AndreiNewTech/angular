import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
const getLimitedUserComments = (limit: number, skip: number) =>
  `https://dummyjson.com/comments?limit=${limit}&skip=${skip}`;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  _comments = new Subject<[]>();
  constructor(private http: HttpClient) {}

  get comments() {
    return this._comments.asObservable();
  }

  getUserComments(skip: number) {
    this.http.get(getLimitedUserComments(10, skip)).subscribe((val: any) => {
      this._comments.next(val.comments);
    });
  }
}
