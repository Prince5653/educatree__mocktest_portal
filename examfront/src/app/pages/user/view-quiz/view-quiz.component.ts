import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from './../../../services/quiz.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.css']
})
export class ViewQuizComponent implements OnInit{

  catId:any;
  qId:any;
  quizzes:any;
  constructor (private _quiz:QuizService, private _route:ActivatedRoute,private _router:Router) {}

  ngOnInit(): void {
  this.qId=this._route.snapshot.params['qid'];
  this._route.params.subscribe((params)=>{
  this.catId=params['catId'];
  this._quiz.getQuiz(this.qId).subscribe((data:any)=>{
  this.quizzes=data;
   },
   (error)=>{
   console.log(error);
    })
    })
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
    this._router.navigate(['/start/'+this.qId])
   }
 })
   }
  }

