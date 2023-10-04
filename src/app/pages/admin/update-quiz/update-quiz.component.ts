import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quizdto } from 'src/app/services/models';
import { CategoriesService, QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.scss']
})
export class UpdateQuizComponent implements OnInit {
  id=0;
  quiz:Quizdto={} as Quizdto;
  category: any;
  constructor(private route: ActivatedRoute, private quizService: QuizService,
    private categoryService:CategoriesService) { }

  ngOnInit(): void {
    this.getQuiz(this.id);
    this.categoryService.findAll().subscribe({
      next: (data) => {
         this.category=data;
      },
      error: (err) => {
        console.error(err);
      }
    });
    }
getQuiz(id: number) { 
  this.id = +this.route.snapshot.params['idQuiz'];
    this.quizService.getQuizById({idQuiz: this.id})
      .subscribe((data: any) => {
        this.quiz = data;
      });
}
updateQuiz() {
  if (this.quiz?.id) {
    this.quizService.updateQuiz({body:this.quiz}).subscribe({
      next:async (data) => {
        Swal.fire('Success', 'Quiz updated successfully', 'success').then((result) => {
          if (result.isConfirmed) {
            window.location.href = '/admin/view-quiz';
          }
        });
      },
      error: (err) => {
        Swal.fire('Error', 'Error while updating quiz', 'error');
      }
    });
  }
}
 }
