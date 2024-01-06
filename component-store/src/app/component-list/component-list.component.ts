import { Component, OnInit } from '@angular/core';
import { PCComponent } from '../pcComponent';
import { PCComponentService } from '../pcComponent.service';
import { Cart } from '../Cart';
import { CartService } from '../Cart.service';
import { CartItem } from '../CartItem'; // Import the CartItem class
import { CartItemService } from '../CartItem.service';
import {SharedService} from "../Share.service";
import {User} from "../User";
import {UserService} from "../User.service"; // Import the CartItemService

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['../app.component.css'],
})
export class ComponentListComponent implements OnInit {
  title = 'PC Component Store';
  components: PCComponent[] = [];
  cart!: Cart;
  currentUser!: User|null;

  constructor(
    private componentService: PCComponentService,
    public cartService: CartService,
    public cartItemService: CartItemService,
    private sharedService : SharedService,
    private userService : UserService
  ) {}

  ngOnInit() {
    this.loadAllComponents();
    this.cartService.createCart().subscribe((cart: Cart) => {
      this.cart = cart;
      console.log(this.cart);
    });
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

  addComponentToCart(componentId: number) {
    this.cartItemService
      .createCartItem(componentId, this.cart.id, 1) // 1 is the quantity
      .subscribe((cartItem: CartItem) => {
        console.log('Added to cart:', cartItem);
      });
  }

  sendMessage(msg : string) {
    this.sharedService.send(msg);
  }
}
