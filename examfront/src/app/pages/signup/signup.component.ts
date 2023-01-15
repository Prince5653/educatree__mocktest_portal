import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit  {
  constructor(
    private userService:UserService
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
      alert('Username is required !!')
      return;
    }
    console.log(this.user);
    if(this.user.password=='' || this.user.password==null )
    {
      alert('Password is required !!')
      return;
    }
    console.log(this.user);
    if(this.user.firstName=='' || this.user.firstName==null)
    {
      alert('Firstname is required !!')
      return;
    }

    console.log(this.user);
    if(this.user.email=='' || this.user.email==null)
    {
      alert('email is required !!')
      return;
    }
    console.log(this.user);
    if(this.user.phone=='' || this.user.phone==null)
    {
      alert('Phone Number is required !!')
      return;
    }
    //add user:userservice
    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        console.log(data);
        alert('success');
      },
      (error)=>{
        //error
        console.log(error)
        alert('something went wrong !!');
      }
    );
  }
  //this.user

}
