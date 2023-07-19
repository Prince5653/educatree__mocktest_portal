import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private _http:HttpClient) { }

  //load all course
  public courses()
  {
    return this._http.get(`${baseUrl}/course/`);
  }

  //add course
  public addCourse(course:any)
  {
    return this._http.post(`${baseUrl}/course/`,course );
  }

  //update-course
  public updateCourse(course:any)
  {
    return this._http.put(`${baseUrl}/course/` ,course );
  }

  //load single course
  public getCourse(cId:any)
  {
    return this._http.get(`${baseUrl}/course/${cId}`);
  }

  //delete course
  public deleteCourse(cId:any)
  {
    return this._http.delete(`${baseUrl}/course/${cId}`);
  }

}
