import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from './../../../services/quiz.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
 qid:any;
 quiz:any;
 cid:any;
 neg:any;


  constructor (private _route:ActivatedRoute,private _quiz:QuizService, private _snack:MatSnackBar,private _router:Router) {}

  ngOnInit(): void {
      this.qid=this._route.snapshot.params['qid'];
      this.cid=this._route.snapshot.params['cid'];
      this._quiz.getQuiz(this.qid).subscribe(
        (data:any)=>{
          this.quiz=data;
        },
        (error)=>{
          console.log(error);
          this._snack.open("Server didn't respond !!",'',{duration:3000,});
        }
      )
  }

  startQuiz()
  {
Swal.fire({
  title: 'Do you want to start the test ?',
  icon:'question',
  showCancelButton: true,
  confirmButtonText: 'Start',
}).then((result) => {
  /* Read more about isConfirmed, isDenied below */
  if (result.isConfirmed) {
   this._router.navigate(['/start/'+this.cid+'/'+this.qid])
  }
})
  }

  roundOff()
  {
   let a= this.quiz.maxMarks/this.quiz.numberOfQuestions/3 ;
    this.neg=a.toFixed(2);
   return this.neg;
  }

}
