import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from '../post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  posts: Array<Post>;
  constructor(private _postService: PostService) { }

  ngOnInit(): void {
    this._postService.getPosts()
    .subscribe(posts => this.posts = posts);
  }

}
