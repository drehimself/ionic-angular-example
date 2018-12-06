import { Component, OnInit } from '@angular/core';
import { RedditService } from '../reddit.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  post: any;

  constructor(private redditService: RedditService) { }

  ngOnInit() {
    this.post = this.redditService.post;
  }

}
