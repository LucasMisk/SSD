import { SocialAuthService } from "@abacritt/angularx-social-login";
import { SocialUser } from "@abacritt/angularx-social-login";
import {Component, OnInit} from "@angular/core";
import {  GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import {User} from "../User";
import {UserService} from "../User.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  loggedIn: any;
  dataBaseUser!: User|null;
  newUser: User = new User(0, '', '', '', '','','');

  constructor(private authService: SocialAuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      this.newUser = new User(0, user.name, user.email, '', user.provider,user.photoUrl,'');
      console.log(this.newUser);
      this.checkIfUserExists(user.email);
      this.router.navigate(['/']);
    });
  }
  addUser() {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.newUser = new User(0, '', '','', '', '', ''); // Reset the newUser
    });
  }

  checkIfUserExists(email: string) {
    this.userService.getUserByEmail(email).subscribe(
      (user) => {
        this.userService.setUser(user);
        this.userService.currentUser$.subscribe((user) => {console.log(user);})
      },
      (error) => {
        console.error('Error finding user:', error);
        this.addUser();
        this.userService.setUser(this.newUser);
        this.userService.currentUser$.subscribe((user) => {console.log(user);})
      }
    );

  }
}
