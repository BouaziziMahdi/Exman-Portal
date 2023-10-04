import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Questionsdto } from 'src/app/services/models';
import { QuestionsService, QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  id:any;
  questions:any;
  quiz:any;
  marksGot:number=0;
 correctAnswers:number=0;
 attempted:number=0;
 isSubmit=false;
 timer:any;
 success:any;
  constructor(private locationStrategy:LocationStrategy ,
    private route:ActivatedRoute,
    private questionService:QuestionsService,
    private quizService:QuizService,
    private router:Router) { }
  ngOnInit(): void {
    this.preventBackButton();
    this.id=this.route.snapshot.params['id'];
    this.loadQuestion();
    this.Quiz();
    this.submitQuiz();
    this.startTimer();
    this.quizService.getActiveQuiz().subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  loadQuestion(){
   
    this.questionService.getQuestionsofQuiz({idQuiz:this.id}).subscribe({
      next:(response)=>{
      this.questions=response;
      this.timer=this.questions.length*2*60;
      this.questions.forEach((q:any)=>{
       q['givenAnswer']='';
      });
      console.log(response);
      this.startTimer();
      },
      error:(err)=>{
        console.log(err);
      }
    });

  }
  Quiz(){
    this.quizService.getQuizById({idQuiz:this.id}).subscribe({
      next:(response)=>{
        this.quiz=response;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
  submitQuiz(){
    if(this.questions.answer!=''){
    Swal.fire({
      title: 'Do you want to submit the Quiz?',
      showCancelButton: true,
      confirmButtonText: `Submit`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
       this.evalQuiz();
  }
});
  }
}
  startTimer(){
    let t=window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQuiz();
        clearInterval(t);
      }
      else{
        this.timer--;
      }
    }
    ,1000);
  }
  printPage() {
    window.print();
  }
  gohome(){ 
    this.router.navigate(['user/0']);
  }
  preventBackButton() {
    history.pushState(null, location.href);
    this.locationStrategy.onPopState(() => {
      history.pushState(null, location.href);
    });
  }
  getFormattedTime(){
    let mm=Math.floor(this.timer/60);
    let ss=this.timer%60;
    return `${mm} min ${ss} sec`;
  }
 evalQuiz(){
  this.isSubmit=true;
  this.questions.forEach((q:any)=>{
     if(q.givenAnswer==q.answer){
       this.correctAnswers++;
       let marksSingle=this.quiz.maxMarks/this.questions.length;
       this.marksGot+=marksSingle;
        if(this.marksGot>15){
         this.success='Excellent';
        }
         else if(this.marksGot>10){
           this.success='Good';
         }
         else if(this.marksGot>5){
           this.success='Average';
         }
         else if(this.marksGot==null){
           this.success='Poor';
         }
     }
     if(q.givenAnswer!=''){
       this.attempted++;
     }
   });

 }
}


