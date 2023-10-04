import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdto } from 'src/app/services/models';
import { AuthenticationService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token-service/token.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  user: Userdto = {
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  };
  errorMsgs: string[] = [];
  validationErrors: string[]=[] ;
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
  
  }

  login() {
    this.router.navigate(['login']);
  }


  register() {
    this.errorMsgs = [];
    this.authService.register({
        body: this.user
      }
    ).subscribe({
      next: async (_data) => {
        await this.router.navigate(['register-success']);
      },
      error: (err) => {
        this.errorMsgs = err.error.validationErrors;
      }
    });
  }}