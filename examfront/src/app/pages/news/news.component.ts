import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnnouncementserviceService } from 'src/app/services/announcementservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent  implements OnInit{
constructor(private _annoumcement:AnnouncementserviceService, private _snack:MatSnackBar){

}
ngOnInit(): void {
  this._annoumcement.getAnnouncements().subscribe(

    (data:any)=>{
      this.announcement=data;
      console.log(this.announcement);

    },
    (error)=>{
      console.log(error);
      Swal.fire("Error !!", "Error in loading data", 'error');
    }
  )

}

id=81
announcement=[{
  title:"",
  description:"",
  date:"",
  active:"",
}]


}
