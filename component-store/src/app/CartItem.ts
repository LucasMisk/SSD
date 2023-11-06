// cart-item.ts

import {PCComponent} from "./pcComponent";
import {Cart} from "./Cart";

export class CartItem {
  id: number | null | undefined;
  product!: PCComponent;
  cart!: Cart;
  quantity!: number;

  constructor(product: PCComponent, cart: Cart, quantity: number) {
    this.product = product;
    this.cart = cart;
    this.quantity = quantity;
  }
}
