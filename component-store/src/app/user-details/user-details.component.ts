// user-details.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../User.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  currentUser: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.currentUser = this.userService.getCurrentUser();
  }
}
