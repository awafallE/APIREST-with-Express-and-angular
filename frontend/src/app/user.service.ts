import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:3100/api';

  constructor(private httpClient: HttpClient) {
    
  }
  getUser(): Observable<user[]> {
    return this.httpClient.get<user[]>(`${this.baseUrl}/users`);

  }
}
