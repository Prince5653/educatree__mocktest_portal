import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoUrlService } from 'src/app/services/video-url.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-video-url',
  templateUrl: './add-video-url.component.html',
  styleUrls: ['./add-video-url.component.css']
})
export class AddVideoUrlComponent  implements OnInit{

  noOfLectures:any
  CoId:any
  coTitle:any


  Url={
    title:'',
    url:'',
   course:{cId:'',}
  }

  constructor(private _route: ActivatedRoute, private _snack:MatSnackBar, private _url:VideoUrlService,private _router:Router ){}

  ngOnInit(): void {
  this.noOfLectures=this._route.snapshot.params['noOfLectures'];
  this.CoId=this._route.snapshot.params['cId'];
  this.coTitle=this._route.snapshot.params['courseTitle'];
  this.Url.course['cId'] = this.CoId;
  }


  
  dataSubmit(){

    //validation
    if(this.Url.title.trim() == '' || this.Url.title == null)
    {
      this._snack.open('Title of the video is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.Url.url.trim() == '' || this.Url.url == null)
    {
      this._snack.open('URL is Required !!', '',{
      duration:3000,
      });
      return;
    }


    this._url.addUrl(this.Url).subscribe(
      (data:any)=>{
        Swal.fire('Success','URL added Successfully','success').then((e)=>{
          this._router.navigate(['/admin/videos-url/'+this.CoId+'/'+this.coTitle+'/'+this.noOfLectures]);
        });
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!',"Server didn't respond",'error' );
      }
    )
}

}
