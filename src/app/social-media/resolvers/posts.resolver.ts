import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Post} from "../models/post.model";
import {PostsService} from '../service/posts.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

@Injectable()
export class PostsResolver implements Resolve<Post[]> {
  constructor(private postService: PostsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Post[]> {
    return this.postService.getPosts();
  }
}
