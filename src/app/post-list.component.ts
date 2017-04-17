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
			<div *ngIf="selectedPost">
				<label>Post:</label>
				<input [(ngModel)]="selectedPost.post"/>
				<button type="button" (click)="savePost(selectedPost)">Save</button>
			</div>`
})
export class PostListComponent implements OnInit { 

	title = 'Posts'; 
	posts: Post[];
	
	selectedPost: Post;
	
	constructor (private postService: PostService) {}
	
	ngOnInit() { this.getPosts(); }
	
	
	getPosts() {
		this.postService.getPosts()
                     .subscribe(
                       posts => this.posts = posts);
                   
	}
	
	
	onPostClick(post: Post){
		this.selectedPost = post;
	}
	
	savePost(selectedPost: Post){
		this.postService.savePost(selectedPost).subscribe();
	}
	

	
}