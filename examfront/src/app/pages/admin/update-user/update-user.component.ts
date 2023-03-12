import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from './../../../services/login.service';
import { UserService } from './../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { data } from 'jquery';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{

  Id:any;
  user:any;
  constructor (private _route:ActivatedRoute, private _router:Router, private _user:UserService, private _login:LoginService,private _snack:MatSnackBar) {}

  ngOnInit(): void {
    this.user = this._login.getUser();
     this.Id=this.user.id;
  }

  updateUser()
  {
    if(this.user.username.trim()=='' || this.user.username==null)
        {
         this._snack.open("Username is Required !!",'',{duration:3000,});
        return;
        }
        if(this.user.firstName.trim()=='' || this.user.firstName==null)
        {
          this._snack.open("Firstname is required !!",'',{duration:3000,});
          return;
        }
        if(this.user.email.trim()=='' || this.user.email==null)
        {
          this._snack.open("Email is required !!",'',{duration:3000,});
          return;
        }
        if(this.user.phone.trim()=='' || this.user.phone==null)
        {
          this._snack.open("Contact Number is required !!",'',{duration:3000,});
          return;
        }


    Swal.fire({
      icon:'question',
      title:"Are you sure you want to update ?",
      confirmButtonText:'Update',
      showCancelButton: true,
    }).then((result)=>{
      if(result.isConfirmed)
      {
       this._user.updateUser(this.user).subscribe((data:any)=>{
        console.log(this.user);

        Swal.fire('Success','User Details Updated Successfully','success').then((e)=>{
          this._router.navigate(['/admin/profile'])});
       },(error)=>{
        Swal.fire("Error !!", "Error in updating data", 'error');
      })
      }
  })
}


}
