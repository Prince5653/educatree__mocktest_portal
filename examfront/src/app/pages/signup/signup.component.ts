import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  hide = true;
  constructor(
    private userService:UserService,private snack:MatSnackBar
  ) {}

  public user={
    username:'',
    password:'',
    confirmPassword:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void{}

  formSubmit()
  {


    if(this.user.username=='' || this.user.username==null)
    {
      // alert('Username is required !!')
      this.snack.open("Username is required !!","",{duration:2500});
      return;
    }
    if(this.user.password=='' || this.user.password==null)
    {
      // alert('password is required !!')
      this.snack.open("Password is required !!","",{duration:2500});
      return;
    }
    if(this.user.confirmPassword=='' || this.user.confirmPassword==null)
    {
      // alert('confirm-password is required !!')
      this.snack.open("Confirm your Password !!","",{duration:2500});
      return;
    }
    if(this.user.password!=this.user.confirmPassword )
    {
      // alert('password match !!')
      this.snack.open("Password didn't matched, Try Again !","",{duration:2500});
      return;
    }


    if(this.user.firstName=='' || this.user.firstName==null)
    {
      // alert('firstname is required !!')
      this.snack.open("Firstname is required !!","",{duration:2500});
      return;
    }
    if(this.user.email=='' || this.user.email==null)
    {
      // alert('email is required !!')
      this.snack.open("Email is required !!","",{duration:2500});
      return;
    }
    if(this.user.phone=='' || this.user.phone==null)
    {
      // alert('phone is required !!')
      this.snack.open("Contact Number is required !!","",{duration:2500});
      return;
    }

    //add user:userservice
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        //success
        console.log(data);
        // alert('success');
        Swal.fire('Registeration Done','User ID is '+data.id,'success');
      },
      (error)=>{
        //error
        console.log(error)
        // alert('Userfound exception');
        this.snack.open('Username already exists, try with another one !!','',{duration:2500});
      }
    );
  }


}
