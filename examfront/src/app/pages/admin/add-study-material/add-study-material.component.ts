import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PdfService } from 'src/app/services/pdf.service';
import { VideoService } from 'src/app/services/video.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-study-material',
  templateUrl: './add-study-material.component.html',
  styleUrls: ['./add-study-material.component.css']
})
export class AddStudyMaterialComponent implements OnInit{

  constructor(private _pdf:PdfService, private _snack:MatSnackBar){}

  ngOnInit(): void {

  }

  pdf={
    title:'',
    url:'',
    date:'',
    faculty:'',
    topic:'',
    subject:'',
  }


  pdfSubmit(){

    //validation
    if(this.pdf.title.trim() == '' || this.pdf.title == null)
    {
      this._snack.open('Title of the PDF is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.url.trim() == '' || this.pdf.url == null)
    {
      this._snack.open('PDF URL is Required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.date.trim() == '' || this.pdf.date == null)
    {
      this._snack.open('Please enter the date !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.subject.trim() == '' || this.pdf.subject == null)
    {
      this._snack.open('Subject of PDF is required !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.faculty.trim() == '' || this.pdf.faculty == null)
    {
      this._snack.open('Please enter Faculty Name !!', '',{
      duration:3000,
      });
      return;
    }

    if(this.pdf.topic.trim() == '' || this.pdf.topic == null)
    {
      this._snack.open('Please specify the topic of PDF !!', '',{
      duration:3000,
      });
      return;
    }

    this._pdf.addPdf(this.pdf).subscribe(
      (data:any)=>{
        this.pdf.title='';
        this.pdf.date='';
        this.pdf.faculty='';
        this.pdf.subject='';
        this.pdf.url='';
        this.pdf.topic='';

        Swal.fire('Success !!','Added Successfully','success');
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error !!',"Server didn't respond",'error' );
      }
    )
}
}
