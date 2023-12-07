import { Component } from '@angular/core';
import { CommentsService } from 'src/app/services/comments/comments.service';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.scss'],
})
export class UserCommentsComponent {
  comments: String[] = [];

  constructor(private commentsService: CommentsService) {
    this.commentsService.comments.subscribe((val: any) => {
      console.log(val);
      this.comments = val.map((comment: any) => comment.body);
    });

    this.commentsService.getUserComments(20);
  }
}
