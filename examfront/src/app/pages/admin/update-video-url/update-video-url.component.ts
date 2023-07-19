import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoUrlService } from 'src/app/services/video-url.service';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-video-url',
  templateUrl: './update-video-url.component.html',
  styleUrls: ['./update-video-url.component.css']
})
export class UpdateVideoUrlComponent implements OnInit {

  constructor(private _route:ActivatedRoute,private _router:Router, private _snack:MatSnackBar, private _course:VideoService, private _video:VideoUrlService){}

  vID = 0;
  video:any;
  noOfLectures:any;
  cId:any;
  courseTitle:any;

  ngOnInit(): void {
    this.noOfLectures=this._route.snapshot.params['noOfLectures'];
    this.cId=this._route.snapshot.params['cId'];
    this.courseTitle=this._route.snapshot.params['courseTitle'];
    this.vID = this._route.snapshot.params['vID'];
    this._video.getUrl(this.vID).subscribe(
      (data:any)=>{
        this.video=data;
        console.log(this.video);
      },(error)=>{
        console.log(error);
      }
    );
}




  //update
  public updateURL(){

    //validation

  if(this.video.title.trim() == '' || this.video.title == null)
  {
   Swal.fire("Warning !!", "Title is required !!", 'warning');
   return;
  }

  if(this.video.url.trim() == '' || this.video.url == null)
  {
   Swal.fire("Warning !!", "URL is required !!", 'warning');
   return;
  }
  //updation
  this._video.updateUrl(this.video).subscribe((data)=>{
   Swal.fire('Success','Video URL Updated successfully','success').then((e)=>{
     this._router.navigate(['/admin/videos-url/'+this.cId+'/'+this.courseTitle+'/'+this.noOfLectures]);

   });
  },(error)=>{
   Swal.fire("Error !!", "Error in updating URL", 'error');
   console.log(error);
  })
 }


}
