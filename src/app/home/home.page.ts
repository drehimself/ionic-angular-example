import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  posts: object[] = [];

  constructor(private router: Router, private redditService: RedditService) { }

  ngOnInit() {
    this.redditService.getPosts()
      .subscribe((response: any) => {
        // console.log(response.data.children);
        this.posts = response.data.children;
      });
  }

  goToDetail(post: any) {
    this.redditService.post = post;
    this.router.navigate(['/detail']);
  }

}
