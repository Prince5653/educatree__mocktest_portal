import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isLoggedIn=false;
  user:any= null;

  constructor(public login:LoginService,private _user:UserService){}

  ngOnInit(): void {
    this.isLoggedIn=this.login.isLoggedIn();
    this.user=this.login.getUser();
    this.login.loginStatusSubject.asObservable().subscribe(data=>{
      this.isLoggedIn=this.login.isLoggedIn();
      this.user=this.login.getUser();
    });
  }

  public logout()
  {
    this.login.logout();
    window.location.reload();
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
}
