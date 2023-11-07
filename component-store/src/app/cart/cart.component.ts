import { Component, OnInit } from '@angular/core';
import { CartService } from '../Cart.service';
import { Cart } from '../Cart';
import { SharedService } from '../Share.service';
import { CartItem } from '../CartItem';
import { CartItemService } from '../CartItem.service';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
    cart!: Cart;
    cartIdS!: string;
    cartId!: number;
    cartLength!: number;
    constructor(
        private cartService: CartService,
        private sharedService: SharedService,
        private cartItemService: CartItemService
    ) {
        this.sharedService.stream$.subscribe(this.receiveMessage.bind(this));
    }

    ngOnInit(): void {
        // Try to retrieve cartId from localStorage
        this.cartLength=0;
        this.receiveMessage(this.cartIdS);
        console.log("werqwer"+ localStorage.getItem('cartId'));
        this.cartIdS = localStorage.getItem('cartId') || '';
        console.log(this.cartIdS);
        this.cartId = +this.cartIdS;
        this.cartService.getCartById(this.cartId).subscribe((cart: Cart) => {
            if(cart == null)
            {
                this.cartService.createCart().subscribe((cart: Cart) => {
                    this.cart = cart;
                    console.log(this.cart);
                });
            }
            else {
                this.cart = cart;
            }
            console.log(cart);
            if(this.cart.cartItems.length > this.cartLength)
            {
                this.cartLength = this.cart.cartItems.length;
            }
        });
    }
    removeComponentFromCart(componentId:number) {
      console.log(componentId);
      this.cartItemService.removeCartItem(componentId).subscribe(componentId =>console.log(componentId));
        console.log('Removed component ' + componentId + ' from cart');
        this.cartService.getCartById(this.cartId).subscribe(
            (cart: Cart) =>
            {
                this.cart = cart;
                console.log(this.cart);
                window.location.reload();
            }
        );
    }

  checkout()
  {
      localStorage.removeItem('cartId');
      this.cartService.deleteCart(this.cart.id).subscribe();
      window.location.reload();
  }
  calculateTotalPrice(list: CartItem[]): number
  {
      let sum: number = 0;
      for (var component of list) {
          sum += component.component.price;
      }
      return sum;
  }
    receiveMessage(msg: string) {
        console.log(msg);
        this.cartIdS = msg;
        if(msg.length > 0) {
            localStorage.setItem('cartId', this.cartIdS);
            this.cartId = +this.cartIdS;
            this.cartService.getCartById(this.cartId).subscribe((cart: Cart) => {
                this.cart = cart;
            });
        }
        // Store cartId in localStorage to persist it across page reloads

    }

}
