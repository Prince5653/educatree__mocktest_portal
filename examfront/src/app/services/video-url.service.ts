import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class VideoUrlService {

  constructor(private _http:HttpClient) { }

  //add url
  public addUrl(videos:any)
  {
    return this._http.post(`${baseUrl}/videos/` ,videos);
  }

  //update url
  public updateUrl(videos:any)
  {
    return this._http.put(`${baseUrl}/videos/` ,videos);
  }

  //get all url of course
  public getAllUrl(cId:any)
  {
    return this._http.get(`${baseUrl}/videos/course/${cId}`);
  }

  //get url
  public getUrl(vID:any)
  {
    return this._http.get(`${baseUrl}/videos/${vID}`);
  }

  //delete url
  public deleteUrl(vID:any)
  {
    return this._http.delete(`${baseUrl}/videos/${vID}`);
  }
}
