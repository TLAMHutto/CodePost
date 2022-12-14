import { Injectable } from '@angular/core';
import { Http } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  result:any

  constructor(private _http: Http) { }

  getPost(){
    return this._http.get('/api/posts')
    .map(result => this.result = result.json());
  }
}
