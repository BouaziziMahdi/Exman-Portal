import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorydto } from 'src/app/services/models/categorydto';
import { CategoriesService } from 'src/app/services/services';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {
categories:Categorydto[]=[];
constructor(private router:Router,
  private categoryService:CategoriesService) { } 
  ngOnInit(): void {
    this.fetchAllCategories();
  }
fetchAllCategories() {
  this.categoryService.findAll()
    .subscribe({
      next:  (response : Categorydto []) => {
          this.categories = response;
      }
    });
}
add(){
  this.router.navigate(['admin/add-category']);
}
}
