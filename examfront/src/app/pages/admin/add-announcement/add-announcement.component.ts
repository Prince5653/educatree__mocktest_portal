import { NoDataRowOutlet } from '@angular/cdk/table';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnnouncementserviceService } from 'src/app/services/announcementservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css']
})
export class AddAnnouncementComponent implements OnInit {
  constructor(private _announcement:AnnouncementserviceService, private _snack:MatSnackBar){

  }
  ngOnInit(): void {

  }

  announcement={
    title:"",
    description:"",
    date:"",
    active:"",
  }

announcementSubmit(){
//validation
if(this.announcement.title.trim()=='' || this.announcement.title ==null){
this._snack.open('Title is Required !!', '',{
  duration:3000,
  })
  return;
}

if(this.announcement.description.trim()=='' || this.announcement.description==null){
  this._snack.open('Description is required !!', '',{
    duration:3000,
  })
  return;
}

if(this.announcement.date.trim()==''|| this.announcement.date==null){
this._snack.open('Date is Required !!', '',{
  duration:3000,
})
return;
}

this._announcement.addAnnouncement(this.announcement).subscribe(
  (data:any)=>{
    this.announcement.title='';
    this.announcement.date='';
   this.announcement.description="";
   this.announcement.active="";

    Swal.fire('Success !!','Added Successfully','success');
  },
  (error)=>{
    console.log(error);
    Swal.fire('Error !!',"Server didn't respond",'error' );
  }
)


}

}
