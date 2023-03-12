import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  user:any=null;

constructor(private login:LoginService,private _user:UserService){}

ngOnInit(): void {
  this.user = this.login.getUser();

}


//delete-User
deleteUser(Id:any)
{
  Swal.fire({
    icon:'warning',
    title:"Are you sure to delete this profile ?",
    confirmButtonText:'Delete',
    showCancelButton: true,
  }).then((result)=>{
    if(result.isConfirmed)
    {
      this._user.deleteUser(Id).subscribe(
        (data)=>{
          Swal.fire('Success','User Profile Deleted Successfully','success').then((e)=>{
            if(e.isConfirmed)
            {
              this.logout();
            };
        })},
        (error)=>{
          Swal.fire("Error !!", "Error in deleting data", 'error');
        }
      );
    }})
}

public logout()
{
  this.login.logout();
  window.location.reload();
}

}
