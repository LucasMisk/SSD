import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {UserService} from "../User.service";
import {User} from "../User";

@Component({
  selector: 'app-registration-form',
  templateUrl: './register.component.html',
  styleUrls: ['../app.component.css']
})
export class RegisterComponent{
  registrationForm = this.formBuilder.group({
    username: "",
    email: "",
    password: "",
    userType: "",
    imageUrl: "",
    address: ""
  });
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}
  id:number = 0;
  onSubmit(): void {
    let user = new User(this.id,this.registrationForm.value.username!, this.registrationForm.value.email!, this.registrationForm.value.password!,'Client', this.registrationForm.value.imageUrl!, this.registrationForm.value.address!);
    console.log(user);
    this.userService.createUser(user).subscribe(response => {
      console.log(response);
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }
}







