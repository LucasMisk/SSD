import {Component} from "@angular/core";
import {PCComponent} from "./pcComponent";

export class Cart {
  id: number;
  components: PCComponent[];
  cartStatus: string;
  constructor(id: number, components: PCComponent[], cartStatus: string) {
    this.id = id;
    this.components = components;
    this.cartStatus = cartStatus;
  }
}
