import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-register-success',
  templateUrl: './register-success.component.html',
  styleUrls: ['./register-success.component.scss']
})
export class RegisterSuccessComponent {
  constructor(
    private tokenService: TokenService,
    private router: Router
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
}
