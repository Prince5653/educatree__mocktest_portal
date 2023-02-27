import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { QuizService } from 'src/app/services/quiz.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  public Editor:any = ClassicEditor;
  quesId = 0;
  question:any;
  qNumberOfQuestions:any;
  qId:any;
  qTitle:any;


  constructor (private _route:ActivatedRoute, private _question:QuestionService, private _router:Router,private _quiz:QuizService){}

  ngOnInit(): void {
      this.qNumberOfQuestions=this._route.snapshot.params['numberofquestions'];
      this.qId=this._route.snapshot.params['qid'];
      this.qTitle=this._route.snapshot.params['title'];
      this.quesId = this._route.snapshot.params['quesid'];
      this._question.getQuestion(this.quesId).subscribe(
        (data:any)=>{
          this.question=data;
          console.log(this.question);
        },(error)=>{
          console.log(error);
        }
      );
  }

  //update
  public updateQuestion(){

     //validation

   if(this.question.content.trim() == '' || this.question.content == null)
   {
    Swal.fire("Warning !!", "Question is left empty", 'warning');
    return;
   }
   if(this.question.option2.trim() == '' || this.question.option2 == null &&
    this.question.option3.trim() == '' || this.question.option3 == null &&
    this.question.option4.trim() == '' || this.question.option4 == null
  )
  {
    Swal.fire("Warning !!", "Atleast two options must be filled", 'warning');
    return;
  }
  if(this.question.option1.trim() == '' || this.question.option1 == null &&
  this.question.option3.trim() == '' || this.question.option3 == null &&
  this.question.option4.trim() == '' || this.question.option4 == null
)
{
  Swal.fire("Warning !!", "Atleast two options must be filled", 'warning');
  return;
}
if(this.question.option1.trim() == '' || this.question.option1 == null &&
  this.question.option2.trim() == '' || this.question.option2 == null &&
  this.question.option4.trim() == '' || this.question.option4 == null
)
{
  Swal.fire("Warning !!", "Atleast two options must be filled", 'warning');
  return;
}
if(this.question.option1.trim() == '' || this.question.option1 == null &&
  this.question.option2.trim() == '' || this.question.option2 == null &&
  this.question.option3.trim() == '' || this.question.option3 == null
)
{
  Swal.fire("Warning !!", "Atleast two options must be filled", 'warning');
  return;
}


   //updation

   this._question.updateQuestion(this.question).subscribe((data)=>{
    Swal.fire('Success','Question Updated successfully','success').then((e)=>{
      this._router.navigate(['/admin/view-questions/'+this.qId+'/'+this.qTitle+'/'+this.qNumberOfQuestions]);

    });
   },(error)=>{
    Swal.fire("Error !!", "Error in updating Question", 'error');
    console.log(error);
   })
  }
}
