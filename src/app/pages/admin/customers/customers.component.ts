import { Component, OnInit } from '@angular/core';
import { Userdto } from 'src/app/services/models';
import { UsersService } from 'src/app/services/services/users.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent  implements OnInit {


  customers: Userdto []= [];
  showInactiveUserOnly = false;
  userIdToUpdate = -1;
  updateState: boolean | undefined;
  constructor(
    private userService: UsersService
  ) {
  }

  ngOnInit(): void {
    this.fetchAllInactiveUsers();
  }

  fetchAllInactiveUsers() {
    this.userService.findAll1()
      .subscribe({
        next:  (response : Userdto []) => {
            this.customers = response;
        }
      });
  }
  filterCustomers() {
    if (this.showInactiveUserOnly) {
      this.customers = this.customers.filter((c) => !c.active);
    } else {
      this.fetchAllInactiveUsers();
    }
  }



  changeUserState(active: boolean | undefined, id: number | undefined) {
    this.userIdToUpdate = id as number;
    this.updateState = active;
  }

  updateUserState() {
    if (this.updateState) {
      this.userService.validate({
        'user-id': this.userIdToUpdate as number
      }).subscribe({
        next: () =>{
          this.fetchAllInactiveUsers();
        }
      });
    } else {
      this.userService.invalidate({
        'user-id': this.userIdToUpdate as number
      }).subscribe({
        next: () =>{}
      });
    }
  }

  cancelUpdate() {
    const user = this.customers.find((c) =>c.id === this.userIdToUpdate);
    if (user) {
      user.active = !user.active
    }
    this.userIdToUpdate = -1;
    this.updateState = undefined
  }

}