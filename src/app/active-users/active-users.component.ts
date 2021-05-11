import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

import { UserService } from '../users.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  user = [];
  constructor( private userService: UserService, private logCounterService: CounterService ) { }
  
  ngOnInit() {
    this.user = this.userService.activeUsers;
  }

  setToInactive( index: number ) {
    this.userService.inactiveUsers.push( this.user[index] );
    this.user.splice( index, 1 );
    this.logCounterService.logUserCount( this.user.length, 'active' );
    
  }
}
