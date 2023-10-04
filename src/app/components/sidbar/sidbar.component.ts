import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.scss']
})
export class SidbarComponent {
  constructor(private router:Router,
    private tokenService:TokenService) { }
cusmert(){
  this.router.navigate(['admin/customers']);
}
profile(){
  this.router.navigate(['admin/profile']);
}
dashbord(){
  this.router.navigate(['admin']);
}
category (){
  this.router.navigate(['/admin/category']);
  }
  add(){
    this.router.navigate(['/admin/add-category']);
  }
  view(){
    this.router.navigate(['/admin/view-quiz']);
  }
  addquiz(){
    this.router.navigate(['/admin/add-quiz']);
  }

logout() {
  this.tokenService.cleanup();
  this.router.navigate(['login']);
}
}
