import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorydto , Quizdto } from 'src/app/services/models';
import { QuizService } from 'src/app/services/services';
import { CategoriesService } from 'src/app/services/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {
 category:Categorydto[]=[]; 
 
  quizzesData ={
    active: true,
    description: "",
    maxMarks: "",
    numberOfQuestion: "",
    title: "",
    category: {
      id:'',
      title:'',
  }  
}

  constructor(private router:Router,
    private categoryService:CategoriesService,
    private quizService:QuizService) { } 
    ngOnInit(): void {
     this.findAllCategory();
     
    }
   findAllCategory() {
    this.categoryService.findAll().subscribe({
      next: (data) => {
         this.category=data;
      },
      error: (err) => {
        console.error(err);
      }
    });
   }
  Ajouter() {
    if(this.quizzesData.title=='' || this.quizzesData.description=='' || this.quizzesData.maxMarks=='' || this.quizzesData.numberOfQuestion==''|| this.quizzesData.category?.id==null){
     Swal.fire({
       icon: 'error',
       title: 'Oops...',
       text: 'Veuillez remplir tous les champs!',
     })
     return;
  
   }
// Create a Quizdto object with all the necessary properties, including categoryId
 const quizDto: Quizdto = {
  active: true, 
  description: this.quizzesData.description,
  maxMarks: this.quizzesData.maxMarks,
  numberOfQuestion: this.quizzesData.numberOfQuestion,
  title: this.quizzesData.title,
  category: {
      id: Number(this.quizzesData.category?.id),
    title: this.quizzesData.category?.title,
  }
}
// Pass the Quizdto object as the body property of the argument to quizService.addQuiz()
this.quizService.addQuiz({ body: quizDto }).subscribe({
  next: async (data) => {
    Swal.fire("Succès", "Quiz ajouté avec succès", "success");
    await this.router.navigate(['/admin/quiz']);
  },
  error: (err) => {
    console.error(err);
    Swal.fire("Erreur", "Une erreur s'est produite lors de l'ajout du quiz", "error");
  }
});
}
}
