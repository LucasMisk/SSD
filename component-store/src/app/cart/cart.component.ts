import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service'; // Import your CartService
import { Cart } from '../Cart';
import {PCComponent} from "../pcComponent"; // Import your Cart model

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    // You may load the cart here using the CartService and update the 'cart' property
    this.createCart();
    this.addComponentToCart(this.cart.id,1);
    this.addComponentToCart(this.cart.id,2);
    this.addComponentToCart(this.cart.id,3);
  }


  createCart() {
      this.cartService.createCart().subscribe((cart: Cart) => {this.cart = cart});
  }

  removeComponentFromCart(cartId:number, componentId:number) {
      this.cartService.removeComponentFromCart(cartId, componentId).subscribe((cart: Cart) => console.log('Removed component' + componentId + 'from cart'));
  }

  checkout(status: string)
  {
      this.cartService.updateCartStatus(this.cart.id, status).subscribe((cart: Cart) => this.cart.cartStatus = status);
  }
  calculateTotalPrice(list: PCComponent[]): number
  {
      let sum: number = 0;
      for (var component of list) {
          sum += component.price;
      }
      return sum;
  }

  addComponentToCart(cartId:number, componentId:number){
    this.cartService.addComponentToCart(cartId, componentId).subscribe((cart: Cart) => console.log('Added component' + componentId + 'to cart'));
  }
}
