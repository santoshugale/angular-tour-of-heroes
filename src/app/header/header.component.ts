import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private title: string = 'Tour of Heroes';
  private isLogin: boolean = false;
  
  public constructor() { }

  public ngOnInit() {
  }

}
