import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  public Editor:any = ClassicEditor;

qId:any;
qTitle:any;
question={
  quiz:{qId:'',},
  content:'',
  option1:'',
  option2:'',
  option3:'',
  option4:'',
  answer:'',
};


  constructor(private _route:ActivatedRoute, private _question:QuestionService) {}

  ngOnInit(): void {
      this.qId=this._route.snapshot.params['qid'];
      this.question.quiz['qId'] = this.qId;
      this.qTitle=this._route.snapshot.params['title'];
  }

  formSubmit(){

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

   if(this.question.answer.trim() == '' || this.question.answer == null)
   {
    Swal.fire("Warning !!", "Answer is left empty", 'warning');
    return;
   }


   //submit
   this._question.addQuestion(this.question).subscribe(
    (data:any)=>{
      Swal.fire('Success','Question Added Successfully','success');
      this.question.content='';
      this.question.option1='';
      this.question.option2='';
      this.question.option3='';
      this.question.option4='';
      this.question.answer='';
    },
    (error)=>{
      Swal.fire("Error !!", "Server didn't respond", 'error');
    }
   )
  }
}
