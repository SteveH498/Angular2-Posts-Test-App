import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from './post'
import { PostService } from './post.service'


@Component({
  selector: 'post-list',
  template: `<h1>{{title}}</h1>
			<ul>
			  <li *ngFor="let post of posts" (click)="onPostClick(post)">
			  {{ post.post }}
			  </li>
			</ul>

			<label>Post:</label>
			<input #newPost/>
			<button (click)="savePost(newPost.value); newPost.value=''">Save</button>
			`

})
export class PostListComponent implements OnInit { 

	title = 'Posts'; 
	posts: Post[];
	
	
	constructor (private postService: PostService) {}
	
	ngOnInit() { this.getPosts(); }
	
	
	getPosts() {
		this.postService.getPosts()
                     .subscribe(
                       posts => this.posts = posts);
                   
	}
	
	
	savePost(newPost: Post){
		this.postService.savePost(newPost).subscribe(post  => this.posts.push(post));
	}
	

	
}