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
      markingScheme: true,
      timeCons:'',
      passMarks:'',
      attempts:'',
      answers:false,
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
              markingScheme: true,
              timeCons:'',
              passMarks:'',
              attempts:'',
              answers:false,
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
