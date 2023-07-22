import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { PdfService } from 'src/app/services/pdf.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-study-material',
  templateUrl: './view-study-material.component.html',
  styleUrls: ['./view-study-material.component.css']
})
export class ViewStudyMaterialComponent implements OnInit{

  constructor(private _pdf:PdfService){}


  pdf:any


  ngOnInit():void{

    this._pdf.getAllPdf().subscribe(
      (data:any)=>{
        this.pdf=data;
        console.log(this.pdf)
      }, (error)=>{
        console.log(error);
        Swal.fire("Error !!", "Error in loading data", 'error');
      }
    )
  }



}
