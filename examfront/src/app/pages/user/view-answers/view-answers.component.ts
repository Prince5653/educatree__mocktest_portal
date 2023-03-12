import { QuestionService } from './../../../services/question.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-answers',
  templateUrl: './view-answers.component.html',
  styleUrls: ['./view-answers.component.css']
})
export class ViewAnswersComponent implements OnInit{


  questions:any;


  qid:any;
  cid:any;

  constructor(private _route:ActivatedRoute,private _quiz:QuizService, private _snack:MatSnackBar,private _router:Router,private _question:QuestionService){}

  ngOnInit(): void {
    this.qid=this._route.snapshot.params['qid'];
    this.cid=this._route.snapshot.params['cid'];

    this.loadQuestions();
  }

  //loading-questions
  loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions=data;
    })}
}
