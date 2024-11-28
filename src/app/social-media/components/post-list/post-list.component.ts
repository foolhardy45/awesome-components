import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';
import { OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit {
  posts$!: Observable<Post[]>;

  constructor( private route: ActivatedRoute,
               private postsService: PostsService) {}

  ngOnInit(): void {
      this.posts$ = this.route.data.pipe(
        map(data => data['posts'])
      );
  }

  onPostCommented(postCommented: { comment: string; postId: number }) {
    this.postsService.addNewComment(postCommented);
  }
}
