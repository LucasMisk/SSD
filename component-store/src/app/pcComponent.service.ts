import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PCComponent } from './pcComponent';
import {environment} from "../enviroments/enviroment";

@Injectable({
  providedIn: 'root',
})
export class PCComponentService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllComponents(): Observable<PCComponent[]> {
    return this.http.get<PCComponent[]>(`${this.baseUrl}/component/allComponents`);
  }

  getComponentById(id: number): Observable<PCComponent> {
    return this.http.get<PCComponent>(`${this.baseUrl}/component/findComponent/${id}`);
  }

  addComponent(component: PCComponent): Observable<PCComponent> {
    return this.http.post<PCComponent>(`${this.baseUrl}/component/addComponent`, component);
  }

  updateComponent(component: PCComponent): Observable<PCComponent> {
    return this.http.put<PCComponent>(`${this.baseUrl}/component/updateComponent`, component);
  }

  deleteComponent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/component/deleteComponent/${id}`);
  }
}
