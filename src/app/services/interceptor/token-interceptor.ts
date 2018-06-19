import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { LoginService } from '../login.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    public constructor(private loginService: LoginService) { }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url === 'http://localhost:3000/login' || request.url === 'http://localhost:3000/register') {
            return next.handle(request);
        }
        const requestClone: HttpRequest<any> = request.clone({
            setHeaders: {
                token: this.loginService.token
            }
        });
        return next.handle(requestClone);
    }
}