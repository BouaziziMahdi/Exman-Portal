import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit{
  id:any;
  quiz:any;
  constructor(private route:ActivatedRoute,
    private router:Router,
    private quizService:QuizService) { }
  ngOnInit(): void {
 this.id=this.route.snapshot.params['id'];
 this.quizService.getQuizById({idQuiz:this.id}).subscribe({
    next:(response)=>{
      this.quiz=response;
    },
    error:(err)=>{
      console.log(err);
    }
  }
  );
  }
  start(){  
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to start this quiz?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, start it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['start/',this.id]);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'You are not start this quiz :)',
          'error'
        )
      }
    })
  }
}
