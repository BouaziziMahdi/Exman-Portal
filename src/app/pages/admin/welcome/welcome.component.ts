import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Userdto } from 'src/app/services/models';
import { UsersService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userDto:any;
constructor(private tokenService:TokenService,
 private auth:UsersService ){}
  ngOnInit(): void {
    this.auth.findAll1({
      'user-id': this.tokenService.getUserId
    }).subscribe({
      next: (data) => {
        this.userDto = data;
      }
    });
  }

}
