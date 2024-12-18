import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
hide = true;
loginData={
  username:'',
  password:'',
};

  constructor(private snack:MatSnackBar, private login:LoginService,private router:Router){}
  ngOnInit(): void {}

  formSubmit()
  {
    console.log("Login btn clicked");

    if(this.loginData.username.trim()=='' || this.loginData.username==null){
       this.snack.open('Username is required !!','',{duration:3000,});
       return;
      }
    if(this.loginData.password.trim()=='' || this.loginData.password==null){
       this.snack.open('Password is required !!','',{duration:3000,});
       return;
      }
      //request to server to genetrate-token
      this.login.generateToken(this.loginData).subscribe(
        (data:any)=>{
          console.log("success");
          console.log(data);

          //login...
          this.login.loginUser(data.token);
          this.login.getCurrentUser().subscribe(
            (user:any)=>{
              this.login.setUser(user);
              console.log(user);
              //redirect .. Admin- admin dashboard
              //redirect.. normal to normal dashboard
              if(this.login.getUserRole()=="ADMIN")
              {
                 //admin-dashboard
                // window.location.href='/admin';
                this.router.navigate(['admin']);
                this.login.loginStatusSubject.next(true);
              }else if(this.login.getUserRole()=="NORMAL")
              {
                 //normal-dashboard
                //  window.location.href='/user-dashboard';
                this.router.navigate(['user-dashboard/user-home']);
                this.login.loginStatusSubject.next(true);
              }else{
                this.login.logout();

              }


        });


        },
        (error)=>{
          console.log("Error !!");
          console.log(error);
          this.snack.open('Invalid Details !!','',{duration:3000,});
        }
      );
  }
}
