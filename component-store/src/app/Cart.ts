import {Component} from "@angular/core";
import {PCComponent} from "./pcComponent";
import {CartItem} from "./CartItem";

export class Cart {
  id: number;
  cartItems: CartItem[];
  cartStatus: string;
  constructor(id: number, cartItems: CartItem[], cartStatus: string) {
    this.id = id;
    this.cartItems = cartItems;
    this.cartStatus = cartStatus;
  }
}
