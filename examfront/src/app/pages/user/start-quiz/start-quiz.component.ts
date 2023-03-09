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
  neg:any;
  user:any=null;

  marksGot:any;
  correctAnswers=0;
  incorrectAnswers=0;
  poMarks=0;
  negMarks=0;
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

   //submit-test-positive-Marking
   submitQuizPos(){
    Swal.fire({
      title: 'Are you sure, you want to submit the test ?',
      icon:'question',
      showCancelButton: true,
      confirmButtonText: 'Submit',
    }).then((e:any)=>{
      if(e.isConfirmed)
      { //calculation-Positive-Marking
        this.isSubmit =true;
        this.questions.forEach((q:any)=>{

           if(q.givenAnswer==q.answer)
           {
            this.correctAnswers++;
            let marksSingle=this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions;
            this.marksGot= marksSingle*this.correctAnswers;
           }

           if(q.givenAnswer!=q.answer && q.givenAnswer.trim()!='')
           {
             this.incorrectAnswers++;
           }

           if(q.givenAnswer.trim()!='')
           {
            this.attempted++;
           }

           if(q.givenAnswer=='')
           {
             this.unattempted++;
           }
          });
      }
    })
   }

   //submit-quiz-negative-marking-evaluation
   submitQuizNeg(){
        this.questions.forEach((q:any)=>{
            // correct
           if(q.givenAnswer==q.answer)
           {
            this.correctAnswers++;
            let marksSingle=this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions;
            this.poMarks = marksSingle*this.correctAnswers;
          }
              // incorrect
          if(q.givenAnswer!=q.answer && q.givenAnswer.trim()!='' )
          {
            this.roundOff();
            this.incorrectAnswers++;
            this.negMarks = this.incorrectAnswers*this.neg;
          }
              // attempted
          if(q.givenAnswer.trim()!='')
          {
            this.attempted++;
          }
               // unattempted
          if(q.givenAnswer=='')
          {
            this.unattempted++;
          }
          });

          return this.poMarks, this.negMarks;
      }

    //  submission ofnegative marking test
   submitNeg()
   {
    Swal.fire({
      title: 'Are you sure, you want to submit the test ?',
      icon:'question',
      showCancelButton: true,
      confirmButtonText: 'Submit',
    }).then((e:any)=>{
      if(e.isConfirmed)
      { //calculation-Negative-Marking
        this.isSubmit =true;
        this.submitQuizNeg();
        let a =this.poMarks-this.negMarks;
        this.marksGot=a.toFixed(2);
      }});
      }

    // timesup submission
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
    // clear-response
   reset() {
    this.questions.givenAnswer ='';
    }

     // timer
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

    // formatted time
    getFormattedTime()
    {
    let mm = Math.floor(this.timer / 60);
    let ss= this.timer -mm *60;
    return `${mm} min : ${ss} sec`;
    }

    //  scrolling func
    scroll(i:any)
    {
     document.getElementById(i)?.scrollIntoView({behavior:'smooth'});
    }

    // round-off upto 2-digits
    roundOff()
    {
     let a= this.questions[0].quiz.maxMarks/this.questions[0].quiz.numberOfQuestions/3 ;
     this.neg=a.toFixed(2);
     return this.neg;
    }

}
