import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoUrlService } from 'src/app/services/video-url.service';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-url',
  templateUrl: './video-url.component.html',
  styleUrls: ['./video-url.component.css']
})
export class VideoUrlComponent implements OnInit {


  video:any;

  course:any;

  cId:any;
  courseTitle:any;
  cNumberOfLectures:any;
  videos:any= [
    {
      vID:'',
      title:'',
      url:''
    }
  ];
  i:any;

  constructor (private _course:VideoService, private _snack:MatSnackBar, private _video:VideoUrlService, private _router:Router,private _route:ActivatedRoute) {}



  ngOnInit (): void {

    this.cNumberOfLectures=this._route.snapshot.params['noOfLectures'];
    this.cId=this._route.snapshot.params['cId'];
    this.courseTitle=this._route.snapshot.params['courseTitle'];



    this._video.getAllUrl(this.cId).subscribe((data:any)=>{

      this.videos=data;
      this.i=this.videos.length;
      console.log(this.videos)
    },(error)=>{
      console.log(error);
    })
  }





   //delete
   deleteURL(vID:any){
    Swal.fire({
      icon:'warning',
      title:"Are you sure to delete this Video ?",
      confirmButtonText:'Delete',
      showCancelButton: true,
     }).then((result)=>{
      if(result.isConfirmed)
      {
        //if delete is confirmed
        this._video.deleteUrl(vID).subscribe(
          (data)=>{
            Swal.fire('Success','Qusetion Deleted','success').then(function() {
              window.location.reload();
          });
            this.videos=this.videos.filter((v:any)=>v.vId!=vID);
          },
          (error)=>{
            Swal.fire("Error !!", "Error in deleting data", 'error');
          }
        )
      }
     })
  }



}
