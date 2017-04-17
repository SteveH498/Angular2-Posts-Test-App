import { Injectable }              from '@angular/core';
import { Http, Response, Headers, RequestOptions }          from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Post } from './post';


@Injectable()
export class PostService {
	
	private postsURL = 'http://localhost:8080/posts'; 
		
	constructor (private http: Http) {}

	getPosts(): Observable<Post[]> {
		return this.http.get(this.postsURL).map(res => res.json());					
	}
	
	
	savePost(post: Post): Observable<Post>{
		let body = JSON.stringify(post);
		let headers = new Headers({ 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });
		
		return this.http.put(this.postsURL+"/"+post.id, body, options);		
	}
	

	

}