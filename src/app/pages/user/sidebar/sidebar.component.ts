import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  categories:any;
  constructor(private router:Router,
    private tokenService:TokenService,
    private cetegoryService:CategoriesService
    ) { }
  ngOnInit(): void {
   this.cetegoryService.findAll().subscribe({
      next:(response)=>{
        this.categories=response;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

dashbord(){
  this.router.navigate(['user/0']);
}
category(id:any){
  this.router.navigate(['user/'+id]);
}

logout() {
  this.tokenService.cleanup();
  this.router.navigate(['login']);
}
}
