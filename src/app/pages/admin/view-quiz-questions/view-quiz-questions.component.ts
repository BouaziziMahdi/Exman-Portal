import { Component, OnInit } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { deleteQuestion } from 'src/app/services/fn/questions/delete-question';
import { updateQuestion } from 'src/app/services/fn/questions/update-question';
import { Questionsdto } from 'src/app/services/models';
import { QuestionsService, QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.scss']
})
export class ViewQuizQuestionsComponent implements OnInit{
id=0;
title='';
questions:Questionsdto[]=[];
  quiz: any;
constructor(private route:ActivatedRoute , private quizService:QuizService,
  private questionsService:QuestionsService) {} 
  ngOnInit(): void {
this.id = +this.route.snapshot.params['idQuiz'];
this.title = this.route.snapshot.params['title'];
this.questionsService.getQuestionsofQuiz({idQuiz:this.id}).subscribe({
  next: async (data:any) => {
    this.questions = data;
  },
  error: (err) => {
    console.error(err);
  }
});
}
deleteQuestion(id:number) {
  this.questionsService.deleteQuestion({idQuestion:id}).subscribe({
    next: async (data: any) => {
      await Swal.fire({
        title: 'Success!',
        text: 'Question deleted successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      window.location.reload();
    }
}
  );
}

  
}


