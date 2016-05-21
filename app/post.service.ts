import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
// Injectable Annotation for avail for dependency injection
import {Injectable} from 'angular2/core';

import {Post} from './post';

// function so we need to call it
@Injectable()

export class PostService {
  // by default all members of the service are public
  private _url = "http://jsonplaceholder.typicode.com/posts";
  // dependency injection and let angular create the http class and give it to us
  // constructor takes parameter of http which is of type Http
  // convention prefix private field with underscore
  constructor(private _http: Http) {

  }

  // Observable of Post array
  getPosts() : Observable<Post[]> {
    // when the response is completed, the data will be pushed into an observable
    // don't expose this service to the outside world, but only expose the data
    return this._http.get(this._url)
      .map(res => res.json());
  }

  // annotate this parameter with a type Post
  createPost(post: Post) {
    // serialize this post object as a string
    return this._http.post(this._url, JSON.stringify(post))
      .map(res => res.json());
  }
}