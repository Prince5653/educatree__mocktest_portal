import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { PdfService } from 'src/app/services/pdf.service';
import { VideoService } from 'src/app/services/video.service';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  styleUrls: ['./view-study-material.component.css']
})
export class ViewStudyMaterialComponent implements OnInit{

  pdfs:any

  pdfId:any

  constructor(private _route:ActivatedRoute, private _pdf:PdfService,private _snack:MatSnackBar){}

  ngOnInit(): void {

    this._pdf.getAllPdf().subscribe((data:any)=>
    {
      this.pdfs=data;
      console.log(this.pdfs);
    },
    (error)=>{
     console.log(error);
     alert("error in loading PDF");
   }
    )
  }
}
