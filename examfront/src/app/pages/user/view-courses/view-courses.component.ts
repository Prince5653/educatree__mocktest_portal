import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css']
})
export class ViewCoursesComponent implements OnInit {

  cId:any

  courses:any


  constructor(private _route:ActivatedRoute, private _course:VideoService,private _snack:MatSnackBar){}

  ngOnInit():void{

    this._course.courses().subscribe((data:any)=>
   {
     this.courses=data;
     console.log(this.courses);
   },
   (error)=>{
    console.log(error);
    alert("error in loading courses");
  }
   )

  }
}
