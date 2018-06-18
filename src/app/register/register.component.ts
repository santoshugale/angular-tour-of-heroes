import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../services/register.service';
import { User } from '../services/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User;
  public constructor(private registerService: RegisterService) {
    this.user = new User();
  }

  public ngOnInit() {
  }

  public register(): void {
    this.registerService.register(this.user)
      .subscribe((res: any) => {
        console.log(res);
      });
  }
}
