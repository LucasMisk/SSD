import { Component, OnInit } from '@angular/core';
import { PCComponent } from './pcComponent'; // Adjust the import path as needed
import { PCComponentService } from './pcComponent.service';
import {User} from "./User";
import {UserService} from "./User.service";
import {SocialAuthService} from "@abacritt/angularx-social-login"; // Adjust the import path as needed

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PC Component Store';
  components: PCComponent[] = [];
  users: User[] = [];
  currentUser!: User|null;
  user: any;
  loggedIn: any;
  constructor(private componentService: PCComponentService, private userService: UserService) {}

  ngOnInit() {
    this.loadAllComponents();
    this.loadAllUsers();
    this.userService.currentUser$.subscribe(user => {
      this.currentUser = user;
      console.log(this.currentUser);
    });
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

  logOut()
  {
    this.userService.setUser(null);
  }
}
