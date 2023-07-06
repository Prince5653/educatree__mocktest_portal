import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private _http:HttpClient) { }

  //add-pdf
public addPdf(pdf:any)
{
  return this._http.post(`${baseUrl}/pdf/` ,pdf);
}

  //update pdf
public updatePdf(pdf:any)
{
  return this._http.put(`${baseUrl}/pdf/`,pdf);
}
  //get pdf
public getPdf(pdfID:any)
{
  return this._http.get(`${baseUrl}/pdf/${pdfID}`);
}
  //get all pdf
public getAllPdf()
{
  return this._http.get(`${baseUrl}/pdf/`);
}
  //delete pdf
public deletePdf(pdfID:any)
{
  return this._http.delete(`${baseUrl}/pdf/${pdfID}`);
}
}
