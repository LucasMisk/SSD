import {Component, OnInit} from '@angular/core';
import {PCComponent} from "../pcComponent";
import {PCComponentService} from "../pcComponent.service";
import {Cart} from "../Cart";
import {CartService} from "../Cart.service";

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {
  title = 'PC Component Store';
  components: PCComponent[] = [];
    cart!: Cart;
  constructor(private componentService: PCComponentService, public cartService: CartService) {}

  ngOnInit() {

    this.loadAllComponents();
    this.cartService.createCart().subscribe((cart: Cart) => {
      this.cart = cart;
      console.log(this.cart);
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
  addComponentToCart(component: PCComponent)
  {
      this.cartService.addComponentToCart(this.cart.id,component).subscribe((cart: Cart) => console.log(this.cart));
  }

    protected readonly Component = Component;
    protected readonly console = console;
    protected readonly Cart = Cart;
}

