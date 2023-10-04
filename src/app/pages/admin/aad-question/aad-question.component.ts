import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Editor } from '@ckeditor/ckeditor5-core';
import { Questionsdto } from 'src/app/services/models';
import { QuestionsService, QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-aad-question',
  templateUrl: './aad-question.component.html',
  styleUrls: ['./aad-question.component.scss']
})
export class AadQuestionComponent  implements OnInit{
  public Editor = ClassicEditor;
  public editorInstance!: Editor;
  id=0;
  title='';
  question :Questionsdto={
    quiz:{
      id: this.id,
      title:''
    },
    content:' ',
    id:this.id,
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer:''
  }
  constructor(private route:ActivatedRoute ,
    private questionService:QuestionsService ,
    private quizService:QuizService) { }
  ngOnInit(): void {
   this.id = +this.route.snapshot.params['idQuiz'];
   this.title = this.route.snapshot.params['title'];   
    this.question.quiz.id=this.id;
    this.question.quiz.title=this.title;
    this.quizService.getQuizById( {idQuiz:this.id}).subscribe({
      next: async (data: any) => {
        this.question.quiz = data;
      },
  
    });
}
addQuestion() {
  const questionsdto: Questionsdto = {
    quiz: { id: this.id, title: this.title },
    content: this.question.content,
    id: Number(this.question.id),
    option1: this.question.option1,
    option2: this.question.option2,
    option3: this.question.option3,
    option4: this.question.option4,
    answer: this.question.answer,
    image: ''
  };

  this.questionService.addQuestion({body:questionsdto}).subscribe({
    next: async (data: any) => {
      Swal.fire({
        title: 'Success!',
        text: 'Question added successfully!',
        icon: 'success',
        confirmButtonText: 'OK'
      }
    );
      this.question = data;
     
    },
    error: (err) => {
      Swal.fire({
        title: 'Error!',
        text: 'Question not added!',
        icon: 'error',
        confirmButtonText: 'OK'
      }
    );
      console.error(err);
    }
  });
}
}