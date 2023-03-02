import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
 qid:any;
 quiz:any;

  constructor (private _route:ActivatedRoute,private _quiz:QuizService, private _snack:MatSnackBar) {}

  ngOnInit(): void {
      this.qid=this._route.snapshot.params['qid'];
      this._quiz.getQuiz(this.qid).subscribe(
        (data:any)=>{
          this.quiz=data;
        },
        (error)=>{
          console.log(error);
          this._snack.open("Server didn't respond !!",'',{duration:3000,});
        }
      )
  }

}
