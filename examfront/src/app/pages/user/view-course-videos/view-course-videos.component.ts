import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { VideoUrlService } from 'src/app/services/video-url.service';

@Component({
  selector: 'app-view-course-videos',
  templateUrl: './view-course-videos.component.html',
  styleUrls: ['./view-course-videos.component.css']
})
export class ViewCourseVideosComponent implements OnInit {

  constructor(private _url:VideoUrlService, private _route:ActivatedRoute){}

  id:any
  videos:any
  courseTitle:any

  ngOnInit():void{
  this.id=this._route.snapshot.params['cId'];
  this.courseTitle=this._route.snapshot.params['courseTitle']
  this._url.getAllUrl(this.id).subscribe(
    (data:any)=>{
      this.videos=data;
    },(error)=>{
      console.log(error);
    }
  )
  }
}
