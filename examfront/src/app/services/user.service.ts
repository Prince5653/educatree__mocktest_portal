import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  //add user
  public addUser(user:any)
  {
    return this.http.post(`${baseUrl}/user/`,user);
  }

//delete user
public deleteUser(Id:any)
{
 return this.http.delete(`${baseUrl}/user/${Id}`);
}

//update user
public updateUser(user:any)
{
  return this.http.put(`${baseUrl}/user/`,user);
}
}
