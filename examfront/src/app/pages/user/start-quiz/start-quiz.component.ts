import { QuestionService } from './../../../services/question.service';
import { ActivatedRoute } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { __values } from 'tslib';


@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {

  qid:any;
  questions:any;
  isSubmit=false;
  state:any;
  cid:any;

  marksGot=0;
  correctAnswers=0;
  attempted=0;
  marked=0;
  unattempted=0;

   constructor(private _location:LocationStrategy,private _route:ActivatedRoute, private _question:QuestionService) {}

   ngOnInit(): void {
     this.preventBack();
    //  this.preventRight();
     this.preventNewTab();

     this.qid=this._route.snapshot.params['qid'];
     this.cid=this._route.snapshot.params['cid'];
     this.loadQuestions();

   }

   //loading-questions
   loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions=data;
      this.questions.forEach((q:any)=>{
       q['givenAnswer']='';
      });
      console.log(this.questions);
    },
    (error)=>{
      Swal.fire("Error","Error in Loading Questions", 'error');
    })
   }

   //security-functions
   preventBack(){
    history.pushState(null, 'null' ,location.href);
    this._location.onPopState(()=>{
      history.pushState(null, 'null' ,location.href)
    });
   }

   preventRight(){
   window.oncontextmenu=function(){
    return false;
   }
   }

   preventNewTab(){
    document.addEventListener("visibilitychange", function(){
      document.title = document.visibilityState;
    });
   }

   //submit-test
   submitQuiz(){
    Swal.fire({
      title: 'Are you sure, you want to submit the test ?',
      icon:'question',
      showCancelButton: true,
      confirmButtonText: 'Submit',
    }).then((e:any)=>{
      if(e.isConfirmed)
      { //calculation
        this.isSubmit =true;
        this.questions.forEach((q:any)=>{
           if(q.givenAnswer==q.answer)
           {
            this.correctAnswers++;
            let marksSingle=this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions;
            this.marksGot += marksSingle;

           }

           if(q.givenAnswer.trim()!='')
           {
            this.attempted++;
            this.unattempted= this.questions.length-this.attempted;
           }
          });
      }
    })
   }



   reset() {
    this.questions.givenAnswer ='';
    }

}
