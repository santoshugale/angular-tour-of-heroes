import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { MessagesService } from './messages.service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _token: string;

  public loggedIn: Subject<boolean> = new Subject<boolean>();

  public constructor(private http: HttpClient, private messageService: MessagesService) { }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public login(user: User): Observable<any> {
    this.messageService.add('loginService: login');
    return this.http.post<any>('http://localhost:3000/login', user);
  }

  public logout(): Observable<any> {
    throw new Error("Method not implemented.");
  }
}
