import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { PostListComponent }  from './post-list.component';

import { PostService } from './post.service'

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent,PostListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PostService ]
})
export class AppModule { }
