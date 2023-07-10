import { Component, OnInit } from '@angular/core';
import { PdfService } from 'src/app/services/pdf.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-study-materials',
  templateUrl: './study-materials.component.html',
  styleUrls: ['./study-materials.component.css']
})
export class StudyMaterialsComponent implements OnInit{

  pdfs=[
    {
      pdfId: '',
      url:'',
      title:'',
      date:'',
      subject:'',
      topic:'',
      faculty:''
    },
  ];

  constructor (private _pdf:PdfService) {}

  ngOnInit(): void {
    this._pdf.getAllPdf().subscribe(

      (data:any)=>{
        this.pdfs=data;
        console.log(this.pdfs);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error !!", "Error in loading data", 'error');
      }
    )
  }


 deletepdf(pdfId:any)
  {
   Swal.fire({
    icon:'warning',
    title:"Are you sure to delete this PDF Study Material ?",
    confirmButtonText:'Delete',
    showCancelButton: true,
   }).then((result)=>{
    if(result.isConfirmed)
    {
      //delete
      this._pdf.deletePdf(pdfId).subscribe(
        (data)=>{
          this.pdfs = this.pdfs.filter((pdf)=> pdf.pdfId != pdfId);
          Swal.fire('Success','PDF Study Material Deleted','success');
        },
        (error)=>{
          Swal.fire("Error !!", "Error in deleting data", 'error');
        }
       );
    }
   })
  }



}
