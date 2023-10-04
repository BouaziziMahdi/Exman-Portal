import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userdto } from 'src/app/services/models/userdto';
import { AuthenticationService, UsersService } from 'src/app/services/services';
import { TokenService } from 'src/app/services/token-service/token.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {
  customers: Userdto []= [];
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthenticationService,
    private userService: UsersService,
    
  ) {}
  get role() {
    return this.tokenService.userRole;
  }
   cancel() {
    this.router.navigate(['admin']);
  }
  update(){
    this.router.navigate(['admin/update']);
  }
  get userName(): string {
    return this.tokenService.getUsername;
  }
    successMsg = '';
    userDto: Userdto = {
      email: '',
      firstname: '',
      lastname: '',
      password: ''
    };
    ngOnInit(): void {
      this.userService.findById1({
        'user-id': this.tokenService.getUserId
      }).subscribe({
        next: (data) => {
          this.userDto = data;
        }
      });
    }

}