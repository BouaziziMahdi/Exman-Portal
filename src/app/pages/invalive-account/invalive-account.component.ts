import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-invalive-account',
  templateUrl: './invalive-account.component.html',
  styleUrls: ['./invalive-account.component.scss']
})
export class InvaliveAccountComponent {
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
