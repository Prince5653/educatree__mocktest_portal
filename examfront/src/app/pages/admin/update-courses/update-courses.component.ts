import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoUrlService } from 'src/app/services/video-url.service';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-courses',
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.css']
})
export class UpdateCoursesComponent implements OnInit{

  cId=0;
  course:any;



  constructor(private _route:ActivatedRoute,private _router:Router, private _snack:MatSnackBar, private _course:VideoService, private _video:VideoUrlService ){}


  ngOnInit(): void {

    this.cId=this._route.snapshot.params['cId'];
       this._course.getCourse(this.cId).subscribe(
        (data:any)=>{
          this.course=data;
          console.log(this.course);
        },
        (error)=>{
          console.log(error);
        }
      );
  }


  //update-quiz
  public updateData(){

    //validations
    if(this.course.courseTitle.trim() == '' || this.course.courseTitle == null)
    {
      this._snack.open('Title of the Course is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.noOfLectures.trim() == '' || this.course.noOfLectures == null)
    {
      this._snack.open('Number of Lectures is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.duration.trim() == '' || this.course.duration == null)
    {
      this._snack.open('Length of the Course is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.price.trim() == '' || this.course.price == null)
    {
      this._snack.open('Price of the Course is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.validity.trim() == '' || this.course.validity == null)
    {
      this._snack.open('Validity of the Course is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.subject.trim() == '' || this.course.subject == null)
    {
      this._snack.open('Subject of the Course is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.course.faculty.trim() == '' || this.course.faculty == null)
    {
      this._snack.open('Faculty Name is Required !!', '',{
      duration:3000,
      });
      return;
    }


      this._course.updateCourse(this.course).subscribe(
        (data:any)=>{Swal.fire('Success','Video Course Updated Successfully','success').then((e)=>{
         this._router.navigate(['/admin/video-courses']);
        });
      },
        (error)=>{
          Swal.fire("Error !!", "Error in updating Video Course", 'error');
          console.log(error);
        }
      )
  }
}
