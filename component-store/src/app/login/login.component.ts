import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../User.service";
import {User} from "../User";

@Component({
  selector: 'app-registration-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  registrationForm = this.formBuilder.group({
    username: "",
    password: "",
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  onSubmit(): void {
    this.userService.login(this.registrationForm.value.username!, this.registrationForm.value.password!).subscribe(
      (response) => {
        // Handle the successful login response here
      },
      (error) => {
        // Handle authentication failure here
      }
    );
  }
}
