import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { AnnouncementserviceService } from 'src/app/services/announcementservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-announcements',
  templateUrl: './view-announcements.component.html',
  styleUrls: ['./view-announcements.component.css']
})
export class ViewAnnouncementsComponent implements OnInit {


  news:any


  constructor(private _news:AnnouncementserviceService){}

  ngOnInit():void {
    this._news.getAnnouncements().subscribe(data=>{
      this.news=data
      console.log(this.news)
    },
    (error)=>{
     console.log(error);
     Swal.fire("Error !!", "Error in loading data", 'error');
    });
  }
}
