import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit{

  qId:any;
  qTitle:any;
  questions:any= [];

  constructor (private _route:ActivatedRoute, private _question:QuestionService) {}

  ngOnInit(): void {
  this.qId=this._route.snapshot.params['qid'];
  this.qTitle=this._route.snapshot.params['title'];
  this._question.getQuestionsOfQuiz(this.qId).subscribe((data:any)=>{
    console.log(data);
    this.questions=data;
  },(error)=>{
    console.log(error);
  })
  }

  //delete
  deleteQuestion(qid:any){
    Swal.fire({
      icon:'warning',
      title:"Are you sure to delete this question ?",
      confirmButtonText:'Delete',
      showCancelButton: true,
     }).then((result)=>{
      if(result.isConfirmed)
      {
        //if delete is confirmed
        this._question.deleteQuestion(qid).subscribe(
          (data)=>{
            Swal.fire('Success','Qusetion Deleted','success');
            this.questions=this.questions.filter((q:any)=>q.quesId!=qid);
          },
          (error)=>{
            Swal.fire("Error !!", "Error in deleting data", 'error');
          }
        )
      }
     })
  }

}
