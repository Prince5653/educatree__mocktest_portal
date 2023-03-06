import { LoginService } from './../../../services/login.service';
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
  timer:any;
  user:any=null;

  marksGot=0;
  correctAnswers=0;
  attempted=0;
  marked=0;
  unattempted=0;

   constructor(private _location:LocationStrategy,private _route:ActivatedRoute, private _question:QuestionService,private _user:LoginService) {}

   ngOnInit(): void {
     this.preventBack();
    //  this.preventRight();
     this.preventNewTab();

     this.qid=this._route.snapshot.params['qid'];
     this.cid=this._route.snapshot.params['cid'];
     this.loadQuestions();

     this.user = this._user.getUser();

   }

   //loading-questions
   loadQuestions(){
    this._question.getQuestionsOfQuizForTest(this.qid).subscribe((data:any)=>{
      this.questions=data;

      this.timer=this.questions.length*2*60;

      this.questions.forEach((q:any)=>{
       q['givenAnswer']='';
      });
      console.log(this.questions);
      this.startTimer();
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


   timesUp()
   {
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

   reset() {
    this.questions.givenAnswer ='';
    }


    startTimer()
    {
      let t = window.setInterval(()=>{
        //code
        if(this.timer<=0)
        {
          this.timesUp();
          clearInterval(t);
        }else{
          this.timer--;
        }
      },1000);
    }

    getFormattedTime()
    {
    let mm = Math.floor(this.timer / 60);
    let ss= this.timer -mm *60;
    return `${mm} min : ${ss} sec`;
    }



}
