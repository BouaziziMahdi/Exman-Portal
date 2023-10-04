import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/services/authentication.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent {
  id:any;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private route:ActivatedRoute
  ) {}

  get userName(): string {
    return this.tokenService.getUsername;
  }

  get role() {
    return this.tokenService.userRole;
  }

  logout() {
    this.tokenService.cleanup();
    this.router.navigate(['login']);
  }
  
   isLoggedIn() {
    return this.tokenService.isTokenValid;
  }

}
