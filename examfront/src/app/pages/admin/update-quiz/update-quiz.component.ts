import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent  implements OnInit{

  constructor (private _route:ActivatedRoute,private _quiz:QuizService,private _cat:CategoryService,private _router:Router, private _snack:MatSnackBar) {}

  qId=0;
  categories:any;

  quiz={
    title:'',
    description:'',
    maxMarks:'',
    numberOfQuestions:'',
    active: true,
    markingScheme: true,
    timeCons:'',
    passMarks:'',
    attempts:'',
    answers:false,
    category:{
      cid:'',
    }
};

  ngOnInit(): void {
       this.qId=this._route.snapshot.params['qid'];
      this._quiz.getQuiz(this.qId).subscribe(
        (data:any)=>{
          this.quiz=data;
          console.log(this.quiz);
        },
        (error)=>{
          console.log(error);
        }
      );
     this._cat.categories().subscribe(
      (data:any)=>{this.categories=data},error=>{
       alert("error in loading categories");
      }
     )
  }

  //update-quiz
  public updateData(){

    //validations
        if(this.quiz.title.trim()=='' || this.quiz.title==null)
        {
         this._snack.open("Title Required !!",'',{duration:3000,});
        return;
        }
        if(this.quiz.maxMarks.trim()=='' || this.quiz.maxMarks==null)
        {
          this._snack.open("Maximum Marks is required !!",'',{duration:3000,});
          return;
        }
      this._quiz.updateQuiz(this.quiz).subscribe(
        (data:any)=>{Swal.fire('Success','Quiz Updated Successfully','success').then((e)=>{
         this._router.navigate(['/admin/quizzes']);
        });
      },
        (error)=>{
          Swal.fire("Error !!", "Error in updating Quiz", 'error');
          console.log(error);
        }
      )
  }

}
