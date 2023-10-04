import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  Quizdto } from 'src/app/services/models';
import {  QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quiz',
  templateUrl: './view-quiz.component.html',
  styleUrls: ['./view-quiz.component.scss']
})
export class ViewQuizComponent implements OnInit {
  quiz:Array<Quizdto>=[];
  
constructor(private router:Router,
  private quizService:QuizService) { } 

  ngOnInit(): void {
    this.fetchAllQuiz();
  }
  fetchAllQuiz() {
    this.quizService.getAllQuiz()
      .subscribe({
   next: ( response:any) => {
          this.quiz = response;
          this.router.navigate(['admin/view-quiz']);
        }
      });
  }
  Ajouterquiz(){
  this.router.navigate(['admin/add-quiz']);
}

deleteQuiz(id:number ) {
  this.quizService.deleteQuiz({idQuiz:id})
    .subscribe({
      next: (response:any) => {
        Swal.fire({
          title: 'Supprimer',
          text: 'Quiz supprimé avec succès',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: 'OK',
        });
        this.fetchAllQuiz();
      }
    });
}
updateQuiz(QuizId: number) {
  this.router.navigate(['admin/update-quiz', QuizId]);
}
  }