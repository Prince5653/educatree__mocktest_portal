import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

 categories:any= [];

  constructor(private _category:CategoryService) { }

  ngOnInit(): void {
     this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
     },
     (error)=>{
      console.log(error);
      Swal.fire("Error !!", "Error in loading data", 'error');
     });
  }
  //delete-category
  deleteCategory(cid:any)
  {
    Swal.fire({
      icon:'warning',
      title:"Are you sure to delete this category ?",
      confirmButtonText:'Delete',
      showCancelButton: true,
     }).then((result)=>{
      if(result.isConfirmed)
      {
        //delete
        this._category.deleteCategory(cid).subscribe(
          (data)=>{
            this.categories=this.categories.filter((Category:any)=>Category.cid!=cid);
            Swal.fire('Success','Category Deleted','success');
          },
          (error)=>{
            Swal.fire("Error !!", "Error in deleting data", 'error');
          }
         );
      }
     })
  }
}
