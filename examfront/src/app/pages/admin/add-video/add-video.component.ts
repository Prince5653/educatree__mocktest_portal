import { AngularFireModule } from '@angular/fire/compat';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { VideoService } from 'src/app/services/video.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { data, error } from 'jquery';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  course={
    courseTitle:'',
    noOfLectures:'',
    duration:'',
    price:'',
    validity:'',
    subject:'',
    faculty:''
  };

  ngOnInit(): void {

  }
  constructor(private _course:VideoService, private _snack:MatSnackBar){}

  courseSubmit()
  {
    //validation
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

    this._course.addCourse(this.course).subscribe(
      (data:any)=>{
        this.course.courseTitle='';
        this.course.noOfLectures='';
        this.course.duration='';
        this.course.price='';
        this.course.validity='';
        this.course.subject='';
        this.course.faculty='';
        Swal.fire('Success !!','Added Successfully','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!',"Server didn't respond",'error' );
      }
    )
  }




}
