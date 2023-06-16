import { Component } from '@angular/core';
import { CommentService } from './comment.service';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs/internal/operators/pluck';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  comments$ = this.commentService.getComments();

  comment$ = this.activatedRoute.data.pipe(pluck('comments'));

  constructor(private commentService: CommentService, private activatedRoute:ActivatedRoute) {
    
  }

  ngOnInit(){
    // this.activatedRoute.data.subscribe(data=>{
    //   //console.log(data);
    //   data['comments']
    // })
  }
  

}
