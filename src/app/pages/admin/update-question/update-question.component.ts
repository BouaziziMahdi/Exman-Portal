import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questionsdto } from 'src/app/services/models';
import { QuestionsService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.scss']
})
export class UpdateQuestionComponent implements OnInit{
id=0;
questions :Questionsdto={
  answer: '',
  content: '',
  option1: '',
  option2: '',
  option3: '',
  option4: '',
  quiz: {
    id:this.id ,
    title:''
  }
};
constructor(private route:ActivatedRoute ,private questionService:QuestionsService) { }
  ngOnInit(): void {
     this.id=this.route.snapshot.params['idQuestion'];
     this.questionService.getQuestionById({idQuestion:this.id}).subscribe({
      next: async (data: any) => {
        this.questions = data;
      },
  }
      );
}
updateQuestion(){
  if(this.questions.answer=='' || this.questions.content=='' || this.questions.option1=='' || this.questions.option2=='' || this.questions.option3=='' || this.questions.option4==''){
    Swal.fire({
      title: 'Error!',
      text: 'Please fill all the fields!',
      icon: 'error',
      confirmButtonText: 'Ok'
    });
    return;
  }
  this.questionService.updateQuestion({body:this.questions}).subscribe({
    next: async (data: any) => {
      await Swal.fire({
        title: 'Success!',
        text: 'Question updated successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });
      window.location.reload();
    }     
});
}
}