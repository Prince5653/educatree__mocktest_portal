import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { error } from 'jquery';
import { VideoUrlService } from 'src/app/services/video-url.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-view-course-videos',
  templateUrl: './view-course-videos.component.html',
  styleUrls: ['./view-course-videos.component.css']
})
export class ViewCourseVideosComponent implements OnInit {


  constructor(private _route:ActivatedRoute, private _course:VideoService,private _snack:MatSnackBar,private _url:VideoUrlService){}
  cId:any

  courses:any

  Videos:any

  ngOnInit(): void {

    this.cId=this._route.snapshot.params['cId'];
    this._url.getAllUrl(this.cId).subscribe((data:any)=>
    {
      this.Videos=data;
      console.log(this.Videos);
    },
    (error)=>{
     console.log(error);
     alert("error in loading videos");
   }
    )

   this._course.getCourse(this.cId).subscribe((data:any)=>
   {
    this.courses=data;
   },
   (error)=>{
    console.log(error);
   })



  }


}
