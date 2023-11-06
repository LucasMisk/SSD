// cart-item.service.ts

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartItem } from './CartItem';
import {environment} from "../enviroments/enviroment"; // Import the CartItem class

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  createCartItem(productId: number, shoppingCartId: number, quantity: number): Observable<CartItem> {
    let formData = new FormData()
    formData.append('productId', productId.toString())
    formData.append('shoppingCartId', shoppingCartId.toString())
    formData.append('quantity', quantity.toString());
    console.log(formData)
    return this.http.post<CartItem>(`${this.baseUrl}/api/cart-items`, formData) ;
  }

  updateCartItemQuantity(cartItemId: number, newQuantity: number): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/api/cart-items/${cartItemId}`, { newQuantity });
  }

  removeCartItem(cartItemId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/api/cart-items/${cartItemId}`);
  }
}
