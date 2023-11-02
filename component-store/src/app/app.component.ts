import { Component, OnInit } from '@angular/core';
import { PCComponent } from './pcComponent'; // Adjust the import path as needed
import { PCComponentService } from './pcComponent.service';
import {User} from "./User";
import {UserService} from "./User.service"; // Adjust the import path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PC Component Store';
  components: PCComponent[] = [];
  users: User[] = [];

  constructor(private componentService: PCComponentService, private userService: UserService) {}

  ngOnInit() {
    this.loadAllComponents();
    this.loadAllUsers();
  }

  loadAllComponents() {
    this.componentService.getAllComponents().subscribe(
      (components) => {
        this.components = components;
      },
      (error) => {
        console.error('Error loading components:', error);
      }
    );
  }
  loadAllUsers() {
    this.userService.getAllUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    )
  };
}
