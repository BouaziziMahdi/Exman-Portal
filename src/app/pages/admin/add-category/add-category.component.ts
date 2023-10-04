import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorydto } from 'src/app/services/models';
import { CategoriesService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent {
category:Categorydto={
  description: '',
  title: '',
};
errorMsg: Array<string> = [];
constructor( private  router:Router,
  private categoryService:CategoriesService) { }

  Ajouter() {
     if(this.category.title=='' || this.category.description==''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Veuillez remplir tous les champs!',
      })
      return;
    }
    this.categoryService.save1$Response({
        body: this.category
      }
    ).subscribe({
      next: async (data) => {
        Swal.fire("Succès", "Catégorie ajoutée avec succès", "success")
        await this.router.navigate(['/admin/category']);
      },
     
    });
  }
}

