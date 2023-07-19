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

Id:any

  courses:any=[];

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
this.Id=this.courses.cId;
  }




  deleteCourse(Id:any)
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
      this._course.deleteCourse(Id).subscribe(
        (data)=>{
          this.courses = this.courses.filter((course:any)=> course.cId != Id);
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
