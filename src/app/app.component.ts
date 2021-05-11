import { Component, OnInit } from '@angular/core';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myTest = [];
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.myTest = this.userService.inactiveUsers;
  }
  title="here"
}
