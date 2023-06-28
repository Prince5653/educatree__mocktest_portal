import { AngularFireModule } from '@angular/fire/compat';
import { Subject } from 'rxjs/internal/Subject';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent {

  constructor(private _http:HttpClient, private afs:AngularFireModule){}

  courseCreate(videos:{title:string,noLectures:string,courseLength:string,price:string,validity:string,subject:string,faculty:string})
  {
  console.log(videos);
  this._http.post('https://educatree-4004b-default-rtdb.firebaseio.com/videos.json',videos).subscribe((res)=>{
    console.log(res);
  });
  }
}
