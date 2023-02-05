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
  constructor(
    private userService:UserService,private snack:MatSnackBar
  ) {}

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:'',
  };

  ngOnInit(): void{}

  formSubmit()
  {
    console.log(this.user);
    if(this.user.username=='' || this.user.username==null)
    {
      // alert('Username is required !!')
      this.snack.open("Username is required !!","",{duration:2500});
      return;
    }
    //validate



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
  //this.user

}
