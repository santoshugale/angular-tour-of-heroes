import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { User } from '../services/user';
import { Router } from '@angular/router';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User;
  private errorMessage: string;

  public constructor(private loginService: LoginService,
    private router: Router,
    private messagesService: MessagesService) { }

  public ngOnInit() {
    this.user = new User();
    this.loginService.loggedIn.next(false);
  }

  public login(): void {
    this.errorMessage = '';
    this.loginService.login(this.user)
      .subscribe(this.loginSuccess.bind(this), this.loginError.bind(this));
  }

  private loginSuccess(res: any): void {
    this.loginService.token = res.token;
    this.loginService.loggedIn.next(true);
    this.router.navigateByUrl('/dashboard');
  }

  private loginError(error: Error): void {
    this.errorMessage = 'Please enter correct credentials';
    this.messagesService.add('login failed' + error);
  }
  
}
