import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';



@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit{

  catId:any;
  quizzes:any;


  constructor(private _route:ActivatedRoute, private _quiz:QuizService,private _snack:MatSnackBar){}

  ngOnInit(): void {

     this._route.params.subscribe((params)=>{
      this.catId=params['catId'];
      if(this.catId==0){
        this._quiz.getActiveQuizzes().subscribe((data:any)=>{
          this.quizzes=data;
          console.log(this.quizzes);
        },(error)=>{
          console.log(error);
          this._snack.open("Error in loading Quizzes",'',{duration:3000,});
        })
       }else{
          this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
            (data:any)=>{
              this.quizzes=data;
            },
            (error)=>{
              console.log(error);
              this._snack.open("Error in loading Quizzes",'',{duration:3000,});
            }
          )

       }
     });

    }

  }



