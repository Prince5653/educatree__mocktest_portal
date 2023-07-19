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
      pdfID: '',
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


   //delete-quiz
   deletePdf(pdfID:any)
   {
    Swal.fire({
     icon:'warning',
     title:"Are you sure to delete this quiz ?",
     confirmButtonText:'Delete',
     showCancelButton: true,
    }).then((result)=>{
     if(result.isConfirmed)
     {
       //delete
       this._pdf.deletePdf(pdfID).subscribe(
         (data)=>{

          this.pdfs = this.pdfs.filter((pdf)=> pdf.pdfID != pdfID);
           Swal.fire('Success','Study Material Deleted','success');
         },
         (error)=>{
           Swal.fire("Error !!", "Error in deleting data", 'error');
         }
        );
     }
    })
   }



}
