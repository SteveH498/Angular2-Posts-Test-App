"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var post_service_1 = require("./post.service");
var PostListComponent = (function () {
    function PostListComponent(postService) {
        this.postService = postService;
        this.title = 'Posts';
    }
    PostListComponent.prototype.ngOnInit = function () { this.getPosts(); };
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostListComponent.prototype.onPostClick = function (post) {
        this.selectedPost = post;
    };
    PostListComponent.prototype.savePost = function (selectedPost) {
        this.postService.savePost(selectedPost).subscribe();
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    core_1.Component({
        selector: 'post-list',
        template: "<h1>{{title}}</h1>\n\t\t\t<ul>\n\t\t\t  <li *ngFor=\"let post of posts\" (click)=\"onPostClick(post)\">\n\t\t\t  {{ post.post }}\n\t\t\t  </li>\n\t\t\t</ul>\n\t\t\t<div *ngIf=\"selectedPost\">\n\t\t\t\t<label>Post:</label>\n\t\t\t\t<input [(ngModel)]=\"selectedPost.post\"/>\n\t\t\t\t<button type=\"button\" (click)=\"savePost(selectedPost)\">Save</button>\n\t\t\t</div>"
    }),
    __metadata("design:paramtypes", [post_service_1.PostService])
], PostListComponent);
exports.PostListComponent = PostListComponent;
//# sourceMappingURL=post-list.component.js.map