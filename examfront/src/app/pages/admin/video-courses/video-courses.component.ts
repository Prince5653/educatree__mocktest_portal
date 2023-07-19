import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.css']
})
export class VideoCoursesComponent implements OnInit{

  constructor (private _course:VideoService) {}

  courses=[
    {
      cId: '',
      courseTitle:'',
      noOfLectures:'',
      description:'',
      duration:'',
      active:'',
      subject:'',
      price:'',
      validity:'',
      faculty:''
    },
  ];

  ngOnInit(): void {
 this._course.courses().subscribe(

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



  
  deleteCourse(cId:any)
  {
   Swal.fire({
    icon:'warning',
    title:"Are you sure to delete this video course ?",
    confirmButtonText:'Delete',
    showCancelButton: true,
   }).then((result)=>{
    if(result.isConfirmed)
    {
      //delete
      this._course.deleteCourse(cId).subscribe(
        (data)=>{
          this.courses = this.courses.filter((course)=> course.cId != cId);
          Swal.fire('Success','Video Course Deleted','success');
        },
        (error)=>{
          Swal.fire("Error !!", "Error in deleting data", 'error');
        }
       );
    }
   })
  }

}
