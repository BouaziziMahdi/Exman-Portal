import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, QuizService } from 'src/app/services/services';

@Component({
  selector: 'app-loadquiz',
  templateUrl: './loadquiz.component.html',
  styleUrls: ['./loadquiz.component.scss']
})
export class LoadquizComponent implements OnInit {
  id:any;
  quizzes:any;
  categories:any;
constructor(private  route:ActivatedRoute ,
  private quizService:QuizService,
  private categoryService:CategoriesService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.id=params['id'];
   if(this.id==0){
  this.quizService.getActiveQuiz().subscribe({
    next:(response)=>{
      this.quizzes=response;
      console.log(response);
    },
    error:(err)=>{
      console.log(err);
    }
  });
   }
   else{  
    console.log("load quiz by category id");
    this.quizService.getQuizOfCategoryAndActive({categoryId:this.id}).subscribe({
      next:(response)=>{
        this.quizzes=response;
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    });
   }
});
this.categoryService.findAll().subscribe({
  next:(response)=>{
    this.categories=response;
  },
  }
);
  }

}

  
