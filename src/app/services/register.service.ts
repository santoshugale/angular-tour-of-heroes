import { Injectable } from '@angular/core';
import { MessagesService } from './messages.service';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  public constructor(private http: HttpClient, private messageService: MessagesService) { }

  public register(user: User): Observable<any> {
    this.messageService.add('registerService: register user')
    return this.http.post('http://localhost:3000/register', user);
  }
}
