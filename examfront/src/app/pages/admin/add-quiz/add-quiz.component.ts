import { QuizService } from 'src/app/services/quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent  implements OnInit{

  categories=[
    {
    cid:'',
    title:'',
  }
  ];

  quizData={
      title:'',
      description:'',
      maxMarks:'',
      numberOfQuestions:'',
      active: true,
      category:{
        cid:'',
      }
  };


  constructor(private _cat:CategoryService, private _snack:MatSnackBar, private _quiz:QuizService){}

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        //categories-load
        this.categories=data;
        console.log(this.categories);
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!',"Server didn't respond",'error' );
      }
    );
  }
      //add-quiz
      addQuiz()
      {
        //validation
        if(this.quizData.title.trim()=='' || this.quizData.title==null)
        {
         this._snack.open("Title Required !!",'',{duration:3000,});
        return;
        }

        if(this.quizData.maxMarks.trim()=='' || this.quizData.maxMarks==null)
        {
         this._snack.open("Maximum Marks is required !!",'',{duration:3000,});
        return;
        }
        if(this.quizData.numberOfQuestions.trim()=='' || this.quizData.numberOfQuestions==null)
        {
         this._snack.open("Number of Questions is required !!",'',{duration:3000,});
        return;
        }
        if(this.quizData.category.cid.trim()=='' || this.quizData.category.cid==null)
        {
         this._snack.open("Category Required !!",'',{duration:3000,});
        return;
        }


        //call_server
        this._quiz.addQuiz(this.quizData).subscribe(
          (data)=>{
            Swal.fire('Success','Added Successfully','success')
            this.quizData={
              title:'',
              description:'',
              maxMarks:'',
              numberOfQuestions:'',
              active: true,
              category:{
                cid:'',
              },
          };
          },
           (error)=>{
            Swal.fire("Error !!", "Error while adding quiz", 'error');
            console.log(error);
           }
        )
      }

}
