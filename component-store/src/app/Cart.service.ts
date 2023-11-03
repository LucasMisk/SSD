import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from './Cart';
import {PCComponent} from "./pcComponent";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/api/carts'; // Replace with your backend API endpoint

  constructor(private http: HttpClient) { }

  createCart(): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/create`, {});
  }

  getCartById(cartId: number): Observable<Cart> {
    return this.http.get<Cart>(`${this.baseUrl}/${cartId}`);
  }

  addComponentToCart(cartId: number, component: PCComponent): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/${cartId}/add-component`, { component });
  }

  removeComponentFromCart(cartId: number, componentId: number): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/${cartId}/remove-component`, { componentId });
  }

  updateCartStatus(cartId: number, newStatus: string): Observable<Cart> {
    return this.http.post<Cart>(`${this.baseUrl}/${cartId}/update-status`, { newStatus });
  }

  deleteCart(cartId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${cartId}`);
  }
}
