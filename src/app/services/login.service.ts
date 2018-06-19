import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessagesService } from './messages.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public constructor(private http: HttpClient, private messageService: MessagesService) {
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') === null ? false : true;
  }

  public get token(): string {
    return localStorage.getItem('token');
  }

  public set token(value: string) {
    localStorage.setItem('token', value);
  }

  public login(user: User): Observable<any> {
    this.messageService.add('loginService: login');
    return this.http.post<any>('http://localhost:3000/login', user);
  }

  public clearToken(): void {
    localStorage.removeItem('token');
  }

}
