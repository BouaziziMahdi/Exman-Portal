import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/services/authentication.service';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
 
  register() {
    this.router.navigate(['signup']);
  }
  login() {
    this.router.navigate(['login']);
  }
  home() {
    this.router.navigate(['']);
  }
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthenticationService,
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
