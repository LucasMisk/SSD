export class User {
  id: number;
  username: string;
  email: string;
  password: string;
  userType: string;
  imageUrl: string;
  address: string;

  constructor(id: number, username: string, email: string, password: string, imageUrl: string, address: string) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.userType = "Admin";
    this.imageUrl = imageUrl;
    this.address = address;
  }

}
