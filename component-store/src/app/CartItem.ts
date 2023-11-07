// cart-item.ts

import {PCComponent} from "./pcComponent";
import {Cart} from "./Cart";

export class CartItem {
  id: number | null | undefined;
  component!: PCComponent;
  cart!: Cart;
  quantity!: number;

  constructor(component: PCComponent, cart: Cart, quantity: number) {
    this.component = component;
    this.cart = cart;
    this.quantity = quantity;
  }
}
