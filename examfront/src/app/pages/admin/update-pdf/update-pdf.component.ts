import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { PdfService } from 'src/app/services/pdf.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-pdf',
  templateUrl: './update-pdf.component.html',
  styleUrls: ['./update-pdf.component.css']
})
export class UpdatePdfComponent implements OnInit {


  pdfID=0

  pdf={
    pdfID:'',
    title:'',
    url:'',
    faculty:'',
    date:'',
    subject:'',
    topic:'',
  }

  constructor(private _route:ActivatedRoute,private _router:Router, private _snack:MatSnackBar, private _pdf:PdfService){}

  ngOnInit(): void {

    this.pdfID=this._route.snapshot.params['pdfID'];
       this._pdf.getPdf(this.pdfID).subscribe(
        (data:any)=>{
          this.pdf=data;
          console.log(this.pdf);
          console.log(this.pdf.title);
        },
        (error)=>{
          console.log(error);
        }
      );
  }



  //update-quiz
  public updateData(){

    //validations
    if(this.pdf.title.trim() == '' || this.pdf.title == null)
    {
      this._snack.open('Title is Required !!', '',{
      duration:3000,
      });
      return;
    }
    if(this.pdf.url.trim() == '' || this.pdf.url == null)
    {
      this._snack.open('URL is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.date.trim() == '' || this.pdf.date == null)
    {
      this._snack.open('Date is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.faculty.trim() == '' || this.pdf.faculty == null)
    {
      this._snack.open('Faculty Name is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.subject.trim() == '' || this.pdf.subject == null)
    {
      this._snack.open('Subject is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.topic.trim() == '' || this.pdf.topic == null)
    {
      this._snack.open('Topic is Required !!', '',{
      duration:3000,
      });
      return;
    }



      this._pdf.updatePdf(this.pdf).subscribe(
        (data:any)=>{Swal.fire('Success','Study Material Updated Successfully','success').then((e)=>{
         this._router.navigate(['/admin/study-materials']);
        });
      },
        (error)=>{
          Swal.fire("Error !!", "Error in updating Study Material", 'error');
          console.log(error);
        }
      )
  }
}
