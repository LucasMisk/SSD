import { Component, OnInit } from '@angular/core';
import { UserService} from '../User.service';
import {User} from "../User";


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['../app.component.css'],
})
export class UserAdminComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  updateUser(user: User) {
    this.userService.updateUser(user).subscribe(() => {
      this.loadUsers();
      this.selectedUser = null;
    });
  }

  deleteUser(userId: number) {
    this.userService.deleteUser(userId).subscribe(() => {
      this.loadUsers();
      this.selectedUser = null;
    });
  }
}
