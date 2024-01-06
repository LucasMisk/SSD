import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from "./User";
import {environment} from "../enviroments/enviroment";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.apiUrl + "/api/users";
  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  constructor(private http: HttpClient) {}

  setUser(user: User | null) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/create`, user);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/all`);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${userId}`);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/by-email?email=${email}`);
  }

  updateUser(user: User): Observable<void> {
    return this.http.put<void>(`${this.baseUrl}/update`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${userId}`);
  }
  login(username: string, password: string): Observable<AuthenticationResponse> {
    const loginRequest = { username, password };
    return this.http.post<AuthenticationResponse>(`${this.baseUrl}/login`, loginRequest);
  }
}
interface AuthenticationResponse {
  username: string;
}
