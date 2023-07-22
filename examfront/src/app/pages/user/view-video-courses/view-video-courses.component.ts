import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-video-courses',
  templateUrl: './view-video-courses.component.html',
  styleUrls: ['./view-video-courses.component.css']
})
export class ViewVideoCoursesComponent implements OnInit {

  constructor(private _courses:VideoService){}

  courses=[
    {
      cId: '',
      courseTitle:'',
      subject:'',
      noOfLectures:'',
      price:'',
      validity:'',
      faculty:'',
      duration:''
    }
  ];

   




  ngOnInit(): void {
  this._courses.courses().subscribe(
    (data:any)=>{
      this.courses=data;
      console.log(this.courses);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!", "Error in loading data", 'error');
    }
  )


  }
}
