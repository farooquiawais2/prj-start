import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

import { UserService } from '../users.service';

@Component( {
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
} )
export class InactiveUsersComponent implements OnInit{
  user = [];
  constructor( private userService: UserService, private logCounterService: CounterService ) { }
  
  ngOnInit() {
    this.user = this.userService.inactiveUsers;
    
  }

  setToActive( index: number ) {
    this.userService.activeUsers.push( this.user[index] );
    this.user.splice( index, 1 );
    this.logCounterService.logUserCount(this.user.length, 'inactive');
  }
}
