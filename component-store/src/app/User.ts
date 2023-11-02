export class User {
  username: string;
  email: string;
  password: string;
  userType: string;
  imageUrl: string;
  address: string;

  constructor(username: string, email: string, password: string, imageUrl: string, address: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.userType = "Admin";
    this.imageUrl = imageUrl;
    this.address = address;
  }

}
