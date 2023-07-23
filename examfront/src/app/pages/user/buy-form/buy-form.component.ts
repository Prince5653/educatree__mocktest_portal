import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buy-form',
  templateUrl: './buy-form.component.html',
  styleUrls: ['./buy-form.component.css']
})
export class BuyFormComponent implements OnInit {

  constructor(private _course:VideoService, private _route:ActivatedRoute){}

  title:any;
  id:any;
  course:any;



  ngOnInit():void {
this.title=this._route.snapshot.params['courseTitle']
this.id=this._route.snapshot.params['cId']

this._course.getCourse(this.id).subscribe(
  (data:any)=>{
    this.course=data;
  }, (error)=>{
    console.log(error);
    Swal.fire("Error !!", "Error in loading data", 'error');
  }
)
  }
}
