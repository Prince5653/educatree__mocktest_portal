import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementserviceService {
 

  constructor(private _http:HttpClient) {

   }
   //add- announcement // post
   public addAnnouncement(announcement:any){
    return this._http.post(`${baseUrl}/announcement/`,announcement)
   }

   //update- announcement
   public updateAnnouncement(announcement:any){
    return this._http.put(`${baseUrl}/announcement/`,announcement)
   }

   //get
   public getAnnouncements(){
    return this._http.get(`${baseUrl}/announcement/`)
   }

   //single
   public getAnnouncement(announcementId:any){
    return this._http.get(`${baseUrl}/announcement/${announcementId}`)
   }

   //delete
   public deleteAnnouncement(announcementId:any){
    return this._http.delete(`${baseUrl}/announcement/${announcementId}`)
   }
}
