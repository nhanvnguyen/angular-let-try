import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  private baseURL = `https://jsonplaceholder.typicode.com`
  
  postData(data: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseURL}/posts`, data)
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseURL}/posts`)
  }

  getbyId(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.baseURL}/posts/${id}`)
  }

  updateData(id: number, data: Product): Observable<Product>{
    return this.http.put<Product>(`${this.baseURL}/posts/${id}`, data)
  }
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.baseURL}/posts/${id}`)
  }

  constructor(private http: HttpClient) { }
}
